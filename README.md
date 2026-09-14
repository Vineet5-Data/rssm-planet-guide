# RSSM, PlaNet and RL_in_AD: explanatory guide

Live website: https://vineet5-data.github.io/rssm-planet-guide/

- `index.html`: plain-language RL_in_AD project walkthrough, with data flow, architecture, training stages, matching and prediction, paper connections, evaluation qualifications, setup and source-linked module guide.
- `planet.html`: RSSM/PlaNet paper explanation and interactive observe/imagine diagram. Its **Project: RL_in_AD** button opens the project walkthrough.
- `guide.css`, `paper.css`: plain document styling; results are tables rather than statistic cards.
- `guide.js`: explanatory mode controls and module filtering.
- `natural-dreamer-reference.png`: user-supplied reference diagram, shown in the paper guide with Dreamer/PlaNet distinctions.

No build step, external font, framework or API key is required. Open either HTML file locally. GitHub Pages serves the root of the `main` branch.

## Evidence and scope

Project explanations are grounded in [RL_in_AD revision 951a4ad](https://github.com/Vineet5-Data/RL_in_AD/tree/951a4ad608d0dc4f919063fc7b1c62d8584370d4). Source links are pinned to that revision. The guide distinguishes code behavior from experiment reports, proxy matching metrics from human ground truth, sequential decoding from strictly causal inference, and candidate-conditioned evaluation from graph-only prediction.

The project models, data and checkpoints are not executed or redistributed by this site. Reported experiments were not rerun to produce the guide.

## Papers

- [Learning Latent Dynamics for Planning from Pixels](https://arxiv.org/abs/1811.04551)
- [DreamerV3](https://arxiv.org/abs/2301.04104)
