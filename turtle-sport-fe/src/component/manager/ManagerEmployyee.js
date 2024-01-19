import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Field, ErrorMessage, Form, Formik } from "formik";
export function ManagerEmployyee() {
  return (
    <>
      <div className="container-fluid">
        <div className="">
          <div className="row">
            <div className="side-right ">
              <div className="tabs bg-light"></div>
              <div className="rounded-0 ps-5">
                <div className="row mb-4">
                  <label className="col-2 col-form-label"></label>
                  <div className="col-2 p-0 d-flex align-items-center">
                    <label className="col-10 fw-bold col-form-label ms-3"></label>
                  </div>
                  <div className="col-2 ms-3 d-flex align-items-center"></div>
                </div>
                <h5>Thêm nhân viên mới</h5>
                <Formik>
                  <Form>
                    <div className="row  mt-3">
                      <div className=" col-auto">
                        <label>Số Điện Thoại</label>
                        <Field
                          type="text"
                          name="inputQuantity"
                          id="name"
                          className="form-control"
                        />
                      </div>
                      <div className=" col-auto">
                        <label>Tên</label>
                        <Field
                          type="text"
                          name="inputPrice"
                          id="name"
                          className="form-control"
                        />
                      </div>
                      <div className="col-auto">
                        <label>Mật Khẩu</label>
                        <Field
                          type="password"
                          name="inputPrice"
                          id="name"
                          className="form-control"
                        />
                      </div>
                      <div className="col-auto">
                        <label>Chức Vụ</label>
                        <Field
                          as="select"
                          name="inputPrice"
                          id="name"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
                      <button
                        type="submit"
                        className="btn btn-primary rounded-0 text-center mb-2 btn-sm"
                      >
                        Thêm Nhân Viên
                      </button>
                    </div>
                  </Form>
                </Formik>

                <div className="mt-3">
                  <h5>Danh sách nhân viên</h5>
                  <table className="table table-borderless ">
                    <thead className="text-secondary">
                      <tr>
                        <th scope="col" className="col-1">
                          .No
                        </th>
                        <th scope="col" className="col-2">
                          Tên Nhân Viên
                        </th>
                        <th scope="col" className="col-2">
                          Số điện thoại
                        </th>
                        <th scope="col" className="col-2">
                          Email
                        </th>
                        <th scope="col" className="col-1">
                          Chức vụ
                        </th>

                        {/*<th scope="col" className="col-1">Khuyến mãi</th>*/}
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
    </>
  );
}
