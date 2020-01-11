# Configure MySQL for Arduino through Python

## **GUIDE IS ONLY FOR WINDOWS**

**Warning !**

This content is not my own. It was based on my research made on this topic. So I just share how things done in-order to achieve this.Not any sample code, Because I copied everything.

### **Steps**

1.  Install XAMPP, open it's control panel and start apache and mysql. and click admin button, and goto phpmyadmin and create this your relavent database to store the data and create the corresponding tables.
2.  Install Python 2.7, and install "**pyserial**", "**MYSQLdb**" libraries.
    1.  Install "**pyserial**", you can download it from [](https://pypi.python.org/packages/47/c9/7802e11ab388ad1539de716649add8bb8ca8bdff660364b3a404f79c27b7/pyserial-2.7.win32.exe)[https://pypi.python.org/pypi/pyserial/2.7#downloads](https://pypi.python.org/pypi/pyserial/2.7#downloads)[.](https://pypi.python.org/pypi/pyserial/2.7) Download the ".exe" file and just run it.
    2.  Install "**MYSQLdb**", you can download it from [https://pypi.python.org/pypi/MySQL-python/1.2.5#downloads](https://pypi.python.org/pypi/MySQL-python/1.2.5#downloads). Download the ".exe" file and just run it
    3.  Then create the require python program to write to database. for this you need to add two statements "import serial" and "import MysqlDb".
3.  Install Arduino, and Write the code You want to operate. and to read values form sensor , print the data using "**Serial**.Println(readData);" this will acquired by the relevant python file.

### **GENERAL NOTE**

In some cases if mysqlDb is not figured out by the python include the following line.It is because of two reasons, any other installation of python related products such as anaconda etc, or you tried the stuff using pip installer(for this you may also have to set path variable) .

```python
import sys
sys.path.insert(0, u'/…/…/…/python2.7/site-packages')
```
References :

1.  http://stackoverflow.com/questions/28335859/importerror-no-module-named-serial-in-windows-7-python-2-7-and-python-3-3
2.  http://stackoverflow.com/questions/8491111/pyserial-for-python-2-7-2
3.  http://www.instructables.com/id/Interface-Arduino-to-MySQL-using-Python/step4/Python-TIEM/
4.  https://github.com/surendharreddy/Arduino-MySQL ( this is not my code, I actually referred this code for my project, hope this will help you)
