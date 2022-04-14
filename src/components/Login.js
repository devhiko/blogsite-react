const Login = () => {
  return (
    <div className="login">
      <form action="">
        <label>Username</label>
        <input type="text" /> <br />
        <label>Password</label>
        <input type="password" /> <br />
        <input type="submit" value="Log In" />
        <p><small>Forgot Password</small></p>
        <p>No Account ? <a href="">Sign Up</a></p>
      </form>
    </div>
  );
}

export default Login;