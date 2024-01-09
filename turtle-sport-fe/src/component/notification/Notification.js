import "./noti.css";
export function Notification() {
  return (
    <>
      <div class="container">
        <h5>Thông báo</h5>
    <div class="custom-alert custom-alert-success">
      Đăng ký thành công!
    </div>

    <div class="custom-alert custom-alert-info">
      Bạn đã nhận được một tin nhắn mới.
    </div>

    <div class="custom-alert custom-alert-warning">
      Bạn đã quên điền thông tin bắt buộc.
    </div>

    <div class="custom-alert custom-alert-danger">
      Có lỗi xảy ra trong quá trình xử lý.
    </div>
  </div>

    </>
  );
}
