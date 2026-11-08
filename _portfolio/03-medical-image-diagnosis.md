---
title: "Robust Medical Image Diagnosis via Weighted Masking and Cascaded Architectures"
excerpt: "Team project (2025). A dual-path pipeline combining UNet segmentation with fine-tuned pretrained vision backbones.<br/><img src='/images/projects/cascade-masking.png' style='width: 60%; height: auto;'>"
collection: portfolio
---

**Team project, Politecnico di Milano (2025)**

![Cascade-Masking strategy: decoupled training with adaptive masking (A) and the automated inference cascade (B)](/images/projects/cascade-masking.png)

* Developed a dual-path diagnosis pipeline combining UNet segmentation with fine-tuned pretrained vision backbones (classification-triggered and segmentation-cascaded classification).
* Systematically compared ROI injection strategies (hard, cropped, and weighted masking) for feeding segmentation output into the classifier.
* Used morphological mask perturbation and multi-seed ablations to reduce cascade error propagation, improving robustness and Macro F1 under uncertain lesion boundaries.
