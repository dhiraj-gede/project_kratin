import React, { useState, useEffect } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState();
  const persistLogin = (token, email, name, userId) => {
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
    localStorage.setItem("username", name);
    localStorage.setItem("userId", userId);
    console.log('cc',name,
        email,
        token,
        userId,)
  };
  const validateResponse = (errored, response) => {
    console.log("response", response)
    if (errored || (!response.tokens && !response.message)) {
      console.error(
        "Something went wrong. Check that the backend is running, reachable and returns valid JSON."
      );
      return false;
    }
    if (!response.tokens) {
      console.log(response.message);
      return false;
    }
    return true;
  };

  const performAPICall = async (email, password) => {
    
    

    let response = {};
    let errored = false;
    try {
      response = await (
        await fetch(`http://localhost:8082/v1/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        })
      ).json();
    } catch (e) {
      
      errored = true;
    }
    if (validateResponse(errored, response)) {
      console.log(errored)
      return response;
    }
  };

  const handleToggler = async() => {
    const response =  await performAPICall( email, password);
   if(response){
    persistLogin(
      response.tokens.access.token,
      response.user.email,
        response.user.name,
        
        
        response.user._id,
    )
    console.log("Logged In");
   }
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    console.log(result);
  }, [result]);
  return (
    <>
      <div className="email">
        <label htmlFor="email"> email </label>
        <input
          id="email"
          placeholder="Email"
          onChange={(e) => handleEmailChange(e)}
          type="email"
          className="email"
        />
      </div>
      <div className="password">
        <label htmlFor="password"> password </label>
        <input
          id="password"
          placeholder="password"
          onChange={(e) => handlePasswordChange(e)}
          type="password"
          className="email"
        />
      </div>
      <button onClick={handleToggler}>toggler</button>
    </>
  );
};

export default Login;
