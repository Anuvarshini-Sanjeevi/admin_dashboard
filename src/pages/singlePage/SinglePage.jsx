import "./SinglePage.scss";
import Sidebar from "../../component/sidebar/Sidebar";
import Header from "../../component/header/Header";

const SinglePage = () => {
  return (
    <div className="singlePage">
      <Sidebar />
      <div className="singlePage_container">
        <Header />
        <div className="single_page_top">
          <div className="single_page_left">
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="" alt="" className="itemImg" />
            </div>
          </div>
          <div className="single_page_right"></div>
        </div>
        <div className="single_page_bottom"></div>
      </div>
    </div>
  );
};
export default SinglePage;
