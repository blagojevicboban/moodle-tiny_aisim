/**
 * Commands and event handlers for Tiny AI Simulation.
 *
 * @module tiny_aisim/commands
 * @copyright 2026 Boban Blagojević
 * @license http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

import {getString} from 'core/str';
import {component, buttonName, menuItemName, icon, iconSvg, dataAttribute, cardClass} from './common';
import {openDialog} from './ui';

/**
 * Check if the element is an AI simulation container or placeholder.
 *
 * @param {Element|null} node
 * @returns {Element|null}
 */
const findSimulationNode = (node) => {
    if (!node || node.nodeType !== Node.ELEMENT_NODE) {
        return null;
    }
    if (node.hasAttribute(dataAttribute)) {
        return node;
    }
    const card = node.closest(`.${cardClass}`) || node.closest(`[${dataAttribute}]`);
    return card || null;
};

/**
 * Set up commands for the editor instance.
 *
 * @returns {Promise<Function>}
 */
export const getSetup = async() => {
    const [buttonTitle, menuTitle] = await Promise.all([
        getString('button', component),
        getString('menuitem', component),
    ]);

    return (editor) => {
        editor.ui.registry.addIcon(icon, iconSvg);

        const open = (existingNode = null) => openDialog(editor, existingNode);

        editor.ui.registry.addButton(buttonName, {
            icon,
            tooltip: buttonTitle,
            onAction: () => open(null),
        });

        editor.ui.registry.addMenuItem(menuItemName, {
            icon,
            text: menuTitle,
            onAction: () => open(null),
        });

        editor.on('dblclick', (e) => {
            const simNode = findSimulationNode(e.target);
            if (simNode) {
                editor.selection.select(simNode);
                open(simNode);
            }
        });
    };
};

