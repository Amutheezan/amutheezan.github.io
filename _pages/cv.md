---
layout: archive
title: "Curriculum Vitae"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %} [[CV]](https://Amutheezan.com/files/Amutheezan_CV_Research.pdf)

Education
======
* Ph.D. in **Informatics**, Pennsylvania State University, 2024 (expected)
* M.S. in **Computer Science**, The University of Houston, 2022
* B.S. in **Computer Science and Engineering**, University of Moratuwa, 2018

Work experience
======
* 2019/09 - Present - **Graduate Research Assistant**
  * [The University of Houston](https://www.uh.edu/), [Pennsylvania State University](https://www.psu.edu/)
  * Supervisor: [Dr. Aron Laszka](https://aronlaszka.com/)
  * Duties included: 
    *  Formulated mathematical models to solve transit optimization based research problems.
    *  Implemented the algorithm and solution approaches for mathematical models.
    *  Published research works in conferences and journals.

* 2018/01 - 2019/07: **Software Engineer**
  * [LSEG Technology (formerly MillenniumIT)](https://www.lseg.com/en)
  * Duties included: 
    * Introduced unit testing for libraries in Post Trade C++ Code.
    * Performed database changes for Post Trade products for Singapore Stock Exchange and validated with Behavior Driven Development (BDD) testing approaches using Java. 
    * Worked on CI/CD of the Post Trade product with Python and Git. 
    * Practiced Agile-based development throughout the entire  period of work.
  
* 2016/07 - 2016/12: **Software Engineering Intern**
  * [WSO<sub>2</sub> Lanka PVT Limited](https://wso2.com/)
  * Duties included: 
    * Implemented alert generation mechanism, which provides email and SMS when a disease spreads wide by analyzing the
      description. 
    * Implemented alert generation mechanism, which could determine the functional state of hospitals (i.e., number
      of beds available, number of Oxygen cylinders available) based on the admission and discharge messages.


Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html %}
  {% endfor %}</ul>

Projects
======
  <ul>{% for post in site.projects reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>


Workshops
======
  <ul>{% for post in site.workshops reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
