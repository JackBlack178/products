import { Link, Navigate, useParams } from "react-router-dom";
import cl from './ProductPage.module.scss'
import { IProduct, productApi } from "../utils/productApi.ts";
import { Loading } from "../../../components/simple/Loading.tsx";

const ProductPage = () => {
  const {id} = useParams()
  const {data, isLoading} = productApi.useGetProductQuery(id as string)


  if (!isLoading && data === undefined)
    return <Navigate replace={true} to={'/products'}></Navigate>

  const product = data as IProduct

  if (isLoading)
    return <Loading className={cl.product__loader}/>

  return (
    <article className={cl.product}>
      <header className={cl.product__header}>
        <Link to={'/products'} className={cl.product__back_link}>Назад</Link>
        <h2 className={cl.product__title}>{product.name}</h2>
        <Link to='change' className={cl.product__link}>Изменить</Link>

      </header>

      <div className={cl.product__body}>
        <img src={product["image-url"]}/>
      </div>

      <div className={cl.product__extra}>
        <ul>
          <li>
            Цена - {product.price}
          </li>
          <li>
            Отзывы - {product["reviews-count"]}
          </li>
          <li>
            Идентификатор - {product.code}
          </li>
          <li>
            Рейтинг - {product.rating}
          </li>
        </ul>
      </div>

    </article>
  );
};


export { ProductPage };