<?php
/**
 * Plugin Name: Core Style
 * Description: Add a few extra style options to core blocks.
 * Requires at least: 5.8
 * Requires PHP: 7.0
 * Version: 0.1.0
 * Author: The WordPress Contributors
 * License: GPL-2.0-or-later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: core-style
 */

add_action('enqueue_block_editor_assets', function() {
	$asset = include plugin_dir_path(__FILE__) . 'build/index.asset.php';

    wp_enqueue_script('core-style', plugins_url('build/index.js', __FILE__), $asset['dependencies'], $asset['version']);
});

add_action('enqueue_block_assets', function() {
    wp_enqueue_style('core-style', plugins_url('build/style-index.css', __FILE__));
});
