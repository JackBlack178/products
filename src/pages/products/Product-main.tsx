import cl from './Product-main.module.scss';
import { ProductList } from "./Product-list.tsx";
import Select from 'react-select'

const options = [
  {
    value: 'Opt1', label: 'Opt1',
  },
  {
    value: 'Opt2', label: 'Opt2',
  }
]

const ProductMain = () => {
  return (
    <section className={cl.product}>

      <h1 className='visually-hidden'>Поиск товаров</h1>

      <div className={cl.product__navigation}>

        <Select
          className={cl.product__navigation__select}


                options={options}>
        </Select>
        <label className='visually-hidden'>Поиск товара
        </label>
        <input
          className={cl.product__navigation__input} type="text"/>

      </div>

      <ProductList className={cl.product__list}></ProductList>
    </section>
  );
};

export { ProductMain };