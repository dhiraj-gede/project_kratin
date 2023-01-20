import React, { useState, useEffect } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState();
  

  
  const performAPICall = async (name,email, password) => {
    let response = {};
    let errored = false;
    var responseClone;
    try {
      response = await (
        await fetch(`http://localhost:8082/v1/auth/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            password: password,
          }),
        }).then(async function (response) {
            responseClone = response.clone(); // 2
            // console.log(await response.json())
            return await response.json();
        })
        .then(function (data) {
            // Do something with data
        }, function (rejectionReason) { // 3
            console.log('Error parsing JSON from response:', rejectionReason); 
        })
      ).json()
    } catch (e) {
        // console.error(e)
    }
    
  };

  const handleToggler = async () => {

   const response =  await performAPICall(name, email, password);
   
  };
  const handleNameChange = (e) => {
    setName(e.target.value);

  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log(name, email, password);
  };

  useEffect(() => {
    console.log(result);
  }, [result]);
  return (
    <>
      <div className="name">
        <label htmlFor="name"> name </label>
        <input
          id="name"
          placeholder="name"
          onChange={(e) => handleNameChange(e)}
          type="name"
          className="name"
        />
      </div>
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

export default Register;
