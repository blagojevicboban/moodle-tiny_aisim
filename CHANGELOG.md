# Changelog

All notable changes to the `tiny_aisim` plugin will be documented in this file.

## [Unreleased]

### Changed
- Teacher guide 1.1 (`docs/`), also in Slovak and Portuguese.
- The release package contains English strings only (other languages go through AMOS).

## [0.9.1] - 2026-10-30
### Changed
- Maturity: beta.

## [0.9.0] - 2026-10-30
### Added
- Data Split & Bias in the dialog (population, sample size, share of factory B, test share, k).

## [0.8.0] - 2026-10-30
### Added
- Reinforcement Learning (Q-learning) in the dialog (map, learning rate α, discount factor γ, exploration ε).

## [0.7.0] - 2026-10-30
### Added
- Convolution & Image Filters in the dialog (image, ready-made filter, optional target filter).

## [0.6.0] - 2026-10-30
### Added
- Perceptron & Neural Network in the dialog (dataset, hidden layers, neurons per layer, activation, learning rate).

### Fixed
- The dialog offered datasets the simulations do not have (regression "linear" and "noisy", K-Means "rings"); it now
  offers sine / quadratic / engine and blobs3 / blobs4 / uniform. Added the gradient descent "plateau" profile.

## [0.5.1] - 2026-10-30
### Changed
- Students no longer get the AI Simulation button by default (`tiny/aisim:viewplugin` is given to managers and teachers only). The upgrade removes the old default from student roles.
- README aligned with `qtype_aisim` and `filter_aisim`.

## [0.5.0] - 2026-10-28
### Added
- Initial release of Tiny AI Simulation (`tiny_aisim`) editor plugin.
- Visual modal dialog for inserting and configuring all 5 AI simulations (`confusion_matrix`, `gradient_descent`, `regression`, `knn_tree`, `kmeans`).
- Support for inline simulation placeholder cards with `contenteditable="false"`.
- Double-click inline editing to modify parameters of existing simulation blocks.
- Full localization in English (`en`), Serbian Latin (`sr_lt`), and Serbian Cyrillic (`sr_cr`).
- GDPR Null Privacy Provider implementation.
- Automated CI testing workflow covering Moodle 4.5 through 5.3 with MariaDB and PostgreSQL.

