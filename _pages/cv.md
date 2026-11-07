---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* **MSc in Biomedical Engineering**, Politecnico di Milano, Milan, Italy (Sep. 2023 – present)
  * School of Industrial and Information Engineering
  * Master's thesis: Cross-Condition Self-Supervised Learning for Imagined-Speech EEG Decoding (ongoing)
* **B.E. in Biomedical Engineering**, Southern University of Science and Technology (SUSTech), Shenzhen, China (Sep. 2019 – Jun. 2023)
  * Supervisor: Dr. Quanying Liu (PI of NCCLab)

Work experience
======
* **Operations Trainee**, Food and Agriculture Organization of the United Nations (FAO), Lima, Peru (Sep. 2024 – Mar. 2025)
  * UN Volunteers Fully Funded Programme
  * Contributed to the Smart Biosecurity Aquaculture project in northern Peru: data analysis, sensor selection and integration, control system design, and AI-based monitoring solutions
  * Delivered two internal AI training sessions on neural networks, large language models, and AI for workplace efficiency
  * Provided visual documentation for official events with the Communications Unit

Research experience
======
* **Cross-Condition Self-Supervised Learning for Imagined-Speech EEG Decoding**, Master's thesis (ongoing)
  * Developing RI-JEPA, a self-supervised Joint-Embedding Predictive Architecture that uses paired reading-phase and imagined-phase EEG of the same sentence as a cross-condition training signal
  * EEG encoder with learnable spatial filtering and multi-band temporal convolutions, pretrained by latent-space prediction with EMA teacher–student training
  * Controlled evaluation on the Chisco dataset (OpenNeuro ds005170) against MAE, contrastive, and single-modality JEPA baselines, with shuffled-pair controls, data-scaling analysis, and subject-level statistics
* **MI and SSVEP based hybrid brain-computer interface**, individual project, NCCLab, SUSTech (Mar. 2022 – Oct. 2022)
  * Proposed a two-stream convolutional network for motor imagery (MI) and SSVEP inputs
  * Classification accuracy of 96% (hybrid), 94% (SSVEP), and 70% (MI)
  * Published in *Brain-Apparatus Communication: A Journal of Bacomics*

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Selected course projects
======
* **Robust Medical Image Diagnosis via Weighted Masking and Cascaded Architectures** (2025): UNet segmentation cascaded with fine-tuned pretrained vision backbones; comparison of hard, cropped, and weighted ROI masking
* **Deep Learning-Based Segmentation of Type B Aortic Dissection** (2025): enhanced U-Net with a pretrained ResNet50 encoder and compound weighted cross-entropy + Dice loss
* **Generalization Assessment of PPG-Based Blood Pressure Estimation** (2025): reproduced a cross-population PPG blood-pressure method on MIMIC-BP (1,524 patients) and showed its limited generalization under domain shift
* **Technologies for Sensors and Clinical Instrumentation** (Mar. 2024 – Jun. 2024): estimated anterior-posterior and medial-lateral ground reaction force from force-sensitive resistors and video-based gait analysis with a deep neural network

See [Projects]({{ base_path }}/portfolio/) for details.

Honors and awards
======
* Certificate of Global Governance, China Center for International People-to-People Exchange, Ministry of Education, P.R. China (2022)
* Innovation & Practice Programme for the Cultivation of High-level Internationalized Talents (2022)
* National Training Program of Innovation and Entrepreneurship for Undergraduates (2022)
* SUSTech Outstanding Freshman Entrance Scholarship (2019)

Skills and coursework
======
* **Programming**: Python, Java, C; data structures and algorithm analysis
* **Artificial intelligence**: machine learning, statistical learning, deep learning, model identification
* **Signal processing**: signals and systems, biomedical signal processing, advanced signal processing, multivariate time series analysis and statistical modeling, digital image processing
* **Biomedical engineering**: neuroengineering, sensors and clinical devices, medical informatics, control systems
* **Mathematics**: calculus, linear algebra, probability and mathematical statistics, time series analysis, nonlinear dynamical systems, chaotic systems and fractals

Other activities
======
* Volunteer in a turtle protection project run by a local NGO in Indonesia
* Outstanding Volunteer, ASC Student Supercomputer Challenge
* Outstanding Volunteer, 10th Anniversary of Southern University of Science and Technology
