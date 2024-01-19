import { useEffect, useState } from "react";
import * as YardService from "../../service/YardService";
import { Link } from "react-router-dom";
import AddressSearch from "../location/AddressSearch";

export function YardList() {
  const [yards, setYards] = useState();

  const getAllYard = async () => {
    let res = await YardService.YardList();
    setYards(res.data.content);
  };

  useEffect(() => {
    getAllYard();
  }, []);

  if (!yards) return null;
  return (
    <>
      <div className="container mt-5">
        <label
          for="exampleDataList"
          class="form-label text-secondary fw-bold ms-2 mt-5"
        >
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
        <div>
          <AddressSearch />
        </div>
        <div className="row d-flex justify-content-center">
          {yards ? (
            yards.map((yard) => (
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
            ))
          ) : (
            <h5
              className="text-center"
              style={{ marginTop: "200px", marginBottom: "100px" }}
            >
              Không có dữ liệu
            </h5>
          )}
        </div>
      </div>
    </>
  );
}
