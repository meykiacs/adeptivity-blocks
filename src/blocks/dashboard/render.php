<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
// var_dump(ASSETDIR);exit;
?>
<div id="root" <?php echo get_block_wrapper_attributes(); ?> data-assetdir="<?php echo esc_attr(ASSETDIR)?>">
</div>
