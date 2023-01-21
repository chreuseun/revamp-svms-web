import React from 'react';
import { Empty } from 'antd';

const NotFoundPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}>
      <Empty
        description={
          <span>
            Customize <a href="/">Page Not Found</a>
          </span>
        }
      />
    </div>
  );
};

export default NotFoundPage;
