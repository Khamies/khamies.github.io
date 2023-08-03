---
layout: works-single

# preview details
title: "Batch Inverse-Variance Weighting: Deep Heteroscedastic Regression"
author: Vincent Mai, Waleed Khamies, Liam Paull
category: Deep Learning, Robotics
category_slug: deeplearning
image: assets/img/research/biv.svg
short: "Batch Inverse-Variance Weighting: Deep Heteroscedastic Regression"

# full details
full_image: assets/img/research/biv.svg
preview_link: https://arxiv.org/abs/2107.04497
info:
  - label: Project Description
    value: This project focuses on heteroscedastic regression, a supervised learning task where each label is subject to noise from a different distribution. The goal is to improve the performance of learning algorithms by incorporating the variance estimates of the noise in the labeling process.
  - label: Publisher
    value: Uncertainty in Deep Learning Workshop (UDL)
  
  - label : Conference
    value : ICML
  
  - label: Year
    value: 2021

---

## Batch Inverse-Variance Weighting: Deep Heteroscedastic Regression

Heteroscedastic regression is the task of supervised learning where each label is subject to noise from a different distribution. This noise can be caused by the labelling process, and impacts negatively the performance of the learning algorithm as it violates the i.i.d. assumptions. In many situations however, the labelling process is able to estimate the variance of such distribution for each label, which can be used as an additional information to mitigate this impact. We adapt an inverse-variance weighted mean square error, based on the Gauss-Markov theorem, for parameter optimization on neural networks. We introduce Batch Inverse-Variance, a loss function which is robust to near-ground truth samples, and allows to control the effective learning rate. Our experimental results show that BIV improves significantly the performance of the networks on two noisy datasets, compared to L2 loss, inverse-variance weighting, as well as a filtering-based baseline. 
