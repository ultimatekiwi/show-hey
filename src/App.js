import React from "react";
import * as axios from "axios";
import Table from "./components/Table";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rowData: [],
    };
  }



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





//   getItems() {
//     axios({
//       method: "get",
//       //   url: "https://mlb21.theshow.com/apis/items",
//       url: "/items.json?type=stadium&page=1",
//       headers: {
//         "content-type": "application/json",
//         accept: "application/json",
//       },
//     })
//       .then((res) => console.log(res.data))
//       .catch((err) => console.error(err));
//   }

  getListings() {
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
    const exampleData = require('./data/sample.json')

    this.setState({
      rowData: exampleData,
    });
  }

  componentDidMount() {
    // this.getListings();
    // this.getItems();
    this.testData();
  }

  render() {
    return <div className="App">
      <Table rowData={this.state.rowData} />
    </div>;
  }
}

export default App;
