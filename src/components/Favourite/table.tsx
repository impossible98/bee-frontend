// import third-party modules
import axios from "axios";
import { Table } from 'antd';
import React, { useEffect } from 'react';
// import local modules
import { BASE_URL } from "@/utils/constants";

function Favouritetable() {
  const [favouriteList, setFavouriteList] = React.useState([]);

  useEffect(() => {
    axios({
      method: 'post',
      url: `${BASE_URL}/api/v1/favourite_list/get`,
      data: {}
    })
      .then(response => {
        setFavouriteList(response.data.data);
      });
  }, []);
  return (
    <Table
      bordered
      dataSource={favouriteList}
    >
      <Table.Column
        dataIndex="platform"
        key="platform"
        title="Platform"
      />
      <Table.Column
        dataIndex="room_id"
        key="room_id"
        title="Room ID"
      />
      <Table.Column
        dataIndex="live_streamer"
        key="live_streamer"
        title="Live Streamer"
      />
    </Table>
  )
}

export default Favouritetable;
