import { useEffect, useState, useCallback } from "react";
import styles from "./anchorBtn.module.scss";
import { debounce } from "../../utils/debounce";

const AnchorBtn = () => {
  const [scrollY, setScrollY] = useState(0);
  const debounceTime = 200;

  const debouncedScroll = useCallback(
    debounce(() => {
      setScrollY(window.scrollY);
    }, debounceTime),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", debouncedScroll);

    return () => {
      window.removeEventListener("scroll", debouncedScroll);
    };
  }, [debouncedScroll]);

  const showBtn = scrollY < 310 ? styles.anchorActive : styles.anchor;

  return (
    <a className={showBtn} href="#header">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="19" x2="12" y2="5"></line>
        <polyline points="5 12 12 5 19 12"></polyline>
      </svg>
    </a>
  );
};

export default AnchorBtn;
