import React, {createContext} from 'react';
import {ImageColors} from './GradientProvider';

export interface ContextProps {
  colors: ImageColors;
  prevColors: ImageColors;
  setMainColors: (colors: ImageColors) => void;
  setPrevMainColors: (colors: ImageColors) => void;
}

export const GradientContext = createContext({} as ContextProps);
