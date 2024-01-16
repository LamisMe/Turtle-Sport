import "./404NotFound.css";
import { Link } from "react-router-dom";
export function Page404NotFound() {
  return (
    <>
    <div className="notpage">
    <div class="error-container">
        <h1 class="error-code">404</h1>
        <p class="error-message">Page not found</p>
        <Link class="home-link" to="/">
          Go to Homepage
        </Link>
      </div>
    </div>
      
    </>
  );
}
