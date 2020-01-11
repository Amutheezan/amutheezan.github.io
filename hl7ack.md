# HL7 ACK
#### **Warning !**

This content is based on my study on the topic, by googling and this is just to share some thoughts and views about the topic. Using this for official purposes is at your own risk.

Just start the topic with the question, why we need **ACK** Message ?. The main and important purpose is get to know about whether a message is delivered or not to the receiving party. Regardless of security issue, if we consider a basic scenario of successful transmission we will receive an ACK back once we send a message successfully to receiver. That is the indication of successful Message.

For HL7 also ACK are important to notify the sender, whether the message is reached successfully. In basic scenarios the system that receive may not have capability to create proper ACK, because it can accept the format, but can't generate the ACK or in other case system can't accept the format. For these scenarios there is a Custom ACK to notify the sender regards the issue by receiver.Other wise it is hard to communicate with HL7 Messages.

Generally ACK are belongs to 3 types.

1.  Accept : the receiver accept the type of message, this is based on the logic provided in different different sub system present in medical organization as, laboraratory, payment system, doctors system. eg : a laboratory will accept ORU message if it is in proper format, while cashier may reject ORU related to lab. in this case AR/CR type acknowledgement will come.
2.  Reject : this is by names we can understand the particular message is not accepted by the receiver, since it is out of logic or not in the format provided.
3.  Error : this was occurred by Application error generally due to some issues in decoding the message due to the wrong format. here though they can able to accept message but they can't able to decode may because of version, type issue they will raise an Application error and return ACK with AE,CE type.

In addition,

these ACK are in normal mode or enhanced mode, thus normal mode ACKs are AA,AR,AE and enhanced mode ACKs ARE CA,CR,CE.In normal mode the field 15 and 16 with contains about message and application acknowledgement type is being null, where as in enhance mode one of this can be null not too.

### References

1.  https://catalyze.io/learn/hl7-202-the-hl7-ack-acknowledgement-message
2.  https://www.hl7.org/documentcenter/public_temp_088CF1E1-1C23-BA17-0C4227727B2BEC42/wg/conf/HL7MSH.htm
