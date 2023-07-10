/* eslint-disable @next/next/no-img-element */
"use client";
import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";

interface oauthProps {
  baseUrl: string;
  Router: string;
}

const GoogleOauth: FC<oauthProps> = ({ baseUrl, Router }) => {
  const [, setCookie] = useCookies();
  const router = useRouter();
  let oauthEmail = "";
  let oauthFullname = "";

  // get token & data user
  const loginOauth = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      if (tokenResponse) {
        axios
          .get(
            `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenResponse.access_token}`
          )
          .then((res) => {
            oauthEmail = res.data.email;
            oauthFullname = res.data.name;
            oauth();
          });
      }
    },
  });

  // Login with OAuth
  const oauth = async () => {
    try {
      const response = await axios.post(`${baseUrl}/oauth`, {
        username: oauthFullname,
        email: oauthEmail,
      });
      setCookie("user", JSON.stringify(response.data), { path: "/" });
      router.push(Router);
      oauthEmail = "";
      oauthFullname = "";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="btn-oauth" onClick={() => loginOauth()}>
      <img src="/assets/google.png" alt="" />
      <div>Continue With Google</div>
    </div>
  );
};

export default GoogleOauth;
