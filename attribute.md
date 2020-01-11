# Which is the best multi-attribute sorting for python Array?

## QUESTION

I came across the issue while I need to sort some list of prediction probability and weights of tweets for adding them as iteration list for doing semi-supervised methodology called "Self - training". In my previous implementation without sorting and just randomly picking first n number of tweets it cost around 2 hrs for 40 iteration and 5 hrs for 100 iteration where my initial train set size ranges from 200 to 12000. But when I implemented the following code block

```python
    a = [[1,0.7,1],[4,0.8,1],[5,0.8,0.99],[11,0.9,0.98]]
    b = sorted(a, key=lambda x:x[1], reverse=True);
    c = sorted(b, key=lambda x:x[2], reverse=True);
```

but it takes more than 5 hrs for 20 iterations itself, and I searched in StackOverflow and obtained two sets of formula and tested them and compare the time differences. following are those two sets of formulas

```python
    s = sorted(a, key=lambda x : (x[2],x[1]), reverse=True); i = sorted(a, key = operator.itemgetter(2, 1),reverse=True);
```

Out of these which is one will return the result quickly for a 5D Array which has size around 20,000 ???

## ANSWER

These three implementations are simply equal and have the same overhead of doing the sorting. Thus, it takes the same amount of time. So the best option is going for some other choice... Or languages
