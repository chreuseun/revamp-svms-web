import { useSelector } from 'react-redux';

const useGetAppStore = () => {
  const { isInitialLoading, userDetails } = useSelector(({ appReducer = {} } = {}) => appReducer);

  return {
    isInitialLoading,
    userDetails,
  };
};

export default useGetAppStore;
