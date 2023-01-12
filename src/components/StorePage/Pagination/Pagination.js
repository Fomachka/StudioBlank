import React from "react";
import styles from "./Pagination.module.css";
import { rightArrow, leftArrow } from "../../../assets";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; Math.ceil(i <= totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={styles.pagination}>
        <li>
          <img src={leftArrow} alt="left arrow icon" />
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className={styles.page}>
            <a onClick={() => paginate(number)} href="!#">
              {number}
            </a>
          </li>
        ))}
        <li>
          <img src={rightArrow} alt="right arrow icon" />
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
