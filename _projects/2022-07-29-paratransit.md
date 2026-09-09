---
title: "Offline Vehicle Routing Problem with Online Bookings"
excerpt: ""
collection: projects
permalink: /projects/para-transit
date: 2022-07-29
citation: 'Sivagnanam, A., Kadir, SU., Mukhopadhyay, A., Pugliese, P., Dubey, A., Samaranayake, S., & Laszka, A. (2022, July) Offline Vehicle Routing Problem with Online Bookings: A Novel Problem Formulation with Applications to Paratransit. In Proceedings of the Thirty-First International Joint Conference on Artificial Intelligence (pp. 3933-3939)'

research_interests: [operational-research, reinforcement-learning, cyber-physical-systems]
---
### 📌 Key Contributions

* Focused on a real-world paratransit scenario where riders book trips in advance with time flexibility but expect confirmed tight pickup windows at booking time
* Introduced a novel problem formulation: the Offline Vehicle Routing Problem with Online Bookings, which blends the scalability of Offline VRP with the real-time responsiveness of Dynamic VRP
* Developed a Deep Reinforcement Learning–based policy that learns to assign optimal time windows under demand uncertainty and booking-time constraints
* Integrated an anytime VRP solver to incrementally refine and improve route plans between bookings, enabling better long-term efficiency
* Achieved 20–40% cost reduction over baseline methods with naive window assignments, as demonstrated through extensive experiments on real-world paratransit of Chattanooga

---

**High-Level Overview of the Solution Approach**

<pre class="mermaid">
{% raw %}sequenceDiagram
    participant ENV as Environment&lt;br/&gt;(call center)
    participant AGENT as DRL Agent
    participant SOLV as Anytime VRP Solver
    participant DB as Requests &amp; Routes

    Note over ENV: New Booking Request received
    ENV->>SOLV: 1. Interrupt anytime solver
    SOLV->>DB: 2. Store improved solution
    ENV->>AGENT: 3. Send new request
    DB->>AGENT: 4. Load latest solution
    AGENT->>ENV: 5. Determine tight pickup windows
    ENV->>DB: 6. Add request with tight pickup windows
    ENV->>SOLV: 7. Trigger anytime solver
    DB->>SOLV: 8. Load latest solution{% endraw %}
</pre>

---

### 📝 Publication

This research has been published in: **Proceedings of the Thirty-First International Joint Conference on Artificial Intelligence (IJCAI-22)**  
*"Offline Vehicle Routing Problem with Online Bookings: A Novel Problem Formulation with Applications to Paratransit"* [[IJCAI22]](https://www.ijcai.org/proceedings/2022/0546.pdf)

---

### 💻 Code & Data

The source code and anonymized dataset used in this work are publicly available: [[Code & Data]](https://github.com/smarttransit-ai/ijcai22)
