import React from "react";
import { Link, useSearchParams } from "react-router-dom";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSortChange = (event) => {
    setSearchParams({sort: event.target.value});
  }

  console.log(searchParams);
  return (
    <div className="products">
      <select value ={searchParams.get("sort")} onChange={handleSortChange}>
        <option value="asc">Ascending</option>
        <option value="dsc">Descending</option>
      </select>
      <ul>
        <li>
          <Link to="/products/laptop">Laptop</Link>
        </li>
        <li>
          <Link to="/products/phone">Phone</Link>
        </li>
        <li>
          <Link to="/products/pc">PC</Link>
        </li>
      </ul>
    </div>
  );
};

export default Products;
