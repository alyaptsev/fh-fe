import React from 'react';

export interface ModalProps {
  className?: string,
  isOpened?: boolean,
}

export interface FixedContainerProps {
  openStatus: string,
  onAnimationEnd: React.AnimationEventHandler
}
