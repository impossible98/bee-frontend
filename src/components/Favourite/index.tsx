// import third-party modules
import { Col, PageHeader, Row } from 'antd';
import React from 'react';
// import local modules
import { APP_NAME } from "@/utils/constants";
import Favouritetable from "./table";

function FavouritePage() {
  const [title, setTitle] = React.useState('Favourite');
  document.title = title + ` - ${APP_NAME}`;

  return (
    <PageHeader
      title={title}
    >
      <Row justify="center">
        <Col span={12}>
          <Favouritetable />
        </Col>
      </Row>
    </PageHeader>
  );
}

export default FavouritePage;
