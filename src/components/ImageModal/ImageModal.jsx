import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onClose, image }) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        className={css.img}
      />
      <div className={css.info}>
        <p>
          <strong>Yazar:</strong> {image.user.name}
        </p>
        <p>
          <strong>Beğeni:</strong> {image.likes}
        </p>
      </div>
    </Modal>
  );
};

export default ImageModal;
