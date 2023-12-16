import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../Images/Images/banner.jpeg";
import "../Styles/Homestyle.css";
const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Food Order Website</h1>
          <p>Eat Healthy Be Healthy</p>
          <p>Good Food Good Mood</p>
          <Link to="/Pages/menu">
            <button>Order Now</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;