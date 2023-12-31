import { getDownloadURL, listAll, ref } from "firebase/storage";
import React, { useCallback, useEffect, useState } from "react";
import { imageDb } from "../../FirebaseImages/Config";
import Gallery from "react-photo-gallery";
import FadeIn from "react-fade-in";
import Carousel, { Modal, ModalGateway } from "react-images";

const GalleryAlbum = () => {
  const [imgUrl, setImgUrl] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  useEffect(() => {
    const getImageSize = (url, cb) => {
      const img = new Image();
      img.onload = () => cb(null, img);
      img.onerror = (err) => cb(err);
      img.src = url;
    };
    listAll(ref(imageDb, "files")).then((imgs) => {
      imgs.items.forEach((val) => {
        getDownloadURL(val).then((url) => {
          // Use like:
          getImageSize(url, (err, img) => {
            const newPhoto = {
              src: url,
              width: Math.round(img.naturalWidth / 1000),
              height: Math.round(img.naturalHeight / 1000),
            };
            setImgUrl((data) => [...data, newPhoto]);
          });
        });
      });
    });
  }, []);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <FadeIn>
      <div className="homeContainer">
        <h1 className="galleryTitle">Gallery</h1>
        <Gallery photos={imgUrl} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={imgUrl.map((x) => ({
                  ...x,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    </FadeIn>
  );
};

export default GalleryAlbum;
