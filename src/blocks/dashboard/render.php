<?php

/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

function courseInfo()
{

	$user_id = get_current_user_id();
	$enrolled_courses = learndash_user_get_enrolled_courses($user_id);

	$course_info = array();

	foreach ($enrolled_courses as $course_id) {
		$id = $course_id;
		$course_title = get_the_title($course_id);
		$course_url = get_permalink($course_id);
		$course_categories = wp_get_object_terms($course_id, 'ld_course_category');
		$course_tags = wp_get_object_terms($course_id, 'ld_course_tag');
		$course_image = get_the_post_thumbnail_url($course_id, 'medium');

		$course_progress = learndash_course_progress(array('user_id' => $user_id, 'course_id' => $course_id));

		$course_status = 'not-started';



		if (is_array($course_progress) && isset($course_progress['total_steps'])) {
			if ($course_progress['total_steps'] > 0) {
				if ($course_progress['completed_steps'] === $course_progress['total_steps']) {
					$course_status = 'completed';
				} elseif ($course_progress['completed_steps'] > 0) {
					$course_status = 'in-progress';
				}
			}
		}

		$course_categories_names = array();
		$course_tags_names = array();

		// Get category names
		if (!empty($course_categories) && !is_wp_error($course_categories)) {
			foreach ($course_categories as $category) {
				$course_categories_names[] = $category->slug;
			}
		}

		// Get tag names
		if (!empty($course_tags) && !is_wp_error($course_tags)) {
			foreach ($course_tags as $tag) {
				$course_tags_names[] = $tag->slug;
			}
		}

		// Build course information array
		$course_info[] = array(
			'id' => $id,
			'title' => $course_title,
			'url' => $course_url,
			'categories' => array_values($course_categories_names),
			'tags' => array_values($course_tags_names),
			'image' => $course_image,
			'status' => $course_status
		);
	}

	return ($course_info);
}

// var_dump(courseInfo()[0]); wp_die();

add_filter(
	'auth_redirect_scheme',
	function () {
		return 'logged_in';
	}
);

auth_redirect();

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
	// $field_id = 'created_by';
	// $filtered_entries = array_filter($entries, function ($entry) use ($field_id, $cu_user_id) {
	// return rgar($entry, $field_id) == $cu_user_id;
	// });

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

function adeptivity_max_scores()
{
	return [
		'divergent' => empty(adeptivity_score_history_by_cat('divergent')) ? 0 : max(adeptivity_score_history_by_cat('divergent')),
		'lateral' => empty(adeptivity_score_history_by_cat('lateral')) ? 0 : max(adeptivity_score_history_by_cat('lateral')),
		'aesthetic' => empty(adeptivity_score_history_by_cat('aesthetic')) ? 0 : max(adeptivity_score_history_by_cat('aesthetic')),
		'system' => empty(adeptivity_score_history_by_cat('system')) ? 0 : max(adeptivity_score_history_by_cat('system')),
		'inspirational' => empty(adeptivity_score_history_by_cat('inspirational')) ? 0 : max(adeptivity_score_history_by_cat('inspirational')),
	];
}


function adeptivity_max_scores_array()
{
	return [
		empty(adeptivity_score_history_by_cat('divergent')) ? 0 : max(adeptivity_score_history_by_cat('divergent')),
		empty(adeptivity_score_history_by_cat('lateral')) ? 0 : max(adeptivity_score_history_by_cat('lateral')),
		empty(adeptivity_score_history_by_cat('aesthetic')) ? 0 : max(adeptivity_score_history_by_cat('aesthetic')),
		empty(adeptivity_score_history_by_cat('system')) ? 0 : max(adeptivity_score_history_by_cat('system')),
		empty(adeptivity_score_history_by_cat('inspirational')) ? 0 : max(adeptivity_score_history_by_cat('inspirational')),
	];
}

$scoreSummaryArray = adeptivity_max_scores_array();
$scoreByCat = adeptivity_max_scores();

$allClasses = array_values(adeptivity_entries_for_dashboard());
$analyzedClasses = array_values(array_filter($allClasses, function ($entry) {
	return $entry['analyzed'];
}));
$latestClasses = array_slice(
	$allClasses,
	0,
	3
);

?>

<?php

$basename = parse_url(home_url())['path'] ?? '';
$logouturl = wp_logout_url();
$videoEndpoint = get_rest_url(null, 'adeptivity/v1/video');
$lectureEndpoint = get_rest_url(null, 'adeptivity/v1/lecture');
?>
<div id="root" <?php echo get_block_wrapper_attributes(); ?> data-assetdir="<?php echo esc_attr(ASSETURL) ?>"
	data-basename="<?php echo esc_url($basename) ?>" data-logouturl="<?php echo esc_url($logouturl) ?>"
	data-video-endpoint="<?php echo esc_url($videoEndpoint) ?>"
	data-lecture-endpoint="<?php echo esc_url($lectureEndpoint) ?>"
	data-nonce="<?php echo wp_create_nonce('wp_rest'); ?>">

</div>
<pre style="display: none !important" id="score-summary">
	<?php echo wp_json_encode($scoreSummaryArray); ?>
</pre>
<pre style="display: none !important" id="score-by-cat">
	<?php echo wp_json_encode($scoreByCat); ?>
</pre>
<pre style="display: none !important" id="latest-classes">
	<?php echo wp_json_encode($latestClasses); ?>
</pre>
<pre style="display: none !important" id="all-classes">
	<?php echo wp_json_encode($allClasses); ?>
</pre>
<pre style="display: none !important" id="analyzed-classes">
	<?php echo wp_json_encode($analyzedClasses); ?>
</pre>
<pre style="display: none !important" id="courses-info">
	<?php echo wp_json_encode(array_values(courseInfo())); ?>
</pre>
