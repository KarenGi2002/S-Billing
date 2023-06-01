import { useNavigate, NavLink } from 'react-router-dom'

export const Signup = () => {
  const navigate = useNavigate()
  const onSignup = () => {
    navigate('/', {
      replace: true
    })
  }
  return (
    <section className="auth">
      <div className="auth__container">
        <h1>Register to S-Billing</h1>
        <form className="auth__form">
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <NavLink to="/login">Already have an account?</NavLink>
          <button type="submit" onClick={onSignup}>
            Sign up
          </button>
        </form>
      </div>
    </section>
  )
}
