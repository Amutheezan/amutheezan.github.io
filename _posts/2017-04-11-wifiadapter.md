---
type: posts
title: Updating Driver for Wifi Adapter in Ubuntu
author: Amutheezan Sivagnanam
category: Tech Issues
tags:
- ubuntu
- wifiadapter
date: 2017-04-11
---

<p class="message" style="color:; background-color:#DB210;border-color:brown;border-style:od">
<strong> Disclaimer !!! </strong>
<br>

These code blocks are obtained from [Stackoverflow](https://stackoverflow.com), this particular blog post to emphasize a little bit more from the issues related to that.

</p>

Since the time I started using external Wifi Adapter, the wifi connections lost even though the symbol says connected, I have looked into several suggestions but that doesn't work because I failed to figure out my exact mistake; Yesterday only I figured out mistake, those days when I installed Ubuntu 16.04 I thought it may be due to some issues related to particular version, but when I tried through try Ubuntu it is same, and Finally when I tried with Ubuntu 14.04; Thereafter I figured out the Issue is with Updating device driver :smile:.

Check this code (Note this will work for Realtek based wifi Adapter since in the third line we can see the phrase ```rtl8192cu-dkms```. So don't try this for other cases :smile:.

#### Ubuntu 14.04

```
sudo add-apt-repository ppa:hanipouspilot/rtlwifi
sudo apt-get update
sudo apt-get install rtl8192cu-dkms linux-firmware
```

#### Ubuntu 16.04

```
sudo add-apt-repository ppa:hanipouspilot/rtlwifi
sudo apt-get update
sudo apt-get install rtl8192eu-dkms 
```

### **References**

1. [ http://askubuntu.com/questions/663411/in-ubuntu-14-04-why-does-my-internet-connection-keep-disconnecting]( http://askubuntu.com/questions/663411/in-ubuntu-14-04-why-does-my-internet-connection-keep-disconnecting)
<!--stackedit_data:
eyJoaXN0b3J5IjpbMjM4MzkwMjQyLDExNDkxMDEyMTksNjg0OT
EyMzEwLDk5NzU2OTY4NiwxMDQ2MDk2NTIsODAwNTY0NzYzLDIw
MjM2MzcyODQsODAwNTY0NzYzLDIwMjM2MzcyODQsODAwNTY0Nz
YzLC0xNjE1MTEwNDE0LC03NjI0NTQ3MTEsLTE2MTUxMTA0MTRd
fQ==
-->