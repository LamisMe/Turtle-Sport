import { Link, useNavigate, useParams } from "react-router-dom";
import { Form, Formik, ErrorMessage, Field } from "formik";
import { addBooking, getDateDuplicate } from "../../service/BookingService";
import { toast } from "react-toastify";
import * as yup from "yup";
import { GetYardDetail } from "../../service/YardService";
import { useEffect, useState } from "react";
import { infoToken } from "../../service/AuthService";
import { getInfoCus } from "../../service/CustomerService";

export function CreateBooking() {
  const { id } = useParams("");
  const [orderDto, setOrderDto] = useState([]);
  const navigate = useNavigate();
  const [checkout, setCheckout] = useState(false);
  const [show, setShow] = useState(false);
  const [online, setOnline] = useState(false);
  const [price, setPrice] = useState();
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [username, setUsername] = useState("");
  const [customer, setCustomer] = useState();
  const [cusId, setCusId] = useState();
  const [dates, setDates] = useState([]);

  const inforUser = async () => {
    const res = infoToken();
    // sub token;
    if (res != null) {
      setUsername(res.sub);
    }
  };

  const getInfoCustomer = async () => {
    let res = await getInfoCus(username);
    setCustomer(res);
    if (res != undefined) {
      setCusId(res.id);
    }
  };

  useEffect(() => {
    inforUser();
    getInfoCustomer();
  }, [username]);
  const getDuplicate = async () => {
    let res = await getDateDuplicate(id);
    setDates(res);
  };


  const addBook = async (value) => {
    setCheckout(false);
    for (let i = 0; i < dates.length; i++) {
      if (dates[i].bookingDate == value.dateBooking) {
        toast.error("Ngày này đã có người đặt");
        setCheckout(true);
        return;
      } 
    }
    if(checkout == false){
      await addBooking(cusId, id, value);
      navigate(`/thanh-toan/${id}`);
      toast.success("Đặt sân thành công");
    }
    }
 

  const getYard = async () => {
    let res = await GetYardDetail(id);
    setOrderDto(res.data);
    let money = parseInt(res.data.price / 23000);
    setPrice(money);
  };

  const initValue = {
    description: "",
    phoneNumber: "",
    name: "",
    customer: 2,
    yard: 0,
  };

  useEffect(() => {
    getYard();
    getDuplicate();
  }, [checkout]);

  const validateForm = {
    description: yup.string().required("Không được để trống *"),
    phoneNumber: yup
      .string()
      .required("Không được để trống *")
      .matches(/^0[0-9]{9}$/, "SĐT bào gồm 10 số ex:012312312."),
    name: yup.string().required("Không được để trống *"),
    dateBooking: yup
      .date()
      .min(new Date(), "Ngày đặt hàng phải lớn hơn ngày hiện tại."),
  };
  // }
  const handleModal = async () => {
    setShow(true);
  };

  const closeModal = async () => {
    setShow(false);
  };
  return (
    <>
      <div class="container form-control mt-3">
        <Link to={`/chi-tiet/${id}`}>
          <i class="bx bx-arrow-back bx-md"></i>
        </Link>
        <h3 class="text-center mt-2 fs-4">Tạo Lịch Đặt Mới</h3>
        <p class="text-secondary text-center">
          Chúng tôi chúc bạn có trải nghiệm tốt nhất với những dịch vụ của chúng
          tôi mang lại, hãy đảm bảo bạn tuân thủ đúng luật của cộng đồng người
          chơi trên Turtle.
        </p>
        <Formik
          initialValues={initValue}
          onSubmit={(values) => addBook(values)}
          validationSchema={yup.object(validateForm)}
        >
          <Form>
            <div class="form-floating mb-3">
              <Field
                type="text"
                as="textarea"
                class="form-control"
                id="floatingInput"
                placeholder="ABC Stadium"
                name="description"
              />
              <label for="floatingInput" className="text-primary">
                Mô Tả Thêm<span className="text-danger">*</span>
              </label>
              <div className="text-danger fst-italic mt-2">
                <ErrorMessage select="small" name="description" />
              </div>
            </div>
            <div class="form-floating mb-3 mt-4">
              <Field
                type="text"
                name="phoneNumber"
                class="form-control"
                id="floatingInput"
              />
              <label for="floatingInput" className="text-primary">
                Số điện thoại <span className="text-danger">*</span>
              </label>
              <div className="text-danger fst-italic mt-2">
                <ErrorMessage select="small" name="phoneNumber" />
              </div>
            </div>

            <div class="form-floating mb-3 mt-4">
              <Field
                type="text"
                class="form-control"
                name="name"
                id="floatingInput"
              />
              <label for="floatingInput" className="text-primary">
                Người Đặt <span className="text-danger">*</span>
              </label>
              <div className="text-danger fst-italic mt-2">
                <ErrorMessage select="small" name="name" />
              </div>
            </div>
            {/* <div className="col-4">
                  <div class="form-floating mb-3">
                    <div class="form-floating">
                      <Field
                        as="select"
                        class="form-select"
                        id="floatingSelect"
                        aria-label="Floating label select example"
                        name="time"
                      >
                        <option>Chọn giờ</option>
                        {time.map((t) => (
                          <option key={t.id} value={t.id}>
                            {t.time}
                          </option>
                        ))}
                      </Field>
                      <label for="floatingSelect" className="text-primary">
                        Giờ đặt
                      </label>
                      <div className="text-danger fst-italic mt-2">
                        <ErrorMessage select="small" name="time" />
                      </div>
                    </div>
                  </div>
                </div> */}
            <div className="col-4">
              <div class="form-floating mb-3 mt-4">
                <Field
                  type="date"
                  name="dateBooking"
                  class="form-control"
                  id="floatingInput"
                />
                <label for="floatingInput" className="text-primary">
                  Ngày đặt <span className="text-danger">*</span>
                </label>
                <div className="text-danger fst-italic mt-2">
                  <ErrorMessage select="small" name="dateBooking" />
                </div>
              </div>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="payment"
              />
              <label class="form-check-label" for="flexCheckChecked">
                Thanh toán trực tuyến
              </label>
            </div>
            <div class="d-flex justify-content-center m-4">
              <button className="btn btn-primary" type="submit">
                Đặt sân
              </button>
            </div>
          </Form>
        </Formik>

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
