import { FC } from "react";
import cl from './Product-list.module.scss'
import clsx from "clsx";
import { Products, useGetAllProductsQuery } from "./utils/productApi.ts";
import { Product } from "./Product.tsx";
import { Loading } from "../../components/simple/Loading.tsx";


interface ProductListProps {
  className?:string,
}

const ProductList:FC<ProductListProps> = ({className}) => {

  const {data, isLoading} = useGetAllProductsQuery(undefined)
  const products: Products = data || []


  return (
    <div className={clsx(cl.product_list, className)}>
      <header className={cl.product_list__header}>
        <h2 className={cl.product_list__header__title}>
          Каталог товаров
        </h2>
        <button className={cl.product_list__header__button}>
          Добавить товар
        </button>
      </header>

      {isLoading ? <Loading /> :

        <div className={cl.product_list__body}>
          {products.map(product =>

            <Product
              key={product.id}
              id={product.id}
              name={product.name}
              code={product.code}
              rating={product.rating}
              price={product.price}
              image_url={product["image-url"]}
              review_count={product["reviews-count"]}
            >
            </Product>
          )}
        </div>

      }


    </div>
  );
};

export { ProductList };