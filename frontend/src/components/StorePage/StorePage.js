import React, { useState, useEffect } from "react";
import styles from "./StorePage.module.css";
import Pagination from "./Pagination/Pagination";
import axios from "axios";
import ProductList from "./ProductList";
import ImageWebPConverter from "../../util/ImageWebPConverter";
import {
  applyImage2,
  applyImage2Small,
  applyImage2SmallWebp,
  applyImage2Webp,
} from "../../assets";

const StorePage = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);
  const [dropdown, setDropdown] = useState(false);
  const [filter, setFilter] = useState("all products");
  const [filteredArr, setFilteredArr] = useState([]);
  const [loading, setLoading] = useState(false);

  const indexOfLastPost = currentPage * productsPerPage;
  const indexOfFirstPost = indexOfLastPost - productsPerPage;
  const currentProducts = products.slice(indexOfFirstPost, indexOfLastPost);
  const filteredProducts =
    filteredArr && filteredArr.slice(indexOfFirstPost, indexOfLastPost);

  const handleFilter = (event) => {
    const currentFilter = event.target.innerText.toLowerCase();
    let filteredArr = products.filter(
      (product) => product.attributes.productFilter === currentFilter
    );

    setCurrentPage(1);

    if (currentFilter === "all products") {
      setProductsPerPage(6);
      setFilter("all products");
      setFilteredArr([]);
    } else {
      setProductsPerPage(3);
      setFilter(currentFilter);
      setFilteredArr(filteredArr);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          process.env.REACT_APP_API_URL + "/products?populate=*",
          {
            headers: {
              Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
            },
          }
        );
        setProducts(response.data.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <main className={styles.storepage}>
      {/* <img src={applyImage2} alt="applying serum" width={511} height={487} /> */}
      <ImageWebPConverter
        className={applyImage2}
        src={applyImage2Webp}
        srcSmall={applyImage2SmallWebp}
        pngSmall={applyImage2Small}
        fallback={applyImage2}
        alt="applying serum"
        width={511}
        height={487}
      />
      <div className={styles.storepage__filter}>
        <p id={styles.storepage__filterp}>FILTER</p>
        <div className={styles.storepage__dropdown}>
          <button
            onClick={() => setDropdown((prev) => !prev)}
            className={styles.storepage__dropbtn}
          >
            {filter[0].toUpperCase() + filter.substring(1)}
          </button>
          <div
            className={`${styles.storepage__dropcontent} ${
              dropdown && styles.storepage__dropshow
            }`}
          >
            <p onClick={(e) => handleFilter(e)}>Moisturizing</p>
            <p onClick={(e) => handleFilter(e)}>Brightening</p>
            <p onClick={(e) => handleFilter(e)}>Calming</p>
            <p onClick={(e) => handleFilter(e)}>All Products</p>
          </div>
        </div>
      </div>
      <ProductList
        productList={filteredProducts.length > 0 ? filteredProducts : currentProducts}
        loading={loading}
      />
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={filteredArr.length || products.length}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </main>
  );
};

export default StorePage;
