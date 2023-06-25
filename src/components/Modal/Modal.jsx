import ReactModal from "react-modal";
import PropTypes from "prop-types";

const customStyled = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        zIndex: 1200,
        
      },

      content: {
        maxWidth: 'calc(100vw - 48px)',
        maxHeight: 'calc(100vh - 24px)',
        backgroundColor: 'transparent',
        padding: 0,
        border: 'none',
        position: 'static',
        borderRadius: 0,
        overflow: 'hidden'
    },
      
};

ReactModal.setAppElement('#root');

export const Modal = ( {isOpen, largeImageURL, tags, onClose}) => {
    return (
        <ReactModal
        style={customStyled}
        isOpen={isOpen}
        onRequestClose={onClose}
        >
            <img src={largeImageURL}  alt={tags} />
            
        </ReactModal>
    );

    
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string .isRequired,
    onClose: PropTypes.func.isRequired,
}