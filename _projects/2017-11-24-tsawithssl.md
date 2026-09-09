---
title: "Sentiment Analysis of Twitter using Semi-Supervised Approaches"
excerpt: ""
collection: projects
permalink: /projects/twitter
date: 2017-11-24

---

### 📌 Key Contributions
* Developed a sentiment analysis model to classify tweets into positive, negative, and neutral categories
* Addressed limited and noisy labeled data by applying semi-supervised learning techniques, including self-training, co-training, and lightweight ensemble methods
* Initiated training with a small hand-labeled dataset, and iteratively expanded it by automatically labeling high-confidence tweets
* Refined the classifier through multiple training iterations, improving accuracy and robustness on real-world social media data

---

**High-Level Overview of the Solution Approach**

<pre class="mermaid">
{% raw %}flowchart LR
    SEED["Small Hand-Labeled Dataset"] --> TRAIN["Train Classifier"]
    TRAIN --> LABEL["Auto-Label High-Confidence Tweets&lt;br/&gt;(Self-/Co-Training)"]
    LABEL --> EXPAND["Expand Labeled Dataset"]
    EXPAND -->|"Iterate"| TRAIN
    TRAIN --> FINAL["Refined Classifier"]
    FINAL --> OUT["Positive / Negative / Neutral"]{% endraw %}
</pre>

---

### 💻 Code

The source code for this work is publicly available: [[Code]](https://github.com/Amutheezan/TSAwithSSL)
