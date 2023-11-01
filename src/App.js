import Chart from "react-apexcharts";
import "./App.css";
// import { PiDotsThreeOutlineVerticalLight } from "react-icons/pi";
// import { RxDashboard } from "react-icons/rx";
// import { GoSearch } from "react-icons/go";
// import buyerIcon from "./assets/buyers-icon.svg";
// import leadsIcon from "./assets/leads-icon.svg";
// import clientIcon from "./assets/client-icon.svg";
// import propertyIcon from "./assets/property-icon.svg";
// import redBoxIcon from "./assets/red-box-icon.svg";
// import callBackIcon from "./assets/call-back-icon.svg";
// import investmentsIcon from "./assets/investments-icon.svg";
// import paymetnsIcon from "./assets/paymetns-icon.svg";
// import magikIcon from "./assets/magik-icon.svg";
// import dashbordIcon from "./assets/dashbord-icon.svg";
import NavBar from "./NavBar";
import Dashboard from "./Dashboard";

const chartSeries = [44, 55];

const chartOption = {
  chart: {
    height: 350,
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          fontSize: "22px",
        },
        value: {
          fontSize: "16px",
        },
      },
    },
  },
  colors: ["#9C8585", "#AB88BF"],
  labels: ["Apples", "Oranges"],
};

// 2 sectoins
//   - navbar
//   - dashboard content

function App() {
  return (
    <div className="appContainer">
      <NavBar />
      <Dashboard />
    </div>
  );
}

function Main() {
  return (
    <main>
      <div className="main_total-count-bar">
        <Chart
          options={chartOption}
          series={chartSeries}
          type="radialBar"
          height={350}
        />
      </div>
    </main>
  );
}

export default App;
