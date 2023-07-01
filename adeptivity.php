<?php

/**
 * Plugin Name:       Adeptivity
 * Requires at least: 6.1
 * Requires PHP:      7.4
 * Version:           0.1.0
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       adeptivity
 *
 * @package           adeptivity
 */

declare(strict_types=1);

use Pimple\Container;

defined('ABSPATH') or exit('Not allowed');

require __DIR__ . '/vendor/autoload.php';



define('ASSETDIR', plugin_dir_url(__FILE__));

$container = new Container();

if (!defined('ADEPTIVITY_PLUGIN_NAME')) {
	define('ADEPTIVITY_PLUGIN_NAME', plugin_basename(__FILE__));
}
if (!defined('ADEPTIVITY_PLUGIN_DIR_PATH')) {
	define('ADEPTIVITY_PLUGIN_DIR_PATH', plugin_dir_path(__FILE__));
}
if (!defined('ADEPTIVITY_PLUGIN_URL')) {
	define('ADEPTIVITY_PLUGIN_URL', plugin_dir_url(__FILE__));
}
if (!defined('ADEPTIVITY_TEXTDOMAIN')) {
	define('ADEPTIVITY_TEXTDOMAIN', 'adeptivity');
}

require __DIR__ . '/includes/app/config.php';
require __DIR__ . '/includes/app/services.php';


$regBlock = $container['register_blocks']->add('dashboard')->add('loginform')->register();
$loginCustomizer = $container['login_page_customizer']->customize();



add_action(
	'admin_init',
	function () {
		if (!current_user_can('manage_options')) {
			wp_safe_redirect('/');
		}
	}
);


add_action('wp_loaded', function () {
	if (!current_user_can('manage_options')) {
		show_admin_bar(false);
	}
});