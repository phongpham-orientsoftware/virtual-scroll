import { useLayoutEffect, useState } from "react";

export default function useWindowPosition(id) {
  const [scrollPosition, setPosition] = useState(0);

  useLayoutEffect(() => {
    const ele = document.querySelector(id);

    function updatePosition(e) {
      setPosition(e.target.scrollTop);
    }

    ele.addEventListener("scroll", updatePosition);

    return () => ele.removeEventListener("scroll", updatePosition);
  }, [id]);

  return scrollPosition;
}
