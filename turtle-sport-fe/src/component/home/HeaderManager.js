import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { infoToken } from "../../service/AuthService";
import ModalLogout from "../auth/ModalLogout";
import { useLocation } from "react-router-dom";
import * as CustomerService from "../../service/CustomerService";
import { ManagerEmployyee } from "../manager/ManagerEmployyee";

export function HeaderManager() {
  const location = useLocation();
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [username, setUsername] = useState("");
  const [yards, setYards] = useState([]);

  const inforUser = async () => {
    const res = infoToken();
    // sub token;
    if (res != null) {
      setUsername(res.sub);
    }
  };

  const getAllYard = async () => {
    let res = await CustomerService.getAllYard(username);
    setYards(res.data);
  };

  useEffect(() => {
    getAllYard();
  }, [username]);

  useEffect(() => {
    inforUser();
  }, []);
  if (!yards) return null;
  return (
    <>
      <div class="d-flex align-items-start">
        <div
          class="nav flex-column nav-pills bg-light"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
          style={{ height: "40rem", width: "200px" }}
        >
          <Link
            class="nav-link active"
            id="v-pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-home"
            type="button"
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="true"
            to="/quan-ly"
          >
            Lịch Sân
          </Link>
          <Link class="nav-link" to="/">
            Trang Chủ
          </Link>
          <Link
            class="nav-link"
            id="v-pills-messages-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-messages"
            type="button"
            role="tab"
            aria-controls="v-pills-messages"
            aria-selected="false"
            to="/nhan-vien"
          >
            Quản Lý Nhân Viên
          </Link>
          <Link
            class="nav-link"
            id="v-pills-settings-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-settings"
            type="button"
            role="tab"
            aria-controls="v-pills-settings"
            aria-selected="false"
            to="/cai-dat"
          >
            Cài Đặt
          </Link>
        </div>
        <div class="tab-content" id="v-pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="v-pills-home"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
          ></div>
          <div
            class="tab-pane fade"
            id="v-pills-profile"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
          ></div>
          <div
            class="tab-pane fade"
            id="v-pills-messages"
            role="tabpanel"
            aria-labelledby="v-pills-messages-tab"
          >
            <ManagerEmployyee />
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-settings"
            role="tabpanel"
            aria-labelledby="v-pills-settings-tab"
          >
            ...
          </div>
        </div>
      </div>

      {/* <div className="container-fluid">
  <div className="row">
    <div className="col-10">
    <ul class="nav nav-tabs">
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          href="#"
          role="button"
          aria-expanded="false"
        >
          Lịch Sân
        </a>
        <ul className="dropdown-menu">
          {yards.map((yard) => (
            <li key={yard.id}>
              <Link className="dropdown-item" to="/quan-ly">
                {yard.name}
              </Link>
            </li>
          ))}
        </ul>
      </li>
            
            
              <li class="nav-item">
                <Link
                  class={`nav-link ${
                    location.pathname === "/" ? "active" : "text-primary"
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Trang Chủ
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class={`nav-link ${
                    location.pathname === "/nhan-vien"
                      ? "active"
                      : "text-primary"
                  }`}
                  to="/nhan-vien"
                >
                  Quản Lý Nhân Viên
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class={`nav-link ${
                    location.pathname === "/thong-ke"
                      ? "active"
                      : "text-primary"
                  }`}
                  to="/thong-ke"
                >
                  Thống Kê
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class={`nav-link ${
                    location.pathname === "/cai-dat" ? "active" : "text-primary"
                  }`}
                  to="/cai-dat"
                >
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
      </div> */}
    </>
  );
}
