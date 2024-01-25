import { useEffect, useState } from "react";
import "./info.css";
import { Link, useParams } from "react-router-dom";
import * as CusService from "../../service/CustomerService";
import { getFollowLimit } from "../../service/FollowService";

export function FollowOverview() {
  const [currentYear, setCurrentYear] = useState("");
  const [customer, setCustomer] = useState([]);
  const [limit, setLimit] = useState(2);
  const { id } = useParams();
  const [carts, setCarts] = useState([]);

  const getInfoCustomer = async () => {
    let res = await CusService.getInfoCusId(id);
    setCustomer(res);
  };
  const getFollow = async () => {
    let res = await getFollowLimit(id, limit);
    setCarts(res);
  };
  const handlerLimit = () => {
    setLimit(limit + 2);
    getFollowLimit();
  };

  useEffect(() => {
    const year = new Date().getFullYear();
    setCurrentYear(year.toString());
  }, []);

  useEffect(() => {
    getInfoCustomer();
    getFollow();
  }, [id, limit]);

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
      <h6 className="text-center mt-2">Trang Theo Dõi</h6>
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
                Danh sách theo dõi
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
              <div className="">
                <div className="row">
                  {!carts ? (
                    <p className="text-center mt-5">Danh sách theo dõi trống</p>
                  ) : (
                    carts.map((cart) => (
                      <Link
                        class="card mb-2 mt-3 text-dark"
                        style={{ maxWidth: "540px", textDecoration: "none" }}
                        to={`/chi-tiet/${cart.yardId}`}
                      >
                        <div class="row g-0">
                          <div class="col-md-4">
                            <img
                              src={cart.image}
                              class="img-thumbail rounded-start mt-3"
                              alt="..."
                              style={{
                                width: "157.250px",
                                height: "110.062px",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                          <div class="col-md-8">
                            <div class="card-body">
                              <h5 class="card-title">{cart.name}</h5>
                              <p class="card-text">{cart.description.length > 100 ? cart.description.slice(0, 100) : cart.description}...</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                      
                    ))
                  )
                  }
                 <div class="d-flex justify-content-center mb-5">
                    <button
                      className="btn btn-sm btn-primary w-25 mt-3 text-center"
                      onClick={() => handlerLimit()}
                    >
                      Tải Thêm
                    </button>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
