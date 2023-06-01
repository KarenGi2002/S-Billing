import { useNavigate, NavLink } from 'react-router-dom'
import './auth.css'

export const Login = () => {
  const navigate = useNavigate()
  const onLogin = () => {
    navigate('/', {
      replace: true
    })
  }
  return (
    <section className="auth">
      <div className="auth__container">
        <h1>Welcome to S-Billing</h1>
        <form className="auth__form">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <NavLink to="/signup">Don&apos;t have an account?</NavLink>
          <button type="submit" onClick={onLogin}>
            Log in
          </button>
        </form>
      </div>
    </section>
  )
}
