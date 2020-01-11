# HL7v3 vs FHIR

**Warning !**

This composed content is my own. It was based on my research made on this topic. So I just some basic clarification on similarities and Dissimilarities for my project @ internship.

HL7 Version 3 is based on the RIM model, and FHIR is the new approach which is expected to release NEXT YEAR.Currently a draft is released two years ago for testing the Model.

_Summary on HL7v3 VS FHIR_

**Model :**  
HL7 RIM is the core for v3(ISO also), while FHIR doesn't rely much on it thus it can be develop without knowledge of RIM. But it has features which contains those based on RIM.

**Code :**  
In v3 attributes are controlled by HL7 and in FHIR it is controlled by business meaning example (contact types, status). Both of them make use of valueset but for FHIR valueset is also another data type, thus it can be send as a part of data  
(The same is true of StructureDefinition, Conformance and other meta-level resources.)

**Granularity :**  
v3 divided into 3 main types wrappers, payload, Common Message Element Types (CMET). for reusing existing, but FHIR is divided for making use with "standalone". For v3 we have different different schema for a single data type while FHIR has only single data type

**Design by constraint :**  
It is hard to design an abstract model for a system, specially health care system, we can model to about 80 - 90 percentage, the "80 percent rule" was applied on FHIR, to support atleast 80 percent supportive and others will added based on extension. while v3 is based on domain specific and it becomes less abstract when it move tends to implementer. for here we need to produce each schema and it is not always wire compatible.

**Context conduction :**  
In v3 for an example a report is responsible for a doctor, it will said him as author, and while processing analysis through system it will concern with the particular author, while in FHIR it is vice versa, it will dealt with paitent, not to affect just an id to store.

**Null flavors :**  
It is to notify null in place of missing values, while in FHIR it is only for core requirement

References :

1.  [https://www.hl7.org/fhir/comparison-v3.html](https://www.hl7.org/fhir/comparison-v3.html)
2.  [https://en.wikipedia.org/wiki/Health_Level_7](https://en.wikipedia.org/wiki/Health_Level_7)

2 and 3 are for additional study, it is for comparison of v2 (the most used version and comparatively best fit with FHIR than v3) , CDA (it is best fit in the sense of human readability but limited to only clinical stuffs not financial and others) , CCD (medical summaries of persons ), SPL (information about medicine) and CCOW (to share the user context among application)

Note these CDA, CCD, SPL, CCOW are released along side with v3 and it was expected to improve on specific occasion and also human readability.

Appendices :

Abbreviations.

1.  FHIR - Fast Health Interoperability Resources.
2.  RIM - Reference Information Model
3.  CDA - Clinical Document Architecture
4.  CCD - Continuity Care Document
5.  SPL - Structured Product Labeling
6.  CCOW - Clinical Context Object Markup
