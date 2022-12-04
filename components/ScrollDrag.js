import React, { useRef, useState, useEffect } from "react";

export default function ScrollDrag({ children, style = "" }) {
  const ref = useRef();
  const [pos, setPos] = useState({
    isScrolling: false,
    clientX: 0,
  });

  const onMouseDown = (e) => {
    setPos({
      ...pos,
      isScrolling: true,
      clientX: e.clientX,
    });
  };

  const onMouseUp = () => {
    setPos({ ...pos, isScrolling: false });
  };

  const onMouseMove = (e) => {
    const { isScrolling, clientX } = pos;
    const { clientWidth } = ref.current;
    const dx = e.clientX - clientX;
    const displacementX =
      0.3 *
      clientWidth *
      Math.sign(dx) *
      Math.log10(1.0 + (0.5 * Math.abs(dx)) / clientWidth);
    if (isScrolling) {
      // if (clientX >= e.clientX) {
      ref.current.scrollLeft -= displacementX;
      // } else {
      //   ref.current.scrollLeft = ref.current.scrollLeft - dx;
      // }
      // ref.current.scrollLeft = scrollX + dx;
      setPos({
        ...pos,
        clientX: e.clientX,
      });
    }
  };

  useEffect(() => {
    if (pos.isScrolling) {
      window.addEventListener("mouseup", onMouseUp);
      window.addEventListener("mousemove", onMouseMove);
    }
    return () => {
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [pos.isScrolling]);

  return (
    <div className={style} ref={ref} onMouseDown={(e) => onMouseDown(e)}>
      {children}
    </div>
  );
}
