# Intergrated Computer Engineering Stream

## **First Day : 2014.10.27**

That day, Actually I have no idea about this "ICE" rather than the things heard from mentoring session and from seniors.But Unlike I worried, it was a very pleasant class that day, just listening what I am hearing spending that 2 hours with my own thoughts. And that how it ended up finally but may be that was not a good day of start but I feel lucky when it comes to the End of semester :). Nothing is Strange at Final : Everything is Strange at Beginning. A quite enough philosophy we are following years and years :P :)

## **Ideas and Concepts**

I get some basic Idea about the stuffs. Specially in Object Oriented Programming and Embedded System Programming. I divide those stuffs into categories and I will share the Experience.

#### Object Oriented Programming (OOPS :P :) )

It was quite similar we just concern about some practical real-time scenarios unlike the typical examples provided. It was grateful to have such a good professor to nicely explain all the principles in effective way to understand by poor kids like me. I really loved way of teaching. Initially when I start studying class it looks like to strange because most of the stuffs are new to me. but later on teaching with proper examples, and practice questions help me to improve on my OOPS skills. :) :P

#### Embedded Programming

This was strange at beginning because actually I have no idea till I studied deeply in coming semesters. I will share the experience regarding that more deeply in the related parts. Keep Smiling :) .

#### **Development and Improvement**

Development Deals with Object Oriented Software Development, Embedded Databases and Embedded Networks, while improvement Deals with Industrial Computer Engineering and Software Engineering.

Development, this was though said to embedded one, the basic contents were explained with references to the generic one (OOPS). we were taught examples related to real-time world, but we have different way of representation the same thing found in OOAD for our Embedded Stuffs.

Design Pattern, we all know there are 3 categories of Design pattern, we gained a better Idea over these 3 kind specially with Real-time examples specially with Singleton, Observer, Abstract Factory, Builder, Proxy etc. This was quite Interesting part in development in addition to generic study about design stuffs with different diagrams at 4 phase of software development under Unified Process.

When Comes to Improvement, we need to maintain proper back-end, so we had studied about this during the OOSD time as an initial setup for our 3rd semester project. and later for next semester we had a deep study on it. There we studied deeply on Normal databases, and had some rough idea on embedded database (these are actually inbuilt within application, no central server connection, and need some configuration to deal with central synchronization).

And Embedded Networks it deals with Communication types Serial (SPI,I2C) and Parallel. then we learnt about Model Based Design, Fault Hypothesis, Uncertainty, Real time features ( specifically OS implementation in real-time systems) as a second phase study of OOSD and third phase of PESP/ESD.

This is just and over view on the things I have learnt. Specified Topics for Some for My favorites will be published soon.

#### **Instrumentation Con-Trolls**

Apart from last two topics of discussed above, this is totally different. Actually I had a undergone to quite learning process during this period of ICE, semester 5. Actually end of semester :P :).I had learned two subjects, one is control system and another is instrumentation.

Control System means generally a feedback system that use to enhance the system performance by proper feedback of the values required. For ease of studies these are deal with S - Domain regardless of usual time Domain system.

General Open Loop System : Y = P X .where X is Input, Y is Output and P is Process.

In case of Feedback it will change into, Y = XP / (1 + P) if it has a function F then 1 will replace with F, if it has control like PID Control it will multiply by the control factor C and also P is replaced by PC , thus final Y = XPC / (F +PC). This is the one word summary of control system. basically it doesn't deal with MATHS it deals with physical entities...

PID Control : Proportional (Kp) Integral (Ki) Deferential (Kd), This has same meaning like as maths, this applies effectively to get control values.

Examples : - To gain necessary speed we can Apply proportional control, which proportionally increase the speed and let us to get into reference speed. but to stop at particular distance we can't exactly stop proportionally for that case we need a differential control. and to have a better drive in all case we need integral control.

If error function is e then result out after PID control will be,

U = Kp.e + Ki. Intgration(e) + Kd.Deferentiation(e). Here U and e belongs to s domain.

Phase and Gain Margin these are two factors that determine the stability of the system the system which goes out of these will be unstable and between gain and phase is little bit at normal and before Gain is best region.

##### Fun with PLC

A quite Interesting think I have learnt during the 5th Semester in the Module CS3332 : Industrial Instrumentation Control is PLC Programming. Here I have express my experience specialized to that and Problems I encountered regarding that.

Note this just my writing, don't rely on this for official conduct. This may be right or wrong.

PLC Programming can be done with different methodologies.

1.  Ladder Program
2.  Structured Text
3.  Functional Block Diagram
4.  Instruction List

Reference : http://www.ehow.com/list_7155812_plc-programming-methods.html

For us we were tried to get familiar with Ladder Program which was quite easy at all, just drag and drop GUI techniques, but for big level of application it will be quite difficult thus for each and every output required we need a lengthily ladder while an instruction list or structured text can easily achieved with few lines. So ladder is not good enough at all places.

##### Ladder Programming

It is generally based on components with GUI demonstration and for executing each out put one line of ladder is required and set of lines will called as a program and at the start and end it will have to stop -| slashes like this and finally it will look like ladder that why they called it as Ladder program, not sure I just heard as so :P :) .

Tools Required for Ladder Programming : XCP Program tool and XC3- PLC can be used to do practicals efficiently with Ladder Programming.

These are just some basic stuffs, if time supports I will share ideas deeply from what I learned. :P :)

[Project Records](https://amutheezan.files.wordpress.com/2016/08/projects.pdf)
