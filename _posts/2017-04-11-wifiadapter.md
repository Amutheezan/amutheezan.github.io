---
type: posts
title: Updating Driver for Wifi Adapter in Ubuntu
author: Amutheezan Sivagnanam
category: Tech Issues
date: 2017-04-11
tags:
- ubuntu
- wifiadapter

---

These code blocks are obtained from [Stackoverflow](https://stackoverflow.com), this particular blog post is to emphasize a
little more about the issues related to that.

Since the time I started using an external Wi-Fi Adapter, the Wi-Fi connections were lost even though the symbol said connected,
I looked into several suggestions but they didn't work because I failed to figure out my exact mistake; it was only yesterday that I figured out the mistake, those days when I installed Ubuntu 16.04 I thought it may be due to some issues related to the
particular version, but when I tried through Try Ubuntu it was the same, and finally when I tried with Ubuntu 14.04,
I figured out that the issue was with updating the device driver :smile:.

Check this code (Note this will work for Realtek based Wi-Fi Adapter since in the third line we can see the
phrase ```rtl8192cu-dkms```. So don't try this for other cases :smile:.

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

1.[http://askubuntu.com/questions/663411/in-ubuntu-14-04-why-does-my-internet-connection-keep-disconnecting](http://askubuntu.com/questions/663411/in-ubuntu-14-04-why-does-my-internet-connection-keep-disconnecting)
