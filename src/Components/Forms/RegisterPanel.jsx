import { useState } from "react";
import FormPanel from "./FormPanel";

export default function RegisterPanel() {
  const emptyWarning = "This field cannot be empty.";
  const usernameWarning = "Invalid Username.";
  const passwordMatchingError = "Passwords do not match.";
  const [inputs, setInputs] = useState({
    email: "",
    username: "",
    password: "",
    re_password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((previousInputs) => ({ ...previousInputs, [name]: value }));
  };

  const onRegister = (e) => {
    e.preventDefault();

    let invalid = false;

    // Checks for empty
    for (let key in inputs) {
      if (inputs[key].trim() === "") {
        setInputs((previousInputs) => ({
          ...previousInputs,
          [key]: emptyWarning,
        }));
        invalid = true;
      }
    }

    // Checks for valid username
    if (
      !/^[A-Za-z0-9]*$/.test(inputs.username) ||
      inputs.username.length < 3 ||
      inputs.username.length > 18
    ) {
      setInputs((previousInputs) => ({
        ...previousInputs,
        [username]: usernameWarning,
      }));
      invalid = true;
    }

    // Valid email: cba
    // Weak password: cba

    // Matching passwords:
    if (inputs.password !== inputs.re_password) {
      setInputs((previousInputs) => ({
        ...previousInputs,
        [password]: passwordMatchingError,
        [re_password]: passwordMatchingError,
      }));
    }

    if (invalid) {
      console.log("Invalid");
      return;
    }

    console.log(inputs);
  };
  return (
    <FormPanel title="Register" onSubmit={onRegister}>
      <label htmlFor="email" className="font-bold">
        Email
      </label>
      <input
        title="Email"
        type="text"
        name="email"
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
        name="username"
        onChange={handleChange}
        placeholder="Username"
        value={inputs.username || ""}
        className="border-2 border-gray-300 rounded-md p-1"
      />
      <label htmlFor="password" className="font-bold">
        Password
      </label>
      <input
        type="text"
        title="Password"
        name="password"
        onChange={handleChange}
        placeholder="Password"
        value={inputs.password || ""}
        className="border-2 border-gray-300 rounded-md p-1"
      />
      <label htmlFor="re_password" className="font-bold">
        Confirm Password
      </label>
      <input
        type="text"
        title="Confirm Password"
        name="re_password"
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
