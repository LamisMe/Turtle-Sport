import { SildebarUser } from "../sidebar/SidebarUser";
import "./info.css";
export function InfomationOverview(){
    return (
        <>
          <div class="main-container d-flex">
            <SildebarUser />
            <div class="content">
                <div class="container-fluid">
                  <div class="d-flex justify-content-between d-md-none d-block">
                    <button class="btn px-1 py-0 open-btn me-2">
                      <i class="bx bx-menu"></i>
                    </button>
                  </div>
                  <button
                    class="navbar-toggler p-0 border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <i class="fal fa-bars"></i>
                  </button>
                  <div
                    class="collapse navbar-collapse justify-content-end"
                    id="navbarSupportedContent"
                  >
                    <ul class="navbar-nav mb-2 mb-lg-0">
                      <li class="nav-item">
                        <a
                          class="nav-link active"
                          aria-current="page"
                          href="cart.html"
                        >
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
    
              <div class="dashboard-content px-3 pt-4">
              <div class="container">
    <div class="profile-card">
      <h1>Hồ sơ</h1>
      <form>
        <div class="form-group">
          <label for="name">Họ và tên:</label>
          <input type="text" class="form-control" id="name" placeholder="Nhập họ và tên"/>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" class="form-control" id="email" placeholder="Nhập email"/>
        </div>
        <div class="form-group">
          <label for="phone">Số điện thoại:</label>
          <input type="text" class="form-control" id="phone" placeholder="Nhập số điện thoại"/>
        </div>
        <div class="form-group">
          <label for="address">Địa chỉ:</label>
          <textarea class="form-control" id="address" rows="3" placeholder="Nhập địa chỉ"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Lưu</button>
      </form>
    </div>
  </div>
              </div>
            </div>
          </div>
        </>
      );
}