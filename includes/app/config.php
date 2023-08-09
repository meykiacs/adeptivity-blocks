<?php 
$container['register_blocks.dirpath'] = ADEPTIVITY_PLUGIN_DIR_PATH . 'build/blocks/';
$container['login_page_customizer.stylefile'] = ADEPTIVITY_PLUGIN_DIR_PATH . 'styles/login.php';
$container['auth.login_url'] = home_url(ADEPTIVITY_LOGIN_SLUG);
$container['auth.teacher_home_url'] = home_url(ADEPTIVITY_TEACHER_DASH_SLUG);
$container['auth.school_home_url'] = home_url(ADEPTIVITY_SCHOOL_DASH_SLUG);