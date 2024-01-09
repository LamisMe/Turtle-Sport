import "./mycss.css";
import { Link } from "react-router-dom";

export function SildebarUser() {
  return (
    <>
      <div class="sidebar" id="side_nav">
        <div class="header-box px-2 pt-3 pb-4 d-flex justify-content-between">
          <h1 class="fs-4">
            <span class="text-white m-2">
              <img
                src="turtle-sport-high-resolution-logo-transparent.png"
                alt=""
                style={{ objectFit: "cover", width: "80%" }}
                class="d-inline-block align-text-top"
              />
            </span>
          </h1>
          <button class="btn d-md-none d-block close-btn px-1 py-0 text-white">
            <i class="fal fa-stream"></i>
          </button>
        </div>

        <ul class="list-unstyled px-2">
          <li class="active m-2">
            <Link to="/" class="text-decoration-none px-3 py-2 d-block"  activeClassName="active">
              <i class="bx bxs-home"></i> Cộng Đồng
            </Link>
          </li>
          <li class="m-2">
            <Link
              to="/san-bong"
              class="text-decoration-none px-3 py-2 d-block d-flex justify-content-between" activeClassName="active"
            >
              <span>
                <i class="bx bxs-widget"></i> Sân Bóng
              </span>
            </Link>
          </li>
          <li class="m-2">
            <Link to="/thong-bao" class="text-decoration-none px-3 py-2 d-block">
            <i class='bx bxs-bell-ring'></i> Thông Báo
            </Link>
          </li>
          {/* <li class="m-2">
            <Link to="/tin-tuc" class="text-decoration-none px-3 py-2 d-block">
            <i class='bx bx-paper-plane' ></i> Tin Tức
            </Link>
          </li>
          <li class="m-2">
            <Link to="/cau-lac-bo" class="text-decoration-none px-3 py-2 d-block">
            <i class='bx bxs-group'></i> Câu Lạc Bộ
            </Link> */}
          {/* </li> */}
          <li class="m-2">
            <Link to="/ho-so" class="text-decoration-none px-3 py-2 d-block">
              <i class="bx bxs-user"></i> Hồ Sơ
            </Link>
          </li>
        </ul>
        <hr class="h-color mx-2" />

        <ul class="list-unstyled px-2">
          
          <li class="m-2">
            <Link to="/user/login" class="text-decoration-none px-3 py-2 d-block">
              <i class="bx bx-log-in"></i> Đăng Nhập
            </Link>
          </li>
        </ul>
      </div>

    </>
  );
}
