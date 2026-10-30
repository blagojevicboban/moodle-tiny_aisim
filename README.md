# Tiny AI Simulation (`tiny_aisim`)

Interactive TinyMCE 6/7 editor plugin for visually inserting and editing AI/ML simulations across Moodle course content (Pages, Books, Lessons, Quiz questions, Forum posts).

Developed as part of the **AI for VET** project (*Artificial Intelligence for Vocational Education and Training*, Erasmus+).

## Features

- **Visual TinyMCE Integration**: Adds an AI Simulation button to the editor toolbar and "AI Simulation..." to the Insert menu.
- **Support for 5 Simulation Engines** (rendered by `filter_aisim`):
  1. **Confusion Matrix & Classification Threshold** (`confusion_matrix`)
  2. **Gradient Descent Optimization** (`gradient_descent`)
  3. **Polynomial Regression & Regularization** (`regression`)
  4. **Decision Boundaries (k-NN & Decision Tree)** (`knn_tree`)
  5. **K-Means Clustering** (`kmeans`)
- **Interactive Configuration Dialog**:
  - Dynamic parameter controls (dataset, threshold, learning rate, degree, lambda, k, depth).
  - Optional read-only mode to prevent student parameter modification.
  - Live simulation badge preview inside the modal dialog.
- **Double-click Editing**: Double-clicking any existing simulation card in the editor reopens the dialog pre-filled with the current settings.
- **Non-destructive Placeholders**: Safe `contenteditable="false"` cards prevent accidental mangling of simulation metadata while typing.
- **Multi-language Support**: Fully localized in English (`en`), Serbian Latin (`sr_lt`), and Serbian Cyrillic (`sr_cr`).
- **GDPR Null Provider**: Declares that no personal user data is collected or stored.

## Compatibility

- Moodle 4.5 LTS, 5.0, 5.1, 5.2, 5.3+
- TinyMCE 6 / TinyMCE 7
- PHP 8.2 / 8.3
- MariaDB 10.6+ / PostgreSQL 14+
- Requires `filter_aisim` (AI Simulation Viewer Filter)

## Installation

1. Copy the `tiny_aisim` directory into your Moodle installation under `lib/editor/tiny/plugins/aisim`:
   ```bash
   git clone https://github.com/blagojevicboban/moodle-tiny_aisim.git lib/editor/tiny/plugins/aisim
   ```
2. Run Moodle database upgrade:
   ```bash
   php admin/cli/upgrade.php
   ```
3. Ensure the filter `filter_aisim` is installed and enabled under **Site administration > Plugins > Filters > Manage filters**.

## Documentation & Teacher Guide

- 🇷🇸 **[Pedagoško-tehnički priručnik za nastavnike](docs/PRIRUCNIK_ZA_NASTAVNIKE.md)**
- 🇬🇧 **[Pedagogical and Technical Teacher Guide](docs/TEACHER_GUIDE.md)**
- 📦 **[Pre-packaged Course Backup (.mbz)](https://github.com/blagojevicboban/moodle-qtype_aisim/releases/download/v0.5.2/aiforvet_simulations_demo_course.mbz)**

## License

GNU General Public License v3 or later. See [LICENSE](LICENSE).

