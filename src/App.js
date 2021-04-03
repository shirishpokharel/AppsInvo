import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/css/custom.css";
import "../src/assets/css/custom.css.map";
import "../src/assets/css/plugins.css";

import logo from "./assets/images/logo.png";
import bannerA from "./assets/images/home/banner-img.png";
import product from "./assets/images/home/product.png";
import tomato from "./assets/images/home/tomato.png"
import fruit from "./assets/images/home/fruit.png"
import veget from "./assets/images/home/veget.png";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState([]);

  const [userId] = useState(0);
  const headers = {
    Accept: "application/json",
  };

  useEffect(
    () => {
      axios
        .get("http://3.131.5.153:4000/api/product/category-list?page_no=1", {
          headers,
        })
        .then((response) => {
          setCategories(() => {
            return [...categories, response.data.data.categories];
          });
        });

      axios
        .get("http://3.131.5.153:4000/api/product/product-list?page_no=1", {
          headers,
        })
        .then((response) => {
          console.log(response);
          setProduct(() => {
            return [...product, response.data.data.products];
          });
        });
    },
    [],
    []
  );
  console.log(categories, product);

  const showProduct = () => {
    
  };

  // Make a request for a user with a given ID

  return (
    <div>
      <header id="header" class="site-header minus">
        <nav class="navbar row no-gutters justify-content-end align-items-center navbar-expand-lg">
          <div class="col-md-4 col-5">
            <a class="navbar-brand " href="index.html">
              <img class="img-fluid" src={logo} alt="logo" />
            </a>
          </div>
          <div class="col-md-4 order-md-3 col-7 text-right d-flex align-self-center justify-content-end">
            <ul class=" nav align-items-center ml-auto nav-btns">
              <li class="nav-item dropdown">
                <a
                  class="nav-link btn-violet round round-xl"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fas fa-user d-inline-block d-sm-none"></i>{" "}
                  <span class="d-sm-inline-block d-none">My Account</span>{" "}
                  <i class="ti-angle-down ml-2"></i>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link btn-violet round round-xl"
                  href="#signupModal"
                  data-toggle="modal"
                >
                  <i class="fas fa-user"></i>{" "}
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <i class="fas fa-2x fa-shopping-bag"></i>{" "}
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <i class="far fa-2x fa-bell"></i> <span class="badge">0</span>{" "}
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-4 order-md-2">
            <form class="form mt-3 mt-md-0" action="">
              <div class="form-group mb-0">
                <div class="input-group	">
                  <input
                    type="text"
                    id=""
                    placeholder="Search..."
                    class="form-control  bg-light"
                    required=""
                  />
                  <div class="input-group-prepend">
                    <button type="submit" class="input-group-text">
                      <i class="fa fa-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </nav>
        <div class="navigations " id="bottom-header">
          <ul class="js-menu-slider nav">
            {categories &&
              categories.map((category) => {
                return category.map((items) => {
                  return (
                    <li key={category.category_id} class="nav-item active">
                      <div class="nav-link" href="#" onclick={showProduct()}>
                        <span>
                          <i
                            class="icon specials"
                            style={{
                              backgroundImage: `url(${items.category_image})`,
                            }}
                          ></i>
                          {items.category_name}
                        </span>
                      </div>
                    </li>
                  );
                });
              })}
          </ul>
        </div>
      </header>
      <main class="page-wrapper">
        <section class="home-banner">
          <div class="banner pt-5 border d-flex justify-content-center">
            <div class="w-100 mb-5 align-self-end pt-5">
              <div class="js-main-slider align-self-end">
                <div class="item">
                  <div class="row justify-content-center">
                    <div class="col-md-6">
                      <div class="caption ">
                        <h2 class="heading-lg text-light">
                          We deliver all kind of grocery in reliable cost which
                          is best for you.
                        </h2>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="img-holder">
                        <img
                          class="img-fluid "
                          src={bannerA}
                          alt="banner img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="home-products py-4">
          <div class="container">
            <div class="row no-gutters justify-content-between">
              <div class="col-9">
                <div class="main-heading text-left">
                  <h3 class=""> Recommended For You </h3>
                </div>
              </div>
              <div class="col-3 text-right">
                <a
                  href="#"
                  class="btn  px-lg-4 btn-outline-info btn-lg round-xl round"
                >
                  View All
                </a>
              </div>
            </div>
          </div>
          <div class="  bg-items">
            <div
              class="row"
              style={{
                margin: 5,
              }}
            >
              <div class="col-12">
                <div
                  style={{
                    display: "flex",
                    padding: 10,
                    margin: 5,
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  {product &&
                    product.map((item) => {
                      return item.map((particularProduct) => {
                        return (
                          <li
                            key={particularProduct.product_id}
                            class="box"
                            style={{
                              padding: 10,
                            }}
                          >
                            <figure class="img-holder">
                              <img
                                class="img-fluid "
                                style={{
                                  height: 80,
                                  width: 80,
                                }}
                                src={`${particularProduct.product_image}`}
                                alt="drink img"
                              />
                            </figure>

                            <div class="caption ">
                              <a
                                href="product-details.php"
                                class="h6 font-weight-normal"
                              >
                                {particularProduct.product_name}
                                <span class="small d-block">570 gr</span>
                              </a>

                              <p class="text-light-blue h5  text-capitalize">
                                $ {particularProduct.product_price} /{" "}
                                {particularProduct.product_basic_unit}
                              </p>
                            </div>
                            <div class="btn-box ">
                              <button class="btn btn-info round-xl round btn-lg item-btn-cart btn-block">
                                <i class="ti-plus"></i> add to cart
                              </button>
                            </div>
                          </li>
                        );
                      });
                    })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="home-products py-4">
          <div class="container">
            <div class="row no-gutters justify-content-between">
              <div class="col-9">
                <div class="main-heading text-left">
                  <h3 class=""> Drinks </h3>
                </div>
              </div>
              <div class="col-3 text-right">
                <a
                  href="#"
                  class="btn  px-lg-4 btn-outline-info btn-lg round-xl round"
                >
                  View All
                </a>
              </div>
            </div>
          </div>
          <div class="  bg-items">
            <div class="row">
              <div class="col-12">
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <div class="product-item">
                    <div class="box">
                      <figure class="img-holder">
                        <img class="img-fluid " src={veget} alt="product img" />
                      </figure>

                      <div class="caption ">
                        <a
                          href="product-details.php"
                          class="h6 font-weight-normal"
                        >
                          cidacos chikpeas extra
                          <span class="small d-block">570 gr</span>
                        </a>

                        <p class="text-light-blue h5  text-capitalize">
                          $ 2.0 / kg
                        </p>
                      </div>
                      <div class="btn-box ">
                        <button class="btn btn-info round-xl round btn-lg item-btn-cart btn-block">
                          {" "}
                          <i class="ti-plus"></i> add to cart
                        </button>

                        <div
                          class="cart-inc-dec btn btn-info round-xl round btn-lg btn-block"
                          style={{ display: "none" }}
                        >
                          <button type="button" onclick="decrementValue()">
                            <i class="ti-minus"></i>
                          </button>
                          <input
                            type="text"
                            name="quantity"
                            value="1"
                            maxlength="2"
                            max="10"
                            size="1"
                            id="number"
                          />
                          <button type="button" onclick="incrementValue()">
                            <i class="ti-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="product-item">
                    <div class="box">
                      <figure class="img-holder">
                        <img class="img-fluid " src={veget} alt="product img" />
                      </figure>

                      <div class="caption ">
                        <a
                          href="product-details.php"
                          class="h6 font-weight-normal"
                        >
                          cidacos chikpeas extra
                          <span class="small d-block">570 gr</span>
                        </a>

                        <p class="text-light-blue h5  text-capitalize">
                          $ 2.0 / kg
                        </p>
                      </div>
                      <div class="btn-box ">
                        <button class="btn btn-info round-xl round btn-lg item-btn-cart btn-block">
                          {" "}
                          <i class="ti-plus"></i> add to cart
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="product-item">
                    <div class="box">
                      <figure class="img-holder">
                        <img class="img-fluid " src={veget} alt="product img" />
                      </figure>

                      <div class="caption ">
                        <a
                          href="product-details.php"
                          class="h6 font-weight-normal"
                        >
                          cidacos chikpeas extra
                          <span class="small d-block">570 gr</span>
                        </a>

                        <p class="text-light-blue h5  text-capitalize">
                          $ 2.0 / kg
                        </p>
                      </div>
                      <div class="btn-box ">
                        <button class="btn btn-info round-xl round btn-lg item-btn-cart btn-block">
                          {" "}
                          <i class="ti-plus"></i> add to cart
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="product-item">
                    <div class="box">
                      <figure class="img-holder">
                        <img
                          class="img-fluid "
                          src={tomato}
                          alt="product img"
                        />
                      </figure>

                      <div class="caption ">
                        <a
                          href="product-details.php"
                          class="h6 font-weight-normal"
                        >
                          cidacos chikpeas extra
                          <span class="small d-block">570 gr</span>
                        </a>

                        <p class="text-light-blue h5  text-capitalize">
                          $ 2.0 / kg
                        </p>
                      </div>
                      <div class="btn-box ">
                        <button class="btn btn-info round-xl round btn-lg item-btn-cart btn-block">
                          {" "}
                          <i class="ti-plus"></i> add to cart
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="product-item">
                    <div class="box">
                      <figure class="img-holder">
                        <img
                          class="img-fluid "
                          src={tomato}
                          alt="product img"
                        />
                      </figure>

                      <div class="caption ">
                        <a
                          href="product-details.php"
                          class="h6 font-weight-normal"
                        >
                          cidacos chikpeas extra
                          <span class="small d-block">570 gr</span>
                        </a>

                        <p class="text-light-blue h5  text-capitalize">
                          $ 2.0 / kg
                        </p>
                      </div>
                      <div class="btn-box ">
                        <button class="btn btn-info round-xl round btn-lg item-btn-cart btn-block">
                          {" "}
                          <i class="ti-plus"></i> add to cart
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="product-item">
                    <div class="box">
                      <figure class="img-holder">
                        <img class="img-fluid " src={veget} alt="product img" />
                      </figure>

                      <div class="caption ">
                        <a
                          href="product-details.php"
                          class="h6 font-weight-normal"
                        >
                          cidacos chikpeas extra
                          <span class="small d-block">570 gr</span>
                        </a>

                        <p class="text-light-blue h5  text-capitalize">
                          $ 2.0 / kg
                        </p>
                      </div>
                      <div class="btn-box ">
                        <button class="btn btn-info round-xl round btn-lg item-btn-cart btn-block">
                          {" "}
                          <i class="ti-plus"></i> add to cart
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="product-item">
                    <div class="box">
                      <figure class="img-holder">
                        <img class="img-fluid " src={veget} alt="product img" />
                      </figure>

                      <div class="caption ">
                        <a
                          href="product-details.php"
                          class="h6 font-weight-normal"
                        >
                          cidacos chikpeas extra
                          <span class="small d-block">570 gr</span>
                        </a>

                        <p class="text-light-blue h5  text-capitalize">
                          $ 2.0 / kg
                        </p>
                      </div>
                      <div class="btn-box ">
                        <button class="btn btn-info round-xl round btn-lg item-btn-cart btn-block">
                          {" "}
                          <i class="ti-plus"></i> add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="home-products py-4">
          <div class="container">
            <div class="row no-gutters justify-content-between">
              <div class="col-9">
                <div class="main-heading text-left">
                  <h3 class=""> Fruits </h3>
                </div>
              </div>
              <div class="col-3 text-right">
                <a
                  href="#"
                  class="btn  px-lg-4 btn-outline-info btn-lg round-xl round"
                >
                  View All
                </a>
              </div>
            </div>
          </div>
          <div class="  bg-items">
            <div class="row">
              <div class="col-12">
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <div class="product-item">
                    <div class="box">
                      <figure class="img-holder">
                        <img class="img-fluid " src={tomato} alt="fruit img" />
                      </figure>

                      <div class="caption ">
                        <a
                          href="product-details.php"
                          class="h6 font-weight-normal"
                        >
                          cidacos chikpeas extra
                          <span class="small d-block">570 gr</span>
                        </a>

                        <p class="text-light-blue h5  text-capitalize">
                          $ 2.0 / kg
                        </p>
                      </div>
                      <div class="btn-box ">
                        <button class="btn btn-info round-xl round btn-lg item-btn-cart btn-block">
                          {" "}
                          <i class="ti-plus"></i> add to cart
                        </button>

                        <div
                          class="cart-inc-dec btn btn-info round-xl round btn-lg btn-block"
                          style={{ display: "none" }}
                        >
                          <button type="button" onclick="decrementValue()">
                            <i class="ti-minus"></i>
                          </button>
                          <input
                            type="text"
                            name="quantity"
                            value="1"
                            maxlength="2"
                            max="10"
                            size="1"
                            id="number"
                          />
                          <button type="button" onclick="incrementValue()">
                            <i class="ti-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="product-item">
                    <div class="box">
                      <figure class="img-holder">
                        <img class="img-fluid " src={tomato} alt="fruit img" />
                      </figure>

                      <div class="caption ">
                        <a
                          href="product-details.php"
                          class="h6 font-weight-normal"
                        >
                          cidacos chikpeas extra
                          <span class="small d-block">570 gr</span>
                        </a>

                        <p class="text-light-blue h5  text-capitalize">
                          $ 2.0 / kg
                        </p>
                      </div>
                      <div class="btn-box ">
                        <button class="btn btn-info round-xl round btn-lg item-btn-cart btn-block">
                          {" "}
                          <i class="ti-plus"></i> add to cart
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="product-item">
                    <div class="box">
                      <figure class="img-holder">
                        <img class="img-fluid " src={tomato} alt="fruit img" />
                      </figure>

                      <div class="caption ">
                        <a
                          href="product-details.php"
                          class="h6 font-weight-normal"
                        >
                          cidacos chikpeas extra
                          <span class="small d-block">570 gr</span>
                        </a>

                        <p class="text-light-blue h5  text-capitalize">
                          $ 2.0 / kg
                        </p>
                      </div>
                      <div class="btn-box ">
                        <button class="btn btn-info round-xl round btn-lg item-btn-cart btn-block">
                          {" "}
                          <i class="ti-plus"></i> add to cart
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="product-item">
                    <div class="box">
                      <figure class="img-holder">
                        <img class="img-fluid " src={tomato} alt="fruit img" />
                      </figure>

                      <div class="caption ">
                        <a
                          href="product-details.php"
                          class="h6 font-weight-normal"
                        >
                          cidacos chikpeas extra
                          <span class="small d-block">570 gr</span>
                        </a>

                        <p class="text-light-blue h5  text-capitalize">
                          $ 2.0 / kg
                        </p>
                      </div>
                      <div class="btn-box ">
                        <button class="btn btn-info round-xl round btn-lg item-btn-cart btn-block">
                          {" "}
                          <i class="ti-plus"></i> add to cart
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="product-item">
                    <div class="box">
                      <figure class="img-holder">
                        <img class="img-fluid " src={fruit} alt="fruit img" />
                      </figure>

                      <div class="caption ">
                        <a
                          href="product-details.php"
                          class="h6 font-weight-normal"
                        >
                          cidacos chikpeas extra
                          <span class="small d-block">570 gr</span>
                        </a>

                        <p class="text-light-blue h5  text-capitalize">
                          $ 2.0 / kg
                        </p>
                      </div>
                      <div class="btn-box ">
                        <button class="btn btn-info round-xl round btn-lg item-btn-cart btn-block">
                          {" "}
                          <i class="ti-plus"></i> add to cart
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="product-item">
                    <div class="box">
                      <figure class="img-holder">
                        <img class="img-fluid " src={fruit} alt="fruit img" />
                      </figure>

                      <div class="caption ">
                        <a
                          href="product-details.php"
                          class="h6 font-weight-normal"
                        >
                          cidacos chikpeas extra
                          <span class="small d-block">570 gr</span>
                        </a>

                        <p class="text-light-blue h5  text-capitalize">
                          $ 2.0 / kg
                        </p>
                      </div>
                      <div class="btn-box ">
                        <button class="btn btn-info round-xl round btn-lg item-btn-cart btn-block">
                          {" "}
                          <i class="ti-plus"></i> add to cart
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="product-item">
                    <div class="box">
                      <figure class="img-holder">
                        <img class="img-fluid " src={fruit} alt="fruit img" />
                      </figure>

                      <div class="caption ">
                        <a
                          href="product-details.php"
                          class="h6 font-weight-normal"
                        >
                          cidacos chikpeas extra
                          <span class="small d-block">570 gr</span>
                        </a>

                        <p class="text-light-blue h5  text-capitalize">
                          $ 2.0 / kg
                        </p>
                      </div>
                      <div class="btn-box ">
                        <button class="btn btn-info round-xl round btn-lg item-btn-cart btn-block">
                          {" "}
                          <i class="ti-plus"></i> add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="home-products py-4">
          <div class="container">
            <div class="row no-gutters justify-content-between">
              <div class="col-9">
                <div class="main-heading text-left">
                  <h3 class=""> Vegetables </h3>
                </div>
              </div>
              <div class="col-3 text-right">
                <a
                  href="#"
                  class="btn  px-lg-4 btn-outline-info btn-lg round-xl round"
                >
                  View All
                </a>
              </div>
            </div>
          </div>
          <div class="  bg-items">
            <div class="row">
              <div class="col-12">
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <div class="product-item">
                    <div class="box">
                      <figure class="img-holder">
                        <img class="img-fluid " src={tomato} alt="tomato img" />
                      </figure>

                      <div class="caption ">
                        <a
                          href="product-details.php"
                          class="h6 font-weight-normal"
                        >
                          cidacos chikpeas extra
                          <span class="small d-block">570 gr</span>
                        </a>

                        <p class="text-light-blue h5  text-capitalize">
                          $ 2.0 / kg
                        </p>
                      </div>
                      <div class="btn-box ">
                        <button class="btn btn-info round-xl round btn-lg item-btn-cart btn-block">
                          {" "}
                          <i class="ti-plus"></i> add to cart
                        </button>

                        <div
                          class="cart-inc-dec btn btn-info round-xl round btn-lg btn-block"
                          style={{ display: "none" }}
                        >
                          <button type="button" onclick="decrementValue()">
                            <i class="ti-minus"></i>
                          </button>
                          <input
                            type="text"
                            name="quantity"
                            value="1"
                            maxlength="2"
                            max="10"
                            size="1"
                            id="number"
                          />
                          <button type="button" onclick="incrementValue()">
                            <i class="ti-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="product-item">
                    <div class="box">
                      <figure class="img-holder">
                        <img class="img-fluid " src={tomato} alt="tomato img" />
                      </figure>

                      <div class="caption ">
                        <a
                          href="product-details.php"
                          class="h6 font-weight-normal"
                        >
                          cidacos chikpeas extra
                          <span class="small d-block">570 gr</span>
                        </a>

                        <p class="text-light-blue h5  text-capitalize">
                          $ 2.0 / kg
                        </p>
                      </div>
                      <div class="btn-box ">
                        <button class="btn btn-info round-xl round btn-lg item-btn-cart btn-block">
                          {" "}
                          <i class="ti-plus"></i> add to cart
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="product-item">
                    <div class="box">
                      <figure class="img-holder">
                        <img class="img-fluid " src={tomato} alt="tomato img" />
                      </figure>

                      <div class="caption ">
                        <a
                          href="product-details.php"
                          class="h6 font-weight-normal"
                        >
                          cidacos chikpeas extra
                          <span class="small d-block">570 gr</span>
                        </a>

                        <p class="text-light-blue h5  text-capitalize">
                          $ 2.0 / kg
                        </p>
                      </div>
                      <div class="btn-box ">
                        <button class="btn btn-info round-xl round btn-lg item-btn-cart btn-block">
                          {" "}
                          <i class="ti-plus"></i> add to cart
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="product-item">
                    <div class="box">
                      <figure class="img-holder">
                        <img class="img-fluid " src={tomato} alt="tomato img" />
                      </figure>

                      <div class="caption ">
                        <a
                          href="product-details.php"
                          class="h6 font-weight-normal"
                        >
                          cidacos chikpeas extra
                          <span class="small d-block">570 gr</span>
                        </a>

                        <p class="text-light-blue h5  text-capitalize">
                          $ 2.0 / kg
                        </p>
                      </div>
                      <div class="btn-box ">
                        <button class="btn btn-info round-xl round btn-lg item-btn-cart btn-block">
                          {" "}
                          <i class="ti-plus"></i> add to cart
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="product-item">
                    <div class="box">
                      <figure class="img-holder">
                        <img class="img-fluid " src={tomato} alt="tomato img" />
                      </figure>

                      <div class="caption ">
                        <a
                          href="product-details.php"
                          class="h6 font-weight-normal"
                        >
                          cidacos chikpeas extra
                          <span class="small d-block">570 gr</span>
                        </a>

                        <p class="text-light-blue h5  text-capitalize">
                          $ 2.0 / kg
                        </p>
                      </div>
                      <div class="btn-box ">
                        <button class="btn btn-info round-xl round btn-lg item-btn-cart btn-block">
                          {" "}
                          <i class="ti-plus"></i> add to cart
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="product-item">
                    <div class="box">
                      <figure class="img-holder">
                        <img class="img-fluid " src={tomato} alt="tomato img" />
                      </figure>

                      <div class="caption ">
                        <a
                          href="product-details.php"
                          class="h6 font-weight-normal"
                        >
                          cidacos chikpeas extra
                          <span class="small d-block">570 gr</span>
                        </a>

                        <p class="text-light-blue h5  text-capitalize">
                          $ 2.0 / kg
                        </p>
                      </div>
                      <div class="btn-box ">
                        <button class="btn btn-info round-xl round btn-lg item-btn-cart btn-block">
                          {" "}
                          <i class="ti-plus"></i> add to cart
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="product-item">
                    <div class="box">
                      <figure class="img-holder">
                        <img class="img-fluid " src={tomato} alt="tomato img" />
                      </figure>

                      <div class="caption ">
                        <a
                          href="product-details.php"
                          class="h6 font-weight-normal"
                        >
                          cidacos chikpeas extra
                          <span class="small d-block">570 gr</span>
                        </a>

                        <p class="text-light-blue h5  text-capitalize">
                          $ 2.0 / kg
                        </p>
                      </div>
                      <div class="btn-box ">
                        <button class="btn btn-info round-xl round btn-lg item-btn-cart btn-block">
                          {" "}
                          <i class="ti-plus"></i> add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="position-relative text-center text-sm-left text-white">
        <section className="footer px-3 px-lg-5">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-4">
                <div className="textwidget">
                  <h4 className="widget-title mb-2 mt-3">Support</h4>
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        about us
                      </a>
                      <a className="nav-link" href="#">
                        contact us
                      </a>
                      <a className="nav-link" href="terms-and-conditions.html">
                        terms & conditions
                      </a>
                      <a className="nav-link" href="#">
                        privacy policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <div className="textwidget">
                  <h4 className="widget-title mb-2 mt-3">Download App</h4>
                  <div className="my-3">
                    <a
                      href="#"
                      target="_blank"
                      className="p-2 p-xl-0 d-inline-block"
                    >
                      <img
                        className="img-fluid"
                        src="assets/images/app-store.png"
                        alt="app-store.png"
                      />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      className="p-2 p-xl-0 d-inline-block"
                    >
                      <img
                        className="img-fluid"
                        src="assets/images/playstore.png"
                        alt="playstore.png"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-md-flex justify-content-end">
                <div className="textwidget ">
                  <h4 className="widget-title mb-2 mt-3">Follow us</h4>
                  <p>
                    Join our mailing list for news and the best esclusive travel
                    deals
                  </p>
                  <form className="form-group d-sm-flex d-md-block d-lg-flex my-2 my-lg-0">
                    <input
                      className="form-control round round-xl form-control-lg col-sm-8 col-md-12 col-lg-8 mr-sm-2 mr-md-0 mr-lg-2"
                      type="search"
                      placeholder="Email ID"
                      aria-label="Search"
                    />
                    <button
                      className="btn col-sm-4 col-lg-4 col-md-12 round round-xl btn-lg btn-primary my-2 my-sm-0 my-md-2 my-lg-0"
                      type="submit"
                    >
                      Sign Up
                    </button>
                  </form>
                  <div className="social-contact my-3">
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      className="facebook"
                    >
                      <span className="fab fa-facebook-f"></span>
                    </a>
                    <a
                      href="https://www.twitter.com/"
                      target="_blank"
                      className="twitter"
                    >
                      <span className="fab fa-twitter"></span>
                    </a>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      className="linkedin"
                    >
                      <span className="fab fa-linkedin"></span>
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      className="instagram"
                    >
                      <span className="fab fa-instagram "></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sub-footer py-4">
          <div className="container text-center">
            Copyright &copy; 2020 Snapp App. All rights reserved
          </div>
        </section>
      </footer>
    </div>
  );
}

export default App;
