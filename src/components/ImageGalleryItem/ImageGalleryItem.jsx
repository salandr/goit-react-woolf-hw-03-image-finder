import PropTypes from 'prop-types';
import Modal from 'components/Modal';
import { Component } from 'react';
import { Image } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  };

  render() {
    const { isModalOpen } = this.state;
    const { webformatURL, largeImageURL, tags } = this.props;

    return (
      <>
        <Image src={webformatURL} alt={tags} onClick={this.toggleModal} />

        {isModalOpen && (
          <Modal
            imgSrc={largeImageURL}
            label={tags}
            closeModal={this.toggleModal}
          />
        )}
      </>
    );
  }
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
