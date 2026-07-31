import css from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <p className={css.error}>
      Hata oluştu! Lütfen sayfayı yenileyip tekrar deneyin.
    </p>
  );
};

export default ErrorMessage;
