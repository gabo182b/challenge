import React from 'react'
import { ModalProps } from './types'
import styled from './modal.module.scss'

const Modal = ({ closeModal }: ModalProps) => (
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

export default Modal
