---
title: "Emergency Responder Stationing"
excerpt: ""
collection: projects
permalink: /projects/stationing
date: 2024-06-06

---
### 📌 Key Contributions
- We introduce a novel solution approach using **Deep Reinforcement Learning** and **Combinatorial Optimization** techniques to enable **real-time** decision-making.  
- We use **DDPG** to train agents for performing redistribution actions (city-scale) and reallocation actions (region-scale).  
- We utilize a **Transformer-based** actor to handle variable numbers of responders and depots during region-level reallocation.  
- We map continuous actions *exactly* to discrete actions using combinatorial optimization (min-cost flow + max-weight matching), preserving gradient flow while ensuring feasibility.  
- We signal the performance of high-level actions through low-level critics.  
- Our trained **DRL** agents achieve 1000x faster decision-making while reducing response times to between 5 and 13 seconds on real-world datasets.

**High-level overview of current state-of-the-art approach using hierarchial coordination**
![image](https://amutheezan.com/images/FullProcessImage.png)

**Our proposed DDPG based training paradigm for performing reallocation in region-level**
![image](https://amutheezan.com/images/LLPTraining.png)

**Our proposed DDPG based training paradigm for performing redistribution in city-level**
![image](https://amutheezan.com/images/HLPTraining.png)

### 📝 Publication
Published as a full paper at **ICML 2024** — *“Multi-Agent Reinforcement Learning with Hierarchical Coordination for Emergency Responder Stationing.”* [[OpenReview]](https://openreview.net/forum?id=TTZXl9WYFF)

### 💻 Code & Data
Reproducible code, training scripts, and Nashville & Seattle datasets: [[Code & Data]](https://figshare.com/articles/dataset/Multi-Agent_Reinforcement_Learning_with_Hierarchical_Coordination_for_Emergency_Responder_Stationing_ICML-2024_Code_and_Data_/25872640)

### 🎥 3-Minute Overview
Summarising the challenges, solution approach, and results: [[Short Video]](https://youtu.be/qxdSdl9XviY)
