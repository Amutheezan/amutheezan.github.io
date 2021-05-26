# Python Multi Processing
---
type: posts
title: Packaging Carbon Applications
author: Amutheezan Sivagnanam

---
I have developed a basic Python Library to provide abstraction to parallel programming.
This library is based on in built-in library ```multiprocessing``` in python and 3rd party library ```ray```.
In this blog post I will explain in details about the implementations in addition to existing 
documentations.

**CustomMP** is the abstraction of ```multiprocessing``` library with a ```SharedList```.
```SharedList``` is a generalization of commonly used ```Manager```, pair of ```Queue```
to keep track of task and results. ```SharedList``` implementation take care of this,
thus avoid redundant implementation of same ```multiprocessing``` structure each and
every time of implementation. Motivation for this implementation is based on the discussion I
had in stackoverflow regarding proper way to implement ```SharedList```.

Sample Use Case of **CustomMP**

```python
from pyparallel.CustomMP import CMPSystem

limit = 4
args = (1,)
cmp_sys = CMPSystem(limit)
cmp_sys.add_proc(func=child_func, args=(args,))
contents = cmp_sys.run()
print(len(contents))
```
    
### **References**
   1. [https://stackoverflow.com/questions/58927768/what-is-proper-way-to-use-shared-list-in-multiprocessing](https://stackoverflow.com/questions/58927768/what-is-proper-way-to-use-shared-list-in-multiprocessing)
   2. [https://github.com/Amutheezan/PyParallel](https://github.com/Amutheezan/PyParallel)
   
<!--stackedit_data:
eyJoaXN0b3J5IjpbNzE1MjAzODg0XX0=
-->