import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { infoToken } from "../../service/AuthService";
import { Header } from "./Header";
export function Home() {
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
      <div class="container-fluid">
        <Header />
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
              {!user ? (
                <Link to="/login" activeClassName="active">
                  <button class="btn btn-primary mt-5 ms-5 fw-bold text-light">
                    Bắt Đầu Ngay
                  </button>
                </Link>
              ) : (
                <Link class="nav-link fw-bold text-dark" to="/tao-san">
                  <button class="btn btn-primary mt-5 ms-5 fw-bold text-light">
                    Bắt Đầu Ngay
                  </button>
                </Link>
              )}
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
        <h2 class="fw-bold mt-5">Khách hàng nói gì về chúng tôi</h2>
        <div className="row mt-5">
          <div className="col-6 ">
            <div class="card mb-3">
              <div class="row g-0 shadow-sm bg-body rounded">
                <div class="col-md-4">
                  <img
                    src="https://img.freepik.com/premium-vector/businessman-pointing-empty-copy-space-businessman-with-gesture_235461-414.jpg?size=626&ext=jpg"
                    class="img-fluid w-75"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <p class="card-text fst-italic">
                      “Doanh thu hoạt động của sân được thể hiện rõ ràng. Báo
                      cáo chi tiết dễ coi. Quản lý sân giờ nhàn!”
                    </p>
                    <p class="card-text">
                      <small class="text-muted">
                        Khu liên hiệp thể thao TNG - TpHCM
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div class="card mb-3">
              <div class="row g-0 shadow-sm bg-body rounded">
                <div class="col-md-4">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/002/400/532/original/young-happy-businessman-character-avatar-wearing-business-outfit-isolated-free-vector.jpg"
                    class="img-fluid w-75"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <p class="card-text fst-italic">
                      “Phần mềm giúp anh quản lý sân dễ dàng tiện lợi hơn, bớt
                      thời gian ghi chép điện thoại trao đổi với nhân viên.”
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Giám đốc TT Sport</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
