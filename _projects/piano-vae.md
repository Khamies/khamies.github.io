---
layout: works-single

# preview details
title: "PianoVAE: VAE For Piano Notes Generation"
category: Generative Modeling
category_slug: VAE
image: assets/img/projects/paino_vae_cover.png
short: PianoVAE

# full details
full_image: assets/img/projects/paino_vae_cover.png
preview_link: https://github.com/Khamies/Piano-VAE
info:
  - label: Project Description
    value: This is a Pytorch implementation of a musical model that capable to generate piano'notes and interpolate between them as the model latent space is continuous. The model is a variational autoencoder where the encoder and the decoder are LSTM networks.


  - label: Tags
    value: pytorch, lstm, vae, piano-roll, music-generation-deep-learning

  - label: Year
    value: 2021

---

## PianoVAE: VAE For Piano Notes Generation

A Pytorch Implementation of VAE-based musical model to generate and interpolate piano'notes using Nottingham dataset.


### Table of Contents

- **[Introduction](#Introduction)**
- [**Nottingham' Dataset**](#Nottingham'-Dataset)
- **[Setup](#Setup)**
- [**Run the code**](#Run-the-code)
- **[Training](#Training)**
- **[Inference](#Inference)**
- **[Play with the model](#Play-with-the-model)**
- **[Acknowledgement](#Acknowledgement)**
- **[Connect with me](#Connect-with-me)**
- **[License](#License)** 



## Introduction

This is a Pytorch implementation of a musical model that capable to generate piano'notes and interpolate between them as the model latent space is continuous. The model is a variational autoencoder where the encoder and the decoder are LSTM networks. The model is trained on Nottingham dataset, you can download it from [here](http://www-ens.iro.umontreal.ca/~boulanni/icml2012).


![](/assets/img/projects/piano-VAE.svg) 

### Nottingham' Dataset

The [Nottingham Music Database](http://abc.sourceforge.net/NMD/)  contains over 1000 Folk Tunes stored in a special text format. The dataset has been converted to a piano-roll format to be easily processed and visualised. Here is a sample from the dataset that you can listen to:

<p align="center">
 <a href="https://www.youtube.com/watch?v=fPu3hMfQC-A">  <img src="http://img.youtube.com/vi/fPu3hMfQC-A/0.jpg?raw=true" alt="Sublime's custom image"/> </a>
</p>



### Setup

The code is using `pipenv` as a virtual environment and package manager. To run the code, all you need is to install the necessary dependencies. open the terminal and type:

- `git clone https://github.com/Khamies/Piano-VAE.git` 
- `cd Piano-VAE`
- `pipenv install`

And you should be ready to go to play with code and build upon it!

### Run the code

- To train the model, run: `python main.py`
- To train the model with specific arguments, run: `python main.py --batch_size=64`. The following command-line arguments are available:
  - Batch size: `--batch_size`
  - Learning rate: `--lr`
  - Embedding size: `--embed_size`
  - Hidden size: `--hidden_size`
  - Latent size: `--latent_size`

### Training

The model is trained on 20 epochs using Adam as an optimizer with a learning rate 0.001. Here are the results from training the LSTM-VAE model:

- **KL Loss**

  <img src="/assets/img/projects/piano_vae_KL.jpg" align="center" height="300" width="500" >

- **Reconstruction loss**

  <img src="/assets/img/projects/piano_vae_reco.jpg" align="center" height="300" width="500" >

- **KL loss vs Reconstruction loss**

  <img src="/assets/img/projects/piano_vae_kl_reco.jpg" align="center" height="300" width="500" >

- **ELBO loss**

  <img src="/assets/img/projects/piano_vae_elbo.jpg" align="center" height="300" width="500" >

### Inference

#### 1. Sample Generation

Here are generated samples from the model. We randomly sampled two latent codes z from standard Gaussian distribution. The following are the generated notes:

<p align="center">
 <a href="https://www.youtube.com/watch?v=fPu3hMfQC-A">  <img src="http://img.youtube.com/vi/fPu3hMfQC-A/0.jpg?raw=true" alt="Sublime's custom image"/> </a>
</p>

#### 2. Interpolation

Here are some samples from the interpolation test. We use number of interpolation = 32, and sequence length = 200.

- First audio:

  <p align="center">
   <a href="https://youtu.be/W3BkL7wv2Zo">  <img src="http://img.youtube.com/vi/W3BkL7wv2Zo/0.jpg?raw=true" alt="First audio"/> </a>
  </p>

- Second audio:

  <p align="center">
   <a href="https://youtu.be/bJidY5IIzrc">  <img src="http://img.youtube.com/vi/bJidY5IIzrc/0.jpg?raw=true" alt="Second audio"/> </a>
  </p>

An interpolation close to "first audio"

<p align="center">
 <a href="https://youtu.be/TxQvKnBAzbk">  <img src="http://img.youtube.com/vi/TxQvKnBAzbk/0.jpg?raw=true" alt="Second audio"/> </a>
</p>

An interpolation close to "second audio"

<p align="center">
 <a href="https://youtu.be/BPNVYV5csrE">  <img src="http://img.youtube.com/vi/BPNVYV5csrE/0.jpg?raw=true" alt="Second audio"/> </a>
</p>

### Play with the model

To play with the model, a jupyter notebook has been provided, you can find it [here](https://github.com/Khamies/Piano-VAE/blob/main/Play_with_model.ipynb)



### Acknowledgement

- Big thanks to @montaserFath for reviewing the code!

### Citation

```
@misc{Khamies2021Piano-VAE,
author = {Khamies, Waleed},
title = {A Pytorch Implementation of VAE-based musical model to generate and interpolate piano'notes using Nottingham dataset.},
year = {2021},
publisher = {GitHub},
journal = {GitHub repository},
howpublished = {\url{https://github.com/Khamies/Piano-VAE}},
}
```

### License 

![](https://img.shields.io/github/license/khamies/Piano-VAE)


