
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


 * ruleset - define the set of rules that can be used to model the systems.
* start-state - define the start state of the system.
* invariants - define the cases which determine the correct states of the system, or checking the validity of the system.


WORK IN PROGRESS
<!--stackedit_data:
eyJoaXN0b3J5IjpbNjA3ODcwMDUyXX0=
-->