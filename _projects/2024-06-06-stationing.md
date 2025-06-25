---
title: "Emergency Responder Stationing"
excerpt: ""
collection: projects
permalink: /projects/stationing
date: 2024-06-06

---
![image](https://amutheezan.com/images/FullProcessImage.png)

![image](https://amutheezan.com/images/LLPTraining.png)

![image](https://amutheezan.com/images/HLPTraining.png)

### 📌 Key Contributions
- **Real-time decision making:** Moved the compute budget from decision making time to compute time and achieve 1000x faster decision making  
- Utilize **Transformer** based actor networks to handle variable numbers of responders and depots.  
- Continuous actions are *exactly* mapped to discrete reallocations via combinatorial optimisation (min-cost flow + max-weight matching), preserving gradient flow while ensuring feasibility
- **Stable hierarchical learning:** Signals the performance of high-level action via low-level critics
- **Real-world impact:** Across 60 incident-chain simulations for Nashville, TN and Seattle, WA, the method (i) matches or beats MCTS on average ambulance response time (-5 s to -13 s) and (ii) decisively outperforms p-median, greedy, DRLSN, and static baselines—translating speed to saved lives.

### 📝 Publication
Published as a full paper at **ICML 2024** — *“Multi-Agent Reinforcement Learning with Hierarchical Coordination for Emergency Responder Stationing.”* [[OpenReview]](https://openreview.net/forum?id=TTZXl9WYFF)

### 💻 Code & Data
Reproducible code, training scripts, and Nashville & Seattle datasets: [[Code & Data]](https://figshare.com/articles/dataset/Multi-Agent_Reinforcement_Learning_with_Hierarchical_Coordination_for_Emergency_Responder_Stationing_ICML-2024_Code_and_Data_/25872640)

### 🎥 3-Minute Overview
Summarising the challenges, solution approach, and results: [[Short Video]](https://youtu.be/qxdSdl9XviY)
