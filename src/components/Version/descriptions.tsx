// import third-party modules
import axios from "axios";
import { Descriptions } from 'antd';
import React, { useEffect } from 'react';
// import local modules
import { BASE_URL } from "@/utils/constants";

function VersionDescription() {
  const [version, setVersion] = React.useState('');

  useEffect(() => {
    axios({
      method: 'post',
      url: `${BASE_URL}api/version`,
      data: {}
    })
      .then(res => {
        setVersion(res.data.data.version);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <Descriptions bordered>
      <Descriptions.Item label="Version">{version}</Descriptions.Item>
    </Descriptions>
  )
}

export default VersionDescription;
