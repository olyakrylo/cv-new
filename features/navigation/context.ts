import { createContext } from 'react';

import { Section } from './type';

export const NavigationContext = createContext<Section>(Section.ABOUT);
