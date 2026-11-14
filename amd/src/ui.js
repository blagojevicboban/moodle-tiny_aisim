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
 * Modal dialog and UI handling for Tiny AI Simulation.
 *
 * The fields of every simulation are described in SIMS; the dialog is the tiny_aisim/dialog template, and the option
 * labels are the language strings the simulations themselves use (filter_aisim), so they are translated once.
 *
 * @module tiny_aisim/ui
 * @copyright 2026 Boban Blagojević
 * @license http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

import Modal from 'core/modal';
import Templates from 'core/templates';
import {getStrings} from 'core/str';
import {component, dataAttribute, cardClass, placeholderClass} from './common';

const FILTER = 'filter_aisim';

/**
 * A select field. Options are [value, label]; a label is a filter_aisim string identifier, or {text} for a literal.
 *
 * @param {String} name data-* attribute
 * @param {String} label tiny_aisim string identifier
 * @param {Array} options
 * @param {String} value default
 * @param {Number} col Bootstrap column width
 * @returns {Object}
 */
const select = (name, label, options, value, col = 6) => ({name, label, options, value, col});

/**
 * A number field.
 *
 * @param {String} name data-* attribute
 * @param {String} label tiny_aisim string identifier
 * @param {Array} range [min, max, step, digits]
 * @param {Number} value default
 * @param {Number} col Bootstrap column width
 * @param {String} suffix text after the label, e.g. a symbol
 * @returns {Object}
 */
const number = (name, label, range, value, col = 6, suffix = '') => {
    const [min, max, step, digits] = range;
    return {name, label, min, max, step, digits, value, col, suffix};
};

const text = (t) => ({text: t});
const numbers = (list, fmt = String) => list.map((n) => [String(n), text(fmt(n))]);

/** Convolution presets of filter_aisim. */
const KERNELS = ['identity', 'box', 'gaussian', 'sharpen', 'sobelx', 'sobely', 'laplacian', 'emboss'];

/** The simulations in the dialog: title string, icon and fields (their data-* attributes and defaults). */
const SIMS = [
    {sim: 'confusion_matrix', title: 'sim_cm', icon: '📊', fields: [
        select('scenario', 'scenario', [['quality', 'cm_scenarios_quality_name'], ['medical', 'cm_scenarios_medical_name'],
            ['spam', 'cm_scenarios_spam_name']], 'quality'),
        number('threshold', 'threshold', [0.05, 0.95, 0.05, 2], 0.5),
    ]},
    {sim: 'gradient_descent', title: 'sim_gd', icon: '⚡', fields: [
        select('profile', 'costfunction', [['convex', 'gd_convex'], ['nonconvex', 'gd_nonconvex'], ['plateau', 'gd_plateau']],
            'convex', 12),
        number('lr', 'learningrate', [0.01, 1.5, 0.01, 2], 0.1),
        number('w0', 'initialweight', [-5, 5, 0.1, 2], 3.5),
    ]},
    {sim: 'regression', title: 'sim_reg', icon: '📈', fields: [
        select('dataset', 'scenario', [['sine', 'reg_datasets_sine'], ['quadratic', 'reg_datasets_quadratic'],
            ['engine', 'reg_datasets_engine']], 'sine', 12),
        select('degree', 'polydegree', numbers([1, 2, 3, 4, 5, 6, 7, 8, 9]), '3'),
        number('lambda', 'regularization', [0, 0.5, 0.01, 2], 0),
    ]},
    {sim: 'knn_tree', title: 'sim_knn', icon: '🌲', fields: [
        select('model', 'modeltype', [['knn', 'knn_knn_model'], ['tree', 'knn_tree_model']], 'knn'),
        select('dataset', 'scenario', [['moons', 'knn_datasets_moons'], ['circles', 'knn_datasets_circles'],
            ['blobs', 'knn_datasets_blobs']], 'moons'),
        select('k', 'neighbors_k', numbers([1, 3, 5, 7, 9, 15]), '3'),
        select('depth', 'maxdepth', numbers([1, 2, 3, 4, 5, 6]), '3'),
    ]},
    {sim: 'kmeans', title: 'sim_km', icon: '🎯', fields: [
        select('dataset', 'scenario', [['blobs3', 'km_datasets_blobs3'], ['blobs4', 'km_datasets_blobs4'],
            ['uniform', 'km_datasets_uniform']], 'blobs3'),
        select('k', 'clusters_k', numbers([2, 3, 4, 5, 6]), '3'),
    ]},
    {sim: 'neural_network', title: 'sim_nn', icon: '🧠', fields: [
        select('dataset', 'scenario', [['linear', 'nn_datasets_linear'], ['xor', 'nn_datasets_xor'],
            ['circles', 'nn_datasets_circles']], 'xor'),
        select('layers', 'hiddenlayers', [['0', 'nn_layers0'], ['1', text('1')], ['2', text('2')]], '1'),
        select('neurons', 'neuronsperlayer', numbers([1, 2, 3, 4, 5, 6, 7, 8]), '4', 4),
        select('activation', 'activationfn', [['tanh', text('tanh')], ['sigmoid', text('sigmoid')], ['relu', text('ReLU')]],
            'tanh', 4),
        number('lr', 'learningrate', [0.01, 3, 0.01, 2], 0.3, 4),
    ]},
    {sim: 'convolution', title: 'sim_conv', icon: '🖼️', fields: [
        select('image', 'image', ['shapes', 'stripes', 'face', 'noisy'].map((k) => [k, 'conv_images_' + k]), 'shapes', 4),
        select('preset', 'filter', KERNELS.map((k) => [k, 'conv_presets_' + k]), 'identity', 4),
        select('target', 'targetfilter', [['', 'notarget']].concat(
            KERNELS.filter((k) => k !== 'identity').map((k) => [k, 'conv_presets_' + k])), '', 4),
    ]},
    {sim: 'q_learning', title: 'sim_ql', icon: '🤖', fields: [
        select('map', 'gridmap', ['maze', 'cliff', 'treasure'].map((k) => [k, 'ql_maps_' + k]), 'maze'),
        number('alpha', 'learningrate', [0.05, 1, 0.05, 2], 0.5, 6, 'α'),
        number('gamma', 'discount', [0, 1, 0.05, 2], 0.9, 6, 'γ'),
        number('epsilon', 'exploration', [0, 1, 0.05, 2], 0.2, 6, 'ε'),
    ]},
    {sim: 'data_bias', title: 'sim_db', icon: '⚖️', fields: [
        select('population', 'population', ['shifted', 'similar'].map((k) => [k, 'db_populations_' + k]), 'shifted'),
        number('n', 'samplesize', [40, 400, 20, 0], 200),
        number('share', 'groupshare', [0, 50, 5, 0], 5, 4, '%'),
        number('test', 'testshare', [10, 50, 5, 0], 25, 4, '%'),
        number('k', 'neighbors_k', [1, 25, 2, 0], 5, 4),
    ]},
    {sim: 'logistic', title: 'sim_log', icon: '📉', fields: [
        select('dataset', 'scenario', ['machine', 'exam', 'ring'].map((k) => [k, 'log_datasets_' + k]), 'machine', 12),
        number('w1', 'weight1', [-8, 8, 0.1, 2], 0, 4),
        number('w2', 'weight2', [-8, 8, 0.1, 2], 0, 4),
        number('b', 'bias', [-8, 8, 0.1, 2], 0, 4),
        number('threshold', 'threshold', [0.05, 0.95, 0.05, 2], 0.5),
        number('lr', 'learningrate', [0.05, 3, 0.05, 2], 0.5),
    ]},
];

/** Strings of tiny_aisim the dialog uses (besides the field labels and simulation titles). */
const OWN = ['dialogtitle', 'insert', 'update', 'cancel', 'simtype', 'readonly', 'doubleclick_hint', 'preview',
    'placeholder_note', 'notarget'];

/**
 * Load every string of the dialog: tiny_aisim labels and the filter_aisim option labels.
 *
 * @returns {Promise<Object>} {own: {key: text}, filter: {key: text}}
 */
const loadStrings = async() => {
    const own = new Set(OWN);
    const filter = new Set();
    SIMS.forEach((s) => {
        own.add(s.title);
        s.fields.forEach((f) => {
            own.add(f.label);
            (f.options || []).forEach(([, label]) => {
                if (typeof label !== 'string') {
                    return;
                }
                (label === 'notarget' ? own : filter).add(label);
            });
        });
    });
    const requests = [...own].map((key) => ({key, component}))
        .concat([...filter].map((key) => ({key, component: FILTER})));
    const values = await getStrings(requests);
    const result = {own: {}, filter: {}};
    requests.forEach((r, i) => {
        result[r.component === FILTER ? 'filter' : 'own'][r.key] = values[i];
    });
    return result;
};

/**
 * Text of an option label.
 *
 * @param {String|Object} label
 * @param {Object} s strings from loadStrings()
 * @returns {String}
 */
const optionText = (label, s) => {
    if (typeof label !== 'string') {
        return label.text;
    }
    return label === 'notarget' ? s.own.notarget : s.filter[label];
};

/**
 * The editor card (placeholder) of a simulation, as a DOM element.
 *
 * @param {Object} summary {icon, title, desc}
 * @param {String} hint text of the pill
 * @returns {HTMLElement}
 */
const placeholder = (summary, hint) => {
    const el = (tag, cls, content) => {
        const node = document.createElement(tag);
        node.className = cls;
        node.textContent = content;
        return node;
    };
    const box = el('div', placeholderClass, '');
    box.append(el('div', 'aisim-ph-icon', summary.icon), el('div', 'aisim-ph-title', summary.title),
        el('div', 'aisim-ph-desc', summary.desc), el('span', 'aisim-ph-pill', hint));
    return box;
};

/**
 * Summary of a simulation for the editor card: its title and the chosen values.
 *
 * @param {Object} def entry of SIMS
 * @param {Object} attrs data-* values
 * @param {Object} s strings
 * @returns {{icon: String, title: String, desc: String}}
 */
const summarise = (def, attrs, s) => ({
    icon: def.icon,
    title: s.own[def.title],
    desc: def.fields.map((f) => {
        let value = attrs[f.name];
        if (f.options) {
            const option = f.options.find(([v]) => v === value);
            value = option ? optionText(option[1], s) : value;
        }
        return `${s.own[f.label]}${f.suffix ? ' ' + f.suffix : ''}: ${value}`;
    }).join(' | '),
});

/**
 * The simulation element inserted into the text: data-* attributes and the card shown in the editor.
 *
 * @param {Object} def entry of SIMS
 * @param {Object} attrs data-* values
 * @param {Object} s strings
 * @returns {String} HTML
 */
const buildSimulationHtml = (def, attrs, s) => {
    const card = document.createElement('div');
    card.className = cardClass;
    card.setAttribute(dataAttribute, def.sim);
    Object.entries(attrs).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
            card.setAttribute('data-' + key, value);
        }
    });
    const ph = placeholder(summarise(def, attrs, s), s.own.doubleclick_hint);
    ph.setAttribute('contenteditable', 'false');
    card.append(ph);
    return card.outerHTML;
};

/**
 * Template context of the dialog.
 *
 * @param {String} curSim simulation selected at the start
 * @param {Function} curAttr (name, fallback) => value of the edited element
 * @param {Boolean} readonly
 * @param {Object} s strings
 * @returns {Object}
 */
const dialogContext = (curSim, curAttr, readonly, s) => ({
    simtypes: SIMS.map((d) => ({value: d.sim, label: s.own[d.title], selected: d.sim === curSim})),
    panels: SIMS.map((d) => ({
        sim: d.sim,
        hidden: d.sim !== curSim,
        fields: d.fields.map((f) => {
            // Attributes such as dataset or k mean different things in different simulations: use the edited value
            // only for the simulation that is being edited.
            const value = String(d.sim === curSim ? curAttr('data-' + f.name, f.value) : f.value);
            const field = {
                id: `aisim-${d.sim}-${f.name}`,
                label: s.own[f.label] + (f.suffix ? ' ' + f.suffix : ''),
                col: f.col,
            };
            if (f.options) {
                field.isselect = true;
                field.options = f.options.map(([v, label]) => ({value: v, label: optionText(label, s), selected: v === value}));
            } else {
                Object.assign(field, {isnumber: true, min: f.min, max: f.max, step: f.step, value});
            }
            return field;
        }),
    })),
    readonly,
    s: s.own,
});

/**
 * Open the simulation configuration dialog.
 *
 * @param {Object} editor TinyMCE editor instance
 * @param {Element|null} existingNode Existing simulation element if editing
 */
export const openDialog = async(editor, existingNode = null) => {
    const s = await loadStrings();
    const isEdit = Boolean(existingNode);
    // Attribute of the simulation being edited, or the default for a new one.
    const curAttr = (name, fallback) => (existingNode && existingNode.getAttribute(name)) || fallback;
    const found = curAttr(dataAttribute, 'confusion_matrix').replace(/-/g, '_');
    const curSim = SIMS.some((d) => d.sim === found) ? found : 'confusion_matrix';

    const context = dialogContext(curSim, curAttr, curAttr('data-readonly', '0') === '1', s);
    const modal = await Modal.create({
        title: s.own.dialogtitle,
        body: Templates.render('tiny_aisim/dialog', context),
        footer: Templates.render('tiny_aisim/dialog_footer', {submit: isEdit ? s.own.update : s.own.insert, s: s.own}),
        large: true,
        show: true,
        removeOnClose: true,
    });
    await modal.getBodyPromise();
    await modal.getFooterPromise();

    const root = modal.getRoot()[0];
    const simSelect = root.querySelector('#aisim-simtype-select');
    const previewContainer = root.querySelector('#aisim-preview-container');

    /**
     * The chosen simulation and its data-* values, numbers kept within their limits.
     *
     * @returns {{def: Object, attrs: Object}}
     */
    const getFormData = () => {
        const def = SIMS.find((d) => d.sim === simSelect.value);
        const attrs = {readonly: root.querySelector('#aisim-opt-readonly').checked ? '1' : '0'};
        def.fields.forEach((f) => {
            const input = root.querySelector(`#aisim-${def.sim}-${f.name}`);
            if (f.options) {
                attrs[f.name] = input.value;
            } else {
                const v = parseFloat(input.value);
                attrs[f.name] = (isFinite(v) ? Math.min(f.max, Math.max(f.min, v)) : f.value).toFixed(f.digits);
            }
        });
        return {def, attrs};
    };

    const updateUi = () => {
        root.querySelectorAll('.aisim-panel-group').forEach((p) => {
            p.hidden = p.getAttribute('data-sim') !== simSelect.value;
        });
        const {def, attrs} = getFormData();
        const ph = placeholder(summarise(def, attrs, s), s.own.doubleclick_hint);
        ph.classList.add('my-2');
        previewContainer.replaceChildren(ph);
    };

    root.addEventListener('input', updateUi);
    root.addEventListener('change', updateUi);
    updateUi();

    root.querySelector('[data-action="submit"]').addEventListener('click', (e) => {
        e.preventDefault();
        const {def, attrs} = getFormData();
        const newHtml = buildSimulationHtml(def, attrs, s);
        if (isEdit && existingNode) {
            editor.dom.setOuterHTML(existingNode, newHtml);
        } else {
            editor.insertContent(newHtml);
        }
        modal.destroy();
    });
    root.querySelector('[data-action="cancel"]').addEventListener('click', (e) => {
        e.preventDefault();
        modal.destroy();
    });
};
