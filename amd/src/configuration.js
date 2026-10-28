/**
 * Toolbar and menu configuration for Tiny AI Simulation.
 *
 * @module tiny_aisim/configuration
 * @copyright 2026 Boban Blagojević
 * @license http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

import {addMenubarItem, addToolbarButton, addToolbarSection} from 'editor_tiny/utils';
import {buttonName} from './common';

/**
 * Configure the toolbar to include the AI simulation button.
 *
 * @param {Array} toolbar
 * @returns {Array}
 */
const configureToolbar = (toolbar) => {
    addToolbarSection(toolbar, 'advanced', 'lists', true);
    return addToolbarButton(toolbar, 'advanced', buttonName);
};

/**
 * Configure editor instance menus and toolbars.
 *
 * @param {Object} instanceConfig
 * @returns {Object}
 */
export const configure = (instanceConfig) => ({
    menu: addMenubarItem(instanceConfig.menu, 'insert', buttonName),
    toolbar: configureToolbar(instanceConfig.toolbar),
});

