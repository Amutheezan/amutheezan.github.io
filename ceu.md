# Ceu Language

This was a pretty cool language that developed around 2014 by a research team in Lablua. This was developed mainly to reduce the time delay caused by libraries used in Arduino based on the polling systems.[```POLLING``` is repeated asking something from the system until the particular task is achieved or the system gets stop based on the criteria]. Most of the real-time systems are developed in the sense of polling. But actually, it will cost on time and heat wastages.

This Ceu language was used to make an Arduino binding through Ceu-Arduino which helps us to resolve those errors by its functionalities it posses. Those functionalities are below listed.

-   Awaiting events in the direct/sequential style.
-   Parallel lines of execution with
    -   safe abortion.
    -   deterministic behavior (in contrast with threads).
-   Asynchronous loops for heavy computations.
-   Interrupt-driven operation mode (optional and experimental).
-   Seamless integration with standard Arduino

### References

 1. https://github.com/fsantanna/ceu-arduino
