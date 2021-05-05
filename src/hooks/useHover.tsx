import { useState, useEffect, RefObject } from 'react';
// 鼠标是否滑过元素
const useHover = (ref: RefObject<HTMLElement>) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  useEffect(() => {
    const dom = ref.current;
    const mouseoverHandle = () => {
      setIsHover(true);
    };
    const mouseoutHandle = () => {
      setIsHover(false);
    };
    dom?.addEventListener('mouseover', mouseoverHandle);
    dom?.addEventListener('mouseout', mouseoutHandle);
    return () => {
      dom?.removeEventListener('mouseover', mouseoverHandle);
      dom?.removeEventListener('mouseout', mouseoutHandle);
    };
  }, [isHover, ref]);
  return isHover;
};

export default useHover;
