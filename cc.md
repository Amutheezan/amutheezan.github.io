# Carbon Component

**Warning !**

The contents are not belongs exactly to me based on blog post and article and search I have made on related topics. The reference I shared at the end can be reliable but It may be outdated. Some Issues I faced during this can be discussed here.

**Maven (Some of my contents are specific to Intelliej Idea)**

Maven is a build tool like ant and gradle, it is IDE independent. In maven projects we will generally have a file “POM.xml” inside each maven project and sub projects. It will contain details about projects, parent projects, dependencies, plugins, repositories and plugin repositories.

-   Project contains mainly groupId, artifactId,ModelVersion,packaging (pom – for generally parental project, bundle,jar – for child type project) and Modules (components inside main project; this was expected to be in order it build.
-   Dependencies (these are jar files) contains groupId,artifactId, and version (this can be hard coded or added by defining the version.) .This will only give classpath of jar file.
-   Plugins is like Dependencies, it will compile and run. unlike dependencies which only give jar files to class path.
-   Repositories these are associated with the dependencies, means the location where we can fetch the dependencies; it contains id,name,layout,url,snapshots→ Enabled
-   PluginRepositories also same as repositories but these are associated with plugins]

**Carbon Component**

![untitled-document](https://amutheezan.files.wordpress.com/2016/09/untitled-document1.jpg)

A sample carbon component

This was a component based on OSGi, It will develop using proper methods to achieve it call. For my case I have refereed it contains three subcategories backend,service-stub and front-end.

Backend will determine the data access layer services and front end will deterimine user interface service and service-stub deal with inter connecting. In my case which I refered, first I need to develop and build maven project for backend and using it’s jar from /target/ folder towards the preferred Server (You can use any WSO2 Server; but this need to be verified) /repository/components/dropins/ then we need to modify the carbon.xml file in /conf/ folder by changing <HideAdminServiceWSDLs> value from true to false. Finally restart the browser and click the link, url (https://localhost:9443)/services/ordermanager?wsdl. Download this file and save it under services-stubs resources as wsdl file. Then based on tutorial continue other stuffs.

**Issue I faced**

Issue I face was when building maven project (based on sample code ) for the backend part of the project.

The POM for org.wso2.carbon:org.wso2.carbon.registry.core:jar:4.2.0 is missing, no dependency information available

This was due because , unlike normal dependencies some dependencies specially related to carbon are required to to be added that can be done by adding following lines to “POM.xml” of back-end. These were specific repositories which need to locate the dependencies related to carbon.

BUT,

This may has some other choices in general.

1.  When declaring the repository it is better to check in google whether those dependencies are available, even though maven by default download dependencies, due to some version error also above error occurs. So it best advice to have a research before including dependencies.
2.  As in previous case for some products maven can't find the repository location we need to specify it using <repository> </repository>, This because of order which maven lookup for dependencies.

Order Maven Look Up Dependencies

-   Local - (It was local computer where user create project, when building a maven project it will copy all dependency jar files to the preferred location by user)
-   Central - (It was maven repository where mostly most of dependencies are available)
-   Remote- (This was some thing which is not reached by any one two, it was some sort of specific for this we need to specify the repository which will direct to dependency to download dependencies / this was same for plugin also where that is pluginrepository)

**GENERAL NOTE**

Include newer version of dependencies and Plugins, specially for remote sites, because they will remove it time to time due to unwanted spaces. So for in our case of using repository of carbon of WSO2, it is advisable to use later version of carbon means 4.4.7, 4.4.9 other than using old version likes 4.2.0.

```xml
<pluginRepositories>
    <pluginRepository>
        <id>wso2.releases</id>
        <name>WSO2 internal Repository</name>
        <url>http://maven.wso2.org/nexus/content/repositories/releases/</url>
        <releases>
            <enabled>true</enabled>
            <updatePolicy>daily</updatePolicy>
            <checksumPolicy>ignore</checksumPolicy>
        </releases>
    </pluginRepository>
    <pluginRepository>
        <id>wso2.snapshots</id>
        <name>Apache Snapshot Repository</name>
        <url>http://maven.wso2.org/nexus/content/repositories/snapshots/</url>
        <snapshots>
            <enabled>true</enabled>
            <updatePolicy>daily</updatePolicy>
        </snapshots>
        <releases>
            <enabled>false</enabled>
        </releases>
    </pluginRepository>
    <pluginRepository>
        <id>wso2-nexus</id>
        <name>WSO2 internal Repository</name>
        <url>http://maven.wso2.org/nexus/content/groups/wso2-public/</url>
        <releases>
            <enabled>true</enabled>
            <updatePolicy>daily</updatePolicy>
            <checksumPolicy>ignore</checksumPolicy>
        </releases>
    </pluginRepository>
</pluginRepositories>
    <dependencies>
        <dependency>
            <groupId>org.wso2.carbon</groupId>
            <artifactId>org.wso2.carbon.registry.core</artifactId>
            <version>4.4.9</version>
        </dependency>
        <dependency>
            <groupId>org.wso2.carbon</groupId>
            <artifactId>org.wso2.carbon.registry.api</artifactId>
            <version>4.4.9</version>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.felix</groupId>
                <artifactId>maven-bundle-plugin</artifactId>
                <extensions>true</extensions>
                <configuration>
                    <instructions>
                        <Bundle-SymbolicName>${pom.artifactId}</Bundle-SymbolicName>
                        <Bundle-Name>${pom.artifactId}</Bundle-Name>
                        <Export-Package>org.wso2.sample.carbon.order.manager.*</Export-Package>
                    </instructions>
                </configuration>
            </plugin>
        </plugins>
    </build>

    <repositories>
        <repository>
            <id>wso2-nexus</id>
            <name>WSO2 internal Repository</name>
            <url>http://maven.wso2.org/nexus/content/groups/wso2-public/</url>
            <releases>
                <enabled>true</enabled>
                <updatePolicy>daily</updatePolicy>
                <checksumPolicy>ignore</checksumPolicy>
            </releases>
        </repository>

        <repository>
            <id>wso2.releases</id>
            <name>WSO2 internal Repository</name>
            <url>http://maven.wso2.org/nexus/content/repositories/releases/</url>
            <releases>
                <enabled>true</enabled>
                <updatePolicy>daily</updatePolicy>
                <checksumPolicy>ignore</checksumPolicy>
            </releases>
        </repository>

        <repository>
            <id>wso2.snapshots</id>
            <name>Apache Snapshot Repository</name>
            <url>http://maven.wso2.org/nexus/content/repositories/snapshots/</url>
            <snapshots>
                <enabled>true</enabled>
                <updatePolicy>daily</updatePolicy>
            </snapshots>
            <releases>
                <enabled>false</enabled>
            </releases>
        </repository>

        <!--for kafka-->
        <repository>
            <id>MarketceteraRepo</id>
            <name>MarketceteraRepoy</name>
            <url>http://repo.marketcetera.org/maven/</url>
        </repository>

        <repository>
            <id>smslib.releases</id>
            <name>smslib Repository</name>
            <url>http://smslib.org/maven2/v3/</url>
            <releases>
                <enabled>true</enabled>
                <updatePolicy>daily</updatePolicy>
                <checksumPolicy>ignore</checksumPolicy>
            </releases>
        </repository>

    </repositories>
<!-- plugin repositories are for to execute, but for this we can use only repositories 
because here giving path to jar file is just enough -->
<!-- org.apache.felix is required for setting up the components related to 
OSGi bundle so, don't forget to add this -->
```
**References**

1.  http://wso2.com/library/tutorials/2014/03/how-to-write-a-wso2-carbon-component/
2.  http://alokayasoya.blogspot.com/2015/02/writing-first-carbon-component.html
3.  https://maven.apache.org/guides/introduction/introduction-to-repositories.html
4.  https://maven.apache.org/guides/introduction/introduction-to-the-pom.html
5.  http://stackoverflow.com/questions/11881663/what-is-the-difference-in-maven-between-dependency-and-plugin-tags-in-pom-xml
6.  http://www.tutorialspoint.com/maven/maven_repositories.htm
