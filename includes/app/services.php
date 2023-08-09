<?php 
declare(strict_types=1);

use Adeptivity\Service\RegisterBlocks;
use Adeptivity\Service\LoginPageCustomizer;
use Adeptivity\Service\Auth;
use Adeptivity\Service\Rest;
use Adeptivity\Service\MemberPress;
use Adeptivity\Service\Gravity;

$container['register_blocks'] = fn($c) => new RegisterBlocks($c['register_blocks.dirpath']);
$container['login_page_customizer'] = fn($c) => new LoginPageCustomizer($c['login_page_customizer.stylefile']);
$container['auth'] = fn($c) => new Auth();
$container['rest'] = fn($c) => new Rest();
$container['memberpress'] = fn($c) => new MemberPress();
$container['gravity'] = fn($c) => new Gravity();