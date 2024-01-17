import { Await, Link, useNavigate } from "react-router-dom";
import Address from "../location/Address";
import { Field, Formik, Form, ErrorMessage } from "formik";
import YardImage from "./YardImage";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import * as YardService from "../../service/YardService";
import { toast } from "react-toastify";

export function CreateYard() {
  const [urlImages, setUrlImages] = useState([]);
  const [beError, setBeError] = useState();
  const [typeYards, setTypeYards] = useState();

  const navigate = useNavigate();
  const onCallBack = (urls) => {
    if (urls) {
      setBeError((prevState) => ({
        ...prevState,
        productImage: "",
      }));
    }
    setUrlImages((prevState) => [...prevState, ...urls]);
  };

  const createYard = async (values) => {
    try {
      let res = await YardService.CreateYard(values);
      if (res.status === 201) {
        navigate("/quan-ly");
        toast(" Tạo mới sân thành công");
      } else if (res.status === 400) toast(" Tạo mới sân không thành công.");
    } catch (e) {}
  };

  const getTypeYard = async () => {
    let res = await YardService.GetTypeYard();
    setTypeYards(res.data);
  };

  const initValue = {
    name: "",
    startTime: 0,
    endTime: 0,
    image: "",
    description: "",
  };

  const initValidateForm = {
    name: Yup.string().required("Không được để trống *"),
    startTime: Yup.number()
      .required("Không được để trống *")
      .min(1, "Vui lòng nhập giờ mở cửa")
      .max(23, "Vui lòng nhập giờ không quá 23 giờ")
      .integer("Vui lòng nhập giờ đúng định dạng")
      .typeError("Vui lòng nhập giờ đúng định dạng")
      ,
    endTime: Yup.number()
      .required("Không được để trống *")
      .min(2, "Vui lòng nhập giờ đóng cửa")
      .max(24, "Vui lòng nhập giờ đúng định dạng")
      .integer("Vui lòng nhập giờ đúng định dạng")
      .typeError("Vui lòng nhập giờ đúng định dạng")
      .test(
        "endTime",
        "Giờ đóng cửa phải lớn hơn giờ mở cửa ít nhất 1 tiếng",
        function (value) {
          const { startTime } = this.options.context; // Truy cập vào thông tin context
          return value > startTime;
        }
      ),
    description: Yup.string().required("Không được để trống *"),
    typeYard: Yup.number().required("Không được để trống *"),
    address: Yup.string().required("Không được để trống *"),
  };

  const changeValue = (e) => {
    setBeError((prevState) => ({
      ...prevState,
      [e.target.name]: "",
    }));
  };

  useEffect(() => {
    createYard();
    getTypeYard();
  }, []);

  if (!typeYards) return null;
  return (
    <>
      <div class="container-fluid form-control">
        <Link to="/">
          <i class="bx bx-arrow-back bx-md"></i>
        </Link>
        <div className="container">
          <h3 class="text-center mt-2 fs-4">Tạo sân bóng mới</h3>
          <p class="text-secondary text-center">
            Cung cấp cho chúng tôi một số thông tin cơ bản sân của bạn để có thể
            bắt đầu tiến hành quản lý lịch đặt sân cũng như quảng bá chúng tới
            cộng đồng người chơi trên Turtle.
          </p>
          <Formik
            initialValues={initValue}
            onSubmit={(values) => createYard(values)}
            validationSchema={Yup.object(initValidateForm)}
          >
            <Form>
              <div className="row mt-3">
                <div className="col-4">
                  <div class="form-floating mb-3">
                    <Field
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      placeholder=""
                      name="name"
                    />
                    <label for="floatingInput" className="text-primary">
                      Tên Sân <span className="text-danger">*</span>
                    </label>
                    <div className="text-danger fst-italic mt-2">
                      <ErrorMessage select="small" name="name" />
                    </div>
                  </div>
                </div>
                {/* <div className="col-4">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label for="floatingInput" className="text-primary">
                      Số điện thoại <span className="text-danger">*</span>
                    </label>
                  </div>
                </div> */}
                <div className="col-4">
                  <div class="form-floating mb-3">
                    <div class="form-floating">
                      <Field
                        as="select"
                        class="form-select"
                        id="floatingSelect"
                        aria-label="Floating label select example"
                        name="typeYard"
                      >
                        <option>Chọn Loại Sân</option>
                        {typeYards.map((type) => (
                          <option key={type.id} value={type.id}>
                            {type.nameType}
                          </option>
                        ))}
                      </Field>
                      <label for="floatingSelect" className="text-primary">
                        Loại Sân
                      </label>
                      <div className="text-danger fst-italic mt-2">
                        <ErrorMessage select="small" name="typeYard" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-floating mt-4">
                <Field
                  as="textarea"
                  class="form-control"
                  name="description"
                  placeholder=""
                  id="floatingTextarea2"
                  style={{ height: "100px" }}
                ></Field>
                <label for="floatingTextarea2" className="text-primary">
                  Mô tả sân <span className="text-danger">*</span>
                </label>
                <div className="text-danger fst-italic mt-2">
                  <ErrorMessage select="small" name="description" />
                </div>
              </div>

              <div class="row mt-4">
                <Address />
              </div>
              <div className="row mt-4">
                <div className="col-6">
                  <div class="form-floating mb-3">
                    <Field
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      placeholder=""
                      name="startTime"
                    />
                    <label for="floatingInput" className="text-primary">
                      Giờ Mở Cửa <span className="text-danger">*</span>
                    </label>
                    <div className="text-danger fst-italic mt-2">
                      <ErrorMessage select="small" name="startTime" />
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div class="form-floating mb-3">
                    <Field
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      placeholder=""
                      name="endTime"
                    />
                    <label for="floatingInput" className="text-primary">
                      Giờ Đóng Cửa <span className="text-danger">*</span>
                    </label>
                    <div className="text-danger fst-italic mt-2">
                      <ErrorMessage select="small" name="endTime" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <YardImage
                  callBack={onCallBack}
                  name="image"
                  onInput={changeValue}
                />
              </div>
              <div class="d-flex justify-content-center m-4">
                <button class="btn btn-primary rounded-1">Tạo Mới</button>
              </div>
            </Form>
          </Formik>
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
