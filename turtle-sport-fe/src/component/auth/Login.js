import { Field, Form, Formik, ErrorMessage } from "formik";
import "./login.css";
import { useNavigate } from "react-router-dom";
import React, { useState} from 'react';
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { loginUser } from "../../redux/middlewares/AuthMiddleware";

export function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [disableSubmit, setDisableSubmit] = useState(false);
  const initValues = {
    username: "",
    password: "",
  };

  const validateFormLogin = Yup.object({
    username: Yup.string().required("Vui lòng nhập tên đăng nhập."),
    password: Yup.string().required("Vui lòng nhập mật khẩu."),
  });

  const handleSubmitFormLogin = async (values, { setFieldError }) => {
    try {
      setDisableSubmit(true);
      await dispatch(loginUser(values));
      navigate("/");
    } catch (e) {
      setDisableSubmit(false);
      setFieldError("password", e.data);
    }
  };
  return (
    <>
      <div class="wrapper">
        <div class="container main">
          <div class="row" id="row">
            <div class="col-md-6 side-image">
              <img src="images/white.png" alt="" />
              <div class="text"></div>
            </div>
            <div class="col-md-6 right">
              <div class="input-box">
                <header>Đăng Nhập</header>
                <Formik
                  initialValues={initValues}
                  onSubmit={(values, { setFieldError }) =>
                    handleSubmitFormLogin(values, { setFieldError })
                  }
                  validationSchema={validateFormLogin}
                >
                  <Form>
                    <div class="input-field">
                      <Field
                        type="text"
                        class="input"
                        id="email"
                        required=""
                        autocomplete="off"
                        name="username"
                      />
                      <label for="email" className="text-primary">
                        Tài Khoản
                      </label>
                      <ErrorMessage
                        name="username"
                        className="text-danger"
                        component="small"
                      />
                    </div>
                    <div class="input-field mt-3">
                      <Field
                        type="password"
                        class="input"
                        id="pass"
                        required=""
                        name="password"
                      />
                      <label for="pass" className="text-primary">
                        Mật Khẩu
                      </label>
                      <ErrorMessage
                        name="password"
                        className="text-danger"
                        component="small"
                      />
                    </div>
                    <div class="input-field">
                      <button type="submit" className="btn btn-primary" disabled={disableSubmit}>
                        Đăng nhập
                      </button>
                    </div>
                    <div class="signin">
                      <span>
                        Bạn chưa có tài khoản? <a href="#">Đăng ký</a>
                      </span>
                    </div>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
