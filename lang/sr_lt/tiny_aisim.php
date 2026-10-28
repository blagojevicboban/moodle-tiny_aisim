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
 * Strings for component 'tiny_aisim', language 'sr_lt'.
 *
 * @package    tiny_aisim
 * @copyright  2026 Boban Blagojević
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

$string['pluginname'] = 'AI Simulacija';
$string['button'] = 'Ubaci AI simulaciju';
$string['menuitem'] = 'AI simulacija...';
$string['dialogtitle'] = 'Umetanje / Uređivanje AI simulacije';
$string['insert'] = 'Ubaci simulaciju';
$string['update'] = 'Ažuriraj simulaciju';
$string['cancel'] = 'Otkaži';
$string['privacy:metadata'] = 'Dodatak Tiny AI Simulacija ne čuva nikakve lične podatke.';

// Opcije simulacija.
$string['simtype'] = 'Tip simulacije';
$string['sim_cm'] = 'Matrica konfuzije i prag odlučivanja';
$string['sim_gd'] = 'Gradijentni spust (Gradient Descent)';
$string['sim_reg'] = 'Polinomska regresija i regularizacija';
$string['sim_knn'] = 'Granice odlučivanja (k-NN i Stablo odlučivanja)';
$string['sim_km'] = 'K-Means klasterovanje';

$string['scenario'] = 'Praktični scenario / Skup podataka';
$string['threshold'] = 'Prag odlučivanja (θ)';
$string['costfunction'] = 'Funkcija troška J(w)';
$string['learningrate'] = 'Stopa učenja (α)';
$string['initialweight'] = 'Početna težina (w₀)';
$string['polydegree'] = 'Stepen polinoma (d)';
$string['regularization'] = 'Regularizacija (λ)';
$string['modeltype'] = 'Početni model';
$string['neighbors_k'] = 'Broj suseda (k)';
$string['maxdepth'] = 'Maksimalna dubina stabla';
$string['clusters_k'] = 'Broj klastera (K)';
$string['readonly'] = 'Režim samo za čitanje (onemogući izmenu parametara polaznicima)';
$string['doubleclick_hint'] = 'Dvokliknite za izmenu simulacije';

$string['preview'] = 'Pregled simulacije';
$string['placeholder_note'] = 'Interaktivna simulacija će se automatski učitati u prikazu lekcije ili pitanja.';
