import cl from './Product-main.module.scss';
import { ProductList } from "./Product-list.tsx";
import Select from "react-select";
import {useState } from "react";
import {useSearchParams } from "react-router-dom";

const options:{value:'best' | 'worst', label:string}[] = [
  {
    value: 'best', label: 'Лучшие',
  },
  {
    value: 'worst', label: 'Худшие',
  }
]



const ProductMain = () => {
  const [searchParams] = useSearchParams();

  const [sortType, setSortType] = useState<'best' | 'worst'>(()=>{
    const sortQueryParam = searchParams.get('sort')
    if (sortQueryParam === 'best' || sortQueryParam === 'worst')
      return sortQueryParam
    return 'best'
  })


  const currentSort = {
    value: sortType,
    label: options.find(el => el.value === sortType)?.label
  }


  const [querySortSearch, setQuerySortSearch] = useState<string>(()=>{
    const querySearch = searchParams.get('search')
    return querySearch || ''
  });


  const resetSearchParams = () => {
    setQuerySortSearch('')


  }


  return (
    <section className={cl.product}>

      <h1 className='visually-hidden'>Поиск товаров</h1>

      <div className={cl.product__navigation}>
        <Select
          placeholder='Сортировка'
          className={cl.product__navigation__select}
                options={options}
                value={currentSort}
                onChange={(newValue) => setSortType(newValue!.value)}


        >
        </Select>
        <label className='visually-hidden'>Поиск товара
        </label>
        <input
          value={querySortSearch}
          onChange={(e => setQuerySortSearch(e.target.value))}
          placeholder='Поиск'
          className={cl.product__navigation__input} type="text"/>
        <button className={cl.product__button} onClick={resetSearchParams}>Сброс</button>
      </div>

      <ProductList querySortSearch={querySortSearch}  sortType={sortType} className={cl.product__list}></ProductList>
    </section>
  );
};

export { ProductMain };