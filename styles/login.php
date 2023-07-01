<style>
	#login h1 a {
		background-image: url(<?php echo esc_url(ADEPTIVITY_PLUGIN_URL . '/img/adeptivity-logo.svg') ?>);
		background-size: cover !important;
		display: block;
		width: 100%;
		height: 100%;
		margin-bottom: 0;
	}

	#login h1 {
		line-height: 0;
		height: 100px;
		padding: 0;
	}

	body {
		background-color: #bfcdb9 !important;
	}

	::selection {
		color: #03BA6D;
	}

	a:focus {
		outline: 5px auto #03BA6D !important;
	}
	a:hover {
		color: #3c434a !important;
	}

	.wp-pwd span::before {
		color: #03BA6D;
	}

	#user_login:focus {
    outline: none !important;
    border:1px solid green !important;
    box-shadow: 0 0 10px #719ECE !important;
	}

	#user_pass:focus {
    outline: none !important;
    border:1px solid green !important;
    box-shadow: 0 0 10px #719ECE !important;
	}

	#user_email:focus {
    outline: none !important;
    border:1px solid green !important;
    box-shadow: 0 0 10px #719ECE !important;
	}

	#wp-submit {
		background-color: #03BA6D !important;
	}

	#loginform {
	box-shadow: 0px 0px 7px rgba(32, 34, 36, 0.25) !important;
	border-radius: 5px !important;
	}

	.message.register {
		transform: translateY(10px);
	}
</style>