import React from "react";
import UsersByType from "../usersByType/UsersByType";
import UsersCreateAtBarChart from "../usersOverTime/UsersCreateAtBarChart";

const DashboardMain = ({ dashboardState, users }) => {
  const { showAddedUser, showOverTime, showNoOfUsers } = dashboardState;
  return (
    <main className="mt-5">
      {showAddedUser ? (
        <div>
          <h1>Total Added Users({users.length})</h1>
        </div>
      ) : showOverTime ? (
        <div>
          <UsersCreateAtBarChart users={users} />
        </div>
      ) : showNoOfUsers ? (
        <div>
          <UsersByType users={users} />
        </div>
      ) : (
        <div>
          <h1>Welcome to Rezolve.ai</h1>
        </div>
      )}
    </main>
  );
};

export default DashboardMain;
