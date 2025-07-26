---
title: "Emergency Responder Stationing"
excerpt: ""
collection: projects
permalink: /projects/stationing
date: 2024-06-06
citation: "Sivagnanam, A., Pettet, A., Lee, H., Mukhopadhyay, A., Dubey, A., & Laszka, A. (2024). Multi-Agent Reinforcement Learning with Hierarchical Coordination for Emergency Responder Stationing. In Proceedings of the 41 st International Conference on Machine Learning, (ICML 2024)"

---

### 📌 Key Contributions
- Introduced a novel solution approach using **Deep Reinforcement Learning** and **Combinatorial Optimization** techniques to enable **real-time** decision-making.  
- Used **DDPG** to train agents for performing redistribution actions (city-scale) and reallocation actions (region-scale).  
- Utilized a **Transformer-based** actor to handle variable numbers of responders and depots during region-level reallocation.  
- Mapped continuous actions *exactly* to discrete actions using combinatorial optimization (min-cost flow + max-weight matching), preserving gradient flow while ensuring feasibility.  
- Signaled the performance of high-level actions through low-level critics.  
- Trained **DRL** agents achieve 1000x faster decision-making while reducing response times to between 5 and 13 seconds on real-world datasets.

---

### 🔍 High-Level Overview of the SOTA Approach with Hierarchical Coordination
![High-Level Process](https://amutheezan.com/images/FullProcessImage.png)

This diagram illustrates our state-of-the-art hierarchical coordination framework that combines queuing based city-scale redistributions and MCTS based region-level reallocations of responders.

---

### 🧠 Region-Level Reallocation via DDPG Training
![Region-Level Training](https://amutheezan.com/images/LLPTraining.png)

We leverage DDPG to train agents that perform **region-level reallocation** of responders, enabling efficient adaptation to changing demand at a broader geographic scale.

---

### 🏙️ City-Level Redistribution via DDPG Training
![City-Level Training](https://amutheezan.com/images/HLPTraining.png)

At the city scale, DDPG is used to train agents for **fine-grained redistribution** of responders, allowing precise real-time response in dense urban environments.

---

### 📝 Publication
Published as a full paper at **ICML 2024** — *“Multi-Agent Reinforcement Learning with Hierarchical Coordination for Emergency Responder Stationing.”* [[OpenReview]](https://openreview.net/forum?id=TTZXl9WYFF)

---

### 💻 Code & Data
Reproducible code, training scripts, and Nashville & Seattle datasets: [[Code & Data]](https://figshare.com/articles/dataset/Multi-Agent_Reinforcement_Learning_with_Hierarchical_Coordination_for_Emergency_Responder_Stationing_ICML-2024_Code_and_Data_/25872640)

---

### 🎥 3-Minute Overview
Summarising the challenges, solution approach, and results: [[Short Video]](https://youtu.be/qxdSdl9XviY)
