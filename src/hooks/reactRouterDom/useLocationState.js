import { useLocation } from 'react-router-dom';

const useLocationState = () => {
  const { state } = useLocation();

  return { state };
};

export default useLocationState;
