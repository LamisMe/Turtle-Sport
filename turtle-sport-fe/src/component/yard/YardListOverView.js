import { Header } from "../home/Header";
import { YardList } from "./YardList";
import { Link } from "react-router-dom";

export function YardListOverView() {
  return (
    <>
      <div className="container-fluid">
        <ul class="nav justify-content-center text-secondary fw-bold m-3">
          <li class="nav-item">
            <Link
              class="nav-link active fw-bold text-dark"
              aria-current="page"
              to="/"
            >
              Trang Chủ
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link fw-bold text-dark" to="/tao-san">
              Dành Cho Chủ Sân
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link text-dark" to="/tin-tuc">
              Tin Tức
            </Link>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark" href="#">
              Cộng Đồng
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-primary" href="#">
              Sân Bóng
            </a>
          </li>

          <Link
            class="btn btn-primary text-light float-end fw-bold"
            to="/user/login"
            style={{ marginLeft: "30%" }}
          >
            Đăng Nhập
          </Link>
        </ul>
      </div>
      <div className="container">
        <label for="exampleDataList" class="form-label text-secondary fw-bold ms-2">
          Tìm Sân Quanh Bạn <i class="bx bxs-map-pin"></i>
        </label>
        <input
          class="form-control"
          list="datalistOptions"
          id="exampleDataList"
          placeholder="Nhập tên sân..."
        />
        <datalist id="datalistOptions">
          <option value="Sân Hà Tĩnh" />
          <option value="Sân Chi Lăng" />
        </datalist>
        <div className="mt-5">
        <YardList/>
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
      </div>
    </>
  );
}
