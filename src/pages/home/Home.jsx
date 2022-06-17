import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
        </div>
        <div className="charts">
          <Chart
            title="Thu nhập trong tuần"
            aspect={3 / 1}
          />
        </div>
        <div className="listContainer">
          <div className="listTitle">Recent orders</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
