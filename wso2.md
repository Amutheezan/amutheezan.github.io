

# WSO2 INTERNSHIP

## ( July 2016 - December 2016)

This was nearly Based on the Report I wrote for university during Internship, but with some value addition.

> **First Four Weeks of Internship @WSO2**
> 
> **Duration : 25th of July, 2016 to 19th of August, 2016**

First 7 days passed with the orientation and rest passed with the project allocation and related stuffs. First 3 days we had session regarding the culture,infrastructural introduction to the system, and harassment policies. We also had some sort of technical session regarding engineering division of the WSO2. Then we were introduced to WSO2 products starting from carbon architecture. Then we learned about some products API Manager, Data Analytics Server, Enterprise Mobility Manager, IoT Server, ESB Server (also about it’s advancement Integration server which is parrellely developing with ESB- Enterprise Service Bus), Greg.

Then next week we had session about the Project carried out by different teams of the WSO2, and we were given to send 5 preference by the end of the day. And I have send my preferences. And tuesday we had sessions regarding some basic stuff and I was choosen for “HL7 Monitoring Solution” project for the Internship. It was belongs to DAS Team ( Data Analytic Server). And My mentor was, Anjana Fernando. And Inosh Goonawardana. First they instructed me to study about how DAS works and also refer the DAS source code, and build up an Idea on Maven, Ant, and other Build tools, new features of Java8 and Research on the project area.

As part of research I looked at the carbon-mediation regarding the implementation of HL7 by the WSO2 and also I have look into HAPi library which is a Java library for HL7 specially developed for HL7 version 2. I had tried some sample project using the codes available with the help of maven, to improve and ease the study of HL7 and Maven.

I also had some little research and study of Apache Spark, and Siddhi Query Language which was being using in DAS Management console, also researched on H2 Database which is used In database design of Carbon products. From that I get to know when DAS is used for three phase, reactive, interactive and batch processing. Spark is used for batch processing while Siddhi is used for Realtime or reactive process. Here for my project it is expected to be work in interactive.

I then look into HL7 more deeper with WSO2 ESB, HL7.org, HAPi and learned new things related to HL7 data publisher and get an clear Idea on HL7 and My project.

Finally first four weeks ends with Orientation and Research on the Project of HL7 Monitoring Solutions.

**_Problems(silly problems not much big :P :) ) I Encountered :_**

Problem 1:

Description : When trying to build wso2das which was clone from github using command "mvn clean install". It was not builded sucessfully as It has

Solution Applied : So I try it without test using "mvn clean install -Dmaven.skip.test=true" as instructed in Apache Maven. and it works fine.(it was said that still that is in production it may has issues with tests :) )

Problem 2:

Description : When trying some examples provided in HAPi API, I had issue with different version of the HAPi since it recent version(released 4 years ago from today) v26, I mostly used v22, but some of the examples didn't support with v22, as they doesn't contain it.

Solution Applied: So I try it with v24 for those cases, in general v21 and v24 looks smiliar but v22 is bit different with different structure of methods and stuffs.

[https://github.com/Amutheezan/HapiTry](https://github.com/Amutheezan/HapiTry) this is a copied version of original examples provided by the [HAPi](http://hl7api.sourceforge.net/), for ease of access and "it is hard to get the code in normal, as line numbers also included, i formatted the code and uploaded it into github"

Note :- Above codes are not mine, :)

Problem 3:

Don't get angry for again to post a silly problem, but It wasted a day, may be I am lazy or much interested some how this will help people like me.

Description :

When working with WSO2 ESB 4.8.1, when I download and extract it from net and try "sh /bin/wso2server.sh" it successfully loads the server but It doesn't link to Management console of ESB. and Also a warning regarding setting up CARBON HOME also find. stating that "it requires java version 1.6 or 1.7". It because I have customized the JAVA_HOME and set PATH environmental variable for Java version 1.8.

Solution :

So I replaced PATH and JAVA_HOME variable in ".bashrc" by redirecting to earlier version of Java and It worked fine.

A Contradictory Fact : though ESB 4.6.0 which is lower version than that of ESB 4.8.1 works fine with this Error mention in description. If anyone who exact answer please tell me in comments :). It will be helpful for me.

**_References I looked In,_**

1.  [http://hl7api.sourceforge.net/](http://hl7api.sourceforge.net/)
2.  [http://www.hl7.org/implement/standards/](http://www.hl7.org/implement/standards/)
3.  and Generic Google Search on Each Unknown Phrases and Words.

See You In Next Post With More Stories and Problems with Solutions :) :P

> **2nd Four Weeks of Internship @WSO2**  
> **Duration : 22nd of August, 2016 to 15th of September, 2016**

This four weeks just another new steps, in this phase I mainly deal with two stuffs one is Configuring HL7 Transport with WSO2 Products Namely BAM – Business Activity Monitor and DAS – Data Analytic Server. I have already write enough about Configuring HL7 Transport in my blog post. Second stuff is comparing existing Monitoring Solutions for this I refered few monitoring solution and compare it with BAM. Actually In BAM, by deploying an HL7 toolbox we can do HL7 monitoring through, BAM’s Message Console Dashboard.

Checkout these links for things I have done during this 4 weeks,

1.  https://amutheezan.wordpress.com/2016/09/09/configuring-hl7-in-wso2-das/ - This is related to first stuff, this explains actually how I spend my first 3 weeks to configure the HL7
2.  https://amutheezan.wordpress.com/2016/09/13/some-fact-about-hl7-monitoring-solutions/ - This is related to second stuff, this shows about different HL7 monitoring solution and its features.
3.  https://amutheezan.wordpress.com/2016/09/12/hl7v3-vs-fhir/ - It is non relavent but an essential additional research on second stuff, to get clarity over hl7v2,v3 and FHIR.  
    So by this I conclude this Report. I try to include non technical contents which is not shared in my blog in future to Improve the contents.

> **3rd Four Weeks of Internship @WSO2**
> 
> **Duration : 19th of September, 2016 to 14th of October, 2016**

These four weeks are actually I was really deep into the HL7 Monitoring Solution project. First as a continuation to last week I go on with design review for the new HL7 Monitoring Solution for DAS, and by the end of week I get into the project. As the first part of development I start working with modifying Exisiting HL7 Data publisher. For this I have first look at two repositories Carbon-Analytics and Carbon-Analytics-Common of wso2. Then get an basic Idea of how to create an Event stream service.

Then as next step I go through on building a simple carbon component to get how an OSGI component can be created using wso2 carbon. Further details of how to create a first Carbon Components are attached in the references Sections. Just go through it If you like to deal with. Then I get into the project, first I cloned carbon-meditation repository where does HL7 datapublisher existed and started working on modifiy the HL7EventPublisher Class which used to publish the data from ESB to DAS.

Then By the end of the 4th Week I was able to publish the data from ESB to DAS also I added up the ACK publishing which is not previously included in HL7DataPublisher. And at the end of 4th week I have started looking at designing the HL7 Dashboard, spark queries to get results for HL7 Dashboard and other related stuff to build a custom HL7 Dashboard.

**_Problems and Issues I Encountered :_**

**Adding HL7 Transport to ESB.**

Problem Description : For this project I need to deal with SNAPSHOT versions of ESB and Carbon-mediation. Unlike the normal version, here we need to manually install the HL7 Feature.[in real practice for a release version, we can add features by adding the relevant repository whether in local or online]. So I couldn't able to find how to attach the feature and I tried some thing based on my experiences. Like adding patches to installed old version HL7 Feature,but this was wrong because it won't accept current feature. Then I locally install HL7 Feature by building HL7 component and HL7 feature which will store in local maven /.m2/repositories/. and get the local p2 repo using carbon-features-repository. and Using p2 repo install HL7 feature. This was quite long and hard path. Actually this done during the end release.

Problem Solutions : Build the component and feature, and Just extract the zip in feature part and copy all files to //repository/components/dropins/ this will add the relavent jar files to //repository/components/plugins/ when we restart the ESB.

**Creating first Carbon Component**

Since I have already described the issues faced in separate blog post; I didn't share it here. Go through that for references [1]. It was basically with dependencies and repository definition in the pom.xml file.

_**New things I learnt :**_

**Working with EventStreamService**

Just before get into what it is, just thing about a json file, basically it contains set of details which identifiers, here a stream is defined in json format, thus we can pass a set of data belongs to one object using json. That concept is the basic for stream (it was not the exact definition, just think in that way for ease of understanding) so here we are passing a set of data using a formatted json file through publishing service of HL7EventPublisher class. As based on previous API it creates an event with the contents/attributes relevant to json file and publish using datapublisher class, but here by change of new API we are creating an eventstreamservice and publish Instead.

**Working with Tenant ID**

Basically for every PrivilagedCarbonContext there exists a tenant Id, based on application it can be predefined or received from parent. For HL7 it is defined from parent so we need to get the parent tenant id and use it for the child. We can't manually hard code or set the the values for tenant ID

**_Events I participated :_**

I participated in Smart@ss quiz under Wild Boars Team 1, with Janaka, Anajana and other 7 People of WSO2. It was a quite challenging quiz. It contains five rounds with questions from current affairs, sports, entertainment, countries, foods.We got 5 out of 8. Any way I enjoyed the events. :) :P :D .

References :

My Blog Links :

1.  https://amutheezan.wordpress.com/2016/09/28/issues-i-faced-when-building-first-carbon-component/
2.  https://amutheezan.wordpress.com/2016/10/06/installing-a-developing-feature/

Other Links :

1.  http://wso2.com/library/tutorials/2014/03/how-to-write-a-wso2-carbon-component/
2.  http://alokayasoya.blogspot.com/2015/02/writing-first-carbon-component.html
3.  http://blog.kasunbg.org/2013/04/generating-wso2-p2-repo-for-features.html

> **4th Four Weeks of Internship @WSO2**
> 
> **Duration : 17th of October, 2016 to 11th of November, 2016**

These four weeks I mainly worked towards designing dashboards, the third and last milestone of my project. I had follow following order while developing the dashboard, first prepare the spark scripts required to display the analytics related to the HL7. Then I develop the dashboard with existing gadget using gadget generation wizard.Finally I started work into the custom dashboard. For all I tried following the ESB-analytics which has nearly similar aspects like my scenario case. As per end of these four weeks I have merely completed the dashboard's summary parts with some fixed regarding chart zooming and charts values are inversely displaying. And working on the search part based on the bam's management console.

_**Issues I faced :**_

**ARBITRARY ATTRIBUTES**

These are attributes which used in Event Stream, in addition to usual meta, correlation and payload data.These are specific for different scenarios, for HL7 there are more than 600 Arbitrary attributes can be obtained. In DAS we can obtain this through Event Stream, store in event store and used for analysis with Spark Scripts. When using this specific HL7 arbitrary attributes I faced issues in SELECT and INSERT in queries. For clear references look the below link.

https://amutheezan.wordpress.com/2016/10/26/issues-analysing-with-an-hl7-arbitrary-attribute/

**_Things I learned :_**

**INCREMENTAL PARAMETERS**

When doing analysis with Spark Scripts in WSO2 DAS, We may need to do analysis based on repetitive time, means periodically analysis data to get historical stats like PER MINUTE, PER HOUR, PER DAY, PER MONTH analysis for this we may need to go through out all data, to avoid that we can add up incremental parameter with , WINDOW and TIMES. Consider If you want to analysis data by PER HOUR using PER MINUTE table, we can set the incremental parameter in PERMINUTE as the table which contain PERMINUTE based analysis contents, and add Window, basically windows are one step above level of time unit, for this case it is HOUR. and third parameter is optional which is number of records we need to look back. By default it is 1 if we not set. It means it will go to last record of the particular table (PERHOUR) and update it based on PERMINUTE table by taking the values which is after the set Incremental Parameter Value. and Do analysis. By this redundant data analysis is stopped, and this will increase the efficiency of data analysis in large block of data.

**JAGGERY CONTROLLER**

[NOTE THIS NOT DEPRECIATED BUT I USED IT JUST AS CONTROLLER, INSTEAD OF THIS THEY ARE NOW USING UUF]

Basically the javascripts executing in the client side can't fetch the data from the server, so they basically give and ajax request which will direct to the url of jaggery controllers. (generally for purpose of dashboards these Jaggery controllers are located in /repository/deployment/server/jaggeryapps/portal/controllers/apis/ and when we using for url we often use "portal/apis/nameofjaggerycontroller" by this we can give ajax request and which will direct to the jaggerycontroller in server side, which get the request and fetch the data from datastore based on the requirement by the ajax request and give the the response back to client, then client side callback function will execute actions on received response base on its function in the case of success, and incase of failure it will direct to error case function. This how a jaggery controller is used to fetch the details from database in server by client side application.

**_Reference I looked in,_**

1.  http://sachith.withana.net

> **5th Four Weeks of Internship @WSO2**
> 
> **Duration : 14th of November, 2016 to 9th of December, 2016**

This four week I mainly focused on last parts of my projects, completing the search part and moving into the notification part. I have made the search part as look a like the one that existed in the Business Activity Manager's Message Console. I also make it work efficiently for dashboard level.

Then I move into notification part first I have looked into the real time analytics parts such as siddhi queries and execution plans. I have look at the documentation and get a clear idea on that. Then I have meeting with mentors regarding implementing things and based on that out of 6 ideas proposed they chooses two scenarios since it become worth while doing. And I started doing that.

In the mean time I also focused on the packaging artifacts as CApp. Then I started designing dashboard first design dashboard to display the alerts which are persisted in event store. Then I focused on developing Interactive Map using leaflet javascript library and Also I improved it to display popup. There after I have look into the notification of SMS and Email Alerts using Alert Setting.

**_Issues and Things I Learnt :_**

**Arbitrary Attribute**

We can't directly use arbitrary attribute as it is commonly available as arbitrary data map. The way to get specific arbitrary attribute is,

cast(map:get(ArbitraryMap,'**relatedfield/key**'), '**typeOfKey**') as **fieldName**, here **typeOfKey** can be string,long,int,double. **fieldName** is used for ease of access.

**cast(map:get(ArbitraryMap,'relatedfield/key'), 'typeOfKey')** can be used to filter the input streams based on our requirement.

**Dealing with jaggery controller with capp**

We can use jaggery controller at dashboard rather than deploying it at /portal/controllers/apis when we are deploying only capp without deploying it as a features.

**Template manager**

This used for complex event processing related stuffs mainly, it is best practise for making the custom publisher, executionplans, event store, eventstream.

**_Look at this, for some more information about thing I have look at._**

1.  https://amutheezan.wordpress.com/2016/12/01/packaging-artifacts-as-capp/
2.  https://amutheezan.wordpress.com/2016/11/23/some-useful-libraries-with-jquery/
3.  https://amutheezan.wordpress.com/2016/11/22/working-with-datatables/
4.  https://amutheezan.wordpress.com/2016/11/19/make-use-of-apache-lucene/

> **Last Weeks of Internship @WSO2**
> 
> **Duration : 14th of December, 2016 to 23rd of December, 2016**

This was nearly the ending of my internship, since our company has annual leave starting from 23rd December, 2016 for Christmas and New Year; We had only two out of three weeks to complete our overall internship.

For my project I have nearly completed the project, So I had code reviews based on two code reviews I have corrected and further completed the progress on my project.

**Code Review - 1 Notes**

1.  Sort the records which belongs to the same activity id.

Thus when we are doing search based on activity id we will get lots of data, but that should be in the order of they received not in improper order, then only it will be easy to understand by user.

2.  Make alert by checking the count in grid, instead of distance calculating with window.
3.  Change the execution plan of wait time alerts to remove the matched entries, thus using "every".
4.  Move the search messages button to bottom of the page, also the add attribute, clear all buttons.

This is because to give a clear picture, else whenever the user adds new attribute he should scroll back to top to click the search.

5.  Max entries text box should be replaced with fixed drop down box (1000, 10000, all. etc. records)
6.  Meaning of the acronyms - ADT, ORU, ORM. etc.
7.  Graph should be in correct axis for line chart.

I have able to correct the 3,4,5,6,7 as instructed since these are minor error compares to the first and second.

I modified the execution plan for 2, but it not exactly makes sense to real case scenario I actually count the number of disease occurrence based on integer value of latitude longitude boundary, but that should be actually something meaningful to make it efficient.

First one is not much important, and since I had another review on the next day, I was unable to complete the correction before the second code review, compare to the use case it is not much important.

**Code Review - 2 Notes**

Execution plan for disease Alerting

1.  Use meaningful names for stream names
2.  Remove grouping by the city
3.  Analyze the description of the disease and then come up with the disease(s) (probably using Natural Language Processing (NLP))
4.  Refactor and refine the block allocation mechanism (removing the 0.5 and using a proper roundup method)
5.  Add a snapshot saving mechanism to disease count window

I have corrected (1) and (2), and (3) one is may be look at in the improvement state since current time is not enough to analysis. (4) I adjusted little bit but bit more to improve in it. (5) can be done by configuring <SERVER_HOME>/repository/conf/eventprocessor.xml file

Spark script

1.  Remove unnecessary redundant tables.

I tried to remove the redundant tables, but due to lack of time I keep it but remove redundant field like as subtype in all analysis. Also format the code to be in a single style.

Dashboard

1.  Allow the user to edit the lucene query in the search page
2.  Have a way to format the HL7 message in the search page

I have done 1st part to work fine, and 2 one was said to be improvement in feature release.

Event Publisher

1.  Update the HL7 transport code to handle the message direction

This should be merged/reanalysis again to fix some issues, then only message direction will work fine.

And finally after the internship, I explained to the person who is continue the project after me and explained to him.

Finally over all I had a good Internship and gained following technical knowleges

-   Creating OSGi component
-   Designing Dashboards
-   Working with JQuery and Some JavaScript Library
-   Spark and Siddhi
