export default function LoginPanel() {
  return (
    <div
      className={
        "flex flex-col border-[2px] border-solid border-blue-800 rounded-2xl overflow-hidden shadow-xl w-1/4"
      }
    >
      <div className="bg-blue-800 w-full px-6 py-2">
        <h1 className="text-white text-2xl text-center">Login</h1>
      </div>
      <form className="flex flex-col m-5 gap-6">
        <input
          type="text"
          placeholder="Username or Email"
          className="border-2 border-gray-300 rounded-md p-1"
        />
        <input
          type="text"
          placeholder="Password"
          className="border-2 border-gray-300 rounded-md p-1"
        />
        <button className="w-1/2 self-center bg-blue-800 text-white p-2 text-lg rounded-2xl hover:bg-blue-700">
          Login
        </button>
        <p className="text-center">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-800 hover:underline">
            Register
          </a>{" "}
        </p>
      </form>
    </div>
  );
}
