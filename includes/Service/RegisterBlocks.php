<?php

namespace Adeptivity\Service;

class RegisterBlocks
{
  /**
   * The array of the names name of the directory in the build folder that contains the block.json file
   * @var string[]
   */
  private array $blockNames;

  private string $dirPath;

  public function __construct(string $dirPath) {
    $this->dirPath = $dirPath;
  }

  public function add(string $blockName) : self {
    $this->blockNames[] = $blockName;
    return $this;
  }

  public function register() :void  {
    add_action('init', function() {
      foreach ($this->blockNames as $blockName) {
        register_block_type( $this->dirPath . $blockName);
      }
    }
  );
  }
}