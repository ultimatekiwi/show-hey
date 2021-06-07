import React, { useState, useEffect } from "react";
import * as axios from "axios";
import styled from "styled-components";
import { useTable, usePagination } from "react-table";

const instance = axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://mlb21.theshow.com/apis",
});

const corsURL =
  "https://cors-anywhere.herokuapp.com/https://mlb21.theshow.com/apis";

const showURL = "https://mlb21.theshow.com/apis";



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
`;
// getItems() {
//     axios
//       .get(
//         "https://cors-anywhere.herokuapp.com/https://mlb21.theshow.com/apis/items.json"
//       )
//       .then((response) => {
//         this.setState({
//           rowData: response.data,
//         });
//         console.log(response.data);
//         console.log(response.status);
//         console.log(response.statusTest);
//         console.log(response.headers);
//       });
//   }

// getStadiums() {
//   axios
//     .get(
//       "https://cors-anywhere.herokuapp.com/https://mlb21.theshow.com/apis/items.json?type=stadium&page=1"
//     )
//     .then((response) => {
//       this.setState({
//         rowData: response.data,
//       });
//       console.log(response.data);
//       console.log(response.status);
//       console.log(response.statusTest);
//       console.log(response.headers);
//     });
// }

// testData() {
//   const exampleData = require("./data/sample.json");

//   this.setState({
//     rowData: exampleData,
//   });
// }

function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize:25 },
    },
    usePagination
  );

  return (
    <>
      <pre>
        <code>
          {JSON.stringify(
            {
              pageIndex,
              pageSize,
              pageCount,
              canNextPage,
              canPreviousPage,
            },
            null,
            2
          )}
        </code>
      </pre>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* 
    Pagination can be built however you'd like. 
    This is just a very basic UI implementation:
  */}
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100px" }}
          />
        </span>{" "}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 25, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

// function getItems(url) {
//   instance({
//     'method':'GET',
//     'url':'/items.json',
//     'params': {
//       'type':'stadium',
//       'page':'1'
//     },
//   })
//   .then((response) => {
//     console.log(response);
//     return response.data;
//   }
// }

function App() {
  const [data, setData] = useState([]);
  const [pageCount, setPageCount] = useState(0);


  useEffect(() => {
    instance.get("/items.json?type=stadium&page=1").then((res) => {
      console.log(res.data);

      const items = res.data.items; 
      setData(items);
    });
  }, []);

  // const stadiums = require("./data/stadiums.json");
  // const data = React.useMemo(() => stadiums.items, [])

  // const data = React.useMemo(
  //   () =>
  //   stadiums.items,
  //   []
  // )


  
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "UUID",
        accessor: "uuid",
      },
      {
        Header: "Team",
        accessor: "team",
      },
      {
        Header: "Capacity",
        accessor: "capacity",
      },
    ],
    []
  );

  // const tableInstance = useTable({ columns, data })

  return (
    <Styles>
      {/* <div className="App"> */}
      <Table columns={columns} data={data} />
      {/* </div> */}
    </Styles>
  );
}

export default App;
