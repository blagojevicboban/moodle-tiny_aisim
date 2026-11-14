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
 * Common configuration and constants for Tiny AI Simulation.
 *
 * @module tiny_aisim/common
 * @copyright 2026 Boban Blagojević
 * @license http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

export const component = 'tiny_aisim';
export const pluginName = `${component}/plugin`;
export const buttonName = component;
export const menuItemName = component;
export const icon = `${component}_icon`;
export const dataAttribute = 'data-aisim';
export const cardClass = 'aisim-simulation-card';
export const placeholderClass = 'aisim-editor-placeholder';

export const iconSvg =
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" ' +
    'stroke-linecap="round" stroke-linejoin="round"/>' +
    '<path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" ' +
    'stroke-linecap="round" stroke-linejoin="round"/>' +
    '<path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" ' +
    'stroke-linecap="round" stroke-linejoin="round"/>' +
    '</svg>';

