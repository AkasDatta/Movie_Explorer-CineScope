import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!showButton) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-7 right-7 z-[999] flex h-11 w-11 cursor-pointer items-center justify-center border border-white/30 bg-black/60 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black"
    >
      <FiArrowUp size={17} strokeWidth={1} />
    </button>
  );
};

export default ScrollToTop;
