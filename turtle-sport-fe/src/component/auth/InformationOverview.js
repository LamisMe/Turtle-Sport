import { useEffect, useState } from "react";
import "./info.css";
import { Link, useParams } from "react-router-dom";
import * as CusService from "../../service/CustomerService";
import { getHistory } from "../../service/BookingService";

export function InfomationOverview() {
  const [currentYear, setCurrentYear] = useState("");
  const [customer, setCustomer] = useState([]);
  const [limit, setLimit] = useState(2);
  const { id } = useParams();
  const [carts, setCarts] = useState();
  const [history, setHistory] = useState([]);

  const getInfoCustomer = async () => {
    let res = await CusService.getInfoCusId(id);
    setCustomer(res);
  };

  const getHistoryBooking = async () => {
    let res = await getHistory(id);
    setHistory(res);
  };

  useEffect(() => {
    const year = new Date().getFullYear();
    setCurrentYear(year.toString());
  }, []);

  useEffect(() => {
    let count = 0;
    const fetchData = async () => {
      await getInfoCustomer();
      if (customer !== undefined) {
        await getHistoryBooking(id);
      }
    };
    if (count < 6) {
      fetchData();
    }
  }, [id]);

  return (
    <>
      <div>
        <div class="running-text text-light bg-danger">
          <marquee behavior="scroll" direction="left">
            Chúc {customer.name} và người thân một năm {currentYear} thật vui vẻ
            và hạnh phúc <i class="bx bxl-tux bx-sm"></i>
          </marquee>
        </div>
      </div>
      <h6 className="text-center mt-2">Trang Cá Nhân</h6>
      <div className="container mt-3">
        <div
          className="profile-header"
          style={{
            backgroundImage:
              'url("https://mega.com.vn/media/news/0306_Hinh-nen-den-4k103.jpg")',
            objectFit: "cover",
          }}
        >
          <img
            className="profile-image"
            src="https://i.pinimg.com/736x/dd/78/3a/dd783a4a38024c31be8f2131259fcf75.jpg"
            alt="Profile Image"
          />
        </div>
        <h5 className="profile-name text-center">{customer.name}</h5>
        <div className="container form-control">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <Link
                className="nav-link"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Giới thiệu
              </Link>
            </li>

            <li class="nav-item" role="presentation">
              <Link
                className="nav-link"
                href="#"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact"
                type="button"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                Lịch sử đặt sân
              </Link>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div className="" style={{ height: "258px" }}>
                <div className="col-3 ms-2  mt-2">
                  <p></p>
                  <p className="text-primary fw-bold">Bạn có gì mới không ?</p>
                </div>
                <div className="col-6 mt-2 fw-bold">
                  <p>
                    <span className="text-warning fst-italic fw-bold">
                      Ngày sinh :{" "}
                    </span>
                    {new Date(customer.birthDay).toLocaleDateString()}
                  </p>
                  <p>
                    <span className="text-warning fst-italic fw-bold">
                      Địa chỉ :{" "}
                    </span>
                    {customer.address}
                  </p>
                  <p>
                    <span className="text-warning fst-italic fw-bold">
                      Số điện thoại :{" "}
                    </span>
                    {customer.phoneNumber}{" "}
                  </p>
                  <p>
                    <span className="text-warning fst-italic fw-bold">
                      Email :{" "}
                    </span>
                    {customer.email}{" "}
                  </p>
                </div>
              </div>
            </div>

            <div
              class="tab-pane fade"
              id="contact"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >
              <table class="table table-hover" style={{ height: "258px" }}>
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Ngày Đặt</th>
                    <th>Sân</th>
                    <th>Trạng thái</th>
                    <th>Thanh Toán</th>
                  </tr>
                </thead>
                <tbody>
                  {history ? (
                    history.map((h, index) => (
                      <tr key={h.id}>
                        <td>{index + 1}</td>
                        <td>{new Date(h.bookingDate).toLocaleDateString()}</td>
                        <td>{h.name}</td>
                        <td className="fw-bold">
                          {h.payment == 0 ? (
                            <p>Chưa thanh toán</p>
                          ) : (
                            <p>
                              Đã thanh toán{" "}
                              <span className="text-success  ">
                                <i class="bx bx-check bx-sm"></i>
                              </span>
                            </p>
                          )}
                        </td>
                        <td>
                        {h.payment == 0 ? (
                            <Link to={`/thanh-toan/${h.id}`} style={{textDecoration : "none"}}>Thanh Toán</Link>
                          ) : (
                            <p className="fw-bold">
                              Đã thanh toán{" "}
                              <span className="text-success  ">
                                <i class="bx bx-check bx-sm"></i>
                              </span>
                            </p>
                          )}
                          
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr className="text-center">
                      <td colSpan={5}>Chưa có lịch sử đặt hàng</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
