const navigateToRoute = ({ navigate, routeName = '', options = {} }) => {
  navigate(routeName, options);
};

export { navigateToRoute };
