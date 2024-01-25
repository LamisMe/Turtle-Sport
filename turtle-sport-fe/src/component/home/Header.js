import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { infoToken } from "../../service/AuthService";
import ModalLogout from "../auth/ModalLogout";
import { useLocation } from "react-router-dom";
import "../style/header.css";
import { getInfoCus } from "../../service/CustomerService";
export function Header() {
  const location = useLocation();
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [username, setUsername] = useState("");
  const [customer, setCustomer] = useState();
  const [id, setId] = useState();

  const inforUser = async () => {
    const res = infoToken();
    // sub token;
    if (res != null) {
      setUsername(res.sub);
    }
  };
  const getInfoCustomer = async () => {
    let res = await getInfoCus(username);
    setCustomer(res);
    if(res != undefined){
      setId(res.id)

    }
  };


  useEffect(() => {
    inforUser();
    getInfoCustomer();
  }, [username]);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-primary shadow "
     
      >
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="nav justify-content-center text-secondary fw-bold">
              <li className="nav-item"></li>
              <li className="nav-item">
                <Link
                  className={`nav-link fw-bold  ${
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
              {/* <li className="nav-item">
                {!user ? (
                  <Link
                    to="/login"
                    className="nav-link active fw-bold text-light"
                    activeclassName="active"
                    title="Dành Cho Chủ Sân"
                  >
                    Dành Cho Chủ Sân
                  </Link>
                ) : (
                  <Link
                    className="nav-link fw-bold text-light"
                    to="/quan-ly"
                    title="Dành Cho Chủ Sân"
                  >
                    Dành Cho Chủ Sân{" "}
                  </Link>
                )}
              </li> */}
              {/* <li className="nav-item">
                <Link
                  className={`nav-link fw-bold  ${
                    location.pathname === "/tin-tuc"
                      ? "active text-warning"
                      : "text-light"
                  }`}
                  to="/tin-tuc"
                  title="Tin Tức"
                >
                  Tin Tức
                </Link>
              </li> */}
              <li className="nav-item">
                <a className="nav-link text-light" href="#" title="Cộng Đồng">
                  Cộng Đồng
                </a>
              </li>
              {/* <li className="nav-item">
                <Link
                  className={`nav-link fw-bold  ${
                    location.pathname === "/san-bong"
                      ? "active text-warning"
                      : "text-light"
                  }`}
                  to="/san-bong"
                  title="Sân Bóng"
                >
                  Sân Bóng
                </Link>
              </li> */}
            </ul>
            <div className="col-8">
              {!user ? (
                <div className="d-grid gap-2 d-md-flex justify-content-md-end ">
                  <Link
                    className="btn btn-secondary text-light me-md-5 btn-sm"
                    to="/login"
                  >
                    Đăng Nhập
                  </Link>
                </div>
              ) : (
                <div className="text-light d-flex justify-content-end fw-bold">
                  <ul className="nav justify-content-center text-secondary fw-bold">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i
                          className="bx bxs-user bx-sm me-1 text-light"
                          title="Thông tin cá nhân"
                        ></i>
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdownMenuLink"
                      >
                        <li>
                          <Link
                            className="dropdown-item"
                            to={`/ho-so/${id}`}
                          >
                            Thông tin cá nhân
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to={`/theo-doi/${id}`}
                          >
                            Danh sách theo dõi
                          </Link>
                        </li>
                        {/* <li>
                          <Link className="dropdown-item" to="/ho-so">
                            Lịch sử đặt sân
                          </Link>
                        </li> */}
                        <li>
                          <Link
                            role="button"
                            data-bs-toggle="modal"
                            data-bs-target="#logout"
                            className="dropdown-item"
                          >
                            Đăng xuất
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <p className="mt-2">Hi {username}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      <ModalLogout />
    </>
  );
}
