/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import "./signup.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import GoogleOauth from "@/components/googleOauth";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";

const Signup = () => {
  const router = useRouter();
  const baseUrl = "https://server-chatify.fly.dev";
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const response = await axios.post(`${baseUrl}/register`, {
        username: username,
        email: email,
        password: password,
      });
      console.log(response);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="header">
      {/* logo */}
      <a href="http://localhost:3000" title="Chatify" className="logo-wraper">
        <img src="/assets/chatifylogo.png" alt="Chatify" className="logo" />
        <h1 className="logo-text">Chatify</h1>
      </a>
      {/* logo */}

      <div className="container">
        <div className="content1">
          <h2>Sign up</h2>
          <GoogleOAuthProvider
            clientId={`${process.env.NEXT_PUBLIC_CLIENT_ID}`}
          >
            <GoogleOauth baseUrl={baseUrl} Router="/home" />
          </GoogleOAuthProvider>
          <span>OR</span>
          <div className="input">
            <label htmlFor="">Username</label>
            <input type="text" onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="input">
            <label htmlFor="">Email</label>
            <input type="text" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input">
            <label htmlFor="">Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleSignup}>Sigh up</button>
          <div className="create-account">
            Already have an account?{" "}
            <span onClick={() => router.push("/")}>Sign in</span>
          </div>
        </div>
        <div className="content2">
          <img src="/assets/bg1.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
