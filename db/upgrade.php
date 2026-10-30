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
 * Upgrade steps for tiny_aisim.
 *
 * @package    tiny_aisim
 * @copyright  2026 Boban Blagojević
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

/**
 * Upgrade tiny_aisim.
 *
 * @param int $oldversion the version we are upgrading from
 * @return bool
 */
function xmldb_tiny_aisim_upgrade($oldversion) {
    if ($oldversion < 2026103000) {
        // Students no longer get the button by default: remove the 0.5.0 default from student roles.
        $context = context_system::instance();
        foreach (get_archetype_roles('student') as $role) {
            unassign_capability('tiny/aisim:viewplugin', $role->id, $context->id);
        }
        upgrade_plugin_savepoint(true, 2026103000, 'tiny', 'aisim');
    }

    return true;
}
