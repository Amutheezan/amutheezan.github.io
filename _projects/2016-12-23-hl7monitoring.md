---
title: "HL7 Monitoring Solution"
excerpt: ""
collection: projects
permalink: /projects/hl7
date: 2016-12-23

---

### 📌 Key Contributions
* Built an end-to-end HL7/FHIR monitoring system using WSO2 ESB, DAS, and BAM for both real-time (Siddhi) and batch (Spark) analytics of healthcare data
* Designed an alert system to detect disease outbreaks and long patient wait times, delivering email and SMS notifications based on HL7/FHIR data streams
* Engineered hospital functionality assessments by analyzing admission/discharge events, tracking resources like bed and oxygen cylinder availability
* Developed interactive dashboards with Jaggery, JavaScript, Leaflet.js, and DataTables, and packaged the solution as a WSO2 Carbon Application (CApp) for easy deployment

---

**High-Level Overview of the Solution Approach**

<pre class="mermaid">
{% raw %}flowchart LR
    HL7["HL7 / FHIR Data Streams"] --> ESB["WSO2 ESB&lt;br/&gt;(Ingestion)"]
    ESB --> RT["Real-Time Analytics&lt;br/&gt;(Siddhi / BAM)"]
    ESB --> BATCH["Batch Analytics&lt;br/&gt;(Spark / DAS)"]
    RT --> ALERT["Alert Engine&lt;br/&gt;(Outbreaks &amp; Wait Times)"]
    BATCH --> ALERT
    ALERT --> NOTIFY["Email &amp; SMS Notifications"]
    RT --> DASH["Interactive Dashboards&lt;br/&gt;(Jaggery, Leaflet.js, DataTables)"]
    BATCH --> DASH{% endraw %}
</pre>

---

###  💻 Code
The source code for this work is publicly available: [[Code]](https://github.com/Amutheezan/product-das/tree/master/modules/samples/capps/HL7_Monitoring)
