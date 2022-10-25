import React, { useState } from "react";
import Pagination from "react-js-pagination";

const Paging = ({handlePageChange, page})  => {
  console.log("...",page) 
  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={17}
      totalItemsCount={17*129}
      pageRangeDisplayed={10}
      prevPageText={"‹"}
      nextPageText={"›"}
      onChange={handlePageChange}
    />
  );
};

export default Paging;

 