import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "An error occurred!";
  let message = "Something went wrong. Please try again later.";

  if (error.status === 404) {
    title = "Page not found!";
    message = "The page you are looking for could not be found.";
  }

  if (error.status === 500) {
    title = "Internal server error!";
    message = error.data.message;
  }

  return (
    <PageContent title={title}>
      <p>{message}</p>
    </PageContent>
  );
};

export default ErrorPage;
