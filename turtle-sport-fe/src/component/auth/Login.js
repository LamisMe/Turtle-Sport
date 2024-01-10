import "./login.css";
export function Login() {
  return (
    <>
      <div class="wrapper">
        <div class="container main">
          <div class="row" id="row">
            <div class="col-md-6 side-image">
              <img src="images/white.png" alt="" />
              <div class="text">
              </div>
            </div>
            <div class="col-md-6 right">
              <div class="input-box">
                <header>Đăng Nhập</header>
                <div class="input-field">
                  <input
                    type="text"
                    class="input"
                    id="email"
                    required=""
                    autocomplete="off"
                  />
                  <label for="email" className="text-primary">Tài Khoản</label>
                </div>
                <div class="input-field">
                  <input type="password" class="input" id="pass" required="" />
                  <label for="pass" className="text-primary">Mật Khẩu</label>
                </div>
                <div class="input-field">
                  <input type="submit" class="submit" value="Đăng Nhập" />
                </div>
                <div class="signin">
                  <span>
                    Bạn chưa có tài khoản? <a href="#">Đăng ký</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
