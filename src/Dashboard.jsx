import React from "react";

// dashbard container
// - left
//    - side menu
// - right
//    - cards
//      - top
//        - 1 big card
//     - bottom
//        - 2 cards with same style

const Dashboard = () => {
  return (
    <div className="dashboardContainer">
      <div className="leftSideMenuContainer">left</div>
      <div className="cardsContainer">right</div>
    </div>
  );
};

export default Dashboard;
