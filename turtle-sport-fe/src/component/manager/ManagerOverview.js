import { Link } from "react-router-dom";
export function ManagerOverview() {
  return (
    <>
      <div class="container-fluid">
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
          <li class="nav-item">
            <Link class="nav-link text-primary" to="/quan-ly">
              Quản Lý
            </Link>
          </li>

          <Link
            class="btn btn-primary text-light float-end fw-bold"
            to="/user/login"
            style={{ marginLeft: "30%" }}
          >
            Đăng Nhập
          </Link>
        </ul>
      </div>
      <div className="container">
      <div class="container mt-5">
    <h3 className="fw-bold">DANH SÁCH SÂN ĐÃ ĐƯỢC ĐẶT</h3>
    <div className=" d-flex justify-content-end">
    <Link to="/dat-san" className="btn btn-warning text-light"><i class='bx bx-plus'></i> THÊM LỊCH ĐẶT MỚI</Link>

    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">STT</th>
          <th scope="col">Tên sân bóng</th>
          <th scope="col">Ngày đặt</th>
          <th scope="col">Thời gian</th>
          <th scope="col">Số điện thoại</th>
          <th scope="col">Chức năng</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Sân A</td>
          <td>2023-12-29</td>
          <td>18:00 - 20:00</td>
          <td>0123456789</td>
          <td>
            <button class="btn btn-primary btn-sm">Chỉnh sửa</button>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Sân B</td>
          <td>2023-12-30</td>
          <td>08:00 - 10:00</td>
          <td>0987654321</td>
          <td>
            <button class="btn btn-primary btn-sm">Chỉnh sửa</button>
          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Sân B</td>
          <td>2023-12-30</td>
          <td>08:00 - 10:00</td>
          <td>0987654321</td>
          <td>
            <button class="btn btn-primary btn-sm">Chỉnh sửa</button>
          </td>
        </tr><tr>
          <th scope="row">4</th>
          <td>Sân B</td>
          <td>2023-12-30</td>
          <td>08:00 - 10:00</td>
          <td>0987654321</td>
          <td>
            <button class="btn btn-primary btn-sm">Chỉnh sửa</button>
          </td>
        </tr><tr>
          <th scope="row">5</th>
          <td>Sân B</td>
          <td>2023-12-30</td>
          <td>08:00 - 10:00</td>
          <td>0987654321</td>
          <td>
            <button class="btn btn-primary btn-sm">Chỉnh sửa</button>
          </td>
        </tr><tr>
          <th scope="row">6</th>
          <td>Sân B</td>
          <td>2023-12-30</td>
          <td>08:00 - 10:00</td>
          <td>0987654321</td>
          <td>
            <button class="btn btn-primary btn-sm">Chỉnh sửa</button>
          </td>
        </tr><tr>
          <th scope="row">7</th>
          <td>Sân B</td>
          <td>2023-12-30</td>
          <td>08:00 - 10:00</td>
          <td>0987654321</td>
          <td>
            <button class="btn btn-primary btn-sm">Chỉnh sửa</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
        {/* <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          Quản Lý
        </button> */}

        <div
          class="offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">
              Danh Sách Quản Lý
            </h5>
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <div>
              Some text as placeholder. In real life you can have the elements
              you have chosen. Like, text, images, lists, etc.
            </div>
            <div class="dropdown mt-3">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
              >
                Dropdown button
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
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
              </ul>
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
