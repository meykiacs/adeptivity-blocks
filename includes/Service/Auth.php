<?php

namespace Adeptivity\Service;

class Auth
{
  public function redirectNonAdminFromAdminPanel(): self
  {

    add_action(
      'admin_init',
      function () {
        if (!current_user_can('manage_options')) {
          wp_safe_redirect('/');
        }
      }
    );

    return $this;
  }

  public function removeAdminBarForNonAdmins(): self
  {

    add_action('wp_loaded', function () {
      if (!current_user_can('manage_options')) {
        show_admin_bar(false);
      }
    });
    return $this;
  }


  public function changeLoginUrl()
  {
    add_action('init', function () {
      global $pagenow;
      if ($pagenow === 'wp-login.php') {
        global $container;
        wp_redirect($container['auth.login_url'] . '?' . $_SERVER['QUERY_STRING']);
        exit;
      }
    });
    return $this;
  }

}