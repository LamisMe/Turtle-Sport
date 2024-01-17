import React, { useEffect, useState } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import Select from "../location/Select";
import {
  apiGetPublicProvinces,
  apiGetPublicDistrict,
} from "../../service/LocationService";

const Address = () => {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [reset, setReset] = useState(false);

  useEffect(() => {
    const fetchPublicProvince = async () => {
      const response = await apiGetPublicProvinces();
      if (response.status === 200) {
        setProvinces(response?.data.results);
      }
    };
    fetchPublicProvince();
  }, []);
  useEffect(() => {
    setDistrict(null);
    const fetchPublicDistrict = async () => {
      const response = await apiGetPublicDistrict(province);
      if (response.status === 200) {
        setDistricts(response.data?.results);
      }
    };
    province && fetchPublicDistrict();
    !province ? setReset(true) : setReset(false);
    !province && setDistricts([]);
  }, [province]);

  return (
    <div>
      <div className="flex flex-col gap-4 mt-3">
        <div className="flex items-center gap-4">
          <div className="row">
            <div className="col-3">
              <Select
                type="province"
                value={province}
                setValue={setProvince}
                options={provinces}
                label="Tỉnh/Thành phố"
              />
            </div>
            <div className="col-3">
              <Select
                reset={reset}
                type="district"
                value={district}
                setValue={setDistrict}
                options={districts}
                label="Quận/Huyện"
              />
            </div>
            <div className="col-6 ">
              <div className="row">
                <div className="col-5">
                  <div className="form-floating ">
                    <Field
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      placeholder=""
                      name="address"
                    />
                    <label for="floatingInput" className="text-primary">
                      Địa chỉ <span className="text-danger">*</span>
                    </label>
                    <div className="text-danger fst-italic mt-2">
                  <ErrorMessage select="small" name="address" />
                </div>
                  </div>
                </div>
                <div className="col-7 mt-4">
                  {`${
                    district
                      ? `${
                          districts?.find(
                            (item) => item.district_id === district
                          )?.district_name
                        },`
                      : ""
                  } ${
                    province
                      ? provinces?.find((item) => item.province_id === province)
                          ?.province_name
                      : ""
                  }`}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
