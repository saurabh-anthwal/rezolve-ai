import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Legend, Tooltip } from "recharts";
import { prepareCreatedAtData } from "../../services/userServices";

const UsersCreateAtBarChart = ({ users }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const res = prepareCreatedAtData(users);
    setData(res);
  }, [users]);
  return (
    <div className="flex justify-center mt-12">
      {data && data.length > 0 && <UserChart data={data} />}
    </div>
  );
};

const UserChart = ({ data }) => {
  const [width, setWidth] = useState(730);
  useEffect(() => {
    if (window.innerWidth < 800) {
      setWidth(350);
    }
  }, []);
  return (
    <>
      {data && (
        <BarChart
          width={width}
          height={250}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="month" />
          <YAxis dataKey="totalUsers" />
          <Tooltip />
          <Legend />
          <Bar type="monotone" dataKey="totalUsers" fill="#8884d8" />
        </BarChart>
      )}
    </>
  );
};

export default UsersCreateAtBarChart;
