import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

export default function ViewProfile() {
  const { username } = useParams();
  const effectRun = useRef(false);

  useEffect(() => {
    if (!effectRun.current) {
      const usernameObject = {
        username: username,
      };

      fetch("http://localhost:8000/user/get_user_by_username", {
        method: "POST",
        body: JSON.stringify(usernameObject),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      effectRun.current = true;
    }
  }, []);
  return "Hi";
}
