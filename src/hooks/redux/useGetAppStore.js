import { useSelector } from 'react-redux';

const useGetAppStore = () => {
  const { isInitialLoading } = useSelector(({ appReducer = {} } = {}) => appReducer);

  return {
    isInitialLoading,
  };
};

export default useGetAppStore;
