import React from 'react';
import { OpenStatus, UseAnimationOptions } from './useAnimation.types';

function useAnimation(
  isOpened: boolean,
  { enterAnimationName, exitAnimationName }: UseAnimationOptions,
): [OpenStatus, React.AnimationEventHandler] {
  const [openStatus, setOpenStatus] = React.useState<OpenStatus>('unmounted');

  const onAnimationEnd = React.useCallback((e: React.AnimationEvent) => {
    if (openStatus === 'entering' && e.animationName === enterAnimationName) {
      setOpenStatus('mounted');
    }

    if (openStatus === 'exiting' && e.animationName === exitAnimationName) {
      setOpenStatus('unmounted');
    }
  }, [openStatus, enterAnimationName, exitAnimationName]);

  React.useEffect(() => {
    if (isOpened && openStatus === 'unmounted') {
      setOpenStatus('entering');
    }

    if (!isOpened && openStatus === 'mounted') {
      setOpenStatus('exiting');
    }
  }, [isOpened, openStatus]);

  return [openStatus, onAnimationEnd];
}

export default useAnimation;
