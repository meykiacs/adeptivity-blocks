export default function LoginForm() {
	return (
		<div>
			<form
				action="<?php echo esc_url(admin_url('admin-post.php')) ?>"
				method="POST"
			>
				<input type="hidden" name="action" value="adeptivity_signup" />

				<div>
					<label htmlFor="email">Email</label>
					<input type="text" id="email" name="email" />
				</div>
				<div>
					<label htmlFor="password">password</label>
					<input type="text" id="password" name="password" />
				</div>
				<div>
					<button type="submit">submit</button>
				</div>
			</form>
		</div>
	)
}
