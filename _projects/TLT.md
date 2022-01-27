---
name: "TLT : Transformer-Lightning Language Model"
tools: [pytorch, transformer, language_model, cross_entropy, pytorch_lightning]
image: https://github.com/Khamies/khamies.github.io/blob/master/media/projects/transformer.jpg
description: This is an implementation of a transformer based language model using Pytorch-Lightning framework. The model consists of two transformer layers with 2 heads each combined with embedding and linear layers. The code uses Pytorch Lightning framework that is built for fast research prototyping! 
---

# TLT : Transformer-Lightning Language Model 

<img src="../media/projects/transformer.jpg" align="center" height="750" width="800" >

### Table of Contents

- **[Introduction](#Introduction)**
- **[Setup](#Setup)**
- [**Run the code**](#Run-the-code)
- **[Training](#Training)**
- **[Sample Generation](#Sample-Generation)**
- **[Connect with me](#Connect-with-me)**
- **[License](#License)** 

### Introduction

This is an implementation of a transformer based language model using [Pytorch-Lightning framework](https://www.pytorchlightning.ai/). The model consists of two transformer layers with 2 heads each combined with embedding and linear layers. The code uses pytorch-lightning framework that is built for fast research prototyping. Although the code does not leverage all the features of the lightning framework, but it has achieved good result in the language modelling task. For learning purposes, a Pytorch classical version from this project is also provided [here](https://colab.research.google.com/drive/1zRm0tfD2gYyL2WNd6o_mVC2IY3prAzPV?usp=sharing) (inspired from Pytorch team  :heart:).

### Setup

The code is using `pipenv` as a virtual environment and package manager. To run the code, all you need is to install the necessary dependencies. open the terminal and type:

- `$ git clone https://github.com/Khamies/Transformer_Lightning.git` 
- `$ cd Transformer_Lightning`
- `$ pipenv install`

or

- `$ pip install requirements.txt `

And you should be ready to go to play with code and build upon it!

### Run the code

- To train the model, run: `python main.py`

- To train the model with specific arguments, run: `python main.py --batch_size=64`. The following command-line arguments are available:
  - Train batch size: `--bsz_train`
  - Test batch size: `--bsz_test`
  - bptt: `--bptt`
  - Learning rate: `--lr`
  - Embedding size: `--embed_size`
  - Size of FeedForward Neural Network (1st layer): `--ffnn_size`
  - Attention Heads: `--nhead`
  - Transformer Layers: `--nlayers`

### Training

The model is trained on `10 epochs` using Adam as an optimizer with a `learning rate = 0.001` and `batch size = 32`, you can find all the model settings in [settings.py]( https://github.com/Khamies/Transformer_Lightning/blob/main/settings.py). Here is the loss curve for the training step:

- **Cross Entropy Loss**

  <img src="../media/projects/transformer_train_loss.jpg" align="center" height="300" width="500" >

### Sample Generation

Here are some generated samples from the model:

```markdown
<time> warner owns n million francs.
<media> concern said it is a share n million.
```

## Citation

> ```
> @misc{Khamies2021Transformer_Lightning,
> author = {Khamies, Waleed},
> title = {A pytorch implementation of transformer based language model using Pytorch-Lightning framework.},
> year = {2021},
> publisher = {GitHub},
> journal = {GitHub repository},
> howpublished = {\url{ https://github.com/Khamies/Transformer_Lightning}},
> }
> ```

### Connect with me :slightly_smiling_face:

For any question or a collaboration, drop me a message [here](mailto:khamiesw@outlook.com?subject=[GitHub]%20LSTM-Language-Generator%20Repo)

Follow me on [Linkedin](https://www.linkedin.com/in/khamiesw/)!

**Thank you :heart:**

### License 

![](https://img.shields.io/github/license/Khamies/Transformer_Lightning)