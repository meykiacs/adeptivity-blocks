<?php

namespace Adeptivity\Service;

class LoginPageCustomizer
{

  private $cssFile;

  public function __construct(string $cssFile)
  {
    $this->cssFile = $cssFile;
  }

  public function customize(): void
  {
    add_filter('login_headerurl', fn() => home_url());
    add_filter('login_headertext', fn() => 'Adeptivity');
    add_action(
      'login_enqueue_scripts',
      function () {
        require $this->cssFile;
      }
    );
  }
}