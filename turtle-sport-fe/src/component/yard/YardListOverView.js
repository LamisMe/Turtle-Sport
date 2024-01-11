import { Header } from "../home/Header";
import { YardList } from "./YardList";
import { Link } from "react-router-dom";

export function YardListOverView() {
  return (
    <>
      <div className="container-fluid">
        <Header/>
      </div>
      <div className="container">
        <label for="exampleDataList" class="form-label text-secondary fw-bold ms-2">
          Tìm Sân Quanh Bạn <i class="bx bxs-map-pin"></i>
        </label>
        <input
          class="form-control"
          list="datalistOptions"
          id="exampleDataList"
          placeholder="Nhập tên sân..."
        />
        <datalist id="datalistOptions">
          <option value="Sân Hà Tĩnh" />
          <option value="Sân Chi Lăng" />
        </datalist>
        <div className="mt-5">
        <YardList/>
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
      </div>
    </>
  );
}
