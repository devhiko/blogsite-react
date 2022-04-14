import '../styles/Login.style.css'

const Login = () => {
  return (
    <div className="login">
      <form action="">
        <label>Username:</label>
        <input type="text" /> <br />
        <label>Password:</label>
        <input type="password" /> <br />
        <input type="submit" value="Log In" />
        <a href='/forgot'><small>Forgot Password</small></a>
        <a href="/signup">Sign Up</a>
      </form>
    </div>
  );
}

export default Login;