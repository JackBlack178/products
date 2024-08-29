import { FC } from "react";
import { IProduct } from "./utils/productApi.ts";
import clsx from "clsx";
import cl from './Product.module.scss'
import { HotReviewIcon } from "../../components/simple/HotReviewIcon.tsx";
import { Link } from "react-router-dom";

interface ProductProps extends Partial<IProduct>{
  className?: string;
  image_url:string,
  review_count:number,
}



const Product:FC<ProductProps> = ({className, id, name, image_url, review_count, rating, price}) => {


  return (
    <Link to={`${id}`}>
      <article className={clsx(cl.product, className)}>
        <header className={cl.product__header}>
          <h3 className={cl.product__header__title}>{name}</h3>
          <div className={cl.product__header__rating}>
            {rating}
            {rating && rating > 4.7 && <HotReviewIcon className={cl.product__header__rating_icon} />}
          </div>
        </header>

        <img src={image_url} className={cl.product__image} alt='' />

        <div className={cl.product__footer}>
          <div></div>
          <div className={cl.product__price}>{price} Р</div>
          <div className={cl.product__reviews}>{review_count} отзывов</div>
        </div>


      </article>
    </Link>
  );
};

export { Product };