import { Link } from "react-router-dom";
import { Header } from "../home/Header";
import { HeaderManager } from "../home/HeaderManager";
export function ManagerStatistical() {
  return (
    <>
      <div className="container-fluid">
        <HeaderManager />
      </div>
      <div className="container"></div>

      <div class="footer mt-4">
        <div class="container">
          <div class="footer-content">
            <p class="text-center mt-5">
              &copy; 2024 Turtle Company. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
