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
use Adeptivity\Model\Rest\LecturePost;
use Adeptivity\Model\Rest\VideoPost;
use Adeptivity\Model\Rest\VideoDelete;
use Adeptivity\Model\Rest\Route;

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


$regBlock = $container['register_blocks']
	->add('dashboard')
	->add('auth')
	->register();

$loginCustomizer = $container['login_page_customizer']->customize();
$auth = $container['auth']->redirectNonAdminFromAdminPanel()->removeAdminBarForNonAdmins();

$lecturePost = new LecturePost();
$videoPost = new VideoPost();
$videoDelete = new VideoDelete();

$videoRoute = new Route('adeptivity/v1', 'video');
$videoRoute->addEndpoint($videoPost)->addEndpoint($videoDelete);
$lectureRoute = new Route('adeptivity/v1', 'lecture');
$lectureRoute->addEndpoint($lecturePost);

$rest = $container['rest']
	->addRoute($lectureRoute)
	->addRoute($videoRoute)
	->register();
