import { Link } from "react-router-dom";
import { Header } from "../home/Header";
export function ManagerStatistical() {
  return (
    <>
      <div class="container-fluid">
        <Header />
      </div>
      <div className="container">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <Link class="nav-link" aria-current="page" to="/quan-ly">
              Lịch Sân
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/quan-ly/nhan-vien">
              Quản Lý Nhân Viên
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link active" to="/quan-ly/thong-ke">
              Thống Kê
            </Link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Cài Đặt
            </a>
          </li>
        </ul>
      </div>
     
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
