import cl from './Product-main.module.scss';
import { ProductList } from "./Product-list.tsx";
import Select from "react-select";
import {useState } from "react";
import {useSearchParams } from "react-router-dom";

const options = [
  {
    value: 'best', label: 'Лучшие',
  },
  {
    value: 'worst', label: 'Худшие',
  }
]



const ProductMain = () => {
  const [searchParams] = useSearchParams();




  const [sortType, setSortType] = useState<{value:'worst' | 'best', label:string}>(()=>{
    const sortSearchParam = searchParams.get('sort') as string
    const sort = sortSearchParam === 'best' || sortSearchParam === 'worst' ? sortSearchParam : 'best'
    return options.find(el => el.value === sort)
  });


  const [querySortSearch, setQuerySortSearch] = useState<string>(()=>{
    const querySearch = searchParams.get('search')
    return querySearch || ''
  });


  const resetSearchParams = () => {
    setQuerySortSearch('')
    setSortType(options[0])

  }


  return (
    <section className={cl.product}>

      <h1 className='visually-hidden'>Поиск товаров</h1>

      <div className={cl.product__navigation}>
        <Select
          placeholder='Сортировка'
          className={cl.product__navigation__select}
                options={options}
                value={sortType}
                onChange={newValue => setSortType(newValue)}

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

      <ProductList querySortSearch={querySortSearch}  sortType={sortType.value} className={cl.product__list}></ProductList>
    </section>
  );
};

export { ProductMain };