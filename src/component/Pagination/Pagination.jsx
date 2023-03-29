import PaginationPage from "./PaginationPage";
import Card from "../Card/Card";
import "./pagination-style.css";
import React, { useState, useEffect } from "react";

const Pagination = ({ data }) => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  useEffect(() => {
    const fetchPosts = async () => {
      setPosts([...data]);
    };

    fetchPosts();
  }, [data]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="movie-container">
      {currentPosts.map((item, ind) => (
        <Card prop={item} key={ind} />
      ))}
      <PaginationPage
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Pagination;
