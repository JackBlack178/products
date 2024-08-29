import cl from "./ProductNew.module.scss";
import { Form, useNavigate } from "react-router-dom";
import { FormEvent } from "react";
import { productApi } from "../utils/productApi.ts";
import { store } from "../../../store";




const ProductNew = () => {
  const navigate = useNavigate()

  const changeProduct = async (event: FormEvent) => {
    event.preventDefault()
    const target:any = event.target


    const data = {
      name: target.name.value as string,
      code: Number(target.code.value),
      rating: Number(target.rating.value),
      price: Number(target.price.value),
      ['reviews-count']: Number(target['reviews-count'].value),
      ['image-url']: target['image-url'].value as string
    };
    console.log(data);

    const res = await store.dispatch(productApi.endpoints.newProduct.initiate(data))
    if (res?.data?.id)
      navigate(`/products/${res.data.id}`)

  }

  return (
    <Form className={cl.form} onSubmit={changeProduct}>
      <label className={cl.form__label}>
        Название
        <input name='name' required />
      </label>

      <label className={cl.form__label}>
        Цена
        <input name='price' required />
      </label>

      <label className={cl.form__label}>
        Код(идентификатор)
        <input name='code' required />
      </label>

      <label className={cl.form__label}>
        Рейтинг
        <input name='rating' required />
      </label>

      <label className={cl.form__label}>
        Количество отзывов
        <input name='reviews-count' required />
      </label>

      <label className={cl.form__label}>
        Картинка
        <input name='image-url' required />
      </label>

      <button className={cl.form__button}>Сохранить</button>
    </Form>
  );
};

export { ProductNew };