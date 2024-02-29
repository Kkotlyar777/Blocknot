import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

const clientId =
	'976675945184-7nhjhc0mtkb69iof1h8u6jfveviemper.apps.googleusercontent.com';

function GgleLogin() {
	return (
		<GoogleOAuthProvider clientId={clientId}>
			<GoogleLogin
				onSuccess={(credentialResponse) => {
					console.log('LOGIN SUCCESS! Current user:', credentialResponse);
				}}
				onError={() => {
					console.log('Login Failed');
				}}
			/>
		</GoogleOAuthProvider>
	);
}

export default GgleLogin;
