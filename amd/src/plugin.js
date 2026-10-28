/**
 * Tiny AI Simulation plugin entry point.
 *
 * @module tiny_aisim/plugin
 * @copyright 2026 Boban Blagojević
 * @license http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

import {getTinyMCE} from 'editor_tiny/loader';
import {getPluginMetadata} from 'editor_tiny/utils';
import {component, pluginName} from './common';
import * as Configuration from './configuration';
import {getSetup} from './commands';

/**
 * Initialize the plugin.
 *
 * @returns {Promise<Array>}
 */
const init = async() => {
    const [tinyMCE, setup, pluginMetadata] = await Promise.all([
        getTinyMCE(),
        getSetup(),
        getPluginMetadata(component, pluginName),
    ]);

    tinyMCE.PluginManager.add(pluginName, (editor) => {
        setup(editor);
        return pluginMetadata;
    });

    return [pluginName, Configuration];
};

export default init();

