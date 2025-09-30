---
title: "Robust Fine-Tuning from Non-Robust Pretrained Models: Mitigating Suboptimal Transfer With Adversarial Scheduling"
collection: publications
category: arxiv
permalink: /publication/2025-09-27-epsilon-scheduling
excerpt: 'We study robust fine-tuning (RFT) of non-robust pretrained models and show that robust objectives cause *suboptimal transfer*.  We propose *Epsilon-Scheduling*, which enables optimal transfer and improves *expected robustness*.'
date: 2025-09-27
venue: 'NeurIPS 2025 Reliable ML Workshop'
slidesurl: ''
paperurl: 'https://arxiv.org/abs/2509.23325'
citation: 'Ngnawé. J., Heuillet, M., Sahoo, S., Pequignot, Ahmad, O., Durand, A. Y., Precioso, F., Gagné, C. (2025). Robust Fine-Tuning from Non-Robust Pretrained Models: Mitigating Suboptimal Transfer With Adversarial Scheduling. arXiv preprint arXiv:2509.23325.'
---

Fine-tuning pretrained models is a standard and effective workflow in modern machine learning. However, robust fine-tuning (RFT), which aims to simultaneously achieve adaptation to a downstream task and robustness to adversarial examples, remains challenging. Despite the abundance of non-robust pretrained models in open-source repositories, their potential for RFT is less understood. We address this knowledge gap by systematically examining RFT from such non-robust models. Our experiments reveal that fine-tuning non-robust models with a robust objective, even under small perturbations, can lead to poor performance, a phenomenon that we dub _suboptimal transfer_. In challenging scenarios (eg, difficult tasks, high perturbation), the resulting performance can be so low that it may be considered a transfer failure. We find that fine-tuning using a robust objective impedes task adaptation at the beginning of training and eventually prevents optimal transfer. However, we propose a novel heuristic, _Epsilon-Scheduling_, a schedule over perturbation strength used during training that promotes optimal transfer. Additionally, we introduce _expected robustness_, a metric that captures performance across a range of perturbations, providing a more comprehensive evaluation of the accuracy-robustness trade-off for diverse models at test time. Extensive experiments on a wide range of configurations (six pretrained models and five datasets) show that _Epsilon-Scheduling_ successfully prevents _suboptimal transfer_ and consistently improves expected robustness.