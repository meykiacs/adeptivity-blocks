<?php

/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
$basename = parse_url(home_url())['path'] ?? '';
?>
<div id="root" <?php echo get_block_wrapper_attributes(); ?> data-assetdir="<?php echo esc_attr(ASSETDIR) ?>" data-basename="<?php echo esc_url($basename) ?>">
</div>