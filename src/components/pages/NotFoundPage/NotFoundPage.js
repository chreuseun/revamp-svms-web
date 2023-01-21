import React from 'react';
import { Empty, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

import { DefaultContainer } from 'src/components/common';
import { navigateToRoute } from 'src/utils/reactRouterDom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const toHomePage = () => {
    navigateToRoute({ navigate, routeName: '/' });
  };

  return (
    <DefaultContainer>
      <Empty
        description={
          <div>
            <h2>Page Not Found</h2>
            <Button onClick={toHomePage}>Go to Homepage</Button>
          </div>
        }
      />
    </DefaultContainer>
  );
};

export default NotFoundPage;
