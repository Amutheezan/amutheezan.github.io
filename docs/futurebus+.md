
---
type: posts
title: Verification of Futurebus+ Cache Coherence Protocol
author: Amutheezan Sivagnanam

---
I have implemented a simple verification for Futurebus+ cache coherence protocol as a part of assignment for COSC 6385 course in University of Houston.

I structure the code as follows,

* constants - to define constants such as number of processor, number of values
```c
const
	processor_count: 3;
	value_count: 1;
```

*  define types such as processor states using enumeration which represents all the states in Futurebus+ proctcol, message types as enumeration which includes different message used to send between the states either bus or cpu call, finally the message type.
```c
type
  	Proc : scalarset(processor_count);
	Value: scalarset(value_count);
	ProcState:
	record
		state: enum { 
			FB_I,
			FB_EU,
			FB_EM,
			FB_SU,
			FB_PR,
			FB_PEMR,
			FB_PSU,
			FB_PW,
			FB_PEMW
		};
		value: Value;
	end;

	MessageType: enum {  
		ReadShared,
		ReadModified,
		Invalidate
	}; 

	Message:
    record
      mtype: MessageType;
	  value: Value;
    end;

```
* variables - the global variables represents the system.
```c
 var
	proc_state: array[Proc] of ProcState;
	transaction_flag: boolean;
	last_write: Value;
	one_flag: boolean;
	more_flag: boolean;
	send_msg: Message;
```
* procedures - contains the function used by the verification.

```c
procedure SendMessage(msg: Message; i: Proc);
begin
	switch msg.mtype
		case ReadShared:
			if (proc_state[i].state = FB_EM | 
				proc_state[i].state = FB_EU) then
				proc_state[i].state :=  FB_SU;
			endif;

		case ReadModified:
			if (proc_state[i].state = FB_SU | 
				proc_state[i].state = FB_PR | 
				proc_state[i].state = FB_PSU | 
				proc_state[i].state = FB_PEMR | 
				proc_state[i].state = FB_EU) then
				proc_state[i].state :=  FB_I;
			endif;

		case Invalidate:
			proc_state[i].state :=  FB_I;
	endswitch;
    proc_state[i].value := msg.value;
	if (proc_state[i].state = FB_I) then
		proc_state[i].value := undefined;
	endif;
end;

procedure UpdateSignals();
begin
	for m: Proc do
		if proc_state[m].state = FB_PEMR | 
		   proc_state[m].state = FB_PSU |
		   proc_state[m].state = FB_EU |
		   proc_state[m].state = FB_EM |
		   proc_state[m].state = FB_SU then
			transaction_flag := true;
		endif;
	endfor;

	for m: Proc do
		if proc_state[m].state = FB_PR then
			if one_flag = true then
				more_flag := true;
			endif;

			if one_flag = false & transaction_flag = false then
				one_flag := true;
			endif;
		endif;
	endfor;
end;

```
 * ruleset - define the set of rules that can be used to model the systems.
```c
 ruleset i: Proc do
  	alias p: proc_state[i] do
  		ruleset v: Value do
			rule "Write data"
				(p.state = FB_SU | p.state = FB_EU | p.state = FB_EM)
			==>
				p.state :=  FB_EM;
				p.value := v;
				last_write := v;

				UpdateSignals();

				for k:Proc do
					if i != k then
						send_msg.mtype := Invalidate;
						send_msg.value := undefined;
						SendMessage(send_msg, k);
					endif;
				endfor;
			endrule;

			rule "Trying to write data"
				(p.state = FB_EM | p.state = FB_PEMW)
			==>
				p.state :=  FB_PEMW;
				p.value := v;

				UpdateSignals();
			endrule;

			rule "Invalidate, on DACKemw"
				(p.state = FB_PEMW)
			==>
				p.state :=  FB_I;
				p.value := undefined;

				UpdateSignals();
			endrule;

			rule "Write data, on DACK" 
				(p.state = FB_PW)
			==>
				p.state :=  FB_EM;
				p.value := v;
				last_write := v;
				
				UpdateSignals();

				for k: Proc do
					if i != k then
						send_msg.mtype := ReadModified;
						send_msg.value := v;
						SendMessage(send_msg, k);
					endif;
				endfor;
			endrule;
		
			rule "Write data, on DACKemw" 
				(p.state = FB_PW)
			==>
				p.state :=  FB_EM;
				p.value := v;
				last_write := v;
				
				UpdateSignals();

				for k: Proc do
					if i != k then
						send_msg.mtype := ReadModified;
						send_msg.value := v;
						SendMessage(send_msg, k);
					endif;
				endfor;
			endrule;
		
			rule "Trying to write data"
				(p.state = FB_I)
			==>
				p.state :=  FB_PW;

				UpdateSignals();
			endrule;

			rule "Trying to write data (pending)"
				(p.state = FB_PW)
			==>
				p.state :=  FB_PW;
			endrule;
		endruleset;

		rule "Trying to read data"
			(p.state = FB_I)
		==>
			p.state := FB_PR;
							
			UpdateSignals();
		endrule;
			
		rule "Trying to read data (pending)"
			(p.state = FB_PR)
		==>
			p.state := FB_PR;
		endrule;

		rule "Moved to shared state from EMR on DACKem"
			(p.state = FB_PEMR)
		==>
			p.state :=  FB_SU;
			p.value := last_write;

			UpdateSignals();

			for k: Proc do
				if i != k then 
					send_msg.mtype := ReadShared;
					send_msg.value := last_write;
					SendMessage(send_msg, k);
				endif;
			endfor;
		endrule;

		rule "Read shared data"
			(p.state = FB_SU)
		==>
			p.state :=  FB_SU;
			p.value := last_write;

			UpdateSignals();
		endrule;

		rule "Read data from EM"
			(p.state = FB_EM | p.state = FB_PEMR)
		==>
			p.state :=  FB_PEMR;

			UpdateSignals();
		endrule;

		rule "Go to Pending Shared state"
			(p.state = FB_EU | p.state = FB_SU | p.state = FB_PSU)
		==>
			p.state :=  FB_PSU;

			UpdateSignals();
		endrule;


		rule "Go to Shared state on DACK"
			(p.state = FB_PSU)
		==>
			p.state :=  FB_SU;
			p.value := last_write;

			UpdateSignals();

			for k: Proc do
				if i != k then 
					send_msg.mtype := ReadShared;
					send_msg.value := last_write;
					SendMessage(send_msg, k);
				endif;
			endfor;
		endrule;

		rule "Go to Shared state on DACK"
			(p.state = FB_PR & transaction_flag)
		==>
			p.state :=  FB_SU;
			p.value := last_write;

			UpdateSignals();

			for k: Proc do
				if i != k then 
					send_msg.mtype := ReadShared;
					send_msg.value := last_write;
					SendMessage(send_msg, k);
				endif;
			endfor;
		endrule;

		rule "Go to Shared state on DACK"
			(p.state = FB_PR & transaction_flag = false & more_flag = true)
		==>
			p.state :=  FB_SU;
			p.value := last_write;

			UpdateSignals();

			for k: Proc do
				if i != k then 
					send_msg.mtype := ReadShared;
					send_msg.value := last_write;
					SendMessage(send_msg, k);
				endif;
			endfor;
		endrule;

		rule "Go to Shared state on DACKem"
			(p.state = FB_PR & transaction_flag = false & more_flag = true)
		==>
			p.state :=  FB_SU;
			p.value := last_write;

			UpdateSignals();

			for k: Proc do
				if i != k then 
					send_msg.mtype := ReadShared;
					send_msg.value := last_write;
					SendMessage(send_msg, k);
				endif;
			endfor;
		endrule;

		rule "Go to Exclusive state on DACK"
			(p.state = FB_PR & transaction_flag = false & one_flag = true)
		==>
			p.state :=  FB_EU;
			p.value := last_write;

			UpdateSignals();

			for k: Proc do
				if i != k then 
					send_msg.mtype := ReadShared;
					send_msg.value := last_write;
					SendMessage(send_msg, k);
				endif;
			endfor;
		endrule;

		rule "Read data from Exclusive states"
			(p.state = FB_EM | p.state = FB_EU)
		==>
			p.value := last_write;
			UpdateSignals();
		endrule;
  	endalias;
endruleset;

```
* start-state - define the start state of the system.
```c
startstate
	for i: Proc do
		proc_state[i].state := FB_I;
	endfor;
  transaction_flag := false;
  one_flag := false;
  more_flag := false;
  undefine last_write;
  undefine send_msg;
endstartstate;
```
* invariants - define the cases which determine the correct states of the system, or checking the validity of the system.
```c
Invariant "only one processor in EM state"
ForAll p1 : Proc Do
	ForAll p2 : Proc Do
		proc_state[p1].state = FB_EM & proc_state[p2].state = FB_EM
		->
			p1 = p2
	End
	End;

Invariant "only one processor in EU state"
ForAll p1 : Proc Do
	ForAll p2 : Proc Do
		proc_state[p1].state = FB_EU & proc_state[p2].state = FB_EU
		->
			p1 = p2
	End
	End;

invariant "values in valid state match last write"
  ForAll n : Proc Do  
    proc_state[n].state = FB_SU | proc_state[n].state = FB_EM | proc_state[n].state = FB_EU
    ->
    proc_state[n].value = last_write 
  End;

invariant "value is undefined while invalid"
  ForAll n : Proc Do  
    proc_state[n].state = FB_I
    ->
    IsUndefined(proc_state[n].value)
  End;
```

Output of verification of Futurebus+ cache coherence protocol, this provides a brief summary whether any errors or issues found and other statistics.

WORK IN PROGRESS
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE4NDk5Mzg1NzBdfQ==
-->