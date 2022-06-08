import axios from "axios";
import React, { useEffect, useState } from "react";
import { Preloader } from "../ui-components/selector";

import { TableList } from "../ui-components/table";




export function MeetingsTable() {
  const [insert, setInsert] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3300/meetings/2`);
      console.log(data);
      await setInsert(data);
      return data;
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <>
      <div className="container">
        <h1 className="center-align">Meetings</h1>
        <div className="row">
          {!insert.length ? <Preloader /> : <TableList catalog={insert} />}
        </div>
      </div>
    </>
  );
}
