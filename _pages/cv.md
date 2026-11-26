---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<p class="home__links">
  <a class="btn btn--info" href="/files/ngnawejonas-resume.pdf"><i class="fas fa-file-alt" aria-hidden="true"></i> Download the résumé (PDF)</a>
</p>

Research & Industry Experience
======
{% include experience.html %}

Education
======
* **PhD in Computer Science** (2021 – 2027, expected)
    * [Mila – Quebec AI Institute](https://mila.quebec/en/directory/jonas-ngnawe) and [Institute Intelligence and Data (IID)](https://iid.ulaval.ca/), Université Laval, Québec City, Canada
    * [Visiting Student Researcher at Stanford University](https://stairlab.stanford.edu/members/jonas_ngnawe.html) (Oct 2025 – Mar 2026)
    * Part of the [DEEL project](https://deel.quebec/en/projets/axe1-robustesse/projet-2/) (DEpendable and Explainable Learning)
* **MSc in Machine Learning** (2018 – 2019)
    * [AIMS African Master’s of Machine Intelligence (AMMI)](https://aimsammi.org/), Kigali, Rwanda — [funded by Meta and Google](https://youtu.be/5Ssn-KYvdy0?si=6YJePlZg3ykAm2Cg)
    * Project: Scalable Inference with Distributed Gaussian Processes using the Wasserstein Barycenter ([code](https://github.com/ngnawejonas/gp_moe)); [course materials](https://github.com/ngnawejonas/AMMI_Courses_2018-2019)
* **MSc in Mathematical Sciences** (2016 – 2017)
    * [African Institute for Mathematical Sciences (AIMS)](https://aims-cameroon.org/), Limbe, Cameroon
    * Project: k-Clustering Problem — Application to a Field Technician Allocation Optimization Problem
* **Engineering Degree (MSc equivalent), Computer Engineering** (2011 – 2016)
    * École Nationale Supérieure Polytechnique de Yaoundé, Cameroon
* **Summer schools:** [Machine Learning Summer School (MLSS), London 2019](https://sites.google.com/view/mlss-2019#); Deep Learning & Reinforcement Learning Summer School (DLRL), Edmonton 2025

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>

Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Skills
======
* **ML frameworks:** PyTorch, TensorFlow, Scikit-Learn
* **MLOps and tooling:** Git/GitHub, Weights & Biases, Docker, Slurm, GCP, AWS, vLLM, AIPerf

Service
======
* **Reviewer:** NeurIPS, ICLR, AAAI; IEEE Transactions on Image Processing; Algorithmic Fairness workshops @ NeurIPS (2021 – 2024); Montreal AI Symposium (2022, 2024); Black in AI Workshop (2022 – 2024); Deep Learning Indaba (2023)
* **Organizing committee:** [Interpolate workshop @ NeurIPS 2022](https://sites.google.com/view/interpolation-workshop) — First Workshop on Interpolation Regularizers and Beyond
* **Co-founder (since 2020):** [Kmer-AI](https://kmer-ai.org/), an association promoting AI and machine learning in Cameroon; host of [KmerAI Talks](https://kmer-ai.org/kmeraitalks.html)
* **Co-organizer:** Machine Learning Projects Competition (MLPC), Polytechnique Yaoundé (2020 – 2022); two-week introductory machine learning course, Polytechnique Yaoundé (Sep 2019); first Deep Learning IndabaX Rwanda, Kigali (Apr 2019)

Earlier Software Engineering Experience
======
* **Computer Engineer**, GroupOne Holding Company, Limbe, Cameroon (Jan – Aug 2018) — web development and fuel-consumption prediction; industrial maintenance of Honeywell Experion refinery systems
* **Freelance Software Developer**, Cameroon (2017 – 2018) — digitized administrative procedures for Cameroonian ministries; built and maintained WooCommerce plugins
* **Software Developer Intern**, Bolloré Africa Logistics, Douala, Cameroon (Feb – Aug 2016) — automated the review of information-system access rights and built anomaly detection for abnormal privileges
