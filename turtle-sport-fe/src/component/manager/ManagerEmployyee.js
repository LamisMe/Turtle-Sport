import { Link } from "react-router-dom";
import { Header } from "../home/Header";
export function ManagerEmployyee() {
  return (
    <>
      <div class="container-fluid">
        <Header />
      </div>
      <div className="container">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <Link class="nav-link" aria-current="page" to="/quan-ly">
              Lịch Sân
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link active" to="/quan-ly/nhan-vien">
              Quản Lý Nhân Viên
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/quan-ly/thong-ke">
              Thống Kê
            </Link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Cài Đặt
            </a>
          </li>
        </ul>
      </div>

      <div className="container">
        <div className="">
          <div className="row">
            <div className="side-right ">
              <div className="tabs bg-light"></div>
              <div className="p-3">
                <div className="rounded-0 p-3">
                  <div className="row mb-4">
                    <label className="col-2 col-form-label">
                      
                    </label>
                    <div className="col-2 p-0 d-flex align-items-center">
                      <label className="col-10 fw-bold col-form-label ms-3">
                      
                      </label>
                    </div>
                    <div className="col-2 ms-3 d-flex align-items-center"></div>
                  </div>

                  
                    
                        <div className="mb-3">
                          <label>Số Điện Thoại</label>
                          <input
                            type="text"
                            name="inputQuantity"
                            id="name"
                            className="form-control"
                          />
                         
                        </div>
                        <div className="mb-3">
                          <label>Tên</label>
                          <input
                            type="text"
                            name="inputPrice"
                            id="name"
                            className="form-control"
                          />
                       
                        </div>
                        <div className="mb-3">
                          <label>Mật Khẩu</label>
                          <input
                            type="text"
                            name="inputPrice"
                            id="name"
                            className="form-control"
                          />
                       
                        </div>

                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                          <button
                            type="submit"
                            className="btn btn-outline-primary rounded-0 text-center mb-2 btn-sm"
                          >
                            Thêm Nhân Viên
                          </button>
                        </div>

                  <div>
                    <table className="table table-bordered table-hover">
                      <thead className="table-secondary">
                        <tr className="text-center">
                          <th scope="col" className="col-1">
                            STT
                          </th>
                          <th scope="col" className="col-3">
                            Tên Nhân Viên
                          </th>
                          <th scope="col" className="col-2">
                            Số điện thoại
                          </th>
                          <th scope="col" className="col-1">
                            Email
                          </th>
                          <th scope="col" className="col-1">
                            Chức vụ
                          </th>
                          <th scope="col" className="col-1">
                            Sân
                          </th>

                          {/*<th scope="col" className="col-1">Khuyến mãi</th>*/}
                          <th scope="col" className="col-2">
                            Chức năng
                          </th>
                        </tr>
                      </thead>
                      <tbody className="table-group-divider">
                        
                      </tbody>
                    </table>
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
