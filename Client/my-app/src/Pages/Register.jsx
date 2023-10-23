import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const PF = process.env.REACT_APP_SERVER_END;

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(PF + "auth/register", inputs);
      navigate("/login");
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <>
      <div className="auth">
        <h1>Register</h1>
        <form action="">
          <input
            required
            type="text"
            placeholder="username"
            name="username"
            onChange={handleChange}
          />
          <input
            required
            type="email"
            placeholder="email"
            name="email"
            onChange={handleChange}
          />
          <input
            required
            type="password"
            placeholder="password"
            name="password"
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>Register</button>
          {err && <p>{err}</p>}
          <span>
            Have an account already?<Link to="/login">Register</Link>
          </span>
        </form>
      </div>
    </>
  );
};

export default Register;
