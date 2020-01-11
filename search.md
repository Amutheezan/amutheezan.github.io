# Search Comparator & Apache Lucene

**Warning !**

This content is based on the the issue I faced while doing analyzing with search comparator for queries associated with HL7 message field.(but this is applicable for sample scenarios whether the lucene queries can be used.

Apache Lucene is one of the best Query language to search queries quickly but It will fetch the details from only one table specified by the user. check out [1] for further clarifications.

This blog post is just to show some equivalence values to be denoted for some generic search comparators.

Search Comparator

1.  = (equals) this can be easily expressed by putting ":" instead of "=".
2.  < ,>,<=, >= these is applicable for number types such as Integer, Long and Double. For using this we have to defined the maximum and minimum of the language specific to those types.
    -   For Java it can obtained by "```Long.MAX_Value```" for Maximum long
    -   For Java script we can't obtained specific but we can defined Values obtained from Java. In certain case we can use "Number.Maximum" but that is not specific to any number type.like these we can obtain maximum and minimum and make use them for boundaries
    -   For < , it can be done by "valueType : { MIN_VALUE TO yourValue }", use the "[" bracket for <=.
    -   For >, it can be done vice versa that is "```valueType : { yourValue TO MAX_VALUE }```" , here too use "[" bracket of >=
3.  contains , this can done by adding "*" to the relative data values check [1] for clear explanation regarding this.

References I have Looked in,

1. https://lucene.apache.org/core/2_9_4/queryparsersyntax.html
