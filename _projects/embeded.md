---
layout: works-single

# preview details
title: "Neural Network in Embedded Systems"
category: Deep Learning, Embedded Systems
category_slug: deeplearning
image: assets/img/projects/embed_cover.png
short: Neural Network in Embedded Systems

# full details
full_image: assets/img/projects/embed_cover.png
preview_link: https://github.com/Khamies/Neural-Network-in-Embedded-Systems
info:
  - label: Project Description
    value: This Project aims to test the computation efficiency of the feed forward Neural Network (NN) algorithm in Embedded System using standard datasets.

  - label: Tags
    value: C, embedded-systems
    
  - label: Year
    value: 2017


---

## Neural Network in Embedded Systems

This Project part of Microcontrollers and Embedded Systems course in the college. it aims to test the computation efficiency of the feed forward Neural Network (NN) algorithm in Embedded System using standard datasets. It started by a simple perceptron to a fully
connected neural network.
Using STM32F0, because of its RAM capacity (8KB) instead of ATMEGA32 (2KB) which is used through the course, we loaded
our model to the chip and let it to do the computation process to output the results as blinking LEDS., then we record the results.


<img src="/assets/img/projects/embed.jpg" align="center" height="300" width="800" >

###  About the Data 

#### Pima Indians diabetes:

The Pima Indians Diabetes Dataset involves predicting the onset of diabetes within 5 years in Pima
Indians given medical details.

It is a binary (2-class) classification problem. The number of observations for each class is not
balanced. There are 768 observations with 8 input variables and 1 output variable. Missing values
are believed to be encoded with zero values. The variable (Features) names are as follows:
- Number of times pregnant. 
-  Plasma glucose concentration a 2 hours in an oral glucose tolerance test. 
- Diastolic blood pressure (mm Hg). 
- Triceps skinfold thickness (mm). 
- 2-Hour serum insulin (mu U/ml). 
- Body mass index (weight in kg/(height in m)^2).
- Diabetes pedigree function.
- Age (years).
- Class variable (0 or 1).
The baseline performance of predicting the most prevalent class is a classification accuracy of
approximately 65%. Top results achieve a classification accuracy of approximately 77%.

Unfortunately, we couldn't load the neural network model to the chip because of the size of the big weights so, we reduced the NN to a simple perceptron and it worked !!. 

The perceptron gave us 60% accuracy in the test data.


You can find the model and the data in  the Perceptron Directory.use the resulted weights from that model in "weights" array in the /app/main.c file.

Also,you can change the observation using "test_data" array in /app/main.c file.

