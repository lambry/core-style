<?php
/**
 * Plugin Name: Xtnd
 * Plugin URI: https://github.com/lambry/xtnd/
 * Description: Extending WordPress blocks with extra display options.
 * Requires at least: 5.8
 * Requires PHP: 7.0
 * Version: 0.2.0
 * Author: Lambry
 * Author URI: https://lambry.com/
 * License: GPL-2.0-or-later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: xtnd
 */

$asset = include plugin_dir_path(__FILE__) . 'build/editor/index.asset.php';

/**
 * Admin only assets.
 */
add_action('enqueue_block_editor_assets', function() use($asset) {
    wp_enqueue_script('xtnd-script', plugins_url('build/editor/index.js', __FILE__), $asset['dependencies'], $asset['version']);
});

/**
 * Admin/frontend assets.
 */
add_action('enqueue_block_assets', function() use($asset) {
	wp_enqueue_style('xtnd-style', plugins_url('build/editor/style-index.css', __FILE__), [], $asset['version']);
});

/**
 * Frontend only assets.
 */
add_action('wp_enqueue_scripts', function() {
	$asset = include plugin_dir_path(__FILE__) . 'build/frontend/index.asset.php';

	wp_enqueue_script('xtnd-script-frontend', plugins_url('build/frontend/index.js', __FILE__), $asset['dependencies'], $asset['version'], true);
	wp_enqueue_style('xtnd-style-frontend', plugins_url('build/frontend/style-index.css', __FILE__), [], $asset['version']);
});
