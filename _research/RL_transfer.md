---
layout: works-single

# preview details
title: Transfer Learning for Prosthetics Using Imitation Learning
author: Waleed Khamies, Montaser Mohammedalamen, Benjamin Rosman
category: RL
category_slug: RL
image: assets/img/research/tran.svg
short: Transfer Learning for Prosthetics Using Imitation Learning

# full details
full_image: assets/img/research/tran.svg
preview_link: https://arxiv.org/abs/1901.04772
info:
  - label: Project Description
    value: This project uses RL techniques to train a realistic biomechanical model for different individuals and walking environments. We benchmark three RL algorithms (DDPG, TRPO, and PPO) in OpenSim and apply imitation learning to reduce training time for customized prosthetics. Our modified DAgger algorithm achieves faster convergence (in fewer than 5 iterations) compared to the expert agent (100 iterations), reducing training time by 95% while maintaining a balance between exploiting the expert policy and exploring the environment.

  - label: Publisher
    value: Black In AI Workshop (BAI)
  
  - label : Conference
    value : NeurIPS
  
  - label: Year
    value: 2018

---

## Transfer Learning for Prosthetics Using Imitation Learning

In this paper, We Apply Reinforcement learning (RL) techniques to train a realistic biomechanical model to work with different people and on different walking environments. We benchmarking 3 RL algorithms: Deep Deterministic Policy Gradient (DDPG), Trust Region Policy Optimization (TRPO) and Proximal Policy Optimization (PPO) in OpenSim environment, Also we apply imitation learning to a prosthetics domain to reduce the training time needed to design customized prosthetics. We use DDPG algorithm to train an original expert agent. We then propose a modification to the Dataset Aggregation (DAgger) algorithm to reuse the expert knowledge and train a new target agent to replicate that behaviour in fewer than 5 iterations, compared to the 100 iterations taken by the expert agent which means reducing training time by 95%. Our modifications to the DAgger algorithm improve the balance between exploiting the expert policy and exploring the environment. We show empirically that these improve convergence time of the target agent, particularly when there is some degree of variation between expert and naive agent.
