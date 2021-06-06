import React from "react";
import * as axios from "axios";
import styled from "styled-components";
import { useTable } from "react-table";

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`
getItems() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://mlb21.theshow.com/apis/items.json"
      )
      .then((response) => {
        this.setState({
          rowData: response.data,
        });
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusTest);
        console.log(response.headers);
      });
  }

  getStadiums() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://mlb21.theshow.com/apis/items.json?type=stadium&page=1"
      )
      .then((response) => {
        this.setState({
          rowData: response.data,
        });
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusTest);
        console.log(response.headers);
      });
  }


  testData() {
    const exampleData = require("./data/sample.json");

    this.setState({
      rowData: exampleData,
    });
  }


function App() {

  const stadiums = require("./data/stadiums.json");

    return (
      <div className="App">
        <Table rowData={this.state.rowData} />
      </div>
    );
}

export default App;
