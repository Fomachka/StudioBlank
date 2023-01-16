import React, { useState, useEffect } from "react";
import { applyImage2 } from "../../assets";
import SingleProduct from "./SingleProduct";
import styles from "./StorePage.module.css";
import Pagination from "./Pagination/Pagination";
import axios from "axios";

const StorePage = () => {
  const [products, setProducts] = useState([]); // info about all products
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);

  const indexOfLastPost = currentPage * productsPerPage;
  const indexOfFirstPost = indexOfLastPost - productsPerPage;
  const currentProducts = products.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_API_URL + "/products?populate=*", {
          headers: {
            Authorization: "bearer" + process.env.REACT_APP_API_TOKEN,
          },
        });
        setProducts(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <main className={styles.storepage}>
      <img src={applyImage2} alt="applying serum" />
      <div className={styles.storepage__filter}>
        <p>FILTER</p>
        <p>All Products</p>
      </div>
      <section className={styles.storepage__section}>
        {currentProducts.map((product) => (
          <SingleProduct key={product.id} productInfo={product} />
        ))}
      </section>
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </main>
  );
};

export default StorePage;
