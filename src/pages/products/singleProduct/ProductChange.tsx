import cl from './ProductChange.module.scss'
import { Form, Navigate, useNavigate, useParams } from "react-router-dom";
import { IProduct, productApi } from "../utils/productApi.ts";
import { Loading } from "../../../components/simple/Loading.tsx";
import { FormEvent, useState } from "react";
import { store } from "../../../store";
import clsx from "clsx";

const ProductChange = () => {
  const {id} = useParams()
  const {data, isLoading} = productApi.useGetProductQuery(id as string)
  const [_, {isError}] = productApi.useChangeProductMutation()
  const navigate = useNavigate();
  const [formChanged, setFormChanged] = useState(false);
  const [showError, setShowError] = useState(false);

  if (!isLoading && data === undefined)
    return <Navigate replace={true} to={'/products'}></Navigate>

  const product = data as IProduct

  if (isLoading)
    return <Loading className={cl.form__loader}/>


  const handleAnyFieldChange = () => {
    setFormChanged(true);
    if (showError) {
      setShowError(false)
    }
  }

  const changeProduct = async (event: FormEvent) => {
    event.preventDefault()

    const target:any = event.target

    const data = {
      id:id as string,
      name: target.name.value as string,
      code: Number(target.code.value),
      rating: Number(target.rating.value),
      price: Number(target.price.value),
      ['reviews-count']: Number(target['reviews-count'].value),
      ['image-url']: target['image-url'].value as string,
    };

    if (!formChanged) {
      setShowError(true)
      return
    }

    await store.dispatch(productApi.endpoints.changeProduct.initiate(data))
    if (!isError)
      navigate(-1);
  }


  return (
    <Form className={cl.form} onSubmit={changeProduct} onChange={handleAnyFieldChange}>
      <label className={cl.form__label}>
        Название
        <input defaultValue={product.name} name='name' required />
      </label>

      <label className={cl.form__label}>
        Цена
        <input defaultValue={product.price} name='price' required />
      </label>

      <label className={cl.form__label}>
        Код(идентификатор)
        <input defaultValue={product.code} name='code' required />
      </label>

      <label className={cl.form__label}>
        Рейтинг
        <input defaultValue={product.rating} name='rating' required />
      </label>

      <label className={cl.form__label}>
        Количество отзывов
        <input defaultValue={product["reviews-count"]} name='reviews-count' required />
      </label>

      <label className={cl.form__label}>
        Количество отзывов
        <input defaultValue={product["image-url"]} name='image-url' required />
      </label>

      <div className={clsx(cl.form__error, showError && cl.form__error_active)}>Форма не изменилась</div>
      <button className={cl.form__button}>Сохранить</button>
    </Form>

  );
};

export { ProductChange };