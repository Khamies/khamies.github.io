---
layout: works-single

# preview details
title: "LSTM-VAE: LSTM Variational AutoEncoder"
category: NLP
category_slug: nlp
image: assets/img/projects/lstm.png
short: LSTM-VAE

# full details
full_image: assets/img/projects/lstm.png
preview_link: https://github.com/Khamies/LSTM-Variational-AutoEncoder
info:
  - label: Project Description
    value: This is a PyTorch Implementation of Generating Sentences from a Continuous Space by Bowman et al. 2015. where LSTM based VAE is trained on Penn Tree Bank dataset.

  - label: Tags
    value: lstm, vae, kl_divergence, elbo, reconstruction_error

  - label: Year
    value: 2021

---

## LSTM Variational AutoEncoder (LSTM-Sequence-VAE)

[A PyTorch Implementation of Generating Sentences from a Continuous Space by Bowman et al. 2015.](https://arxiv.org/abs/1511.06349)


### Table of Contents

- **[Introduction](#Introduction)**
- **[Setup](#Setup)**
- [**Run the code**](#Run-the-code)
- **[Training](#Training)**
- **[Inference](#Inference)**
- **[Play with the model](#Play-with-the-model)**
- **[Connect with me](#Connect-with-me)**
- **[License](#License)** 



### Introduction

This is a  [PyTorch Implementation of Generating Sentences from a Continuous Space by Bowman et al. 2015.](https://arxiv.org/abs/1511.06349) where LSTM based VAE is trained on Penn Tree Bank dataset. 

![](/assets/img/projects/model.jpg)

### Setup

The code is using `pipenv` as a virtual environment and package manager. To run the code, all you need is to install the necessary dependencies. open the terminal and type:

- `git clone https://github.com/Khamies/Sequence-VAE.git` 
- `cd Sequence-VAE`
- `pipenv install`

And you should be ready to go to play with code and build upon it!

### Run the code

- To train the model, run: `python main.py`

- To train the model with specific arguments, run: `python main.py --batch_size=64`. The following command-line arguments are available:
  - Batch size: `--batch_size`
  - bptt: `--bptt`
  - Learning rate: `--lr`
  - Embedding size: `--embed_size`
  - Hidden size: `--hidden_size`
  - Latent size: `--latent_size`

### Training

The model is trained on 30 epochs using Adam as an optimizer with a learning rate 0.001. Here are the results from training the LSTM-VAE model:

- **KL Loss**

  <img src="/assets/img/projects/kl.jpg" align="center" height="300" width="500" >

- **Reconstruction loss**

  <img src="/assets/img/projects/reco.jpg" align="center" height="300" width="500" >

- **KL loss vs Reconstruction loss**

  <img src="/assets/img/projects/kl_reco.jpg" align="center" height="300" width="500" >

- **ELBO loss**

  <img src="/assets/img/projects/elbo.jpg" align="center" height="300" width="500" >



### Inference

#### 1. Sample Generation

Here are generated samples from the model. We randomly sampled two latent codes z from standard Gaussian distributions, and specify "like" as the start of the sentence (sos), then we feed them to the decoder. The following are the generated sentences:

- **like other countries such as alex powers a former wang marketer** 

- **like design and artists have been <unk> by how many <unk>**

#### 2. Interpolation

The "President" word has been used as the start of the sentences. We randomly generated two sentences and interpolated between them.

- Sentence 1: **President bush veto power changes meant to be a great number**
- Sentence 2: **President bush veto power opposed to the president of the house**



```markdown
 *bush veto power opposed to the president of the house
 bush veto power opposed to the president of the house.
 bush veto power opposed to the president of the house.
 bush veto power opposed to the president of the house.
 bush veto power opposed to the president of the house.
 bush veto power opposed to the president of the house.
 bush veto power opposed to the president of the house.
 bush veto power opposed to the president of the house.
 bush veto power opposed to the president ' s council.
 bush veto power opposed to the president ' s council.
 bush veto power opposed to the president ' s council.
 bush veto power opposed to the president ' s council.
 bush veto power opposed to the president ' s council.
 bush veto power that kind of <unk> of natural gas.
 bush veto power changes to keep the <unk> and that.
 bush veto power changes to keep the <unk> and that.
 bush veto power changes that is in a telephone to.
 bush veto power changes that is in a telephone to.
 bush veto power changes meant to be a great number.
 *bush veto power changes meant to be a great number
```



### Play with the model

To play with the model, a jupyter notebook has been provided, you can find it [here](https://github.com/Khamies/LSTM-Sequence-VAE/blob/main/play_with_model.ipynb)

### Citation

```
 @misc{Khamies2021SequenceVAE,
 author = {Khamies, Waleed},
 title = {PyTorch Implementation of Generating Sentences from a Continuous Space by Bowman et al. 2015},
 year = {2021},
 publisher = {GitHub},
 journal = {GitHub repository},
 howpublished = {\url{https://github.com/Khamies/Sequence-VAE}},
 }
 ```



### Acknowledgement

- This work has been inspired from [Sentence-VAE](https://github.com/timbmg/Sentence-VAE) , where their data prepossessing pipeline is used.


### License 

![](https://img.shields.io/github/license/khamies/LSTM-Sequence-VAE)


