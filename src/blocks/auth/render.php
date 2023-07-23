<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $username = $_POST['username'];
  $password = $_POST['password'];

  $user = wp_signon(
    array(
      'user_login' => $username,
      'user_password' => $password,
      'remember' => true
    )
  );

  if (is_wp_error($user)) {
    echo '<p class="error">Invalid username or password.</p>';
  } else {
    $redirect = $_GET['redirect_to'] ?? null; 
    if ($redirect) {
      wp_safe_redirect($redirect);
    } else {
      wp_safe_redirect(home_url());
    }
    exit;
  }
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
  $action = $_GET['action'] ?? null;
  if ($action === 'logout') {

    wp_logout();
    wp_safe_redirect(home_url('/login'));
    exit;
  }
}
?>
<div id="adeptivity-auth" data-font-url=<?php echo esc_attr(ASSETURL) ?>></div>