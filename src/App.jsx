import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { fetchImages } from "./api";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import "./App.css";

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showLoadMore, setShowLoadMore] = useState(false);

  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchImages(query, page);

        setImages((prev) => [...prev, ...data.results]);

        setShowLoadMore(page < data.total_pages);
      } catch (err) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [query, page]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
    setShowLoadMore(false);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={openModal} />
      )}
      {error && <ErrorMessage />}
      {isLoading && <Loader />}
      {showLoadMore && !isLoading && <LoadMoreBtn onClick={handleLoadMore} />}
      <ImageModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        image={selectedImage}
      />
      <Toaster position="top-right" />
    </div>
  );
};

export default App;
