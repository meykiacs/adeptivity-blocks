<?php
/**
 * Plugin Name:       Adeptivity Blocks
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       adeptivity-blocks
 *
 * @package           adeptivity
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

define('ASSETDIR', plugin_dir_url( __FILE__));


function adeptivity_blocks_block_init() {
	register_block_type( __DIR__ . '/build/blocks/dashboard' );
}
add_action( 'init', 'adeptivity_blocks_block_init' );
