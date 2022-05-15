import { useState, useEffect } from "react"

const useWindowScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, [])
  
  const handleScroll = () => {
    setScrollPosition(window.pageYOffset)
  }
  return scrollPosition;
}

export default useWindowScrollPosition;
