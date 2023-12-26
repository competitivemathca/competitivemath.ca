import LoginPanel from "../Components/LoginPanel";

export default function Profile() {
  const loggedIn = false;

  return loggedIn ? "HI" : <LoginPanel />;
}
