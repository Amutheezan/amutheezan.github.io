---
type: posts
title: Spectre vulnerability simulation
author: Amutheezan Sivagnanam

---

I have implemented a simple simulation for spectre vulnerabilityFuturebus+ cache coherence protocol as a part of assignment for **COSC 6385** course in University of Houston.

## How Attack Works

Spectre attacks alters the branch prediction system. It can affect the branch prediction system by following two scenarios.

1. By mistraining the branch predictor. To achieve this the attacker executes a apparently innocent code designed to confuse the system. Then, attacker executes a branch that will definitely mispredicted, and that will eventually jump into the piece of code chosen by attacker. This piece of code also know and gadget, which can later steal the secret data.
    
2. Through direct injection. When the sub parts of branch prediction system are shared among different programs and if one is an attacking program, this attack can easily achieve using carefully chosen bad-data. When victim executes their program either at the same time as the attacker or afterward, the victim will wind up using the predictor state that was filled in by the attacker and unwittingly start to run the gadget. In this scenario victim program is attacked by another program.

## Demo

### Environment Setup

* Oracle Virtual Box : Version 6.1.18 r142142 (Qt5.6.3)
* Ubuntu 16.04.07 LTS
* Kernel Version: 4.15.0-136-generic



First I clone the repository \texttt{flxwu/spectre-attack-demo} \cite{spectre} and compile the file \texttt{spectre.c} using following command,

\begin{tcolorbox}
gcc spectre.c -o spectre
\end{tcolorbox}

This will generate the executable file which will demonstrate the spectre attack. Then I execute the executable file using the following command,

\begin{tcolorbox}
./spectre
\end{tcolorbox}

and I obtained following results.

\begin{figure}[!ht]
    \centering
    \includegraphics[width=120mm,scale=0.5]{spectre/spectre_first.png}
    \caption{Spectre Screenshot First Part}
    \label{fig:first_part_spectre}
\end{figure}

\begin{figure}[!ht]
    \centering
     \includegraphics[width=120mm,scale=0.5]{spectre/spectre_second.png}
    \caption{Spectre Screenshot Last Part}
    \label{fig:last_part_spectre}
\end{figure}

As circled in the above figures \cref{fig:first_part_spectre,fig:last_part_spectre} the exploitation happen successfully and it able to read the secret contents.

Note: I didn't face any issue while compiling or running the demo.

\newpage

\subsection{How to Fix}
For software level protection, we can uses the patches such as LLVM patch, MSVC and ARM speculation barrier header. Further, some mitigation proposed by paper which disclose the spectre for the first time to public \cite{kocher2019spectre}.

\paragraph{Software}
\begin{itemize}
    \item 
    Inserting serializing instruction can helps on avoiding indirect branch poisoning.
    \item 
    By enabling strategies to prevent reading secret data, when performing speculative execution.
    \item Intel tries to prevent the branch poisoning using microcode updates for some processors, which fall-back to the BTB for the prediction, to disable this fall-back mechanism
\end{itemize}

\paragraph{Hardware}
\begin{itemize}
    \item By tracking down whether the data was fetch as a result of speculative execution or not. And if it obtained from speculative execution then prevent it using in subsequent execution, which might leak the information.
\end{itemize}
<!--stackedit_data:
eyJoaXN0b3J5IjpbNDkxMzY5NjE4LDcwOTQ3ODkwMCwxNjEzNj
Q3ODYwXX0=
-->