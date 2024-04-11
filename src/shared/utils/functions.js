import { useDispatch } from 'react-redux'; 
import {setIsActive} from '../../pages_0/upload-page/lib/slices'
export const useHandleClickActive = () => {
  const dispatch = useDispatch(); 

  const handleClickActive = (id) => {
    dispatch(setIsActive(id)); 
  };

  return handleClickActive;
};
