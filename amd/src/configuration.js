/**
 * Toolbar and menu configuration for Tiny AI Simulation.
 *
 * @module tiny_aisim/configuration
 * @copyright 2026 Boban Blagojević
 * @license http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

import {addMenubarItem, addToolbarButton} from 'editor_tiny/utils';
import {buttonName} from './common';

/**
 * Configure editor instance menus and toolbars.
 *
 * @param {Object} instanceConfig
 * @returns {Object}
 */
export const configure = (instanceConfig) => ({
    menu: addMenubarItem(instanceConfig.menu, 'insert', buttonName),
    toolbar: addToolbarButton(instanceConfig.toolbar, 'content', buttonName),
});

