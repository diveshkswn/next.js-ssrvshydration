/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';

interface ReturnTypes{
    reset : ()=>any;
    clear : ()=>any;
}
export const useTimeout = (callback : ()=>any, delay : number):ReturnTypes => {
  const callbackRef = useRef(callback);
  // eslint-disable-next-line no-undef
  const timeoutRef = useRef<NodeJS.Timeout>();
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
  }, []);

  const clear = useCallback(() => {
    // eslint-disable-next-line no-unused-expressions
    timeoutRef.current && clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    set();
    return clear;
  }, [delay, set, clear]);

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  return { clear, reset };
};
