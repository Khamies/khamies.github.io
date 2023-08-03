---
layout: works-single

# preview details
title: "PianoLSTM: LSTM For Piano Notes Generation"
category: Generative Modeling
category_slug: LSTM
image: assets/img/projects/piano.png
short: PianoLSTM

# full details
full_image: assets/img/projects/piano.png
preview_link: https://github.com/Khamies/PianoNotes-LSTM-Generation
info:
  - label: Project Description
    value: This is a PyTorch Implementation for an LSTM-based Music model that generates piano' notes using Nottingham' Dataset. You can download the dataset from here.

  - label: Tags
    value: pytorch, lstm, music-modeling, music-generation-deep-learning, nottingham-dataset

  - label: Year
    value: 2021

---

## PianoLSTM: LSTM For Piano Notes Generation
A Pytorch Implementation of LSTM-based musical model to generate piano'notes.![](./media/msuic_diagram.png)

### Table of Contents

- **[Introduction](#Introduction)**
- **[Setup](#Setup)**
- **[Nottingham' Dataset](#Nottingham'-Dataset)**
- [**Run the code**](#Run-the-code)
- **[Training](#Training)**
- **[Sample Generation](#Sample-Generation)**
- **[Play with the model](#Play-with-the-model)**
- **[Connect with me](#Connect-with-me)**
- **[License](#License)** 

### Introduction

This is a PyTorch Implementation for an LSTM-based Music model that generates piano' notes using Nottingham' Dataset. You can download the dataset from [here](http://www-ens.iro.umontreal.ca/~boulanni/icml2012).

### Nottingham' Dataset

The [Nottingham Music Database](http://abc.sourceforge.net/NMD/)  contains over 1000 Folk Tunes stored in a special text format. The dataset has been converted to a piano-roll format to be easily processed and visualised. Here is a sample from the dataset that you can listen to:

<p align="center">
 <a href="https://www.youtube.com/watch?v=fPu3hMfQC-A">  <img src="http://img.youtube.com/vi/fPu3hMfQC-A/0.jpg?raw=true" alt="Sublime's custom image"/> </a>
</p>


### Setup

The code is using `pipenv` as a virtual environment and package manager. To run the code, all you need is to install the necessary dependencies. open the terminal and type:

- `git clone https://github.com/Khamies/PianoNotes-LSTM-Generation.git` 
- `cd PianoNotes-LSTM-Generation`
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

The model is trained on `20 epochs` using Adam as an optimizer with a `learning rate = 0.001` and `batch size = 32`, you can find all the model settings in [settings.py](https://github.com/Khamies/LSTM-Language-Generator/blob/main/settings.py). Here is the loss curve for the training step:

- **Negative Likelihood Loss**

  <p align="center">
      <img src="/assets/img/projects/piano_nll_loss.jpg" align="center" height="300" width="500" >
  </p>

  

### Sample Generation

Here is a generated sample from the model, you can listen to it here:

<p align="center">
 <a href="https://www.youtube.com/watch?v=_LIzDdZsoDc">  <img src="http://img.youtube.com/vi/_LIzDdZsoDc/0.jpg?raw=true" alt="Sublime's custom image"/> </a>
</p>



## Play with the model

To play with the model, a jupyter notebook has been provided, you can find it [here](https://github.com/Khamies/PianoNotes-LSTM-Generation/blob/main/Play_with_model.ipynb)

### Citation

```
@misc{Khamies2021PianoNotes-LSTM-Generation,
author = {Khamies, Waleed},
title = {A PyTorch Implementation for an LSTM-based Piano model},
year = {2021},
publisher = {GitHub},
journal = {GitHub repository},
howpublished = {\url{https://github.com/Khamies/PianoNotes-LSTM-Generation}},
}
```


### License 

![](https://img.shields.io/github/license/khamies/LSTM-Language-Generator)
