import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="auth">
        <h1>Register</h1>
        <form action="">
          <input required type="text" placeholder="username" />
          <input required type="email" placeholder="email" />
          <input required type="text" placeholder="password" />
          <button>Register</button>
          <p>!!There is an error!!</p>
          <span>
            Have an account already?<Link to="/login">Register</Link>
          </span>
        </form>
      </div>
    </>
  );
};

export default Register;
