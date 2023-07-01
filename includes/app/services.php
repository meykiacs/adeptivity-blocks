<?php 
declare(strict_types=1);

use Adeptivity\Service\RegisterBlocks;

$container['register_blocks'] = fn($c) => new RegisterBlocks($c['register_blocks.dirpath']);