# Configuring HL7 in WSO2 DAS

**Warning !**

Some of It's contents may subjected to change, I will update on it until I am actively working on it. Because some parts work on manual stuff which may be corrected/ modified on future release don't bother them at all, If you had same issue just follow else leave it have fun, happy coding :) :P

Just forget about the heading, before DAS implemented there was BAM used in place of DAS, both of them have some similarities but lot of difference in their features. So Before going to configure with DAS first we need to try it with BAM. Because for BAM, the things are already run and we need to setup and deploy stuffs no works with coding :P :).

**SECTION : 01**

**Configuring With ESB and BAM.**

**Products required :-ESB 4.8.1/4.9.0 (latest the best, but don't try with 5.0.0)** **and BAM 2.5.0 (last of bam).**

References : -

1.  [https://docs.wso2.com/display/ESB490/Installing+the+HL7+Transport](https://docs.wso2.com/display/ESB490/Installing+the+HL7+Transport)
2.  [https://docs.wso2.com/display/BAM250/Setting+up+HL7+Data+Agent](https://docs.wso2.com/display/BAM250/Setting+up+HL7+Data+Agent)

I had No clear idea on how these message passes at the beginning, just an rough Idea I had so I followed the documentation available in WSO2 ESB and BAM.

1.  First I installed the Axis2 Transport HL7, in ESB with the help of documentations.
2.  Then I enable the HL7 transport, By editing

<ESB-HOME>/repository/conf/axis2/axis2.xml file. as shown in documentation. That is enabling related transport builder and formatter which used when receiving HL7 message and format it to XML to processing and convert back to original form using builder. Next to a transport listener and receivers. these four are basically disabled in the ESB, we need to enable once we Install HL7 transport.

Don't enable before Installing it will result it error :) :D. Hope you guys have understand what I meant.

**NOTES ON ERRORS I MADE**

When doing step 2 for my first try I mistakenly included the parameters for service in axis2.xml file, and with the help of Malith aiyaa, I correct it and put it into the proxy service I have edited from the one available in Documentation.

3. Create Proxy Service

For Creating a Customproxy Service, In the main tab of ESB management console I clicked the proxy service, then choose custom proxy and there after in editor view, I used the code available in documentation, and edited it to fit to work correctly.

ssl,tcp – this address need to be edited based on the configuration of offset of DAS Server related ssl, tcp, generally it will be avilable as https://localhost:9712+offset/ and http://localhost:9612+offset/

**GENERAL NOTE**

Offset Can be configured in <WSO2ANYSERVERHOME>/repository/conf/carbon.xml file just need to change value for <offset></offset> tag with suitable values without conflict with each other. Other wise it we can’t run two servers at same time.

Then it is done with ESB,

NEXT,

We need to configure BAM, it is not actually configure just deploy carbon toolbox for hl7 which is available in <BAM-HOME>/samples/toolboxes/hl7.tbox. And then goto message console dash board and select bam_hl7_data_event_store:1.0.0. and choose the choices for the search result and just search values.

**FINAL NOTE FOR THIS SECTION**

I didn't add much things deeply because you can access these this directly from the WSO2 ESB and BAM documentation. I also put reference in the top of post, Just look at it if you have any additional queries.(such as , how to deploy toolbox,...)

**SECTION : 02**

_**Finally With ESB 4.9.0 and DAS**_

Product required:ESB 4.9.0 and DAS 3.1.0 (not final version)

For this we don’t have any changes in ESB Side, just we need to edit proxy service parameter values to fit the offset of DAS server.

In DAS we need to create a stream named as bam_hl7_data_event_store:1.0.0, using the json file available in BAM, toolbox (when we extract hl7.tbox, it opens to a folder called streamDefn, inside that particular json file can be obtained). Then we need to create a receiver based on the streams. Then goto Data Explorer and check the result.

If you tried 1, 2 you won’t get any result set, there is some more things to setup. For this we additionally use HAPi Test Panel which will send HL7 Message to ESB which has port 9292 opened at ESB, then using proxy service it will sent details to “hl7acceptor”.( this should be initialized by goto <ESB-HOME>/samples/axis2Client/ and try ant hl7accpetor, after replacing an custom build.xml file.) . Then the proxy service will publish the data in,out respectively to BAM or ESB based on configuration you made, and you can observe the result. For DAS, we need to Modify stream, in addition to the given json file by adding persistent events which we required to view.

**SPECIAL NOTES**

For Real Case, we need to develop a capps(carbon applications) which should be deployed in DAS and do all these stuffs related to streams and data exploring.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<proxy xmlns="http://ws.apache.org/ns/synapse"
 name="hl7testproxy"
 transports="https,http,hl7"
 statistics="enable"
 trace="enable"
 startOnLoad="true">
 <target>
 <inSequence>
 <log level="full"/>
 </inSequence>
 <outSequence>
 <log level="full"/>
 <send/>
 </outSequence>
 <endpoint name="endpoint_urn_uuid_9CB8D06C91A1E996796270828144799-1418795938">
 <address uri="hl7://localhost:9988"/>
 </endpoint>
 </target>
 <parameter name="transport.hl7.PublisherServerUsername">admin</parameter>
 <parameter name="transport.hl7.PublisherServerPassword">admin</parameter>
 <parameter name="transport.hl7.PublisherEnable">true</parameter>
 <parameter name="transport.hl7.PublisherServerUrl">tcp://10.100.4.201:7611+offset</parameter>
 <parameter name="transport.hl7.PublisherSecureServerUrl">ssl://10.100.4.201:7711+offset</parameter>
 <parameter name="serviceType">proxy</parameter>
 <parameter name="transport.hl7.Port">9292</parameter>
 <parameter name="transport.hl7.ValidateMessage">true</parameter>
 <description/>
</proxy>
```
Proxy Service for ESB to DAS/BAM .(offset can be the values of offset for DAS/BAM as of carbon.xml file)

```json
{
        "name": "bam_hl7_data_publisher_store",
        "version": "1.0.0",
        "nickName": "",
        "description": "",
        "metaData": [
        {
        "name": "host",
        "type": "STRING"
        },
        {
        "name": "server_name",
        "type": "STRING"
        }
        ],
        "correlationData": [
        {
        "name": "activity_id",
        "type": "STRING"
        }
        ],
        "payloadData": [
        {
        "name": "content",
        "type": "STRING"
        },
        {
        "name": "type",
        "type": "STRING"
        },
        {
        "name": "timestamp",
        "type": "LONG"
        },
        {
        "name": "message_direction",
        "type": "STRING"
        },
        {
        "name": "service_name",
        "type": "STRING"
        },
        {
        "name": "operation_name",
        "type": "STRING"
        },
        {
        "name": "status",
        "type": "STRING"
        }
        ]
  }
```
JSON file correspondence to bam_hl7_data_event_store:1.0.0, No modification, I just included this here for ease of Use.

Don’t get wraps, it not end with here, For me since ESB 5.0.0 has released I need to configure with that too. There comes several issues and problems.

Moving to a new section,

**SECTION : 03**

**Configuring HL7 Publishing in DAS with ESB 5.0.0**

Problem No 01:- Unable to Deploy Proxy service which is exactly same as the one I added above, it causes due to the issue in the version of Business Adaptor HL7 I install ed, for this I locally create a repo and add the feature connection worked fine after I was success fully deployed, but there comes another problem.

**ERROR LOG**

```java
[2016-09-07 10:55:51,716] ERROR - HL7TransportListener Unexpected error when configuring service hl7testproxy for the HL7 transport. It will be disabled for this transport and marked as faulty....
```
Problem No 02 : This is occurred when I am sending message through HAPi Test Panel. For this since no solutions available right now I need to patch the 4.6.6 version to resolve issues, It occurs because of the issue of using bam related instead of das.

**ERROR LOG**
```java
[2016-09-09 09:22:46,573] ERROR - ApplicationRouterImpl Attempting to send error message to remote system.
```
To resolve this generally need to wait for next version or a patch... For manually do stuffs..(Below parts are based on Jagath Srisikumara Mentoring)

1.  Clone the repository [https://github.com/wso2/carbon-mediation/tree/v4.6.6](https://github.com/wso2/carbon-mediation/tree/v4.6.6)
2.  goto the related location where error occurs,
```java
Caused by: java.lang.NoClassDefFoundError: org/wso2/carbon/bam/data/publisher/util/PublisherUtil
        at org.wso2.carbon.business.messaging.hl7.common.data.conf.HL7MessagePublisherConfig.createMessage(HL7MessagePublisherConfig.java:55)
```
then edit the file named HL7MessagePublisherConfig.java by

Go to <dir>/component/business-adaptors/hl7/org.wso2.carbon.business.messaging.hl7.common/

main/java/org/wso2/carbon/business/messaging/hl7/common/data/conf/ and edit HL7MessagePublisherConfig.java file, by replacing bam by das

that is include import org.wso2.carbon.das.data.publisher.util.PublisherUtil; instead of import org.wso2.carbon.bam.data.publisher.util.PublisherUtil;

then edit the pom.xml related to <dir>/component/business-adaptors/hl7/org.wso2.carbon.business.messaging.hl7.common/

by adding dependency for das
```xml
<dependency>
    <groupId>org.wso2.carbon.mediation</groupId>
    <artifactId>org.wso2.carbon.das.data.publisher.util</artifactId>
</dependency>
```
**NOTES ON ERRORS I MADE**

Small Issue You get If you blindly renaming without any Idea, thus just change das from bam will result in version error,when you build the project so beware of it.

[ERROR] The project 
```java
org.wso2.carbon.mediation:org.wso2.carbon.business.messaging.hl7.common:4.6.6(/home/amuthu/Desktop/carbon-mediation-4.6.6/components/business-adaptors/hl7/org.wso2.carbon.business.messaging.hl7.common/pom.xml)has 1 error
[ERROR] 'dependencies.dependency.version' for org.wso2.carbon:org.wso2.carbon.das.data.publisher.util:jar is missing.@ line 82, column 21
```
In the clone repository, on the POM related to Replace

```xml
<dependency>
    <groupId>org.wso2.carbon</groupId>
    <artifactId>org.wso2.carbon.das.data.publisher.util</artifactId>
</dependency>
```
with

```xml
<dependency>
    <groupId>org.wso2.carbon.mediation</groupId>
    <artifactId>org.wso2.carbon.das.data.publisher.util</artifactId>
</dependency>
```

Because groupId has also changed, you can check it with parent POM file.

And Finally HL7 Configured With ESB 5.0.0 and DAS 3.1.0.

**CONCLUSIVE NOTES**

Working with Patches.

For this process we need to Setup HL7 Transport, generally in ESB management console. we add features using local repository or repository from external link. Some time for latest releases the features from carbon mediation not added/ missed while adding. This can be done by location repository locally.

We need patches when we need to give minor change/update to releases that are generally located in  
```<PRODUCT-HOME>/repository/component/patches/```, here we need to create repository which containing patches for our products. So we create a folder named as **patchxxxx** where **xxxx** is a number which is greater than last patch, if no patch found we can use **1111** or any values, but **NOT** **0000** because it is the default patch and it define the initial release. after successfully put the patches. we have to restart the server. and it will run following lines in terminal which is ensure the patch is added and working. Other wise we need to check.
```
[2016-09-09 16:58:32,144]  INFO {org.wso2.carbon.server.extensions.PatchInstaller} -  Patch changes detected
[2016-09-09 16:58:38,550]  INFO {org.wso2.carbon.server.util.PatchUtils.console} -  Backed up plugins to patch0000
```
