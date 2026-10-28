<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Strings for component 'tiny_aisim', language 'en'.
 *
 * @package    tiny_aisim
 * @copyright  2026 Boban Blagojević
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

$string['pluginname'] = 'AI Simulation';
$string['button'] = 'Insert AI Simulation';
$string['menuitem'] = 'AI Simulation...';
$string['dialogtitle'] = 'Insert / Edit AI Simulation';
$string['insert'] = 'Insert Simulation';
$string['update'] = 'Update Simulation';
$string['cancel'] = 'Cancel';
$string['privacy:metadata'] = 'The Tiny AI Simulation plugin does not store any personal data.';

// Simulation options.
$string['simtype'] = 'Simulation Type';
$string['sim_cm'] = 'Confusion Matrix & Classification Threshold';
$string['sim_gd'] = 'Gradient Descent Optimization';
$string['sim_reg'] = 'Polynomial Regression & Regularization';
$string['sim_knn'] = 'Decision Boundaries (k-NN & Decision Tree)';
$string['sim_km'] = 'K-Means Clustering';

$string['scenario'] = 'Domain Scenario / Dataset';
$string['threshold'] = 'Decision Threshold (θ)';
$string['costfunction'] = 'Cost Function J(w)';
$string['learningrate'] = 'Learning Rate (α)';
$string['initialweight'] = 'Initial Weight (w₀)';
$string['polydegree'] = 'Polynomial Degree (d)';
$string['regularization'] = 'Regularization (λ)';
$string['modeltype'] = 'Initial Model';
$string['neighbors_k'] = 'Nearest Neighbors (k)';
$string['maxdepth'] = 'Tree Max Depth';
$string['clusters_k'] = 'Number of Clusters (K)';
$string['readonly'] = 'Read-only mode (prevent student parameter modification)';
$string['doubleclick_hint'] = 'Double-click to edit simulation';

$string['preview'] = 'Simulation Preview';
$string['placeholder_note'] = 'The interactive simulation engine will render automatically in student and reader view.';
