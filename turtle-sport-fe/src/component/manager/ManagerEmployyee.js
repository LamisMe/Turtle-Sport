import { Link } from "react-router-dom";
import { Header } from "../home/Header";
import { HeaderManager } from "../home/HeaderManager";
export function ManagerEmployyee() {
  return (
    <>
      <div className="container-fluid">
        <HeaderManager />
      </div>

      <div className="container">
        <div className="">
          <div className="row">
            <div className="side-right ">
              <div className="tabs bg-light"></div>
              <div className="p-3">
                <div className="rounded-0 p-3">
                  <div className="row mb-4">
                    <label className="col-2 col-form-label"></label>
                    <div className="col-2 p-0 d-flex align-items-center">
                      <label className="col-10 fw-bold col-form-label ms-3"></label>
                    </div>
                    <div className="col-2 ms-3 d-flex align-items-center"></div>
                  </div>

                  <div className="row">
                    <div className=" col-auto">
                      <label>Số Điện Thoại</label>
                      <input
                        type="text"
                        name="inputQuantity"
                        id="name"
                        className="form-control"
                      />
                    </div>
                    <div className=" col-auto">
                      <label>Tên</label>
                      <input
                        type="text"
                        name="inputPrice"
                        id="name"
                        className="form-control"
                      />
                    </div>
                    <div className="col-auto">
                      <label>Mật Khẩu</label>
                      <input
                        type="text"
                        name="inputPrice"
                        id="name"
                        className="form-control"
                      />
                    </div>
                    <div className="col-auto">
                      <label>Sân</label>
                      <input
                        type="text"
                        name="inputPrice"
                        id="name"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
                    <button
                      type="submit"
                      className="btn btn-outline-primary rounded-0 text-center mb-2 btn-sm"
                    >
                      Thêm Nhân Viên
                    </button>
                  </div>

                  <div className="mt-3">
                    <h5>Danh sách nhân viên</h5>
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
                      <tbody className="table-group-divider"></tbody>
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
