<?php
if (is_admin() && !wp_doing_ajax()) {
  // Return early without rendering the block in the editor
  return '';
}

$adeptivity_auth_mode = 'login';
$adeptivity_info = '';
$adeptivity_auth_error = [];

function getUser($user_login)
{
  $user = get_user_by('login', $user_login);
  if (!$user) {
    $user = get_user_by('email', $user_login);
  }
  return $user;
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $user_login = sanitize_text_field($_POST['user'] ?? '');
  $password = sanitize_text_field($_POST['password'] ?? '');
  $action = sanitize_text_field($_POST['action'] ?? '');
  $loginNonce = sanitize_text_field($_POST['login_nonce'] ?? '');
  $lostPasswordNonce = sanitize_text_field($_POST['lostpassword_nonce'] ?? '');
  $rpNonce = sanitize_text_field($_POST['rp_nonce'] ?? '');

  $login = $_GET['login'] ?? '';
  $key = $_GET['key'] ?? '';

  if ($action === 'login' && wp_verify_nonce($loginNonce, 'adeptivity_login_action')) {


    $user = getUser($user_login);

    if (!$user) {
      $adeptivity_auth_error[] = 'Invalid username or email address.';
      $adeptivity_auth_mode = 'login';
    } else {
      $user_auth = wp_authenticate_username_password(null, $user->user_login, $password);

      if (is_wp_error($user_auth)) {
        $adeptivity_auth_error[] = 'Invalid username or email address.';
        $adeptivity_auth_mode = 'login';
      } else {
        wp_set_current_user($user_auth->ID);
        wp_set_auth_cookie($user_auth->ID);

        $redirect = $_GET['redirect_to'] ?? null;
        if ($redirect) {
          wp_safe_redirect($redirect);
        } else {
          global $container;
          if ($container['memberpress']->isUserSchool()) {
            wp_safe_redirect($container['auth.school_home_url']);
            exit;
          }
          wp_safe_redirect($container['auth.teacher_home_url']);
          exit;
        }
        exit;
      }
    }

  } elseif ($action === 'lostpassword' && wp_verify_nonce($lostPasswordNonce, 'adeptivity_lostpassword_action')) {

    $user = getUser($user_login);
    if (!$user) {
      $adeptivity_auth_error[] = 'Invalid Username or Email';
    } else {
      $user_email = $user->user_email;
      $reset_key = get_password_reset_key($user);
      $reset_url = home_url("login?action=rp&key=$reset_key&login=" . rawurlencode($user_login), 'login');

      $sent = wp_mail(
        $user_email,
        'Password Reset Request',
        "Someone has requested a password reset for the following account:\n\nUsername: " . $user_login . " \n\nIf this was a mistake, just ignore this email and nothing will happen.\n\nTo reset your password, visit the following address:\n\n" . esc_url_raw($reset_url)
      );
      if ($sent) {
        $adeptivity_info = 'An email including the password reset link has been sent to ' . $user_email . '.';
        $adeptivity_auth_mode = 'info';
      } else {
        $adeptivity_auth_mode = 'info';
        $adeptivity_info = 'Error sending the email!';
      }
    }

  } elseif ($action === 'rp' && wp_verify_nonce($rpNonce, 'adeptivity_rp_action')) {
    $user = check_password_reset_key($key, $login);

    if (is_wp_error($user)) {
      $adeptivity_auth_mode = 'info';
      $adeptivity_info = 'Your Pasword Reset Key in Invalid!';
    } else {
      if (isset($_POST['new_password']) && $_POST['new_password'] != '') {
        reset_password($user, $_POST['new_password']);
        $adeptivity_auth_mode = 'info';
        $adeptivity_info = 'Your Password Has Been Changed Successfuly';

      } else {
        $adeptivity_auth_mode = 'info';
        $adeptivity_info = 'Error Happened';
      }
    }
  } else {
    echo 'Invalid request';
  }
}



if ($_SERVER['REQUEST_METHOD'] === 'GET') {
  $action = $_GET['action'] ?? '';
  $login = $_GET['login'] ?? '';
  $key = $_GET['key'] ?? '';
  global $container;

  if ($action === 'logout') {

    wp_logout();
    wp_safe_redirect($container['auth.login_url']);

    exit;
  }

  if (is_user_logged_in()) {
    if ($container['memberpress']->isUserSchool()) {
      wp_safe_redirect($container['auth.school_home_url']);
      exit;
    }
    wp_safe_redirect($container['auth.teacher_home_url']);
    exit;
  }

  if ($action === 'rp') {
    $user = check_password_reset_key($key, $login);
    if (is_wp_error($user)) {
      $adeptivity_auth_mode = 'info';
      $adeptivity_info = 'Your Pasword Reset Key in Invalid!';
    } else {
      $adeptivity_auth_mode = 'rp';
    }
  }
}
?>
<div id="adeptivity-auth" data-font-url="<?php echo esc_attr(ADEPTIVITY_ASSETURL); ?>"
  data-home-url="<?php echo esc_attr(home_url()); ?>"
  data-lostpassword-nonce="<?php echo esc_attr(wp_create_nonce('adeptivity_lostpassword_action')); ?>"
  data-login-nonce="<?php echo esc_attr(wp_create_nonce('adeptivity_login_action')); ?>"
  data-register-nonce="<?php echo esc_attr(wp_create_nonce('adeptivity_register_action')); ?>"
  data-rpnonce="<?php echo esc_attr(wp_create_nonce('adeptivity_rp_action')); ?>"
  data-mode="<?php echo esc_attr($adeptivity_auth_mode); ?>" data-info="<?php echo esc_attr($adeptivity_info); ?>">
</div>

<pre style="display: none !important" id="auth_errors">
  <?php echo wp_json_encode(array_values($adeptivity_auth_error)); ?>
</pre>