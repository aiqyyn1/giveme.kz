import { useDispatch } from 'react-redux'; 

export const useHandleClickActive = () => {
  const dispatch = useDispatch(); 

  const handleClickActive = (id) => {
    dispatch(setIsActive(id)); 
  };

  return handleClickActive;
};
