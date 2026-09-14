# AlphaEvolve & DreamerV3 in Autonomous Driving: World Model Research Portal

> An interactive, publication-grade research portal and visual curriculum exploring **Recurrent State-Space Models (RSSMs)**, **PlaNet**, and **DreamerV3** adapted for fleet GPS map matching and multi-horizon trajectory prediction on metric street networks.

🌐 **Live Website:** [https://Vineet5-Data.github.io/rssm-planet-guide/](https://Vineet5-Data.github.io/rssm-planet-guide/)  
💻 **Codebase Repository:** [Vineet5-Data/RL_in_AD](https://github.com/Vineet5-Data/RL_in_AD)

---

## 🌟 Interactive Research Guides Included

This repository hosts two interconnected visual guides on GitHub Pages:

### 1. [AlphaEvolve & DreamerV3 World Model Guide (`index.html`)](https://Vineet5-Data.github.io/rssm-planet-guide/)
The comprehensive master portal demystifying the adaptation of Hafner et al.'s **DreamerV3** from pixel environments (Atari, Minecraft) to continuous spatial road networks:
- **The Four Architectural Pillars:**
  - **Pillars 0 & 1b:** Dual Line Graph turn-aware representation with 2-layer `RoadGAT` (NT-Xent contrastive pretraining).
  - **Pillar 1a:** Cross-Modal Transformer fusing noisy GPS sequences with $K=10$ candidate road tokens from metric STRtree spatial indexing.
  - **Pillar 2:** The 4.77M parameter **Decoder-Light RSSM** with $32 \times 32$ categorical latents, straight-through gradients, 1% unimix floor, and KL balancing.
  - **Pillar 3:** Label-free self-supervised learning with 6 physics rewards and offline DAgger HMM Viterbi pseudo-labeling.
- **Interactive RSSM Step Simulator:** Real-time visual laboratory simulating the 512-dim GRU memory $h_t$, active $32 \times 32$ stochastic categorical latents, and permutation-equivariant road candidate dot-product ranking across posterior and prior (imagination) modes.
- **Mathematical Formulations:** Clean, publication-grade rendering of straight-through categoricals, unimix floors, KL balancing, symlog/symexp transformations, and Newson & Krumm HMM emission/transition mechanics.
- **File-by-File Catalog (30+ Files):** Interactive search and filtering of the entire codebase with plain-English summaries, technical functions, and hard-won gotchas.
- **The Research Drama:** Full negative results documentation covering Track A posterior collapse, Stage 3 RL actor Goodhart's law overoptimization, out-of-distribution transfer drops, and neural scaling laws (+2.0pp per data doubling).
- **Academic Lineage:** 50+ papers cataloged across model-based RL, graph representation learning, and trajectory modeling.

### 2. [PlaNet Visual Dynamics Guide (`planet.html`)](https://Vineet5-Data.github.io/rssm-planet-guide/planet.html)
The beginner-friendly illustrated explanation of **PlaNet** (*Learning Latent Dynamics for Planning from Pixels*, Hafner et al., 2019):
- Visual breakdown of observation vs. imagination rollouts.
- Deconstruction of the transition model, observation model, and reward model.
- Latent overshooting and Cross-Entropy Method (CEM) action planning.

---

## 📊 Key Benchmark Matrix (Held-out Porto Evaluation)

All empirical results are rigorously evaluated on held-out test splits ($n=500$ full trajectories / 20k+ fixes):

| Metric / Component | Classical Baseline (HMM) | AlphaEvolve World Model | Key Innovation |
| :--- | :---: | :---: | :--- |
| **Offline Batch Matching** | 84.47% | **86.79%** (+2.32 pp) | WM Road-Head + Dijkstra Hybrid Viterbi |
| **Online Streaming Match** | 59.18% (Greedy) | **82.87%** (+23.69 pp) | Closed-Loop RSSM (Zero Lookahead) |
| **Disconnected Road Jumps** | 14.90% (Raw GPS) | **4.71%** (-68.4% relative) | DAgger HMM Relabeling ($\alpha = 0.5$) |
| **Model Size** | Zero parameters | **4.77M parameters** | 512-d GRU + $32 \times 32$ Categorical Latent |
| **Training Scale** | Unsupervised | **1.66M Trajectories** | 121.4M GPS fixes across 5 cities |

---

## 🚀 Running Locally

No build step, no compiler, and no `npm install` are required:

```bash
# Clone the repository
git clone https://github.com/Vineet5-Data/rssm-planet-guide.git
cd rssm-planet-guide

# Open directly in any modern browser
# On Windows:
start index.html

# On macOS:
open index.html

# On Linux:
xdg-open index.html
```

---

## 📚 Foundational Papers & Citations

- **DreamerV3:** Hafner et al., *Mastering Diverse Domains through World Models*, arXiv:2301.04104 (2023).
- **PlaNet:** Hafner et al., *Learning Latent Dynamics for Planning from Pixels*, ICML 2019.
- **MuDreamer:** Burchi & Timofte, *World Models without Observation Reconstruction*, arXiv:2404.05389 (2024).
- **Posterior Collapse in RSSMs:** Dai, Wang, & Wipf, *On the Local Minima and Posterior Collapse of Variational Autoencoders*, ICML 2020.
- **Goodhart's Law in RL:** Gao et al., *Scaling Laws for Reward Model Overoptimization*, ICML 2023.
- **Classical Map Matching:** Newson & Krumm, *Hidden Markov Map Matching Through Noise and Sparseness*, ACM SIGSPATIAL 2009.

---

## 📄 License & Attribution

Research codebase and portal created by **Vineet** ([Vineet5-Data](https://github.com/Vineet5-Data)). Code licensed under the MIT License.
