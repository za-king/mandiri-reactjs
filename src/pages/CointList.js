import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import {
  CardBody,
  Button,
  Container,
  Input,
  FormGroup,
  Label,
  Form,
  Col,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function CointList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`https://api.coinpaprika.com/v1/coins`).then((res) => {
      setData(res.data);
    });
  }, []);

  

  const columns = [
    {
      dataField: "id",
      text: "ID",
      sort: true,
      headerStyle: () => {
        return { backgroundColor: "#1aa3ff" };
      },
    },
    {
      dataField: "name",
      text: "Name",
      sort: true,
      headerStyle: () => {
        return { backgroundColor: "#1aa3ff" };
      },
    },
    {
      dataField: "symbol",
      text: "Symbol",
      sort: true,
      headerStyle: () => {
        return { backgroundColor: "#1aa3ff" };
      },
    },
    {
      dataField: "rank",
      text: "Rank",
      sort: true,
      headerStyle: () => {
        return { backgroundColor: "#1aa3ff" };
      },
    },
    {
      dataField: "type",
      text: "Type",
      sort: true,
      headerStyle: () => {
        return { backgroundColor: "#1aa3ff" };
      },
    },
    {
      dataField: "is_active",
      text: "Active",
      sort: true,
      headerStyle: () => {
        return { backgroundColor: "#1aa3ff" };
      },
    },
  ];
  const navigate = useNavigate();
  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      navigate(`cointdetail/${row.id}`);
      console.log(row);
    },
  };
  return (
    <>
      <Header />
      <div className="card  container my-5" style={{boxShadow: "0 0 3px #b3e0ff ,0 0 3px #0000FF"}}>
        <Container>
          <CardBody className="">
            <div className="text-primary fs-4">Coint List</div>
          </CardBody>

          <div>
            <Form>
              <Row className="row-cols-lg-auto g-3 align-items-center">
                <Col>
                  <FormGroup className="pt-3">
                  <Label className="visually-hidden" for="exampleSelect">
                    Search
                  </Label>
                    <Input id="exampleSelect" name="select" type="select" >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col>
                 
                  <Input
                    id="examplePassword"
                    name="password"
                    placeholder="Search"
                    type="text"
                  />
                </Col>

                <Col>
                  <Button color="primary">Search</Button>
                </Col>
              </Row>
            </Form>

            <ToolkitProvider keyField="id" data={data} columns={columns}>
              {(props) => (
                <div className="rounded">
                  <hr />
                  <BootstrapTable
                    {...props.baseProps}
                    pagination={paginationFactory()}
                    rowEvents={rowEvents}
                    
                  />
                </div>
              )}
            </ToolkitProvider>
          </div>
        </Container>
      </div>
    </>
  );
}

export default CointList;
