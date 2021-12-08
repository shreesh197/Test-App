import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { getDetails } from "./service/apiEndpoints";

const App = () => {
  const fetchDetails = () => {
    const body = {
      merchantId: "216353bd-b4ce-4b4d-8efe-1a91ae626ee8",
      basketAmount: 5220,
      paymentGatewayId: "31a2b66b-f364-48f9-a7fd-6870a5a224b4",
    };
    getDetails(body).then((result) => {
      console.log(result);
    });
  };

  return (
    <div className="container-fluid main" style={{ margin: 0, padding: 0 }}>
      <div className="row Home-area1" style={{ margin: 0, padding: 0 }}>
        <div className="col-12 main-home-main-area1">
          <span
            style={{
              marginRight: "20px",
            }}
          >
            This is a Test App
          </span>
          <button onClick={fetchDetails}>Go</button>
        </div>
      </div>
    </div>
  );
};

export default App;
