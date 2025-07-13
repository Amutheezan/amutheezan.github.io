---
title: "Offline Vehicle Routing Problem with Online Bookings"
excerpt: ""
collection: projects
permalink: /projects/para-transit
date: 2022-07-29
citation: 'Sivagnanam, A., Kadir, SU., Mukhopadhyay, A., Pugliese, P., Dubey, A., Samaranayake, S., & Laszka, A. (2022, July) "Offline Vehicle Routing Problem with Online Bookings: A Novel Problem Formulation with Applications to Paratransit. In Proceedings of the Thirty-First International Joint Conference on Artificial Intelligence (pp. 3933-3939)'

---
### 📌 Key Contributions

* Introduced a novel problem formulation **Offline Vehicle Routing Problem with Online Bookings** that tackles combine challenges of handling large number requests like Offline VRP and real-time decision-making like Dynamic VRP.

* The problem is inspired by operational needs in **paratransit services**, where riders book trips a day in advance but expect confirmed narrow pickup time intervals during the booking call. The model captures this hybrid setting by integrating online decisions with offline optimization.

* Developed a deep reinforcement learning (RL) approach that learns an **optimal policy** to assign tight pickup windows under uncertainty. 

* Augmented the RL policy with an **anytime VRP solver** that runs between trip bookings, continuously improving partial route plans.

* Our extensive experiments using real-world data demonstrate up to **20-40% cost reduction** compared to baseline methods with naive window assignment.

---

**Highlevel overview of Solution Approach**
![image](https://amutheezan.com/images/IJCAISolutionApproach.png)

---

### 📝 Publication

This research has been published in: **Proceedings of the Thirty-First International Joint Conference on Artificial Intelligence (IJCAI-22)**  
*"Offline Vehicle Routing Problem with Online Bookings: A Novel Problem Formulation with Applications to Paratransit"* [[IJCAI22]](https://www.ijcai.org/proceedings/2022/0546.pdf)

---

### 💻 Code & Data

The source code and anonymized dataset used in this work are publicly available: [[Code & Data]](https://github.com/smarttransit-ai/ijcai22)
