"use client";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Signupp = () => {
  const [num, setNum] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.name !== "" || input.password !== "")
      return alert("invaild eamil or password");
    axios.post("https://66f0f85341537919154f06e7.mockapi.io/signup", {
      num,
      email,
      password,
    });
    setNum("");
    setEmail("");
    setPassword("");
    setRepassword("");
    router.push("/Signin");
  };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-dark text-white">
      <h1 className="fw-bold text-danger">Sign Up</h1>
      <form className="w-25" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Number
          </label>
          <input
            type="number"
            className="form-control"
            id="name"
            placeholder="Enter Number"
            value={num}
            onChange={(e) => setNum(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter Eamil"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Conform Password
          </label>
          <input
            type="password"
            placeholder="Re-Enter  Password"
            className="form-control"
            id="repassword"
            value={repassword}
            onChange={(e) => setRepassword(e.target.value)}
            required
          />
        </div>
        <div className="d-flex justify-content-center my-4">
          <button type="submit" className="btn btn-warning  fw-bold px-4">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};
export default Signupp;
