<?php
if (is_admin() && !wp_doing_ajax()) {
	// Return early without rendering the block in the editor
	return '';
}

global $container;

if (!is_user_logged_in()) {
	$current_page = $_SERVER['REQUEST_URI'];
	wp_safe_redirect($container['auth.login_url'] . '?redirect_to=' . $current_page);
	exit;
} else {
	if (!$container['memberpress']->isUserSchool()) {
		wp_safe_redirect($container['auth.teacher_home_url']);
		exit;
	}
}


$subUsers = $container['memberpress']->getSubUsers();

$gravity = $container['gravity'];


$teachers = [];
for ($i = 0; $i < count($subUsers); $i++) {
	$user = get_user_meta($subUsers[$i]);
	$user_id = $subUsers[$i];
	$teachers[] = [
		'id' => $i,
		'name' => $user['first_name'] ?? '',
		'family' => $user['last_name'] ?? '',
		'timeEmployed' => $user['mepr_teaching_experience'] ?? '',
		'dep' => $user['mepr_expert_in'] ?? '',
		'scoreHistory' => $container['gravity']->scoreHistoryByUser($user_id),
	];
}


$logouturl = wp_logout_url();
?>
<div id="principal" data-assetdir="<?php echo esc_attr(ADEPTIVITY_ASSETURL) ?>"
	data-nonce="<?php echo wp_create_nonce('wp_rest'); ?>"
	data-logouturl="<?php echo esc_attr(esc_url(wp_logout_url())); ?>">
</div>

<pre style="display: none !important" id="teachers">
	<?php echo wp_json_encode(array_values($teachers)); ?>
</pre>