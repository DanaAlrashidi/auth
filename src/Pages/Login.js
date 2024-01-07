import React, { useState } from "react";
import { useMutation } from "react-query";
import { login } from "../api/auth";
const Login = () => {
  const [userData, setUserdata] = useState({});

  const { mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => login(userData),
  });

  const handleUsertinput = (e) => {
    setUserdata({ ...userData, [e.target.name]: e.target.value });
  };
  console.log(userData);
  return (
    <div
      style={{
        width: "100vh",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          border: "1px solid black",
          width: "30%",
          height: "25%",
          borderRadius: "12px",
          padding: "5px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "2px",
        }}
      >
        <p>Email</p>
        <input name="username" onChange={handleUsertinput} />
        <p>Password</p>
        <input name="password" onChange={handleUsertinput} />
        <button onClick={mutate}>Login</button>
      </div>
    </div>
  );
};

export default Login;
