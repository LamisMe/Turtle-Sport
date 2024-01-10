import { Link } from "react-router-dom";
export function Header() {
  return (
    <>
      <div class="container-fluid">
        <ul class="nav justify-content-center text-secondary fw-bold m-3">
          <li class="nav-item">
            <Link
              class="nav-link active fw-bold text-primary"
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
            <a class="nav-link text-dark" href="#">
              Tin Tức
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark" href="#">
              Cộng Đồng
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark" href="#">
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
    </>
  );
}
