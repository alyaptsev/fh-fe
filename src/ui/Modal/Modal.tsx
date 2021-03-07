import React from 'react';
import ReactDOM from 'react-dom';
import useAnimation from '@hooks/useAnimation';
import {
  FixedContainer,
  modalEnter,
  modalExit,
} from './Modal.styled';
import { ModalProps } from './Modal.types';

const Modal: React.FC<ModalProps> = ({
  className,
  isOpened = true,
  children,
}) => {
  const [openStatus, onAnimationEnd] = useAnimation(isOpened, {
    enterAnimationName: modalEnter.name,
    exitAnimationName: modalExit.name,
  });

  if (openStatus === 'unmounted') {
    return null;
  }

  return ReactDOM.createPortal(
    <FixedContainer
      className={className}
      openStatus={openStatus}
      onAnimationEnd={onAnimationEnd}
    >
      {children}
    </FixedContainer>,
    document.body,
  );
};

export default Modal;
