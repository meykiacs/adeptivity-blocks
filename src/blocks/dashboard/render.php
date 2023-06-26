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

function gravity_forms_entries_shortcode()
{

  // Extract the attributes.
  $table_id = '1';
  //$field_id   = $atts['field_id'];
  //$value      = $atts['value'];

  // Get the current user info
  $cu_user = wp_get_current_user();
  $cu_user_id = $cu_user->ID;

  // Get the form object.
  $form = GFAPI::get_form($table_id);
  // Get the entries for the form.
  $entries = GFAPI::get_entries($table_id);
  $field_id = 'created_by';
  $value = $cu_user_id;

  // // Filter the entries based on the specified field value.
  $filtered_entries = array_filter($entries, function ($entry) use ($field_id, $value) {
    return rgar($entry, $field_id) == $value;
  });
  ?>
  <pre>
          <?php
          var_dump($entries);
          wp_die();
          ?>
        </pre>
  <?php
  // $filtered_entries = intval($filtered_entries);
  //print_r ($filtered_entries);

  $filtered_subentries = regenerate_array_with_selected_fields($filtered_entries);
  //echo ('<Br><Center>AAAAAA<Br>');
//print_r ($filtered_subentries);

  $max_filtered_entries = get_max_values($filtered_subentries);
  //echo ('<Br><Center>BBBBBBBBBBB<Br>');
//print_r ($max_filtered_entries);
  $maxval = 0;
  $maxvall = 0;
  foreach ($max_filtered_entries as $maxval) {
    $maxvall = $maxval + $maxvall;
  }
  //echo ('<Br><Center>CCCCCCCCCCC<Br>');
//print_r ($maxvall);	

  return max($max_filtered_entries, $maxvall);
}

function regenerate_array_with_selected_fields($two_dim_array)
{
  $selected_fields = array('10', '14', '13', '11', '12');
  $regenerated_array = array();

  foreach ($two_dim_array as $row) {
    $new_row = array();
    foreach ($selected_fields as $field) {
      if (isset($row[$field])) {
        $new_row[$field] = $row[$field];
      }
    }
    $regenerated_array[] = $new_row;
  }

  return $regenerated_array;
}

function get_max_values($two_dim_array)
{
  $max_values = array();

  // Iterate over each field in the array
  foreach ($two_dim_array as $row) {
    foreach ($row as $field => $value) {
      // Check if the field exists in the max_values array
      if (!isset($max_values[$field])) {
        $max_values[$field] = $value;
      } else {
        // Update the maximum value if necessary
        if ($value > $max_values[$field]) {
          $max_values[$field] = $value;
        }
      }
    }
  }

  return $max_values;
}
?>
<pre>
<<?php
var_dump(adeptivity_blocks_max_scores());
wp_die();
?>
</pre>
<?php
// $scores = gravity_forms_entries_shortcode();


$basename = parse_url(home_url())['path'] ?? '';
?>
<div 
  id="root"
  <?php echo get_block_wrapper_attributes(); ?>
  data-assetdir="<?php echo esc_attr(ASSETDIR) ?>"
  data-basename="<?php echo esc_url($basename) ?>"
>
</div>