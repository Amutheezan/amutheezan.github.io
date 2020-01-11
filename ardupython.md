# Configure MySQL for Arduino through Python

## **GUIDE IS ONLY FOR WINDOWS**

#### **Warning !**

This content is not my own. It was based on my research made on this topic. So I just share how things have done to achieve this. Not any sample code, Because I copied everything.

### **Steps**

1.  Install XAMPP, open its control panel and start apache and MySQL. and click the admin button, and goto PHPMyAdmin and create this your relevant database to store the data and create the corresponding tables.
2.  Install Python 2.7, and install "```pyserial```", "```MYSQLdb```" libraries.
    1.  Install "```pyserial```", you can download it from [](https://pypi.python.org/packages/47/c9/7802e11ab388ad1539de716649add8bb8ca8bdff660364b3a404f79c27b7/pyserial-2.7.win32.exe)[https://pypi.python.org/pypi/pyserial/2.7#downloads](https://pypi.python.org/pypi/pyserial/2.7#downloads)[.](https://pypi.python.org/pypi/pyserial/2.7) Download the ".exe" file and just run it.
    2.  Install "```MYSQLdb```", you can download it from [https://pypi.python.org/pypi/MySQL-python/1.2.5#downloads](https://pypi.python.org/pypi/MySQL-python/1.2.5#downloads). Download the ".exe" file and just run it
    3.  Then create the required python program to write to the database. for this you need to add two statements "```import serial```" and "```import MysqlDb```".
3.  Install Arduino, and Write the code You want to operate. and to read values from sensor, print the data using "```serial.Println(readData)```" will be acquired by the relevant python file.

### **GENERAL NOTE**

In some cases, if mysqlDb is not figured out by the python include the following line. It is because of two reasons, any other installation of python related products such as anaconda, etc, or you tried the stuff using pip installer(for this you may also have to set path variable).

```python
import sys
sys.path.insert(0, u'/…/…/…/python2.7/site-packages')
```

(I referred this code in [4] for my project, hope this will help you)


### References

1.  [http://stackoverflow.com/questions/28335859/importerror-no-module-named-serial-in-windows-7-python-2-7-and-python-3-3](http://stackoverflow.com/questions/28335859/importerror-no-module-named-serial-in-windows-7-python-2-7-and-python-3-3)
2.  [http://stackoverflow.com/questions/8491111/pyserial-for-python-2-7-2](http://stackoverflow.com/questions/8491111/pyserial-for-python-2-7-2)
3.  [http://www.instructables.com/id/Interface-Arduino-to-MySQL-using-Python/step4/Python-TIEM/](http://www.instructables.com/id/Interface-Arduino-to-MySQL-using-Python/step4/Python-TIEM/)
4.  [https://github.com/surendharreddy/Arduino-MySQL](https://github.com/surendharreddy/Arduino-MySQL) 
