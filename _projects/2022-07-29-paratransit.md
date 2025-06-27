---
title: "Offline Vehicle Routing Problem with Online Bookings"
excerpt: ""
collection: projects
permalink: /projects/para-transit
date: 2022-07-29

---
### 📌 Key Contributions

* **Novel Problem Formulation**: Introduced a new variant of the classical Vehicle Routing Problem (VRP), termed the **Offline Vehicle Routing Problem with Online Bookings (OVRP-OB)**. This formulation models the need to assign **tight pickup windows** in real time, even though the routing optimization is performed offline after all trip requests are collected.

* **Real-World Motivation**: The problem is inspired by operational needs in **paratransit services**, where riders book trips a day in advance but expect confirmed narrow pickup time intervals during the booking call. The model captures this hybrid setting by integrating online decisions with offline optimization.

* **Reinforcement Learning-Based Decision Policy**: Developed a deep reinforcement learning (RL) approach that learns an **optimal policy** to assign tight pickup windows under uncertainty. 

* **Anytime Algorithm Integration**: Augmented the RL policy with an **anytime VRP solver** that runs between trip bookings, continuously improving partial route plans.

* **Substantial Performance Gains**: Extensive experiments using real-world data demonstrate up to **20-40% cost reduction** compared to baseline methods with naive window assignment.

### 📝 Publication

This research has been published in: **Proceedings of the Thirty-First International Joint Conference on Artificial Intelligence (IJCAI-22)**  
*"Offline Vehicle Routing Problem with Online Bookings: A Novel Problem Formulation with Applications to Paratransit"* [[IJCAI22]](https://www.ijcai.org/proceedings/2022/0546.pdf)

### 💻 Code & Data

The source code and anonymized dataset used in this work are publicly available: [[Code & Data]](https://github.com/smarttransit-ai/ijcai22)
