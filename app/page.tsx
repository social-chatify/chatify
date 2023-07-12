/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import "./login.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import GoogleOauth from "@/components/googleOauth";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";

export default function Login() {
  const router = useRouter();
  const [cookies, setCookie] = useCookies();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const baseUrl = "https://server-chatify.fly.dev";

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${baseUrl}/login`, {
        email: email,
        password: password,
      });
      setCookie("user", JSON.stringify(response.data), { path: "/" });
      router.push("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="header">
      {/* logo */}
      <a href="http://localhost:8000" title="Chatify" className="logo-wraper">
        <img src="/assets/chatifylogo.png" alt="Chatify" className="logo" />
        <h1 className="logo-text">Chatify</h1>
      </a>
      {/* logo */}

      <div className="container">
        <div className="content1">
          <h2>Login to your account</h2>
          <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_CLIENT_ID}`}>
            <GoogleOauth baseUrl={baseUrl} Router="/home"/> 
          </GoogleOAuthProvider>
          <span>OR</span>
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
          <button onClick={handleLogin}>Log in</button>
          <div className="create-account">
            Don’t have an account? <span onClick={() => router.push('/signup')}>Create</span>
          </div>
        </div>
        <div className="content2">
          <img src="/assets/bg1.png" alt="" />
        </div>
      </div>
    </div>
  );
}
