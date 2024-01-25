import { infoToken } from "../../service/AuthService";
import { useEffect, useState } from "react";
import * as YardService from "../../service/YardService";
import { Link } from "react-router-dom";
import { showMsgWarning } from "../../service/YardService";
import { getLimit5 } from "../../service/BookingService";
import queryString from "query-string";
export function Home() {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [username, setUsername] = useState("");
  const [yards, setYards] = useState([]);
  const [nameSearch, setNameSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [refresh, setRefresh] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const { query } = queryString.parse(window.location.search);
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [top,setTop] = useState([]);


  const getAllYard = async () => {
    let res = await YardService.YardList(currentPage, nameSearch);
    setYards(res.data.content);
    setTotalPages(res.data.totalPages);
  };
  const getTop= async () => {
    let res = await getLimit5();
    setTop(res);
  };

  const handleSearch = () => {
    // Thay đổi URL
    window.history.pushState(null, "", `/results?query=${nameSearch}`);
  };

  const handlerChangeSearch = (value) => {
    setShowResults(false);
    setNameSearch(value);
  };

  const prePage = () => {
    setCurrentPage((currentPage) => currentPage - 1);
    setRefresh((refresh) => !refresh);
  };

  const nextPage = () => {
    setCurrentPage((currentPage) => currentPage + 1);
    setRefresh((refresh) => !refresh);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      search();
    }
  };

  const dontContainsSpecialCharacters = (string) => {
    const regex = /^[^!@#$%^&*()_+={}\[\]:;,<.>?\\\/'"`]*$/;
    return regex.test(string);
  };

  const search = () => {
    handleSearch();
    if (dontContainsSpecialCharacters(nameSearch)) {
      getAllYard().then();
      setShowResults(true);

    } else {
      showMsgWarning("Tên Tìm Kiếm Không Hợp Lệ");
    }
  };

  useEffect(() => {
    getAllYard();
    const fetchSearchResults = async () => {
      const response = await fetch(`API_URL?query=${query}`);
      const data = await response.json();
      setSearchResults(data.results);
    };
    fetchSearchResults();
  }, [currentPage]);

  const inforUser = async () => {
    const res = infoToken();
    // sub token;
    if (res != null) {
      setUsername(res.sub);
    }
  };

  useEffect(() => {
    inforUser();
    getTop();
  }, []);
  return (
    <>
        <div className="container form-control bg-light">
          <div className="row mt-5">
            <div className="col-md-6">
              <img
                src="https://sport5.mediacdn.vn/158855217956261888/2020/4/25/mahibadhoo-maale-15874692805681338504150-1587823720891-15878237210941829428724.jpg"
                alt="Sân bóng"
                className="img-fluid w-75"
              />
            </div>
            <div className="col-md-6">
              <h2 className="mt-5 text-primary w-75 ms-5 fw-boldb">
                NÂNG CẤP NĂNG SUẤT SÂN BÓNG CỦA BẠN
              </h2>
              <p className="mt-5 text-dark w-75 ms-5 fst-italic">
                Nâng tỉ lệ lấp đầy sân mùa nắng cũng như mùa mưa. Thoải mái quản
                lý sân từ bất kỳ nơi nào
              </p>
              {!user ? (
                <Link to="/login" activeclassNameName="active">
                  <button className="btn btn-primary mt-5 ms-5 fw-bold text-light">
                    Bắt Đầu Ngay
                  </button>
                </Link>
              ) : (
                <Link className="nav-link fw-bold text-dark" to="/tao-san">
                  <button className="btn btn-primary mt-5 ms-5 fw-bold text-light">
                    Bắt Đầu Ngay
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>

      <div className="container mt-5">
        <h2 className="fw-bold">Quản lý sân bóng với chúng tôi</h2>
        <h5 className="text-secondary fs-5">
          Chúng tôi tập trung vào thúc đẩy phát triển hệ sinh thái thể thao phát
          triển bền vững.
        </h5>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-4 mt-3">
            <i className="bx bx-dollar-circle bx-lg text-primary"></i>
            <h5 className="fw-bold">Tăng trưởng doanh thu</h5>
            <p className="text-secondary">
              Doanh thu tăng từ 10% trở lên! Cắt giảm chi phí, thời gian quản
              lý.
            </p>
          </div>
          <div className="col-4 mt-3">
            <i className="bx bx-support bx-lg text-primary"></i>
            <h5 className="fw-bold">Hỗ trợ tận tình</h5>
            <p className="text-secondary">
              Luôn luôn sẵn sàng hỗ trợ bạn bất cứ lúc nào ở đâu
            </p>
          </div>
          <div className="col-4 mt-3">
            <i className="bx bxs-layout bx-lg text-primary"></i>
            <h5 className="fw-bold">Quản lý hiệu quả</h5>
            <p className="text-secondary">
              Giải pháp quản lý sân đơn giản, dễ dàng mọi lúc mọi nơi .
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-4 mt-3">
            <i className="bx bx-mouse bx-lg text-primary"></i>
            <h5 className="fw-bold">Dễ dàng sử dụng</h5>
            <p className="text-secondary">
              Giao diện thân thiện, dễ dàng làm quen sử dụng.
            </p>
          </div>
          <div className="col-4 mt-3">
            <i className="bx bxs-cog bx-lg text-primary"></i>
            <h5 className="fw-bold">An toàn tin cậy</h5>
            <p className="text-secondary">
              Đảm bảo hoạt động kinh doanh của bạn được thuận lợi là ưu tiên
              hàng đầu của chúng tôi
            </p>
          </div>
          <div className="col-4 mt-3">
            <i className="bx bxs-party bx-lg text-primary"></i>
            <h5 className="fw-bold">Quảng bá hiệu quả</h5>
            <p className="text-secondary">
              Trang thông tin sân bóng riêng biệt với hàng ngàn người truy cập
              hằng ngày!
            </p>
          </div>
        </div>
        <div className="row d-flex justify-content-center mt-5">
        <div className="container mt-5">
        <h2 className="fw-bold">Top 5 Sân Đặt Nhiều Nhất</h2>
        <h5 className="text-secondary fs-5">
          Hãy chọn những điều bạn thích, đến với chúng tôi bạn không cần lo lắng
        </h5>
      </div>
          {top ? (
            <>
              {top.map((yard) => (
                <Link
                  className="col-auto m-3 text-dark"
                  key={yard.id}
                  to={`/chi-tiet/${yard.yard.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div class="card" style={{width : "323.672px",height: "188.047px"}}>
                  <div class="d-flex justify-content-center">
                  <img
                      src={yard.yard.image}
                      class="card-img-top img-thumbail"
                      alt="hình ảnh"
                      style={{
                        width: "323.672px",
                        height: "100.047px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                    
                    <div class="card-body">
                      <h5>{yard.yard.name}</h5>
                      <small>Địa chỉ: {yard.yard.address.length > 25 ? yard.yard.address.slice(0, 25) : yard.yard.address.description}..</small>
                    </div>
                  </div>
                </Link>
              ))}
            </>
          ) : (
            <h5
              className="text-center"
              style={{ marginTop: "200px", marginBottom: "100px" }}
            >
              Không có dữ liệu
            </h5>
          )}
        </div>
        <div className="container mt-5">

        <h2 className="fw-bold mt-5">Danh sách sân bóng</h2>
        <h5 className="text-secondary fs-5">
          Hãy chọn những điều bạn thích, đến với chúng tôi bạn không cần lo lắng
        </h5>
        </div>
        <div className="container">
        <div className="container w-50">
          <div class="d-flex justify-content-center mt-2">
            <label
              htmlFor="exampleDataList"
              class="form-label text-secondary fw-bold ms-2 mt-5"
            >
              Tìm Sân Quanh Bạn <i class="bx bxs-map-pin"></i>
            </label>
          </div>

          <input
            class="form-control"
            list="datalistOptions"
            id="exampleDataList"
            placeholder="Nhập tên sân hay địa chỉ..."
            onChange={(evt) => handlerChangeSearch(evt.target.value)}
            onKeyDown={(e) => {
              handleKeyDown(e);
            }}
          />
          <div class="d-flex justify-content-center mt-2">
            <div className="btn btn-sm btn-primary" onClick={() => search()}>
              Tìm kiếm
            </div>
          </div>
        </div>
        {showResults && (
        <h6>
          Kết quả tìm kiếm với từ khóa "<span className="fw-bold">{nameSearch}</span>"
        </h6>
      )}
        <hr />
        <div className="row d-flex justify-content-center mt-5">
          {yards ? (
            <>
              {yards.map((yard) => (
                <Link
                  className="col-auto m-3 text-dark"
                  key={yard.id}
                  to={`/chi-tiet/${yard.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div class="card" style={{ width: "18rem", height: "425px" }}>
                    <img
                      src={yard.image}
                      class="card-img-top"
                      alt="hình ảnh"
                      style={{
                        width: "286px",
                        height: "273.359px",
                        objectFit: "cover",
                      }}
                    />
                    <div class="card-body">
                      <h5>{yard.name}</h5>
                      <small>Địa chỉ: {yard.address}</small>
                    </div>
                  </div>
                </Link>
              ))}
            </>
          ) : (
            <h5
              className="text-center"
              style={{ marginTop: "200px", marginBottom: "100px" }}
            >
              Không có dữ liệu
            </h5>
          )}
        </div>
        {currentPage !== undefined && totalPages !== undefined ? (
          <div
            aria-label="Page navigation example mt-3"
            style={{
              marginTop: "1.5rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ul className="pagination">
              <li className="page-item">
                <button
                  className="page-link"
                  aria-label="Previous"
                  onClick={() => prePage()}
                  tabIndex={-1}
                  disabled={currentPage + 1 <= 1}
                >
                  <span aria-hidden="true">&laquo;</span>
                </button>
              </li>
              <li className="page-item">
                <button className="page-link">
                  {currentPage + 1}/{totalPages}
                </button>
              </li>
              <li className="page-item">
                <button
                  className="page-link"
                  aria-label="Next"
                  disabled={currentPage + 1 >= totalPages}
                  onClick={() => nextPage()}
                >
                  <span aria-hidden="true">&raquo;</span>
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <></>
        )}
      </div>
      </div>

      <div className="footer mt-4">
        <div className="container">
          <div className="footer-content">
            <p className="text-center mt-5">
              &copy; 2024 Turtle Company. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
