---
type: posts
title: Distributed Search
author: Amutheezan Sivagnanam
category: Distributed Systems
tags:
- distributedsystems
- clusters
date: 2017-12-16
---

<p class="message" style="color:black; background-color:#DBA210;border-color:brown;border-style:solid">
<strong> Disclaimer !!! </strong>
<br>

This is a short descriptive post based on our project done for CS4262 Module, Distributed Systems. These particular wordings are my own words and thus it doesn't be exact same of what I have submitted as final report to the course assignment :relaxed:.
</p>

### Introduction![](https://lh5.googleusercontent.com/rrB9txWqf-1HsZCH8Oq2kbjJAN-DfM5JLWw8b2s2yHPjRTn-uHt6mM4xkLq6MOc2nNM3i4jL3NjKHJACjTdh-nuOzfglTbvzpqNZctqxfZ1m8F8c1jz0L4A1HV7fiOmasMVeyPO0)

  

We establish an unstructured peer-to-peer overlay. Our overlay network structure similar to the figure. This gives us good results when the peers get killed iteratively. Each node will broadcast the search queries to all its peers. This is how the search query is propagating across the network.

In this design, we need to handle the “query duplication” which is the cause to increase the message flow in the network. We avoid query duplication by introducing a UUID in addition to the existing messaging protocol for search. (UUID is a 128-bit number which is expected to produced as random, but the probability of generating the same number again is nearly equal to zero, not zero, so we used this ID for a particular search query to not asked again on the same node)

  

Our new protocol.

```length SER UUID IP port file_name hops```

  

Each search query is uniquely identified UUID. Each node maintains a history of which is the search queries already arrived at that node with respect to the UUID. If an incoming search query is not in the history, then it will either find on its system or broadcast to its peers else if it already exists it will just discard the search query. This strategy prevents the duplication of the same search query as well as unwanted message flows and helps the systems to stable over message overflow of SER messages. This will considerably reduce the number of messages across the network.

 
#### If the number of queries (Q) is much larger than the number of nodes (N) (Q >> N)

  
Since our solution is based on the broadcast of the search query to all the peers it connected when a number of queries increased each node gets more search query requests. So this will eventually increase the message count and latency for a search query resolution.

So we could apply some caching methods on each node. Already searched files and their details are cached with their location in nodes. Then further searches on the same files can be obtained quickly and with negligible latency and hops. But this will raise another problem such as file collection may outdated with time. Since (N>>Q) the gain we got from broadcasting must outweigh the cost of broadcasting. So when sending the request nodes may apply a biased random walk rather than broadcast the query to all nodes. This will reduce the latency and hops considerably due to reduced message flows in all nodes with fewer amount of requests.

#### If the number of nodes (N) is much larger than the number of queries (Q) (N >> Q)

Since our solution broadcasts the search query to all peers and propagated in the same way to the rest of the network when the number of nodes is much higher than the number of search query messages drastically increased. This will increase the latency as well as hop count.

To handle this we introduce we can introduce a limit for hops in other words time to live, thus after n number of hops, it won’t propagate. This will limit the propagation of query beyond a limit and control the number of search query messages also reduces the latency due to fewer messages per node. But has some issues on identifying files/ contents if none of the peers of peers are connected to the files having nodes to a certain level.

We can apply the **super-peer**, which contains the all resources and only the super-peer can broadcast or random walk. We can also share file collection in order to have a biased random walk between super peers. This will significantly reduce the number of messages, latency, and hop count for query resolution.

My Implementation can be found in the [repo](https://github.com/Amutheezan/DistributedSearch).

#### Performance Analysis.

Our implementation has two version
1. udp (check the ``udp`` branch of the repo)
2. webservice (check the ``ws`` branch of the repo)

##### UDP Sockets

We tried 50 sample queries in three selected nodes and get the minimum, maximum, average, and standard deviation for hops, latency, node degree, and message per node in each Case. Nodes are using UDP sockets for communicating between them. At the end of each case, we gracefully leave one node and continue with the next iteration. The below tables shows the statistics, and we go up to two such iterations and obtained the following results

  

Case 01

When all Nodes are up and Running

Hops

Latency

Node Degree

Message Per Node

Min

0

0

2

447

Max

5

58

6

1313

Average

1.3473

18.2635

3.4

762.2

Standard Deviation

0.9136

18.2087

1.3499

289.9536

Per Query Cost

7.542

Per Node Cost

2.1792

  

Case 02

When one node is gracefully departure from system

Hops

Latency

Node Degree

Message Per Node

Min

0

0

2

387

Max

3

36

6

1297

Average

1.3077

18.0769

3.3333

731.3333

Standard Deviation

0.8128

18.0769

1.3229

292.2157

Per Query Cost

7.36

Per Node Cost

2.1707

  

Case 03

When two nodes are gracefully departure from system

Hops

Latency

Node Degree

Message Per Node

Min

0

0

2

441

Max

3

31

6

1290

Average

1.2333

17.3333

3.25

742

Standard Deviation

0.7824

17.3333

1.4880

312.9885

Per Query Cost

7.2125

Per Node Cost

2.1821

  

![](https://lh5.googleusercontent.com/W8igfNHPirsNIT-T2LjN4pZ2R-lka_sWaGJqXM4s33bwIb0-zxwsyUZYSIc5Qd89AQve8eCgoFR6NPuzjNbhscuKV4imw8emVyaXyq631u11vyS0Ho69PS9zKETA8LxBJgd-LiIF "Chart")![](https://lh6.googleusercontent.com/8J6JxdKQoxIraRS5Lu1cYhY9TB9lTYB8EH0eMnkHrCc7zq1AkXv5e8B1T_YrL6i95CNK36pKrpzF7C_XJZPzn_ohARgSmzd4cXFao7NRvpEi0eDruf8LUCc7TpRRgYkE5DUj6Syi "Chart")

![](https://lh4.googleusercontent.com/pmZoNTc6kGsFqOVLwGYwB65vnxqGnYkgpQBDY4DcBpaXJ0r7ULzHxgQq6KIDeZ1zFN2kiGI3kfxvCobOkMx37ptQRdiCnFy8w48JQR111jawl5ytuFkrVqIY2X9Zh9reoF9uUwKB "Chart")![](https://lh3.googleusercontent.com/JVMDX3bKwNq9clX_5SLsZJ4jf6Hf7-nMs9FHA6lj6NtzMintZ1aIHhO_SXPE2IAqyG4KdlBE2avbr4eQK71DByhtzZBtdvobj1K1X0LCh9sqjnde6yUuNlZsWET8nTy9zlrZuPis "Chart")

##### REST API/WS

  

 We tried 50 sample queries in three selected nodes and get the minimum, maximum, average, and standard deviation for hops, latency, node degree, and message per node in each Case. Nodes are using REST API such as GET/POST for communicating between them. At the end of each case we gracefully leave one node and continue with the next iteration. The below tables shows the statistics, and we go up to two such iterations and obtained the following results

  

Case 01

When all Nodes are up and Running

Hops

Latency

Node Degree

Message Per Node

Min

0

61

2

401

Max

6

1971

6

1294

Average

2.1179

785.3712

3.4

735.6

Standard Deviation

1.2110

363.8984

1.2649

284.2214

Per Query Cost

7.356

Per Node Cost

2.1256

  

Case 02

When one node is gracefully departure from system

Hops

Latency

Node Degree

Message Per Node

Min

0

62

2

401

Max

5

1640

5

1077

Average

2.0478

764.3541

3.3333

723.3333

Standard Deviation

1.1229

337.8631

1

224.3764

Per Query Cost

7.2333

Per Node Cost

2.1489

  

Case 03

When two nodes are gracefully departure from system

Hops

Latency

Node Degree

Message Per Node

Min

0

62

2

401

Max

5

1621

4

903

Average

1.9614

738.4058

3.25

705.25

Standard Deviation

1.0580

803.7277

0.8864

188.8807

Per Query Cost

7.05

Per Node Cost

2.1625

  

![](https://lh5.googleusercontent.com/_EivtGlQY1l_M5VQ1-FOzznshr0Pfa62CG6U2vOomRqooPltWeLjdmfHB3cVeuIPUc9cAv69W4HpfhJ7QV6uWo73NG_UI6T2ybWcvuWxcYXkrCrRkpDqywwQfuujSfdqUPxHqA-3 "Chart")![](https://lh3.googleusercontent.com/6gquXSrmCuN0EqJ8ijQTLfQDJ4QETVPVr3P-PpJPRF1PE2f8lTxiv3r1AHtVbFs00A6uNCb-_R7sPajSRwkCUofg9ltEzcD4AgYSd_aq3mAYFop3_4AsdbbbS_1Sw7KdM1wZU0Bf "Chart")![](https://lh4.googleusercontent.com/Xt181qjM3MhZd4p6hONx-BfHcSrra93kVZtP_X1lDmXP0NiH_YeqxozP7JoCmguCfpNUeWkJ8Y0Q2cf-yCtVF_gwAw9b6B48paxSLKOL5UOp5Op4-DMdy-PaFg06hnk0SHlT46J7 "Chart")![](https://lh3.googleusercontent.com/s7NTmoMgAmDIxQMza1MM8igeji7O0rTwd-bjUL31fj5mXndDAtqKdZRujbtMnQ67hh1R37oZ9F3Oj2685VzSaqmlLMKnKUkkZvFSTGYhi3r6gObfCmGybYOBeYagolEw6eiZ_Oii "Chart")
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTIyNTYyODE5OSw2NzY5NDQxM119
-->