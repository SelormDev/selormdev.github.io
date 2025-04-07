import MainLayout from "../layout/MainLayout";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <MainLayout>
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Go back to the homepage</Link>
    </MainLayout>
  );
};

export default NotFound;
