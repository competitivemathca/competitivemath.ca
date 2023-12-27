import FormPanel from "./FormPanel";

export default function RegisterPanel() {
  return (
    <FormPanel title="Register">
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
      <input
        type="text"
        placeholder="Confirm Password"
        className="border-2 border-gray-300 rounded-md p-1"
      />
      <button className="w-1/2 self-center bg-blue-800 text-white p-2 text-lg rounded-2xl hover:bg-blue-700">
        Register
      </button>
    </FormPanel>
  );
}
