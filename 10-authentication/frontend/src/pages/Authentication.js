import { json, redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm";

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
  const formData = await request.formData();

  const user = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const mode = new URL(request.url).searchParams.get("mode") || "login";

  if (mode !== "login" && mode !== "signup") {
    return json(
      {
        message: "Invalid mode parameter. Must be either 'login' or 'signup'.",
      },
      {
        status: 422,
      }
    );
  }

  const response = await fetch(`http://localhost:8080/${mode}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    return json(
      {
        message: "Could not authenticate user.",
      },
      {
        status: 500,
      }
    );
  }

  return redirect("/");
}
