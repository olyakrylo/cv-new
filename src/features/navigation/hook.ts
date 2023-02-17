import { RefObject, useCallback, useEffect, useState } from 'react';
import throttle from 'lodash.throttle';

import { Section } from './type';

type UseNavigationProps = {
  sectionsList: {
    ref: RefObject<HTMLDivElement>;
    id: Section;
  }[];
};

export const useNavigation = ({ sectionsList }: UseNavigationProps) => {
  const [section, setSection] = useState<Section>(Section.ABOUT);

  const navigate = useCallback(
    (id: Section) => {
      const ref = sectionsList.find((s) => s.id === id)?.ref;
      if (ref?.current) {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    },
    [sectionsList]
  );

  const handleScroll = useCallback(() => {
    const middle = window.innerHeight / 2;

    const currentSection = sectionsList
      .filter(({ ref }) => {
        return (ref.current?.getBoundingClientRect().y ?? -1) < middle;
      })
      .sort((a, b) => {
        const ay = a.ref.current?.getBoundingClientRect().y ?? 0;
        const by = b.ref.current?.getBoundingClientRect().y ?? 0;
        return by - ay;
      })[0];

    if (currentSection && currentSection.id !== section) {
      setSection(currentSection.id);
    }
  }, [sectionsList, section]);

  useEffect(() => {
    const scrollHandler = throttle(handleScroll, 300);

    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [handleScroll]);

  return { section, navigate };
};
