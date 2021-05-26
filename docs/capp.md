---
type: posts
title: Packaging Carbon Applicatiions
author: Amutheezan Sivagnanam

---

#### **Warning !**

CONTENT MAY NOT APPLICABLE NOW !!!

This is based on my internship project. I initially follow the instructions provided in the documentation and online sources to packaging artifacts as carbon applications. But the documents are not completed enough. In this article I describes how I actually achieve the goal.


## **Carbon Applications - CApp**

CApp defines the composite apps containing several artifacts related to both real-time and batch analytics.
It contains following artificats

1.  Event Receivers
2.  Event Streams
3.  Event Publisher
4.  Execution Plans
5.  Event Store
6.  Spark scripts
7.  Gadget
8.  Layout
9.  Dashboard
10.  Data Purging * - Use to purge the data from data store made by event store

We can build the CApp using the ```pom.xml``` file. After builiding the ```CApp``` will be built in ```.car``` format in the ```target``` folder. Then we can deploy ```.car``` file as the Carbon Application at the management console level. This will eventually deploy all the artificats in the ```CApp```

Sample ```build.xml```, and ```pom.xml``` file are shown below

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project name="create-sample-capps" default="zip" basedir=".">

    <property name="project-name" value="${ant.project.name}"/>
    <property name="target-dir" value="target"/>

    **<property name="capp_sample_dir" value="sample"/>**

    <target name="clean">
        <delete dir="${target-dir}"/>
    </target>

    <target name="pre-configure">
        <mkdir dir="${target-dir}"/>
        <copy file="README.txt" todir="${target-dir}"/>
    </target>

    <target name="zip" depends="clean,pre-configure">
 **<zip destfile="${target-dir}/${sample}.car">**
 **<zipfileset dir="${sample}"/>**
 **</zip>**
    </target>

</project>
```

We can add over own property name and value based on our use-cases, capp models. And in the ```zip``` field of ```xml``` file, we provides the location to store the zip file.

```xml
<?xml version="1.0" encoding="utf-8"?>
<project xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://maven.apache.org/POM/4.0.0"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">

    <parent>
        <groupId>org.wso2.das</groupId>
        <artifactId>das-samples</artifactId>
        <version>3.1.1-SNAPSHOT</version>
        <relativePath>../pom.xml</relativePath>
    </parent>

    <modelVersion>4.0.0</modelVersion>
    <artifactId>das-sample-capps</artifactId>
    <name>WSO2 Data Analytics Server - Sample Composite Applications</name>
    <packaging>pom</packaging>

    <build>
        <plugins>
            <plugin>
                <artifactId>maven-clean-plugin</artifactId>
                <version>2.4.1</version>
                <executions>
                    <execution>
                        <id>auto-clean</id>
                        <phase>initialize</phase>
                        <goals>
                            <goal>clean</goal>
                        </goals>
                    </execution>
                </executions>
            </plugin>
            <plugin>
                <artifactId>maven-antrun-plugin</artifactId>
                <version>1.7</version>
                <executions>
                    <execution>
                        <phase>process-resources</phase>
                        <configuration>
                            <target>
                                <ant antfile="build.xml" target="zip"/>
                            </target>
                        </configuration>
                        <goals>
                            <goal>run</goal>
                        </goals>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>
</project>
```

This the ```pom.xml``` file for all capps, you need to build this to get any capps you want(the capps you preferred at the ```build.xml``` file)

###  **NOTE**

To include jaggery-apis with capps we can implement a jaggery controller at the gadget level rather than jaggery apps level, eventually that will helps in deploying capps.

### References

1. [https://docs.wso2.com/display/DAS310/Packaging+Artifacts+as+a+C-App+Archive](https://docs.wso2.com/display/DAS310/Packaging+Artifacts+as+a+C-App+Archive)
2. [http://udarakr.blogspot.com/2016/01/build-carbon-applicationcapp-for-wso2.html](http://udarakr.blogspot.com/2016/01/build-carbon-applicationcapp-for-wso2.html)
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTk0ODYwMzQyMV19
-->