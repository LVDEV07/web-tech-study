import React from 'react'
import "../Styles/Login.scss"


export default function Login() {
  return (
    <main className='container-login'>
        <section className='login-card'>
            <h1>Login</h1>

            <form>
                <article className='form-control'>
                    <label htmlFor='email'>
                        e-mail
                    </label>

                    <input type='text' id='email' placeholder='Digite seu E-mail'></input>
                </article>

                <article className='form-control'>
                    <label htmlFor='senha'>Senha</label>
                    <input type='password' id='senha' placeholder='Digite sua senha'></input>
                </article>

                <button type='submit'>Entrar</button>
            </form>
        </section>
    </main>
  )
}
