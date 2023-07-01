<?php 
declare(strict_types=1);

use Adeptivity\Service\RegisterBlocks;
use Adeptivity\Service\LoginPageCustomizer;

$container['register_blocks'] = fn($c) => new RegisterBlocks($c['register_blocks.dirpath']);
$container['login_page_customizer'] = fn($c) => new LoginPageCustomizer($c['login_page_customizer.stylefile']);