<?php

/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

if (!is_user_logged_in()) {
	wp_safe_redirect(home_url('/login'));
	exit;
}

function adeptivity_entries_by_user()
{
	$table_id = '1';
	// $cu_user_id = wp_get_current_user()->ID;
	$entries = GFAPI::get_entries($table_id, [
		'status' => 'active',
		'field_filters' => [
			[
				'key' => 'created_by',
				'value' => get_current_user_id()
			]
		]
	]);

	return $entries;
}

function adeptivity_entries_for_dashboard()
{
	return array_map(function ($e) {
		return [
			'id' => $e['id'],
			'attendees' => $e['5'],
			'video' => $e['1'],
			'createdAt' => $e['date_created'],
			'title' => $e['3'],
			'course' => $e['4'],
			'grade' => $e['23'],
			'date' => $e['24'],
			'divergent' => intval($e['10']),
			'lateral' => intval($e['14']),
			'aesthetic' => intval($e['13']),
			'system' => intval($e['11']),
			'inspirational' => intval($e['12']),
			'analyzed' => (!empty($e['10'])) &&
			(!empty($e['14'])) &&
			(!empty($e['13'])) &&
			(!empty($e['11'])) &&
			(!empty($e['12']))
		];
	}, adeptivity_entries_by_user());
}

function adeptivity_score_history_by_cat($cat)
{
	return array_reduce(
		adeptivity_entries_for_dashboard(),
		function ($carry, $item) use ($cat) {
			array_push($carry, $item[$cat]);
			return $carry;
		},
		[]
	);
}

function adeptivity_score_history()
{
	return [
		adeptivity_score_history_by_cat('divergent'),
		adeptivity_score_history_by_cat('lateral'),
		adeptivity_score_history_by_cat('aesthetic'),
		adeptivity_score_history_by_cat('system'),
		adeptivity_score_history_by_cat('inspirational'),
	];
}



$logouturl = wp_logout_url();
?>
<div id="principal" data-assetdir="<?php echo esc_attr(ADEPTIVITY_ASSETURL) ?>"
	data-nonce="<?php echo wp_create_nonce('wp_rest'); ?>">
</div>

<pre style="display: none !important" id="score-history">
	<?php echo wp_json_encode(array_values(adeptivity_score_history())); ?>
</pre>