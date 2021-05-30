---
type: posts
title: Meltdown vulnerability simulation
author: Amutheezan Sivagnanam

---

I have implemented a simple simulation for meltdown vulnerability as a part of assignment for **COSC 6385** course in University of Houston

## How Attack Works

Meltdown uses the race condition between memory access and privilege level checking while instruction is in processing. Meltdown attacks allow access to the parts of memory used by the operating systems or other running processes or recently used processes. Generally, one process is not permitted to access the memory of another running process. But in a meltdown attack, one process tries to access other process contents. Operating system(OS) has a permission setting, which will ensure that users are not allowed to access the kernel memory in user mode. And If a user tries to access the memory from kernel address space, it will result in a page fault. But due to the speculative execution and the process will execute some instruction ahead of page faulting instruction, they will roll back after the CPU has determined the permission setting. But these executions are still available in the cache, and attackers use various OS functionalities to dump these kinds of data from the cache. Based on this, the meltdown attack works [[1](https://en.wikipedia.org/wiki/Kernel_page-table_isolation),[2](https://github.com/IAIK/meltdown/),[3](https://meltdownattack.com/meltdown.pdf)].

## DEMO

* Oracle Virtual Box : Version 6.1.18 r142142 (Qt5.6.3)
* Ubuntu 14.04.06 LTS
* Kernel Version: 4.4.0-142-generic

I first clone the meltdown demo repository [2](https://github.com/IAIK/meltdown/) from GitHub and tried the following demonstration presents in the repository.

### Demonstrations of Meltdown Attack
* Demo \#01 - A first test (```test```)
* Demo \#02 - Breaking KASLR (```kaslr```)
* Demo \#03 - Reliability test (```\texttt{reliability```)
*  Demo \#04 - Read physical memory (```\texttt{physical\_reader```)
* Demo \#05 - Dump the memory (```memdump```)


#### Demo \#01 - A first test (```test```)

I have executed the basic test case for ```meltdown``` demos in this demo. I was able to get the same text in expect and got places. I also tried to call the same command, and it returns random texts in each run. (randomization of text happen based on the line 26 of ```test.c````

##### Commands

```bash
make;\\
sudo taskset 0x1 ./test
```

##### Screenshot

![image](images/test.png)


#### Demo \#02 - Breaking KASLR (```kaslr```)

This demo uses Meltdown to leak the secret randomization of the direct physical map. To get the offset quickly, we have to execute the commands with admin privileges. Note that I have used Ubuntu 14.04, which has the kernel 4.4.0-142 as disable ```\texttt{kaslr```} by default.

##### \textbf{Commands}

```bash\begin{tcolorbox}
make;\\
sudo taskset 0x1 ./kaslr
```

##### \end{tcolorbox}

\textbf{Screenshot}

![image](images/kaslr.png)


#### \begin{figure}[!ht]
    \centering
    \includegraphics[width=120mm,scale=0.5]{meltdown/kaslr.png}
    \caption{Screenshot of Demo \#02, Breaking KASLR}
    \label{fig:meltdown_kaslr}
\end{figure}


\newpage

\subsubsection{Demo \#03 - Reliability test (```\texttt{reliability```)})}

This demo tests how physical memory can be read. Note that I have used Ubuntu 14.04, which has kernel 4.4.0-142 as disable ```\texttt{kaslr```} by default. So I am technically not required to specify the offset value ```\texttt{0xffff8a6b80000000```.

##### }.

\textbf{Commands}

```bash\begin{tcolorbox}
make;\\
sudo taskset 0x1 ./reliability 0xffff8a6b80000000
```
##### \end{tcolorbox}

\textbf{Screenshot}

![image](images/reliability.png)

##### \begin{figure}[!ht]
    \centering
    \includegraphics[width=120mm,scale=0.5]{meltdown/reliability.png}
    \caption{Screenshot of Demo \#03, Reliability test}
    \label{fig:meltdown_reliability}
\end{figure}

\textbf{Issues faced
}
Unlike the demonstration shown in the GitHub repository [2](https://github.com/IAIK/\cite{meltdown/)}, I am unable to get higher reliability, and always I get reliability less than 1\%. I also tried similar commands with [Ubuntu 14.10]( \footnote{http://old-releases.ubuntu.com/releases/14.10/)  [```} [\texttt{ubuntu-14.10-desktop-amd64.iso Last Modified: 2014-10-22 19:43```}], but I faced the same issues in there as well.

#### \newpage

\subsubsection{Demo \#04 - Read physical memory (```\texttt{physical\_reader```)})}

This demo reads memory from another process by directly reading physical memory. This demo contains two steps,

##### \textbf{Steps and Commands}

1. call ```\begin{itemize}
    \item [(1)] call \texttt{secret```} with admin privileges and this will return the physical address of the test.
    
```bash
	sudo ./secret
```

2. call ```    \begin{tcolorbox}
    sudo ./secret
    \end{tcolorbox}

    \item [(2)] call \texttt{physical\_reader```} with the specified physical address of secret text and offset.
    
```bash    \begin{tcolorbox}
    make;\\
    sudo taskset 0x1 ./physical\_reader 0xcc26cac8 0xffff8a6b80000000
```    \end{tcolorbox}
\end{itemize}

I have used Ubuntu 14.04, which has kernel 4.4.0-142 as disable kaslr by default. If kaslr is disabled, we can skip providing the offset parameter. So I don’t need to provide the offset value ```\texttt{0xffff8a6b80000000```}.


##### \textbf{Screenshots}

![image](images/physical_reader_part_1.png)
![image](images/physical_reader_part_2.png)

##### \begin{figure}[!ht]
    \centering
\begin{subfigure}[b]{0.96\linewidth}
    \centering
    \includegraphics[width=120mm,scale=0.5]{meltdown/physical_reader_part_1.png}
        \caption{Running \texttt{secret}.}
\end{subfigure}

\begin{subfigure}[b]{0.96\linewidth}
    \centering
    \includegraphics[width=120mm,scale=0.5]{meltdown/physical_reader_part_2.png}
    \caption{Reading contents of secret text from \texttt{physical\_reader}.}
\end{subfigure}
    \caption{Screenshots of Demo \#04, Read Physical memory}
    \label{fig:meltdown_physical_reader}
\end{figure}


\textbf{Issues Ffaced
}
Unlike the demonstration shown in the GitHub repository [2](https://github.com/IAIK/\cite{meltdown/)}, I am unable to get contents of secret. I also tried similar commands with Ubuntu 14.10, but I faced the same issues there as well.

#### \newpage

\subsubsection{Demo \#05 - Dump the memory (```\texttt{memdump```)})}

This demo dumps the content of the memory. I set the memory size to 8GB as RAM for the virtual box. This demo contains two steps, 

##### 
\textbf{Steps and Commands}

1. call ```\begin{itemize}
    \item [(1)] call \texttt{memory\_filler```} with memory value specified to fill the memory. 
    
```bash    \begin{tcolorbox}
    sudo ./memory\_filler 9
```

2.  call  ```    \end{tcolorbox}

    \item [(2)] call  \texttt{memdump```} to read the contents from memory.
    
```bash    \begin{tcolorbox}
    make;\\
    taskset 0x1 ./memdump 0x240000000 -1 0xffff8a6b80000000
```

#####     \end{tcolorbox}
\end{itemize}

\textbf{Issues Ffaced
}
Unlike the demonstration shown in the GitHub repository [2](https://github.com/IAIK/\cite{meltdown/), }, I am unable to get any meaningful human-readable data. I also tried similar commands with Ubuntu 14.10, but I faced the same issues there as well.

##### 
\newpage

\textbf{Screenshots}

![image](images/memdump_part_1.png)
![image](images/memdump_part_2.png)

## How to Fix
### \begin{figure}[!ht]
    \centering
    \begin{subfigure}[b]{0.96\linewidth}
    \includegraphics[width=120mm,scale=0.5]{meltdown/memdump_part_1.png}
        \caption{Filling 9GB of memory using \texttt{memory\_filler}}
    \end{subfigure}
    \begin{subfigure}[b]{0.96\linewidth}
    \includegraphics[width=120mm,scale=0.5]{meltdown/memdump_part_2.png}
    \caption{Dumping memory using \texttt{memdump}}
    \end{subfigure}
    \caption{Screenshots of Demo \#05, Dump the memory}
    \label{fig:meltdown_memdump}
\end{figure}


\newpage

\subsection{How to Fix}
\subsubsection{Software}
For software level protection, we can use patches for Linux, Windows, and OS X.
Kernel page-table isolation (KPTI) (earlier referenced as KAISER) is a Linux kernel feature that protect the system from the Meltdown security vulnerability affecting mainly Intel's X86 CPU. It improves the kernel hardening against attempts to bypass the KSLR [1](https://en.wikipedia.org/wiki/Kernel_page-table_isolation),  [3](https://meltdownattack.com/meltdown.pdf).


### \cite{klti,lipp2018meltdown}.


\subsubsection{Hardware}
For hardware level protection, we have to introduce a hard split between the user space and the kernel space. This can be enabled optionally by modern kernels using the newly introduce hard-split bit in the CPU control register (e.g. CR4). By setting the control bit the user space and kernel space can resides in different areas of address.
This hard-split can determine whether a memory fetch violates security boundary with the help virtual address. 

## REFERENCES
1. [https://en.wikipedia.org/wiki/Kernel_page-table_isolation](https://en.wikipedia.org/wiki/Kernel_page-table_isolation)
2. [https://github.com/IAIK/meltdown/](https://github.com/IAIK/meltdown/)
3.  [Meltdown Paper](https://meltdownattack.com/meltdown.pdf) 


<!--stackedit_data:
eyJoaXN0b3J5IjpbNTgwMzQxMzksLTIwMjM4MTUwNjksNDg3MT
EwMTg0LDExOTIyNDQ3NiwtMTMzNDc1NjUzMCwtMTYyMzI5Mzkw
NF19
-->