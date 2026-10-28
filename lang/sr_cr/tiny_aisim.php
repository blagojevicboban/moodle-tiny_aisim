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
 * Strings for component 'tiny_aisim', language 'sr_cr'.
 *
 * @package    tiny_aisim
 * @copyright  2026 Boban Blagojević
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

$string['pluginname'] = 'АИ Симулација';
$string['button'] = 'Убаци АИ симулацију';
$string['menuitem'] = 'АИ симулација...';
$string['dialogtitle'] = 'Уметање / Уређивање АИ симулације';
$string['insert'] = 'Убаци симулацију';
$string['update'] = 'Ажурирај симулацију';
$string['cancel'] = 'Откажи';
$string['privacy:metadata'] = 'Додатак Tiny АИ Симулација не чува никакве личне податке.';

// Опције симулација.
$string['simtype'] = 'Тип симулације';
$string['sim_cm'] = 'Матрица конфузије и праг одлучивања';
$string['sim_gd'] = 'Градијентни спуст (Gradient Descent)';
$string['sim_reg'] = 'Полиномска регресија и регуларизација';
$string['sim_knn'] = 'Границе одлучивања (k-NN и Стабло одлучивања)';
$string['sim_km'] = 'K-Means кластеровање';

$string['scenario'] = 'Практични сценарио / Скуп података';
$string['threshold'] = 'Праг одлучивања (θ)';
$string['costfunction'] = 'Функција трошка J(w)';
$string['learningrate'] = 'Стопа учења (α)';
$string['initialweight'] = 'Почетна тежина (w₀)';
$string['polydegree'] = 'Степен полинома (d)';
$string['regularization'] = 'Регуларизација (λ)';
$string['modeltype'] = 'Почетни модел';
$string['neighbors_k'] = 'Број суседа (k)';
$string['maxdepth'] = 'Максимална дубина стабла';
$string['clusters_k'] = 'Број кластера (K)';
$string['readonly'] = 'Режим само за читање (онемогући измену параметара полазницима)';
$string['doubleclick_hint'] = 'Двокликните за измену симулације';

$string['preview'] = 'Преглед симулације';
$string['placeholder_note'] = 'Интерактивна симулација ће се аутоматски учитати у приказу лекције или питања.';
