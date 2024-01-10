import { Link } from "react-router-dom";
export function CreateYard() {
  return (
    <>
      <div class="container-fluid form-control">
        <Link to="/"><i class="bx bx-arrow-back bx-md"></i></Link>
        <h3 class="text-center mt-2 fs-4">Tạo sân bóng mới</h3>
        <p class="text-secondary text-center">
          Cung cấp cho chúng tôi một số thông tin cơ bản sân của bạn để có thể
          bắt đầu tiến hành quản lý lịch đặt sân cũng như quảng bá chúng tới
          cộng đồng người chơi trên Turtle.
        </p>
        <form>
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="ABC Stadium"
            />
            <label for="floatingInput" className="text-primary">Tên Sân <span className="text-danger">*</span></label>
          </div>
          <div class="form-floating mt-4">
            <textarea
              class="form-control"
              placeholder="Sân mới cỏ mượt thoáng mát giá cả hợp lý"
              id="floatingTextarea2"
              style={{height: "100px"}}
            ></textarea>
            <label for="floatingTextarea2" className="text-primary">Mô tả sân <span className="text-danger">*</span></label>
          </div>
          <div class="form-floating mb-3 mt-4">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput" className="text-primary">Số điện thoại <span className="text-danger">*</span></label>
          </div>
          <div class="row mt-4">
            <div class="col-3">
              <div class="form-floating">
                <select
                  class="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                >
                  <option selected>Chọn Quận/Huyện</option>
                  <option value="1">Liên Chiểu</option>
                  <option value="2">Hải Châu</option>
                  <option value="3">Ngũ Hành Sơn</option>
                </select>
                <label for="floatingSelect" className="text-primary">Quận/Huyện</label>
              </div>
            </div>
            <div class="col-3">
              <div class="form-floating">
                <select
                  class="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                >
                  <option selected>Chọn Tỉnh/Thành Phố</option>
                  <option value="1">Đà Nẵng</option>
                  <option value="2">Thành Phố Hồ Chí Minh</option>
                  <option value="3">Hà Nội</option>
                </select>
                <label for="floatingSelect" className="text-primary">Tỉnh/Thành Phố</label>
              </div>
            </div>
            <div class="col-6">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput " className="text-primary">Địa chỉ <span className="text-danger">*</span></label>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-center m-4">
            <button class="btn btn-primary rounded-1">Tạo Mới</button>
          </div>
        </form>
        <div class="footer mt-4">
        <div class="container">
          <div class="footer-content">
            <p class="text-center mt-5">
              &copy; 2024 Turtle Company. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
