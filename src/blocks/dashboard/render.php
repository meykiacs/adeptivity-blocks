<?php

/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

function adeptivity_blocks_entries_by_user()
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

function adeptivity_blocks_entries_for_dashboard()
{
  return array_map(function ($e) {
    return [
      'id' => $e['id'],
      'video' => $e['1'],
      'created_at' => $e['date_created'],
      'lecture_name' => $e['3'],
      'course_name' => $e['4'],
      'divergent' => $e['10'],
      'lateral' => $e['14'],
      'aesthetic' => $e['13'],
      'system' => $e['11'],
      'inspirational' => $e['12'],
    ];
  }, adeptivity_blocks_entries_by_user());
}

function adeptivity_blocks_score_history_by_cat($cat)
{
  return array_reduce(
    adeptivity_blocks_entries_for_dashboard(),
    function ($carry, $item) use ($cat) {
      array_push($carry, $item[$cat]);
      return $carry;
    },
    []
  );
}

function adeptivity_blocks_max_scores()
{
  return [
    'divergent' => max(adeptivity_blocks_score_history_by_cat('divergent')),
    'lateral' => max(adeptivity_blocks_score_history_by_cat('lateral')),
    'aesthetic' => max(adeptivity_blocks_score_history_by_cat('aesthetic')),
    'system' => max(adeptivity_blocks_score_history_by_cat('system')),
    'inspirational' => max(adeptivity_blocks_score_history_by_cat('inspirational')),
  ];
}
function adeptivity_blocks_max_scores_array()
{
  return [
    max(adeptivity_blocks_score_history_by_cat('divergent')),
    max(adeptivity_blocks_score_history_by_cat('lateral')),
    max(adeptivity_blocks_score_history_by_cat('aesthetic')),
    max(adeptivity_blocks_score_history_by_cat('system')),
    max(adeptivity_blocks_score_history_by_cat('inspirational')),
  ];
}
?>

<!-- <pre>
  <?php
  var_dump(adeptivity_blocks_entries_by_user());
  ?>
</pre> -->

<?php
$summary = adeptivity_blocks_max_scores_array();
$latestClasses = array_map(
  function ($i) {
    return [
      'id'  => $i['id'],
      'title' => $i['lecture_name'],
      'thumbnail' => null,
      'video' => $i['video']
    ]
    ;
  },
  adeptivity_blocks_entries_for_dashboard()
);
$basename = parse_url(home_url())['path'] ?? '';
?>
<div id="root" <?php echo get_block_wrapper_attributes(); ?> data-assetdir="<?php echo esc_attr(ASSETDIR) ?>"
  data-basename="<?php echo esc_url($basename) ?>">
</div>
<pre style="display: none !important" id="score-summary">
  <?php echo wp_json_encode($summary); ?>
</pre>
<pre style="display: none !important" id="latest-classes">
  <?php echo wp_json_encode($latestClasses); ?>
</pre>