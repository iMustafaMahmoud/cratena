import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import MetaTags from "react-meta-tags";
import { Link, useHistory } from "react-router-dom";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import LayoutOne from "../layouts/LayoutOne";
import DatePicker from "react-datepicker";
import Breadcrumb from "../wrappers/breadcrumb/Breadcrumb";
import { useHttpClient } from "../hooks/http-hook";
import { login } from "../redux/actions/userActions";
import { useSelector } from "react-redux";

const LoginRegister = ({ location }) => {
  const { pathname } = location;
  const state = useSelector((state) => state.userReducer);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [selectedValue, setSelectedValue] = useState("");
  const dispatch = useDispatch();
  const Login = login(dispatch);
  const [startDate, setStartDate] = useState(new Date());
  const { sendRequest } = useHttpClient();

  const [allValues, setAllValues] = useState({
    email: "",
    password: "",
    name: "",
    age: "",
    address: "",
    gender: "Male",
  });


  let history = useHistory();

  const switchModeHandler = () => {
    setIsLoginMode((prevMode) => !prevMode);
  };

  const changeHandler = (e) => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value });
  };

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    setAllValues({ ...allValues, gender: e.target.value });
  };

  const authSubmitHandler = async (event) => {
    event.preventDefault();
    console.log(allValues);

    if (isLoginMode) {
      try {
        const response = await sendRequest(
          "http://localhost:5000/users/login",
          "POST",
          JSON.stringify({
            email: allValues.email,
            password: allValues.password,
          }),
          {
            "Content-Type": "application/json",
          }
        );
        Login(response.userId, response.token);
        setAllValues({
          email: "",
          password: "",
          name: "",
          age: "",
          address: "",
          gender: "Male",
        });
        history.push("/home");
      } catch (err) {}
    } else {
      try {
        const response = await sendRequest(
          "http://localhost:5000/users/signup",
          "POST",
          JSON.stringify({
            email: allValues.email,
            password: allValues.password,
            name: allValues.name,
            age: parseInt(allValues.age),
            billing_address: allValues.address,
            gender: allValues.gender,
          }),
          {
            "Content-Type": "application/json",
          }
        );
        Login(response.userId, response.token);
        setAllValues({
          email: "",
          password: "",
          name: "",
          age: "",
          address: "",
          gender: "Male",
        });
        history.push("/home");
      } catch (err) {}
    }
  };

  return (
    <Fragment>
      <MetaTags>
        <title>Flone | Login</title>
        <meta
          name="description"
          content="Compare page of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Login Register
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="login-register-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12 ml-auto mr-auto">
                <div className="login-register-wrapper">
                  <Tab.Container defaultActiveKey="login">
                    <Nav variant="pills" className="login-register-tab-list">
                      <Nav.Item onClick={switchModeHandler}>
                        <Nav.Link eventKey="login">
                          <h4>Login</h4>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item onClick={switchModeHandler}>
                        <Nav.Link eventKey="register">
                          <h4>Register</h4>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="login">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form onSubmit={authSubmitHandler}>
                              <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                value={allValues.email}
                                onChange={changeHandler}
                              />
                              <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={allValues.password}
                                onChange={changeHandler}
                              />
                              <div className="button-box">
                                <div className="login-toggle-btn">
                                  <input type="checkbox" />
                                  <label className="ml-10">Remember me</label>
                                  <Link to={process.env.PUBLIC_URL + "/"}>
                                    Forgot Password?
                                  </Link>
                                </div>
                                <button type="submit">
                                  <span>Login</span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="register">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form onSubmit={authSubmitHandler}>
                              <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={allValues.name}
                                onChange={changeHandler}
                              />
                              <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={allValues.password}
                                onChange={changeHandler}
                              />
                              <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={allValues.email}
                                onChange={changeHandler}
                              />
                              <input
                                type="text"
                                name="age"
                                placeholder="Age"
                                value={allValues.age}
                                onChange={changeHandler}
                              />
                              <input
                                type="text"
                                name="address"
                                placeholder="Address"
                                value={allValues.address}
                                onChange={changeHandler}
                              />
                              <p>Gender</p>
                              <select
                                style={{ marginBottom: 40 }}
                                value={selectedValue}
                                onChange={handleChange}
                              >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                              </select>
                              <div className="button-box">
                                <button type="submit">
                                  <span>Register</span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

LoginRegister.propTypes = {
  location: PropTypes.object,
};

export default LoginRegister;
