import { Header } from "../home/Header";

export function YardList() {
  return (
    <>
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <div class="card">
            <img
              src="https://sporta.s3.ap-southeast-1.amazonaws.com/uploads/production/image/image/560/large_d53ac4c9-daeb-4224-8a1c-208d943dfdd9.jpeg?X-Amz-Expires=600&X-Amz-Date=20240109T233606Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIQW3XISBSHKJGJBQ%2F20240109%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=f793568d085be1f6db81fd83622262f97bc1c92f867690d8ab432790f085601a"
              class="card-img-top"
              alt="..."
              style={{ width: "544px", height: "408px", objectFit: "cover" }}
            />
            <div class="card-body">
              <h5 class="card-title">
                Sân bóng Bình Thắng - Dĩ An Bình Dương{" "}
              </h5>
              <p class="card-text">
                Sân giá chỉ 120.000/h gồm có 3 sân 5 diện tích chuẩn sân bóng
                mini 20x40 và một sân 7 80x40 rộng đẹp thoáng mát .
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src="https://sporta.s3.ap-southeast-1.amazonaws.com/uploads/production/image/image/577/large_6d83a84c-e9c2-44b8-b23c-8082fb2c4d50.jpg?X-Amz-Expires=600&X-Amz-Date=20240109T233904Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIQW3XISBSHKJGJBQ%2F20240109%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=f4cafa0c5144746c49a5ef3f76a1d2ad922260ead85096d368e8d30d40ffa8d3"
              class="card-img-top"
              alt="..."
              style={{ width: "544px", height: "408px", objectFit: "cover" }}
            />
            <div class="card-body">
              <h5 class="card-title">Chảo Lửa Đồng Xoài</h5>
              <p class="card-text">
                Ngã 4 Osaka, đường Nguyễn Huệ, phường Tân Đồng, Tp Đồng Xoài,
                Bình Phước
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src="https://sporta.s3.ap-southeast-1.amazonaws.com/uploads/production/image/image/620/large_a32ce933-a11f-4440-bd83-d8464f8e3f57.jpg?X-Amz-Expires=600&X-Amz-Date=20240110T011335Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIQW3XISBSHKJGJBQ%2F20240110%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=c47d932a64a6fd497ad120c834e8c98ac57deedf89032102c68e4dbc9c04e307"
              class="card-img-top"
              alt="..."
              style={{ width: "544px", height: "408px", objectFit: "cover" }}
            />
            <div class="card-body">
              <h5 class="card-title">Sân Bóng Tân Long</h5>
              <p class="card-text">
                177/38 Đường Nguyễn Thị Minh Khai, Khu Phố Tân Long, Phường Tân
                Đông Hiệp, Thị xã Dĩ An, Bình Dương
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src="https://sporta.s3.ap-southeast-1.amazonaws.com/uploads/production/image/image/291/large_1397e1add4693a376378.jpg?X-Amz-Expires=600&X-Amz-Date=20240109T234618Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIQW3XISBSHKJGJBQ%2F20240109%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=9d361b0d67d1ca06313aa4d5fe274ac5309d3e5876f5a7c3123ad4336b0065f1"
              class="card-img-top"
              alt="..."
              style={{ width: "544px", height: "408px", objectFit: "cover" }}
            />
            <div class="card-body">
              <h5 class="card-title">SÂN BÓNG MẬU LƯƠNG</h5>
              <p class="card-text">
                Sân bóng Mậu Lương, Phường Kiến Hưng, Quận Hà Đông, Thủ Đô Hà
                Nội{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
