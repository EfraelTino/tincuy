import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { startGoogleAuth } from '../actions';
import 'firebase/auth';

const Login = () => {

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleGoogleAuth = () => {
		dispatch(startGoogleAuth());
		navigate('/product');
	}
	return (
		<div>
			<section className='login'>
				<section className='login__container'>
					<h2>Inicia sesión</h2>
					<form className='login__container--form' >
						<input
							// onChange={e => setEmail(e.target.value)}
							name='email'
							className='input'
							type='email'
							placeholder='Correo'
						/>
						<input
						// onChange={e => { setPass(e.target.value) }}
						name='password'
						className='input'
						type='password'
						placeholder='Contraseña'

						/>
						<button className='button'>Iniciar sesión</button>
						<div className='login__container--remember-me'>
							<label>
								<input type='checkbox' id='cbox1' value='first_checkbox' />
								Recuérdame
							</label>
							<a href='/'>Olvidé mi contraseña</a>
						</div>
					</form>
					<section className='login__container--social-media'>
						<button className='flex items-center' onClick={handleGoogleAuth}>
							<img src="{google}" alt='google' /> 🌹 Inicia sesión con Google
						</button>
					</section>
					<p className='login__container--register'>
						No tienes ninguna cuenta <Link to='/register'>Regístrate</Link>
					</p>
				</section>
			</section>
		</div>
	);
}

// const mapDispatchToProps ={
// 	loginRequest,
// }
// export default connect (null, mapDispatchToProps) (Login);
export default Login;
