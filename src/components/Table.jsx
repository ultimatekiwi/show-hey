import React, { Component } from "react";

export default class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rowData: this.props.rowData,
      columns: [],
    };
  }

  getHeader() {
    var keys = this.props.rowData.getHeader();
  }

//   const columns = () => {[
//     {
//       Header: "Name",
//       accessor: "name",
//     },
//     {
//       Header: "UUID",
//       accessor: "uuid",
//     },
//   ],
// }
  

  render() {
    // const tableRows = rowData.items.map(())

    return (
      <div>
        <p>Table with colgroup</p>
        <table>
          <colgroup span="4"></colgroup>
          <tr>
            <th>Name</th>
            <th>UUID</th>
            <th>Team</th>
            <th>Capacity</th>
          </tr>

          <tr>
            <td>USA</td>
            <td>Washington, D.C.</td>
            <td>309 million</td>
            <td>English</td>
          </tr>

          <tr>
            <td>Sweden</td>
            <td>Stockholm</td>
            <td>9 million</td>
            <td>Swedish</td>
          </tr>
        </table>
      </div>
      //   <div>
      //     <table>
      //       <thead>
      //         <tr>
      //           <th></th>
      //         </tr>
      //       </thead>
      //       <tbody>
      //         <tr>
      //           <td></td>
      //         </tr>
      //       </tbody>
      //     </table>
      //   </div>
    );
  }
}

// eslint-disable-next-line no-lone-blocks
{
  /* 
<p>Table with colgroup</p>
<table>
  <colgroup span="4"></colgroup>
  <tr>
    <th>Countries</th>
    <th>Capitals</th>
    <th>Population</th>
    <th>Language</th>
  </tr>
  <tr>
    <td>USA</td>
    <td>Washington, D.C.</td>
    <td>309 million</td>
    <td>English</td>
  </tr>
  <tr>
    <td>Sweden</td>
    <td>Stockholm</td>
    <td>9 million</td>
    <td>Swedish</td>
  </tr>
</table> */
}
