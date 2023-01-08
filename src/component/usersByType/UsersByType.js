import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
import { prepareUsersDataByType } from "../../services/userServices";

const UsersByType = ({ users }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const res = prepareUsersDataByType(users);
    setData(res);
  }, [users]);

  return (
    <div>{data && data.length > 0 && <UsersChatByType data={data} />}</div>
  );
};

const UsersChatByType = ({ data }) => {
  const [width, setWidth] = useState(730);
  // const [width, setWidth] = useState(300);
  const COLORS = ["#82ca9d", "#8884d8"];

  useEffect(() => {
    if (window.innerWidth < 800) {
      setWidth(350);
      // setHeight(300);
    }
  }, []);
  return (
    <>
      {data && (
        <PieChart width={width} height={300}>
          <Pie
            data={data}
            color="#000000"
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="#8884d8"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      )}
    </>
  );
};

export default UsersByType;
