import React, { useEffect, useState } from "react";
import styles from "@styles/ProductList.module.scss";
import ProductCard from "@components/ProductCard";
import useGetProducts from "@hooks/useGetProducts";
import useGetCategories from "@hooks/useGetCategories";
import axios from "axios";
const API = process.env.NEXT_PUBLIC_API_ID;
const CATEGORIES = process.env.NEXT_PUBLIC_API_CATEGORIES;

const ProductList = () => {
  let products = useGetProducts(API);
  const categories = useGetCategories(CATEGORIES);
  const [temp, setTemp] = useState(products);

  useEffect(() => {
    setTemp(products);
  }, [products]);

  function handleChange(text) {
    setTemp(products.filter((product) => product.title.toLowerCase().includes(text.toLowerCase())));
    console.log(products);
  }


    async function fetchData(API){
      const response = await axios(API);
      return response.data;
    }
   
  

  async function handleOptionChange(event) {
    if (event.target.value == "all") {
      products = await fetchData(API);
    } else {
    products = await fetchData(`${CATEGORIES}/${event.target.value}/products`);
    }
    setTemp(products);
  }

  return (
    <section className={styles["product-list-container"]}>
      <div className={styles["search__container"]}>
        <input type="search" name="searchProduct" defaultValue={""} placeholder="Buscar producto..." onChange={() => handleChange(event.target.value)} />
        <div className={styles["categories__filter"]}>
        <label htmlFor="categories">Category filter:</label>
          <select name="categories" id="categories-selec" onChange={handleOptionChange}>
            <option key={"all"} value={"all"}>
              {" "}
              All{" "}
            </option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}{" "}
              </option>
            ))}
          </select>
        </div>
      </div>
      <section className={styles["list__cards-container"]}>
        {temp.length > 0 ? (
          temp.map((product) => <ProductCard product={product} key={product.id} />)
        ) : (
          <div className={styles["no-result"]}>
            <p>Product not found</p>
          </div>
        )}
      </section>
    </section>
  );
};

export default ProductList;
