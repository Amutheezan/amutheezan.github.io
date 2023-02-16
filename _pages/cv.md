---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* B.S. in Computer Science and Engineering, University of Moratuwa, 2018
* M.S. in Computer Science, University of Houston, 2022
* Ph.D in Informatics, Penn State University, 2024 (expected)

Work experience
======
* 2022-09 - Present - Graduate Research Assistant
  * Pennsylvania State University
  * Supervisor: Dr. Aron Laszka
* 2019-09 - 2022-08 - Graduate Research Assistant
  * The University of Houston
  * Supervisor: Dr. Aron Laszka
  * Duties included: 
    *  Introduced mathematical models to solve transit optimization problems (e.g., minimizing energy consumption in public
transportation operating mixed fleets of electric and gasoline vehicles, optimizing the online booking for paratransit services
with offline vehicle routing problem setting). Implemented the algorithm and solution approaches for mathematical models
in Python, using libraries such as CPLEX, Google OR Tools, Keras, and TensorFlow.
    *  Collected the real-world data and analyzed it to study trends with the assistance of Python (e.g., para-transit operation
before and after COVID-19, the benefit of vulnerability reward programs)

* 2018-01 - 2019-07: Software Engineer
  * LSEG Technology (formerly MilleniumIT)
  * Duties included: Unit Testing for Libraries in Post Trade C++ Code was introduced. Database changes for Post Trade products for Singapore
    Stock Exchange were made and validated with Behavior Driven Development (BDD) testing approaches using Java. And
    worked on CI/CD of the Post Trade product with Python and Git. Practiced Agile-based development throughout the entire
    period of work.
  
* 2016-07 - 2016-12: Software Engineering Intern
  * WSO2 Lankd PVT Limited
  * Duties included: Implemented alert generation mechanism, which provides email and SMS when a disease spreads wide by analyzing the
    description. Implemented alert generation mechanism, which could determine the functional state of hospitals (i.e., number
    of beds available, number of Oxygen cylinders available) based on the admission and discharge messages.

Publications
======
  <ul>{% for post in site.publications %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Talks
======
  <ul>{% for post in site.talks %}
    {% include archive-single-talk-cv.html %}
  {% endfor %}</ul>
