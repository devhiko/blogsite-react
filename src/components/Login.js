const Login = () => {
  return (
    <div className="login">
      <form action="">
        <label>Username</label>
        <input type="text" />
        <label>Password</label>
        <input type="text" />
        <input type="submit" value="Log In" />
        <p><small>Forgot Password</small></p>
        <p>No Account ? Sign Up</p>
      </form>
    </div>
  );
}

export default Login;