---
title: "Margin-based Progress Measures for Grokking"
authors: "J. Ngnawé, P. J. Tikeng Notsawo"
collection: publications
category: workshops
permalink: /publication/2026-12-13-margin-grokking-workshop
excerpt: 'We track instance margins (logit margin and distance to the decision boundary) as progress measures for grokking: test margins stay low during memorization and rise with delayed generalization.'
date: 2026-12-13
venue: 'NeurIPS 2026 Workshop — Neural Network Artifacts as a New Data Modality'
paperurl: 'https://openreview.net/forum?id=qvFYyLjhPZ'
citation: 'Ngnawé, J., & Tikeng Notsawo, P. J. (2026). Margin-based Progress Measures for Grokking. NeurIPS 2026 Workshop on Neural Network Artifacts as a New Data Modality.'
---

Grokking is the phenomenon of delayed generalization, where a network fits its training data long before it generalizes to held-out data. We study how instance margins evolve through this transition, using the logit margin in output space — which requires no labels — and the distance to the decision boundary in input or embedding space. Across modular-arithmetic tasks (MLPs, LSTMs) and a synthetic shape-classification task (ResNet-18), the mean test logit margin stays low during memorization and rises as generalization arrives; memorization separates the train and test margin distributions, and that gap shrinks as the model groks.

Presented at the [Neural Network Artifacts as a New Data Modality](https://neurips.cc/virtual/2026/workshop/137631) workshop, NeurIPS 2026 (Paris, Palais des congrès). Read the [paper on OpenReview](https://openreview.net/forum?id=qvFYyLjhPZ).
