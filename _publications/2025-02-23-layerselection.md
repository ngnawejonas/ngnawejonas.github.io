---
title: "A Layer Selection Approach to Test Time Adaptation"
authors: "S. Sahoo, M. ElAraby, J. Ngnawé, Y. Pequignot, F. Precioso, C. Gagné"
collection: publications
category: conferences
permalink: /publication/2025-02-23-layer-selection
excerpt: 'A gradient alignement method for layer selection in Test Time Adaptation.'
header:
  teaser: publications/layer-selection-thumb.png
date: 2025-02-23
venue: 'AAAI 2025'
paperurl: 'https://arxiv.org/abs/2404.03784v2'
citation: 'Sahoo, S., ElAraby, M., Ngnawe, J., Pequignot, Y. B., Precioso, F., & Gagné, C. (2025, April). A layer selection approach to test time adaptation. In Proceedings of the AAAI Conference on Artificial Intelligence (Vol. 39, No. 19, pp. 20237-20245).'
---

<figure>
  <img src="/images/publications/layer-selection.png" alt="Diagram of a deep model whose layers are marked per test batch as adapting or frozen, across two reset windows, so that only the layers benefiting from adaptation keep updating.">
  <figcaption>Layerwise Early Stopping (LEAST): at test time each layer keeps adapting only while its gradients indicate the new features help, so adaptation stays restricted to the layers that benefit from it.</figcaption>
</figure>

Test Time Adaptation (TTA) addresses the problem of distribution shift by enabling pretrained models to learn new features on an unseen domain at test time. However, it poses a significant challenge to maintain a balance between learning new features and retaining useful pretrained features. In this paper, we propose Layerwise EArly STopping (LEAST) for TTA to address this problem. The key idea is to stop adapting individual layers during TTA if the features being learned do not appear beneficial for the new domain. For that purpose, we propose using a novel gradient-based metric to measure the relevance of the current learnt features to the new domain without the need for supervised labels. More specifically, we propose to use this metric to determine dynamically when to stop updating each layer during TTA. This enables a more balanced adaptation, restricted to layers benefiting from it, and only for a certain number of steps. Such an approach also has the added effect of limiting the forgetting of pretrained features useful for dealing with new domains. Through extensive experiments, we demonstrate that Layerwise Early Stopping improves the performance of existing TTA approaches across multiple datasets, domain shifts, model architectures, and TTA losses.