import React, { useState, useEffect } from "react";
import { applyImage2 } from "../../assets";
import SingleProduct from "./SingleProduct";
import styles from "./StorePage.module.css";
import Pagination from "./Pagination/Pagination";

const StorePage = () => {
  const [products, setProducts] = useState([]); // info about all products
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(2);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main className={styles.storepage}>
      <img src={applyImage2} alt="applying serum" />
      <div className={styles.storepage__filter}>
        <p>FILTER</p>
        <p>All Products</p>
      </div>
      <section className={styles.storepage__section}>
        <SingleProduct posts={currentPosts} />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
      </section>
      <Pagination postsPerPage={postsPerPage} totalPosts={5} paginate={paginate} />
    </main>
  );
};

export default StorePage;
