# Tiny AI Simulation (`tiny_aisim`)

[![Moodle Plugin CI](https://github.com/blagojevicboban/moodle-tiny_aisim/actions/workflows/ci.yml/badge.svg)](https://github.com/blagojevicboban/moodle-tiny_aisim/actions/workflows/ci.yml)
[![Moodle](https://img.shields.io/badge/Moodle-4.5%20to%205.3-orange.svg)](https://moodle.org)
[![PHP](https://img.shields.io/badge/PHP-8.2%2B-purple.svg)](https://php.net)
[![License](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](LICENSE)

**Tiny AI Simulation** (`tiny_aisim`) is a TinyMCE editor plugin for Moodle that lets teachers **insert and edit interactive AI / machine learning simulations visually**, without writing HTML, in Pages, Books, Lessons, quiz questions and forum posts. The simulations are rendered by **[filter_aisim](https://github.com/blagojevicboban/moodle-filter_aisim)**.

Developed as part of the Erasmus+ **AI for VET** project (*AI for Vocational Education and Training* — [aiforvet.eu](https://aiforvet.eu/)).

> Status: **alpha** (v0.5.0).

---

## ✨ Features

| Feature | Description |
|---|---|
| 🧩 **Editor Integration** | An **Insert AI Simulation** button on the toolbar and **AI Simulation...** in the *Insert* menu. |
| 🎯 **5 Simulation Engines** | Confusion Matrix & Threshold, Gradient Descent Optimization, Polynomial Regression & Regularization, Decision Boundaries (k-NN / Decision Tree), and K-Means Clustering. |
| 🎛️ **Configuration Dialog** | Simulation type, scenario / dataset and its own parameters (threshold, learning rate, initial weight, degree, λ, k, tree depth), with a live preview. |
| 🔒 **Read-only Mode** | Optionally locks the parameters so students can explore but not change them. |
| ✏️ **Double-click Editing** | Double-clicking a simulation card in the editor reopens the dialog with its current settings. |
| 🛡️ **Safe Placeholders** | Simulations appear in the editor as non-editable cards (`contenteditable="false"`), so their settings are not broken while typing. |
| 🌍 **Multilingual** | English (`en`), Serbian Latin (`sr_lt`), and Serbian Cyrillic (`sr_cr`). |
| 🔐 **GDPR Compliant** | Implements Moodle's Null Privacy Provider — no personal data is stored. |

---

## 💻 Usage in Moodle

1. In any TinyMCE editor, click **Insert AI Simulation** (or *Insert → AI Simulation...*).
2. Choose the simulation type and scenario, set the parameters and check the preview.
3. Click **Insert Simulation**. The editor shows a card; students see the interactive simulation.

The simulation is saved as a `<div data-aisim="...">` element with its settings in `data-*` attributes, which `filter_aisim` turns into the interactive simulation.

The button is controlled by the `tiny/aisim:viewplugin` capability.

---

## 📋 Requirements

- **Moodle**: 4.5 LTS through 5.3+
- **PHP**: 8.2+
- **[filter_aisim](https://github.com/blagojevicboban/moodle-filter_aisim)**: Must be installed and enabled (renders the simulations).

---

## 🚀 Installation

### Via Git
```bash
cd /path/to/moodle/public/lib/editor/tiny/plugins   # (or lib/editor/tiny/plugins in Moodle < 5.1)
git clone https://github.com/blagojevicboban/moodle-tiny_aisim.git aisim
php admin/cli/upgrade.php
```

Then enable the filter under **Site administration → Plugins → Filters → Manage filters**.

---

## 📚 Documentation & Resources

- 🇷🇸 **[Pedagoško-tehnički priručnik za nastavnike](docs/PRIRUCNIK_ZA_NASTAVNIKE.md)**
- 🇬🇧 **[Pedagogical and Technical Teacher Guide](docs/TEACHER_GUIDE.md)**
- 📦 **[Turnkey Course Backup (.mbz)](https://github.com/blagojevicboban/moodle-qtype_aisim/releases/download/v0.5.2/aiforvet_simulations_demo_course.mbz)**

---

## 📄 License

Licensed under the [GNU General Public License v3 or later](LICENSE).
Copyright © 2026 Boban Blagojević.
