import React, { useMemo, useState } from "react";
import Navigation from "../../components/Navigation";
import style from "./Team.css";
import BTable from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Footer from "../../components/footer";
import { usePagination, useTable } from "react-table";
import { Dropdown } from "react-bootstrap";
import TeamCarousel from "../../components/team/TeamCarousel";
import Animatedbg from '../../components/Animatedbg'
const Team = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Position",
        accessor: "col1",
      },
      {
        Header: "GitHub Handle",
        accessor: "col2",
      },
      {
        Header: "Score",
        accessor: "col3",
      },
    ],
    []
  );

  const data = useMemo(
    () => [
      {
        col1: "1",
        col2: {
          handle: "akr-25",
          dp: "https://avatars.githubusercontent.com/u/79211216?v=4",
        },
        col3: "312",
      },
      {
        col1: "2",
        col2: {
          handle: "akr-25",
          dp: "https://avatars.githubusercontent.com/u/79211216?v=4",
        },
        col3: "312",
      },
      {
        col1: "3",
        col2: {
          handle: "akr-25",
          dp: "https://avatars.githubusercontent.com/u/79211216?v=4",
        },
        col3: "312",
      },
      {
        col1: "4",
        col2: {
          handle: "akr-25",
          dp: "https://avatars.githubusercontent.com/u/79211216?v=4",
        },
        col3: "312",
      },
      {
        col1: "5",
        col2: {
          handle: "akr-25",
          dp: "https://avatars.githubusercontent.com/u/79211216?v=4",
        },
        col3: "312",
      },
      {
        col1: "6",
        col2: {
          handle: "akr-25",
          dp: "https://avatars.githubusercontent.com/u/79211216?v=4",
        },
        col3: "312",
      },
      {
        col1: "7",
        col2: {
          handle: "akr-25",
          dp: "https://avatars.githubusercontent.com/u/79211216?v=4",
        },
        col3: "312",
      },
      {
        col1: "8",
        col2: {
          handle: "akr-25",
          dp: "https://avatars.githubusercontent.com/u/79211216?v=4",
        },
        col3: "312",
      },
      {
        col1: "9",
        col2: {
          handle: "akr-25",
          dp: "https://avatars.githubusercontent.com/u/79211216?v=4",
        },
        col3: "312",
      },
      {
        col1: "10",
        col2: {
          handle: "akr-25",
          dp: "https://avatars.githubusercontent.com/u/79211216?v=4",
        },
        col3: "312",
      },
      {
        col1: "11",
        col2: {
          handle: "akr-25",
          dp: "https://avatars.githubusercontent.com/u/79211216?v=4",
        },
        col3: "312",
      },
    ],
    []
  );

  const tableInstance = useTable(
    { columns, data, initialState: { pageIndex: 0, pageSize: 5 } },
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    nextPage,
    previousPage,
    setPageSize,
    gotoPage,
    state: { pageIndex, pageSize },
  } = tableInstance;

  return (
    <>
      <Navigation hasShadow={true} />
      <Animatedbg/>
      <div style={style} id='bggg'>
        <div className='space'></div>
        <div className='title mb-5 p-3'>TEAM</div>
        <Container>
          <div className='tablee'>
            <BTable responsive borderless striped hover {...getTableProps()}>
              {/* <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th {...column.getHeaderProps()}>
                        {column.render("Header")}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead> */}
              <tbody {...getTableBodyProps()}>
                {/* {page.map((row, i) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        if (cell["column"]["id"] !== "col2")
                          return (
                            <td {...cell.getCellProps()}>
                              {/* {cell.render("Cell")}
                              {cell["value"]}
                            </td>
                          );
                        else
                          return (
                            <td {...cell.getCellProps()}>
                              <img id='dp' src={cell["value"]["dp"]} alt='' />
                              {cell["value"]["handle"]}
                            </td>
                          );
                      })}
                    </tr>
                  );
                })} */}
                <TeamCarousel/>
              </tbody>
            </BTable>
            {/* <div className='pagination'>
              <div className='pagination-left'>
                <span id='pageof'>
                  Page{" "}
                  <strong>
                    {pageIndex + 1} of {pageOptions.length}
                  </strong>{" "}
                </span>
                <div className='btn-grp'>
                  <button
                    onClick={() => gotoPage(0)}
                    disabled={!canPreviousPage}
                  >
                    {"First"}
                  </button>{" "}
                  <button
                    onClick={() => previousPage()}
                    disabled={!canPreviousPage}
                  >
                    {"Previous"}
                  </button>{" "}
                  <button onClick={() => nextPage()} disabled={!canNextPage}>
                    {"Next"}
                  </button>{" "}
                  <button
                    onClick={() => gotoPage(pageCount - 1)}
                    disabled={!canNextPage}
                  >
                    {"Last"}
                  </button>{" "}
                </div>
              </div>
              <div className='pagination-right'>
                <div className='input-group'>
                  <span className='input-group-text'>Go to Page: </span>
                  <input
                    type='text'
                    aria-label='First name'
                    className='form-control'
                    defaultValue={pageIndex + 1}
                    onChange={(e) => {
                      const page = e.target.value
                        ? Number(e.target.value) - 1
                        : 0;
                      gotoPage(page);
                    }}
                    style={{ width: "100px" }}
                  />
                </div>

                <Dropdown>
                  <Dropdown.Toggle
                    // variant='info'
                    style={{
                      backgroundColor: "#cce7ff",
                      marginLeft: "1em",
                      color: "#2e63a5",
                      borderColor: "#fff",
                    }}
                    id='dropdown-basic'
                  >
                    Items per page
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {[5, 10, 15, 20, 25].map((pageSize) => (
                      <Dropdown.Item
                        key={pageSize}
                        value={pageSize}
                        onClick={(e) => {
                          setPageSize(pageSize);
                        }}
                      >
                        Show {pageSize}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>

                {/* <div className='dropdown'>
                  <select
                    value={pageSize}
                    onChange={(e) => {
                      setPageSize(Number(e.target.value));
                    }}
                  >
                    {[5, 10, 15, 20, 25].map((pageSize) => (
                      <option key={pageSize} value={pageSize}>
                        Show {pageSize}
                      </option>
                    ))}
                  </select>
                </div> 
              </div>
            </div> */}
          </div>
        </Container>
        <div className='space'></div>
        <Footer/>
      </div>
      {/* <ScrollButton /> */}
    </>
  );
};

export default Team;
