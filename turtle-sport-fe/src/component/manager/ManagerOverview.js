import { Link } from "react-router-dom";
import { HeaderManager } from "../home/HeaderManager";
export function ManagerOverview() {
  return (
    <>
      <div className="container-fluid">
        <HeaderManager />
      </div>

      <div className="container">
        <div className=" d-flex justify-content-end">
          <Link to="/dat-san" className="btn btn-warning text-light">
            <i class="bx bx-plus"></i> THÊM LỊCH ĐẶT MỚI
          </Link>
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
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Sân B</td>
              <td>2023-12-30</td>
              <td>08:00 - 10:00</td>
              <td>0987654321</td>
              <td>
                <button class="btn btn-primary btn-sm">Chỉnh sửa</button>
              </td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Sân B</td>
              <td>2023-12-30</td>
              <td>08:00 - 10:00</td>
              <td>0987654321</td>
              <td>
                <button class="btn btn-primary btn-sm">Chỉnh sửa</button>
              </td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Sân B</td>
              <td>2023-12-30</td>
              <td>08:00 - 10:00</td>
              <td>0987654321</td>
              <td>
                <button class="btn btn-primary btn-sm">Chỉnh sửa</button>
              </td>
            </tr>
            <tr>
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
