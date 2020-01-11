# DengAI: Predicting Disease Spread - A Tale of Two cities

#### **Warning !**

This is a short descriptive post based on our project done for CS4642 Module, Data Mining, and Information Retrieval. These particular wordings are my own words and thus it doesn't be exact same of what I have submitted as final :)

## **Background to data-mining Task**

Dengue fever is causing serious threat to man kind recent days. It is a mosquito-borne disease that occurs in tropical and subtropical parts of the world. In mild cases, symptoms are similar to the flu: fever, rash and muscle, and joint pain. But severe cases are dangerous, and dengue fever can cause severe bleeding, low blood pressure, and even death. Because it is carried by mosquitoes, the transmission dynamics of dengue are related to climate variables such as temperature and precipitation. Although the relationship to climate is complex, a growing number of scientists argue that climate change is likely to produce distributional shifts that will have significant public health implications worldwide.

## **Methodology**

We split our task as mainly four categories and move forward on researching each other with different categories.

### Data Cleaning

This was the first phase of data mining, often data being noisy and inconsistent due to several reasons such as reading issues, missing data, different formats, the different units we should ensure that data should be free of these issues before get being processed for the training or testing. As a part of it we followed the following, In San Juan and Iquitos there are lot of m found and missing values found and they need to be filled for this we followed different strategy time to time to improve the better score

1.  Based on previous Value

This idea was just like drawing a line connecting two available points and calculate the missing points and in this case value is closely related to previous generally

-   Based on Mean Value

This was not effective since it will fill all missing places with the mean of the entire column.

-   Based on Median Value

This was worst than the previous case in most of the features, this fills the missing place with the median of the entire column

-   Based on Regression

This was best out of four since it changes with respect to the time range of weeks.

We also removed the values of columns which has less than 6 features out of all 21 features ( thus in most case it contains the plantation details only other features which are quite correlating are found missing )

### Feature Analysis

Not all feature is actually correlated with the output, so we calculated the Pearson correlation coefficient among with output and find how others are correlated with output. This process carried out separately for San Juan and Iquitos because there are significant differences found with outputs.

I carried the same process for the following occurrences.

1.  Use same correlation common for both cities
2.  Use different correlation for both cities
3.  Use different and shifted for both cities

### Data Normalization

Data normalization is important when different units of the same data are used or when the value ranges differently between data because that may cause false correlation and wrong prediction. We followed different types of Normalization such as

1.  Max Min Normalization
2.  Z Score Normalization

### Regression Techniques

As a final step for predicting values based on the model, we followed regression techniques and obtained different mean absolute error to both San Juan and Iquitos.

1.  Poisson
2.  Negative Binomial
3.  Linear Regression

### Tools Used

During this research, we have used different tools related to data mining.

-   Weka Tool

This has functionalities to handle missing data, finding correlation and predicting based on the models provided. But this is not customized as the user requests generally. So we preferred to use customized.

-   R Language

This was the language commonly used for data mining tasks. We have made use of different libraries such as ```tidy verse```, ```corrplot```, ```magrittr```,```zoo```, ```Rcolorbrewer```, ```gridExtra``` and ```MASS```.

## **Conclusion**

In this project, we proposed an analysis scheme based on the following technique as best out of other techniques. Accordingly for cleaning the data best option was found was using regression with the time, for feature analysis we used features values shifted by three weeks and find the different Pearson correlation values. And for normalization, we found the Z score normalization as the best out of other normalization. Finally, we build the model with eighty percent of train data as train and rest as test data find the mean absolute error to a minimum with continuous iteration. And based on different regression technique we predicted the output and obtained the best score at the point where we used negative binomial regression. checkout https://github.com/Amutheezan/DengAI for our implementation.

### **References**

1. [https://www.gnu.org/software/octave/doc/v4.0.3/Simple-File-I_002fO.html](https://www.gnu.org/software/octave/doc/v4.0.3/Simple-File-I_002fO.html)
2. [https://datascienceplus.com/imputing-missing-data-with-r-mice-package/](https://datascienceplus.com/imputing-missing-data-with-r-mice-package/)
3. [https://www.r-bloggers.com/measuring-persistence-in-a-time-series-application-of-rolling-window-regression/](https://www.r-bloggers.com/measuring-persistence-in-a-time-series-application-of-rolling-window-regression/)
4. [http://www.mathematica-journal.com/2013/06/negative-binomial-regressio](http://www.mathematica-journal.com/2013/06/negative-binomial-regression/)
