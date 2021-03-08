import { keyframes } from '@emotion/react';
import { renderHook, act } from '@testing-library/react-hooks';
import useAnimation from './useAnimation';

const enterAnimation = keyframes``;
const exitAnimation = keyframes``;
const anotherAnimation = keyframes``;

jest.mock('react', () => {
  const React = jest.requireActual('react');

  return {
    ...React,
    useEffect: React.useLayoutEffect,
  };
});

function testHook(initialProps: boolean) {
  return renderHook((isOpened) => useAnimation(isOpened, {
    enterAnimationName: enterAnimation.name,
    exitAnimationName: exitAnimation.name,
  }), { initialProps });
}

describe.skip('useAnimation', () => {
  it('should be initially in "unmounted" state if modal initially closed', () => {
    const { result } = testHook(false);

    const [openState] = result.current;
    expect(openState).toBe('unmounted');
  });

  it('should change state to "entering" if modal opened', () => {
    const { result, rerender } = testHook(false);

    rerender(true);

    const [openState] = result.current;
    expect(openState).toBe('entering');
  });

  it('should be initially in "entering" state if modal initially opened', () => {
    const { result } = testHook(true);

    const [openState] = result.current;
    expect(openState).toBe('entering');
  });

  it('should change state to "mounted" after ending animation', () => {
    const { result } = testHook(true);

    act(() => {
      const [, onAnimationEnd] = result.current;
      (onAnimationEnd as Function)({
        animationName: enterAnimation.name,
      });
    });

    const [openState] = result.current;
    expect(openState).toBe('mounted');
  });

  it('should not change state to "mounted" on another animation finish', () => {
    const { result } = testHook(true);

    act(() => {
      const [, onAnimationEnd] = result.current;
      (onAnimationEnd as Function)({
        animationName: anotherAnimation.name,
      });
    });

    const [openState] = result.current;
    expect(openState).toBe('entering');
  });

  it('should change state to "exiting" if prop isOpened changed to false after mounting', () => {
    const { result, rerender } = testHook(true);

    // make "mounted"
    act(() => {
      const [, onAnimationEnd] = result.current;
      (onAnimationEnd as Function)({
        animationName: enterAnimation.name,
      });
    });

    rerender(false);

    const [openState] = result.current;
    expect(openState).toBe('exiting');
  });

  it('should change state to "unmounted" if modal in exiting state and exiting animation finished', () => {
    const { result, rerender } = testHook(true);

    // make "mounted"
    act(() => {
      const [, onAnimationEnd] = result.current;
      (onAnimationEnd as Function)({
        animationName: enterAnimation.name,
      });
    });

    // make "exiting"
    rerender(false);

    // make "unmounted"
    act(() => {
      const [, onAnimationEnd] = result.current;
      (onAnimationEnd as Function)({
        animationName: exitAnimation.name,
      });
    });

    const [openState] = result.current;
    expect(openState).toBe('unmounted');
  });

  it('should not change state to "unmounted" if modal in exiting state but another animation finished', () => {
    const { result, rerender } = testHook(true);

    // make "mounted"
    act(() => {
      const [, onAnimationEnd] = result.current;
      (onAnimationEnd as Function)({
        animationName: enterAnimation.name,
      });
    });

    // make "exiting"
    rerender(false);

    act(() => {
      const [, onAnimationEnd] = result.current;
      (onAnimationEnd as Function)({
        animationName: anotherAnimation.name,
      });
    });

    const [openState] = result.current;
    expect(openState).toBe('exiting');
  });
});
