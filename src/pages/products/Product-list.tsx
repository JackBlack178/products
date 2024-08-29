import { FC, useMemo } from "react";
import cl from './Product-list.module.scss'
import clsx from "clsx";
import { productApi } from "./utils/productApi.ts";
import { Product } from "./Product.tsx";
import { Loading } from "../../components/simple/Loading.tsx";
import { Link } from "react-router-dom";



interface ProductListProps {
  className?:string,
  sortType: 'best' | 'worst',
  querySortSearch:string,
}

const ProductList:FC<ProductListProps> = ({className, sortType, querySortSearch}) => {

  const {data, isLoading} = productApi.useGetAllProductsQuery(undefined)


  const sortedProducts = useMemo(
    () => [... data || []].sort((a,b) => sortType === 'best' ? a.rating - b.rating : b.rating - a.rating,
  ), [sortType, data])

  const sortedAndSearched = useMemo(
    () => [... sortedProducts].filter(product => product.name.toLocaleLowerCase().startsWith(querySortSearch.toLocaleLowerCase()))
    , [sortedProducts, querySortSearch]
  )

  return (
    <div className={clsx(cl.product_list, className)}>
      <header className={cl.product_list__header}>
        <h2 className={cl.product_list__header__title}>
          Каталог товаров
        </h2>
        <Link to='new' className={cl.product_list__header__button}>
          Добавить товар
        </Link>
      </header>

      {isLoading ? <Loading /> :

        <div className={cl.product_list__body}>
          {sortedAndSearched.map(product =>

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