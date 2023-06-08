import React from "react";
import { Row, Col } from "react-bootstrap";
import products from "../products";
import Product from "../components/Product";

const Homescreen = () => {
  console.log(products);
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => {
          return (
            <Col sm={12} md={6} lg={3} xl={4}>
              <Product product={product}></Product>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Homescreen;
