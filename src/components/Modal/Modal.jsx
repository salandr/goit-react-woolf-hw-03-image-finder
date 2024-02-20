import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, StyledModal } from './Modal.styled';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.portalRef = document.createElement('div');
    this.portalRef.setAttribute('id', 'portal');
  }

  onEscButtonClose = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  onOverlayClick = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  componentDidMount() {
    document.body.appendChild(this.portalRef);
    window.addEventListener('keydown', this.onEscButtonClose);
  }

  componentWillUnmount() {
    document.body.removeChild(this.portalRef);
    window.removeEventListener('keydown', this.onEscButtonClose);
  }

  render() {
    const { imgSrc, label } = this.props;
    return createPortal(
      <Overlay onClick={this.onOverlayClick}>
        <StyledModal>
          <img src={imgSrc} alt={label} />
        </StyledModal>
      </Overlay>,
      this.portalRef
    );
  }
}

export default Modal;

Modal.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
