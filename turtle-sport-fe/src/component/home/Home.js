import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { infoToken } from "../../service/AuthService";
export function Home() {
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
      <div class="container-fluid">
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
            <p className="text-danger mt-2" style={{marginLeft : "30%"}}>Xin chào {username}</p>
          )}
            
      
        </ul>

        <div class="container form-control bg-light">
          <div class="row">
            <div class="col-md-6">
              <img
                src="https://sport5.mediacdn.vn/158855217956261888/2020/4/25/mahibadhoo-maale-15874692805681338504150-1587823720891-15878237210941829428724.jpg"
                alt="Sân bóng"
                class="img-fluid w-75"
              />
            </div>
            <div class="col-md-6">
              <h2 class="mt-5 text-primary w-75 ms-5 fw-boldb">
                NÂNG CẤP NĂNG SUẤT SÂN BÓNG CỦA BẠN
              </h2>
              <p class="mt-5 text-dark w-75 ms-5 fst-italic">
                Nâng tỉ lệ lấp đầy sân mùa nắng cũng như mùa mưa. Thoải mái quản
                lý sân từ bất kỳ nơi nào
              </p>

              <Link to="/user/login" activeClassName="active">
                <button class="btn btn-primary mt-5 ms-5 fw-bold text-light">
                  Bắt Đầu Ngay
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div class="container mt-5">
        <h2 class="fw-bold">Quản lý sân bóng với chúng tôi</h2>
        <h5 class="text-secondary fs-5">
          Chúng tôi tập trung vào thúc đẩy phát triển hệ sinh thái thể thao phát
          triển bền vững.
        </h5>
      </div>

      <div class="container mt-5">
        <div class="row">
          <div class="col-4 mt-3">
            <i class="bx bx-dollar-circle bx-lg text-primary"></i>
            <h5 class="fw-bold">Tăng trưởng doanh thu</h5>
            <p class="text-secondary">
              Doanh thu tăng từ 10% trở lên! Cắt giảm chi phí, thời gian quản
              lý.
            </p>
          </div>
          <div class="col-4 mt-3">
            <i class="bx bx-support bx-lg text-primary"></i>
            <h5 class="fw-bold">Hỗ trợ tận tình</h5>
            <p class="text-secondary">
              Luôn luôn sẵn sàng hỗ trợ bạn bất cứ lúc nào ở đâu
            </p>
          </div>
          <div class="col-4 mt-3">
            <i class="bx bxs-layout bx-lg text-primary"></i>
            <h5 class="fw-bold">Quản lý hiệu quả</h5>
            <p class="text-secondary">
              Giải pháp quản lý sân đơn giản, dễ dàng mọi lúc mọi nơi .
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-4 mt-3">
            <i class="bx bx-mouse bx-lg text-primary"></i>
            <h5 class="fw-bold">Dễ dàng sử dụng</h5>
            <p class="text-secondary">
              Giao diện thân thiện, dễ dàng làm quen sử dụng.
            </p>
          </div>
          <div class="col-4 mt-3">
            <i class="bx bxs-cog bx-lg text-primary"></i>
            <h5 class="fw-bold">An toàn tin cậy</h5>
            <p class="text-secondary">
              Đảm bảo hoạt động kinh doanh của bạn được thuận lợi là ưu tiên
              hàng đầu của chúng tôi
            </p>
          </div>
          <div class="col-4 mt-3">
            <i class="bx bxs-party bx-lg text-primary"></i>
            <h5 class="fw-bold">Quảng bá hiệu quả</h5>
            <p class="text-secondary">
              Trang thông tin sân bóng riêng biệt với hàng ngàn người truy cập
              hằng ngày!
            </p>
          </div>
        </div>
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
    </>
  );
}
