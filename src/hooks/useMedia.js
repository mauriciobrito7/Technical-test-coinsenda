import { useEffect, useState } from "react";

const useMedia = (query) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  // cDM, cDU
  useEffect(() => {
    const media = window.matchMedia(`(min-width: ${query})`);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [query, matches]);

  return matches;
};

export default useMedia;
