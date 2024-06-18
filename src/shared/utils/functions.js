import { useCallback } from 'react';
import { useDispatch } from 'react-redux'; 
import { setIsActive } from '../../pages_0/upload-page/lib/slices';

export const useHandleClickActive = () => {
  const dispatch = useDispatch(); 

  const handleClickActive = useCallback((id) => {
    dispatch(setIsActive(id)); 
  }, [dispatch]); 

  return handleClickActive;
};