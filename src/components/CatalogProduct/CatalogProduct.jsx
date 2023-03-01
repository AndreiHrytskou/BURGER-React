import style from "./CatalogProduct.module.css";

export const CatalogProduct = (props) => {
  return (
    <article className={style.product}>
      <img src="img/photo.jpg" alt={props.title} className={style.image} />

      <p className={style.price}>
        480<span className="currency">₽</span>
      </p>

      <h3 className={style.title}>
        <button className={style.detail}>{props.title}</button>
      </h3>

      <p className={style.weight}>470г</p>

      <button className={style.add} type="button">
        Добавить
      </button>
    </article>
  );
};
