---
title: "Robustmix: Improving Robustness by Regularizing the Frequency Bias of Deep Nets"
authors: "J. Ngnawé, M. A. Njifon, J. Heek, Y. Dauphin"
collection: publications
category: workshops
permalink: /publication/2022-10-22-robust-mix
excerpt: 'An extension of mixup in the frequency domain that regularizes the deep nets for robustness to common corruptions.'
header:
  teaser: publications/robustmix-thumb.jpg
date: 2022-10-20
venue: 'NeurIPS 2022 Workshop on Distribution Shifts'
paperurl: 'https://arxiv.org/abs/2304.02847'
citation: 'Ngnawe, J., NJIFON, M. A., Heek, J., and Dauphin, Y. Robustmix: Improving robustness by regularizing the frequency bias of deep nets. In NeurIPS 2022 Workshop on Distribution Shifts: Connecting Methods and Applications, 2022. URL https://openreview.net/forum?id=Na64z0YpOx.'
---

<figure>
  <img src="/images/publications/robustmix.jpg" alt="Pipeline diagram: two images, a boathouse and a dog, are mixed at two different ratios, passed through low-pass and high-pass filters, and recombined into a single training image labelled by band energy.">
  <figcaption>Robustmix mixes two images at different ratios in different frequency bands, then labels the result by band energy — pushing the network to classify from lower-frequency spatial features.</figcaption>
</figure>

Deep networks have achieved impressive results on a range of well-curated benchmark datasets. Surprisingly, their performance remains sensitive to perturbations that have little effect on human performance. In this work, we propose a novel extension of Mixup called Robustmix that regularizes networks to classify based on lower-frequency spatial features. We show that this type of regularization improves robustness on a range of benchmarks such as Imagenet-C and Stylized Imagenet. It adds little computational overhead and, furthermore, does not require a priori knowledge of a large set of image transformations. We find that this approach further complements recent advances in model architecture and data augmentation, attaining a state-of-the-art mCE of 44.8 with an EfficientNet-B8 model and RandAugment, which is a reduction of 16 mCE compared to the baseline.