import { useState } from "react";
import FormPanel from "./FormPanel";

export default function RegisterPanel() {
  const [inputs, setInputs] = useState({
    email: "",
    username: "",
    password: "",
    re_password: "",
  });

  const handleChange = (e) => {
    const name = e.target.id;
    const value = e.target.value;
    setInputs((previousInputs) => ({ ...previousInputs, [name]: value }));
  };

  const onRegister = (e) => {
    e.preventDefault();

    console.log(JSON.stringify(inputs, null ,2));

    fetch("http://localhost:8000/auth/users/", {
      method: "POST",
      body: JSON.stringify(inputs),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };
  return (
    <FormPanel title="Register" onSubmit={onRegister}>
      <label htmlFor="email" className="font-bold">
        Email
      </label>
      <input
        title="Email"
        type="text"
        id="email"
        onChange={handleChange}
        placeholder="Email"
        value={inputs.email || ""}
        className="border-2 border-gray-300 rounded-md p-1"
      />
      <label htmlFor="username" className="font-bold">
        Username
      </label>
      <input
        type="text"
        title="username"
        id="username"
        onChange={handleChange}
        placeholder="Username"
        value={inputs.username || ""}
        className="border-2 border-gray-300 rounded-md p-1"
      />
      <label htmlFor="password" className="font-bold">
        Password
      </label>
      <input
        type="password"
        title="Password"
        id="password"
        onChange={handleChange}
        placeholder="Password"
        value={inputs.password || ""}
        className="border-2 border-gray-300 rounded-md p-1"
      />
      <label htmlFor="re_password" className="font-bold">
        Confirm Password
      </label>
      <input
        type="password"
        title="Confirm Password"
        id="re_password"
        onChange={handleChange}
        placeholder="Confirm Password"
        value={inputs.re_password || ""}
        className="border-2 border-gray-300 rounded-md p-1"
      />
      <button
        className="w-1/2 self-center bg-blue-800 text-white p-2 text-lg rounded-2xl hover:bg-blue-700"
        type="submit"
      >
        Register
      </button>
    </FormPanel>
  );
}
