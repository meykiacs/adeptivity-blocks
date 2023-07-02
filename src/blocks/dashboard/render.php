<?php

/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

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
  $cu_user_id = wp_get_current_user()->ID;
  $entries = GFAPI::get_entries($table_id);
  $field_id = 'created_by';
  $filtered_entries = array_filter($entries, function ($entry) use ($field_id, $cu_user_id) {
    return rgar($entry, $field_id) == $cu_user_id;
  });

  return $filtered_entries;
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
      'divergent' => $e['10'],
      'lateral' => $e['14'],
      'aesthetic' => $e['13'],
      'system' => $e['11'],
      'inspirational' => $e['12'],
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

$allClasses =array_values(adeptivity_entries_for_dashboard());
$analyzedClasses = array_filter($allClasses, function ($entry) {
  return $entry['analyzed'];
});
$latestClasses = array_slice(
  $allClasses,
  0,
  3
);

?>

<?php

$basename = parse_url(home_url())['path'] ?? '';
$logouturl = wp_logout_url();

?>
<div 
  id="root" 
  <?php echo get_block_wrapper_attributes(); ?>
  data-assetdir="<?php echo esc_attr(ASSETDIR) ?>"
  data-basename="<?php echo esc_url($basename) ?>"
  data-logouturl="<?php echo esc_url($logouturl) ?>"
>

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