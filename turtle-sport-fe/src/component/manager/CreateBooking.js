import { Link } from "react-router-dom";
export function CreateBooking(){
    return(
        <>
        <div class="container-fluid form-control">
        <Link to="/quan-ly"><i class="bx bx-arrow-back bx-md"></i></Link>
        <h3 class="text-center mt-2 fs-4">Tạo Lịch Đặt Mới</h3>
        <p class="text-secondary text-center">
          Chúng tôi chúc bạn có trải nghiệm tốt nhất với những dịch vụ của chúng tôi mang lại, hãy đảm bảo bạn tuân thủ đúng luật của 
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
            <label for="floatingTextarea2" className="text-primary">Mô tả thêm <span className="text-danger">*</span></label>
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
          <div class="form-floating mb-3 mt-4">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput" className="text-primary">Người Đặt <span className="text-danger">*</span></label>
          </div>
          <div class="row mt-4">
            <div class="col-3">
              <div class="form-floating">
                <select
                  class="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                >
                  <option selected>Chọn Khung Giờ</option>
                  <option value="1">5-6</option>
                  <option value="2">6-7</option>
                  <option value="3">7-8</option>
                </select>
                <label for="floatingSelect" className="text-primary">Khung giờ</label>
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
    )
}