import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { infoToken } from "../../service/AuthService";
import ModalLogout from "../auth/ModalLogout";

export function Header() {
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
      <div className="row">
        <div class="col-1 mt-2 ps-5">
          <Link class="navbar-brand" to="/">
            <img
              src="turtle-sport-favicon-color.png"
              alt=""
              className="w-100"
            />
          </Link>
        </div>
        <div className="col-7">
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
              {!user ? (
                <Link
                  to="/user/login"
                  className="nav-link active fw-bold text-dark"
                  activeClassName="active"
                >
                  Dành Cho Chủ Sân
                </Link>
              ) : (
                <Link class="nav-link fw-bold text-dark" to="/quan-ly">
                  Dành Cho Chủ Sân{" "}
                </Link>
              )}
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
              <Link class="nav-link text-dark" to="/san-bong">
                Sân Bóng
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-4 mt-3">
          {!user ? (
            <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-2">
              <Link class="btn btn-primary me-md-4 btn-sm" to="/user/login">
                Đăng Nhập
              </Link>
            </div>
          ) : (
            <p className="text-primary m-2 d-flex justify-content-end fw-bold">
              <i class="bx bx-wink-tongue bx-sm text-secondary"></i> Xin chào,{" "}
              {username}
              <Link
                role="button"
                data-bs-toggle="modal"
                data-bs-target="#logout"
              >
                <i
                  className="bx bxs-log-in-circle bx-sm text-secondary"
                  title="Đăng xuất"
                ></i>
              </Link>
            </p>
          )}
          <ModalLogout />
        </div>
      </div>
    </>
  );
}
