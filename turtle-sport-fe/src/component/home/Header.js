import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { infoToken } from "../../service/AuthService";
import ModalLogout from "../auth/ModalLogout";
export function Header() {
  const [user,setUser] = useState(localStorage.getItem("user"));
  const [username,setUsername] = useState("");
  const inforUser = async() =>{
    const res = infoToken();
    // sub token;
    if(res != null){
      setUsername(res.sub)
    }
  }

  useEffect(()=>{
    inforUser()
  },[]);
  return (
    <>
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
          {!user ? (
            <Link class="btn btn-primary text-light float-end fw-bold" to="/user/login" >
            Đăng Nhập
          </Link>
          ) : (
            <p className="text-danger m-2 d-flex justify-content-end" >Xin chào, {username}  <Link role="button" data-bs-toggle="modal" data-bs-target="#logout">
            <i className="bx bxs-log-in-circle bx-xs"></i>
        </Link></p>
          )}
        </ul>
        <ModalLogout/>
    </>
  );
}
