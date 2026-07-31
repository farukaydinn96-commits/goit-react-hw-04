import toast from "react-hot-toast";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements.search.value.trim();

    if (query === "") {
      toast.error("Lütfen bir arama kelimesi girin!");
      return;
    }

    onSubmit(query);
    e.target.reset();
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Resim ve fotoğraf ara"
          className={css.input}
        />
        <button type="submit" className={css.btn}>
          Ara
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
