import { useEffect, RefObject } from 'react';
// 判断鼠标是否点击组件外部

const useClickOutsize = (
  ref: RefObject<HTMLElement>,
  handleFunction: Function,
) => {
  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (!ref.current || ref.current.contains(e.target as HTMLElement)) {
        return;
      }
      handleFunction(e);
    };
    document.addEventListener('click', listener);
    return () => {
      document.removeEventListener('click', listener);
    };
  }, [ref, handleFunction]);
};

export default useClickOutsize;
