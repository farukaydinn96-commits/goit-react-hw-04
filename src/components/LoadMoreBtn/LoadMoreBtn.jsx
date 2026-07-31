import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} className={css.btn}>
      Daha Fazla Yükle
    </button>
  );
};

export default LoadMoreBtn;
