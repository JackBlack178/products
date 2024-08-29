import cl from './Home.module.scss'
import { FormEvent, useRef } from "react";
import { Form, useNavigate } from "react-router-dom";

const Home = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate();

  const search = (event: FormEvent) => {
      event.preventDefault()
      if (inputRef.current){
        const querySearch = inputRef.current.value
        navigate(`/products?search=${querySearch}`)
      }

  }

  return (
    <section className={cl.home_section}>
        <h1 className={cl.home_section__title}>Главная</h1>
        <h2 className={cl.home_section_subtitle}>Поиск товаров</h2>
      <Form className={cl.home_section__form} onSubmit={search}>
        <input ref={inputRef} name='search' type='text' placeholder='Поиск ...' required />
        <input name='button' type='submit' value='Поиск' />
      </Form>

    </section>
  );
};

export { Home };