"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { ImGithub } from "react-icons/im";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
const Signn = () => {
  const [apiData, setApiData] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkEmail, setCheckEmail] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
 let value
  useEffect(() => {
    axios
      .get("https://66f0f85341537919154f06e7.mockapi.io/signup")
      .then((response) => {
        setApiData(response.data);
      });
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      console.log("good");
      
    } else {
      console.log("bad")
    }
    
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-dark text-white">
      <a href="https://github.com/prakashwiser/">
        <ImGithub className="fs-4 text-dark" />
      </a>
      <h1 className="fw-bold text-success py-4">Sign in</h1>
      <form className="w-25" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="d-flex justify-content-between mt-4">
          <button type="submit" className="btn btn-primary fw-bold">
            Sign in
          </button>
          <Link href={"Updatepassword"} className="btn btn-primary fw-bold">
            Forget Password
          </Link>
        </div>
      </form>
    </div>
  );
};
export default Signn;
