import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { infoToken } from "../../service/AuthService";
import ModalLogout from "../auth/ModalLogout";
import { useLocation } from "react-router-dom";
import "../style/header.css";
export function Header() {
  const location = useLocation();
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [username, setUsername] = useState("");
  const inforUser = async () => {
    const res = infoToken();
    // sub token;
    if (res != null) {
      setUsername(res.sub);
    }
  };

  useEffect(() => {
    inforUser();
  }, []);
  return (
    <>
      <nav
        class="navbar navbar-expand-lg navbar-light shadow  fixed-top"
        style={{ backgroundColor: "#0dcaf0" }}
      >
        <div className="container">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="nav justify-content-center text-secondary fw-bold">
              <li class="nav-item"></li>
              <li class="nav-item">
                <Link
                  class={`nav-link fw-bold  ${
                    location.pathname === "/"
                      ? "active text-warning"
                      : "text-light"
                  }`}
                  aria-current="page"
                  to="/"
                  title="Trang Chủ"
                >
                  Trang Chủ
                </Link>
              </li>
              <li class="nav-item">
                {!user ? (
                  <Link
                    to="/login"
                    className="nav-link active fw-bold text-light"
                    activeClassName="active"
                    title="Dành Cho Chủ Sân"
                  >
                    Dành Cho Chủ Sân
                  </Link>
                ) : (
                  <Link
                    class="nav-link fw-bold text-light"
                    to="/quan-ly"
                    title="Dành Cho Chủ Sân"
                  >
                    Dành Cho Chủ Sân{" "}
                  </Link>
                )}
              </li>
              <li class="nav-item">
                <Link
                  class={`nav-link fw-bold  ${
                    location.pathname === "/tin-tuc"
                      ? "active text-warning"
                      : "text-light"
                  }`}
                  to="/tin-tuc"
                  title="Tin Tức"
                >
                  Tin Tức
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#" title="Cộng Đồng">
                  Cộng Đồng
                </a>
              </li>
              <li class="nav-item">
                <Link
                  class={`nav-link fw-bold  ${
                    location.pathname === "/san-bong"
                      ? "active text-warning"
                      : "text-light"
                  }`}
                  to="/san-bong"
                  title="Sân Bóng"
                >
                  Sân Bóng
                </Link>
              </li>
              {/* <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul> */}
              {/* </li> */}
            </ul>
            <div className="col-5">
              {!user ? (
                <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-2">
                  <Link class="btn btn-primary me-md-4 btn-sm" to="/login">
                    Đăng Nhập
                  </Link>
                </div>
              ) : (
                <p className="text-light m-2 d-flex justify-content-end fw-bold">
                  <i class="bx bxs-user bx-sm me-1"></i>
                  {username}
                  <Link
                    role="button"
                    data-bs-toggle="modal"
                    data-bs-target="#logout"
                  >
                    <i
                      className="bx bxs-log-in-circle bx-sm text-light ms-2"
                      title="Đăng xuất"
                    ></i>
                  </Link>
                </p>
              )}
            </div>
          </div>
        </div>
      </nav>
      <ModalLogout />
    </>
  );
}
