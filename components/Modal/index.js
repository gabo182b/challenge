import React from 'react'
import PropTypes from 'prop-types'
import styled from './modal.module.scss'

const Modal = ({ closeModal }) => (
    <div className={styled.modalBackground}>
        <div className={styled.modalContainer}>
            <button
                className={styled.modalButton}
                onClick={closeModal}
            >
                Cerrar Modal
            </button>
        </div>
    </div>
)

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired
}

export default Modal
