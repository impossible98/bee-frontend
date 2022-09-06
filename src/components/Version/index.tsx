// import third-party modules
import { Col, PageHeader, Row } from 'antd';
import React from 'react';
// import local modules
import { APP_NAME } from "@/utils/constants";
import VersionDescription from "./descriptions";

function VersionPage() {
  const [title, setTitle] = React.useState('Version');
  document.title = title + ` - ${APP_NAME}`;

  return (
    <PageHeader
      title={title}
    >
      <Row justify="center">
        <Col span={12}>
          <VersionDescription />
        </Col>
      </Row>

    </PageHeader>
  );
}

export default VersionPage;
