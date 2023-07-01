<?php 
function is_rest_api_request() {
	if ( empty( $_SERVER['REQUEST_URI'] ) ) {
			// Probably a CLI request
			return false;
	}

	$rest_prefix         = trailingslashit( rest_get_url_prefix() );
	$is_rest_api_request = strpos( $_SERVER['REQUEST_URI'], $rest_prefix ) !== false;

	return apply_filters( 'is_rest_api_request', $is_rest_api_request );
}
function adeptivity_check_logged_in()
{
	// if (!is_user_logged_in() && ! (defined('REST_REQUEST') && REST_REQUEST)) {
	if (get_the_ID() !== 244 && !is_user_logged_in() && ! (is_rest_api_request())) {
		wp_safe_redirect(get_permalink(get_post(244)));
		exit;
	}
}
// add_action('template_redirect', 'adeptivity_check_logged_in');


function adeptivity_signup()
{
	$errors = ['email' => '0', 'pass'	=> '0'];
	$has_error = false;
	$email = $_POST['email'] ?? '';
	$password = $_POST['password'] ?? '';
	if (!is_email($email))  {
		$error['email'] = '1';
		$has_error = true;
	}
	if (preg_match('/^(?=.*\d)(?=.*[@#\-_$%^&+=§!\?])(?=.*[a-z])(?=.*[A-Z])[0-9A-Za-z@#\-_$%^&+=§!\?]{8,20}$/',$param) !== 1)  {
		$error['pass'] = '1';
		$has_error = true;
	}

	if ($has_error) {
		wp_redirect(get_permalink(get_post(244)) . "&?pass=$error[pass]&email=$error[email]", 302);
		exit;
	}
	
	wp_redirect(get_permalink(get_post(244)));
	exit;
	
}

add_action( 'admin_post_nopriv_adeptivity_signup', 'adeptivity_signup' );




function adeptivity_rest_api_init()
{
	$email_arg = [
		'required' => true,
		'validate_callback' => function ($param, $request, $key) {
			return is_email($param);
		},
		'sanitize_callback' => function ($param, $request, $key) {
			$sane = sanitize_email($param);
			if ($sane !== $param) {
				return new WP_Error('invalid_email', 'email is invalid');
			}
			return $sane;
		}

	];

	$pass_arg = [
		'required' => true,
		'validate_callback' => function ($param, $request, $key) {
			return 
			preg_match('/^(?=.*\d)(?=.*[@#\-_$%^&+=§!\?])(?=.*[a-z])(?=.*[A-Z])[0-9A-Za-z@#\-_$%^&+=§!\?]{8,20}$/',$param) === 1;
		},
		'sanitize_callback' => function ($param, $request, $key) {
			$sane = sanitize_text_field($param);
			if ($sane !== $param) {
				return new WP_Error('invalid_password', 'password is invalid');
			}
			return $sane;
		}
	];

	register_rest_route(
		'adeptivity/v1',
		'login',
		[
			'methods' => 'POST',
			'callback' => 'adeptivity_signin',
			'permission_callback' => '__return_true',
			'args' => [
				'email' => $email_arg,
				'password' => $pass_arg
			]
		]
	);

	register_rest_route(
		'adeptivity/v1',
		'signup',
		[
			'methods' => 'POST',
			'callback' => 'adeptivity_signup',
			'permission_callback' => '__return_true',
			'args' => [
				'email' => $email_arg,
				'password' => $pass_arg
			]
		]
	);

}


add_action('rest_api_init', 'adeptivity_rest_api_init');