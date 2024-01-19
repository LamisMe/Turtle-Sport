import { Link, useParams } from "react-router-dom";
import * as YardService from "../../service/YardService";
import { useEffect, useState } from "react";
import { infoToken } from "../../service/AuthService";

export function YardDetail() {
  const { id } = useParams();
  const [yard, setYard] = useState();
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [username, setUsername] = useState("");
  const vnd = new Intl.NumberFormat("vi-VN", {});
  const inforUser = async () => {
    const res = infoToken();
    // sub token;
    if (res != null) {
      setUsername(res.sub);
    }
  };

  useEffect(() => {
    inforUser();
  }, []);

  const getYard = async (id) => {
    try {
      if (id) {
        const res = await YardService.GetYardDetail(id);
        setYard(res.data);
      }
    } catch (e) {}
  };
  useEffect(() => {
    id && getYard(id);
  }, [id]);

  const formatCurrency = (currency) => {
    if (currency == undefined) {
      return vnd.format(0);
    } else {
      return vnd.format(currency);
    }
  };

  if (!yard) {
    return null;
  }
  return (
    <>
      <div className="container-fluid">
        <Link to="/san-bong">
          <i class="bx bx-arrow-back bx-md"></i>
        </Link>
        <div className="container w-50 mt-3">
          <div class="text-center">
            <img
              src={yard.image}
              class="img-"
              alt="..."
              style={{ width: "725px", height: "384px", objectFit: "cover" }}
            ></img>
          </div>
          <h2
            className="mt-3"
            style={{ fontWeight: "700", fontFamily: "sans-serif" }}
          >
            {yard.name}
          </h2>
          <p>{yard.description}</p>
          <h5
            className=""
            style={{ fontWeight: "600", fontFamily: "sans-serif" }}
          >
            <i class="bx bxs-phone bx-sm"></i>Số điện thoại
          </h5>
          {!user ? (
            <Link
              to="/login"
              className="m-3"
              style={{ textDecoration: "none" }}
            >
              Đăng nhập để xem số điện thoại
            </Link>
          ) : (
            <p className="ms-3">{yard.customer.phoneNumber}</p>
          )}
          <h5
            className="mt-2"
            style={{ fontWeight: "600", fontFamily: "sans-serif" }}
          >
            <i class="bx bx-dollar bx-sm"></i>
            Giá sân
          </h5>
          <p className="ms-3 text-danger fw-bold">
            {formatCurrency(yard.price)} VND
          </p>
          <h5
            className="mt-2"
            style={{ fontWeight: "600", fontFamily: "sans-serif" }}
          >
            <i class="bx bx-current-location bx-sm"></i> Địa chỉ
          </h5>
          <p className="ms-3">{yard.address}</p>
          <h5
            className="mt-2"
            style={{ fontWeight: "600", fontFamily: "sans-serif" }}
          >
            Hình ảnh
          </h5>
          <img
            className="img-thumbnail"
            src={yard.image}
            style={{
              width: "157.250px",
              height: "110.062px",
              objectFit: "cover",
            }}
          ></img>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end ms-5 mt-3 mb-5  ">
            {!user ? (
              <Link
                class="btn btn-danger me-md-2 btn-sm text-light"
                type="button"
                to="/login"
              >
                Đặt sân ngay
              </Link>
            ) : (
              <Link
                to={`/dat-san/${yard.id}`}
                class="btn btn-danger me-md-2 btn-sm text-light"
                type="button"
              >
                Đặt Sân Ngay{" "}
                <i
                  class="bx bxs-hand-left animate__animated animate__bounce text-warning"
                  style={{
                    animationIterationCount: "infinite",
                    animationDuration: "1s",
                  }}
                ></i>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
