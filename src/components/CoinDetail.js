import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CardBody, Button, Container, Table } from "reactstrap";
import axios from "axios";
import Header from "./Header";

const CoinDetail = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`https://api.coinpaprika.com/v1/coins/${id}`).then((res) => {
      setData(res.data);
    });
  }, []);
  console.log(data);
  return (
    <>
      <Header />
      <div className="container mt-4">
      <p className="text-secondary fs-6">Coin Detail</p>
        <div className="card  " style={{boxShadow: "0 0 3px #b3e0ff ,0 0 5px #0000FF"}}>
          <p className="mx-5 mt-2 text-primary  fs-5">Coin Detail</p>
          
            <div className="m-5">
              <div className="d-flex flex-row mb-3">
                <div className="me-5">
                  <div className="mb-4">ID</div>
                  <div className="mb-4">Name</div>
                  <div className="mb-4">Symbol</div>
                  <div className="mb-4">Type</div>
                  <div className="mb-4">Active</div>
                  <div className="mb-4">Is New</div>
                </div>
                <div className="fw-semibold">
                  <div className="mb-4">{data.id}</div>
                  <div className="mb-4">{data.name}</div>
                  <div className="mb-4">{data.symbol}</div>
                  <div className="mb-4">{data.type}</div>
                  <div className="mb-4">{data.is_active? "true":"false"}</div>
                  <div className="mb-4">{data.is_new? "true":"false"}</div>
                </div>
              </div>
            </div>
          
        </div>
      </div>
    </>
  );
};

export default CoinDetail;
