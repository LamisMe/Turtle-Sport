import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { infoToken } from "../../service/AuthService";
export function Header() {
  const [user,setUser] = useState(localStorage.getItem("user"));
  const [username,setUsername] = useState("");
  const inforUser = async() =>{
    const res = infoToken();
    // console.log("gà",res);
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
            <a
              class="nav-link active fw-bold text-primary"
              aria-current="page"
              href="#"
            >
              Trang Chủ
            </a>
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
            <Link class="btn btn-primary text-light float-end fw-bold" to="/user/login" style={{marginLeft : "30%"}}>
            Đăng Nhập
          </Link>
          ) : (
            <p className="text-danger mt-2" style={{marginLeft : "28%"}}>Xin chào {username}</p>
          )}
            
      
        </ul>
    </>
  );
}
