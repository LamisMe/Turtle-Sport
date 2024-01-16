import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { infoToken } from "../../service/AuthService";
import ModalLogout from "../auth/ModalLogout";
import { useLocation } from "react-router-dom";
export function HeaderManager() {
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
      <div className="container-fluid">
        <div className="row">
          <div className="col-10">
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <Link class={`nav-link ${location.pathname === '/quan-ly' ? 'active' : 'text-primary'}`} aria-current="page" to="/quan-ly">
                  Lịch Sân
                </Link>
              </li>
              <li class="nav-item">
                <Link class={`nav-link ${location.pathname === '/' ? 'active' : 'text-primary'}`} aria-current="page" to="/">
                  Trang Chủ
                </Link>
              </li>
              <li class="nav-item">
                <Link class={`nav-link ${location.pathname === '/nhan-vien' ? 'active' : 'text-primary'}`} to="/nhan-vien">
                  Quản Lý Nhân Viên
                </Link>
              </li>
              <li class="nav-item">
                <Link class={`nav-link ${location.pathname === '/thong-ke' ? 'active' : 'text-primary'}`} to="/thong-ke">
                  Thống Kê
                </Link>
              </li>
              <li class="nav-item">
                <Link class={`nav-link ${location.pathname === '/cai-dat' ? 'active' : 'text-primary'}`} to="/cai-dat">
                  Cài Đặt
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-2 mt-3">
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
      </div>
    </>
  );
}
