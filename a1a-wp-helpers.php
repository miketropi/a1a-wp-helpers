<?php
/**
 * Plugin Name:       A1a Wp Helpers
 * Description:       A1A Block.
 * Requires at least: 6.6
 * Requires PHP:      7.2
 * Version:           0.1.0
 * Author:            Mike
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       a1a-wp-helpers
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

{
	/**
	 * define
	 */
	define('A1AWH_VERSION', '0.1.0');
	define('A1AWH_URL', plugin_dir_url( __FILE__ ));
	define('A1AWH_DIR', plugin_dir_path( __FILE__ ));
}

/**
 * Inc 
 */
require_once(A1AWH_DIR . '/inc/helpers.php');
require_once(A1AWH_DIR . '/inc/hooks.php');
require_once(A1AWH_DIR . '/inc/ajax.php');
require_once(A1AWH_DIR . '/inc/static.php');
require_once(A1AWH_DIR . '/inc/template-tags.php');

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_a1a_wp_helpers_block_init() {
	register_block_type( __DIR__ . '/build/table-of-content' ); 
	// register_block_type( __DIR__ . '/build/membership' ); 
}
add_action( 'init', 'create_block_a1a_wp_helpers_block_init' );
