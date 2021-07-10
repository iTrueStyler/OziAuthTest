import React from "react";
import * as yup from "yup";
import { Formik } from "formik";
import { loginAuth } from "../redux/reducers/userReducer";
import { useDispatch } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();
  const validationSchema = yup.object().shape({
    email: yup
      .string()

      .required("Обязательное поле"),
    password: yup
      .string()

      .required("Обязательное поле"),
  });

  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validateOnBlur
        onSubmit={(value) => dispatch(loginAuth(value))}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
        }) => (
          <div className="form">
            <div className="form__input-block">
              <label htmlFor="email">Email</label>
              <input
                className={"input"}
                type={"text"}
                name={"email"}
                onChange={handleChange}
                onBlur={handleBlur}
                values={values.email}
              />
            </div>
            {touched.email && errors.email && (
              <p className={"error"}>{errors.email}</p>
            )}

            <div className="form__input-block">
              <label htmlFor="password">Password</label>
              <input
                className={"input"}
                type={"password"}
                name={"password"}
                onChange={handleChange}
                onBlur={handleBlur}
                values={values.password}
              />
            </div>
            {touched.password && errors.password && (
              <p className={"error"}>{errors.password}</p>
            )}

            <button
              disabled={!isValid && !dirty}
              onClick={handleSubmit}
              type={"submit"}
            >
              Login
            </button>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default HomePage;
