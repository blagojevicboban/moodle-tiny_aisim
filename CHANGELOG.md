# Changelog

All notable changes to the `tiny_aisim` plugin will be documented in this file.

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

