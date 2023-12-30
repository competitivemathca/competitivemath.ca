import FormPanel from "./FormPanel";

export default function LoginPanel() {
  const onLogin = () => {};
  return (
    <FormPanel title="Login" onSubmit={onLogin}>
      <label htmlFor="email-username" className="font-bold">
        Email or Username
      </label>
      <input
        type="text"
        id="email-username"
        placeholder="Username or Email"
        className="border-2 border-gray-300 rounded-md p-1"
      />
      <label htmlFor="password" className="font-bold">
        Password 
      </label>
      <input
        type="passsword"
        id="password"
        placeholder="Password"
        className="border-2 border-gray-300 rounded-md p-1"
      />
      <button
        className="w-1/2 self-center bg-blue-800 text-white p-2 text-lg rounded-2xl hover:bg-blue-700"
        type="submit"
      >
        Login
      </button>
      <p className="text-center">
        Don't have an account?{" "}
        <a href="/register" className="text-blue-800 hover:underline">
          Register
        </a>
      </p>
      <p className="text-center">
        Forgot your password?{" "}
        <a href="#" className="text-blue-800 hover:underline">
          Reset Password
        </a>
      </p>
    </FormPanel>
  );
}