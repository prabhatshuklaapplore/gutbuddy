import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import style from "./CustomTable.module.css";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from "@mui/icons-material/Download";
import { CircularProgress, Grid, Pagination, Switch } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import moment from "moment";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";

const CustomTable = ({
  data,
  columns,
  pageNo,
  pageLimit,
  handleEdit,
  handleDelete,
  handleActive,
  handleDisplay,
  handlePageChange,
  pageNumber,
  pageCount,
  loading,
}) => {
  const handlePageChangePagination = (event, value) => {
    handlePageChange(value);
  };

  let page = pageNumber ? pageNumber : 1;
  let limit = pageLimit ? pageLimit : 20;
  let count = pageCount ? pageCount : 1;

  const getNestedProperty = (obj, path) => {
    const keys = path.split(".");
    let result = obj;

    for (const key of keys) {
      result = result[key];
      if (result === undefined) {
        return "";
      }
    }

    return result;
  };

  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "70vh",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <>
          <TableContainer component={Paper} className={style.main_div}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column, index) => (
                    <TableCell
                      key={index}
                      align={column.align}
                      sx={{ fontWeight: "bolder", minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((row, rowIndex) => (
                  <TableRow key={rowIndex}>
                    {columns.map((column, columnIndex) => (
                      <TableCell key={columnIndex} align={column.align}>
                        {column.id === "action" ? (
                          <>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-evenly",
                              }}
                            >
                              {row?.action?.edit && (
                                <div
                                  onClick={() => {
                                    // Handle edit action for this row
                                    handleEdit(row);
                                  }}
                                >
                                  <IconButton>
                                    <EditIcon
                                      style={{
                                        fontSize: "24px",
                                        borderRadius: "3px",
                                        cursor: "pointer",
                                        color: "green",
                                      }}
                                    />
                                  </IconButton>
                                </div>
                              )}
                              {row?.action?.delete && (
                                <div
                                  onClick={() => {
                                    // Handle delete action for this row
                                    handleDelete(row);
                                  }}
                                >
                                  <IconButton>
                                    <DeleteIcon
                                      style={{
                                        fontSize: "24px",
                                        borderRadius: "3px",
                                        cursor: "pointer",
                                        color: "red",
                                      }}
                                    />
                                  </IconButton>
                                </div>
                              )}
                            </div>
                          </>
                        ) : column.id === "S.No" ? (
                          ++rowIndex + (page - 1) * limit
                        ) : column.type === "IMAGE" ? (
                          <>
                            <img
                              src={getNestedProperty(row, column.id)}
                              alt="banner"
                              style={{ width: "150px", height: "100px" }}
                            />
                          </>
                        ) : column.type === "VIDEO" ? (
                          <>
                            <video width="150px" height="100px" controls>
                              <source
                                src="https://petrepublicdev.s3.ap-south-1.amazonaws.com/public/lddeylddeyvideoplayback-%28online-video-cutter.com%29-%281%29.mp4"
                                type="video/mp4"
                              />
                              VIDEO
                            </video>
                          </>
                        ) : column.label === "Active" ? (
                          <Switch
                            checked={row[column.id]}
                            onChange={(event) => {
                              const newActiveValue = event.target.checked;
                              handleActive(row?._id, newActiveValue, "active");
                            }}
                          />
                        ) : column.label === "Published" ? (
                          <Switch
                            checked={row[column.id]}
                            disabled={true}
                            onChange={(event) => {
                              const newActiveValue = event.target.checked;
                              handleActive(
                                row?._id,
                                newActiveValue,
                                "published"
                              );
                            }}
                          />
                        ) : column.label === "Attachment" ? (
                          <Link to={row.document}>
                            <IconButton>
                              <DownloadIcon
                                style={{
                                  fontSize: "24px",
                                  borderRadius: "3px",
                                  cursor: "pointer",
                                  color: "#111",
                                }}
                              />
                            </IconButton>
                          </Link>
                        ) : column.label === "Details" ? (
                          <div
                            onClick={() => {
                              handleDisplay(row);
                            }}
                          >
                            <VisibilityIcon
                              style={{
                                fontSize: "24px",
                                borderRadius: "3px",
                                cursor: "pointer",
                                color: "green",
                              }}
                            />
                          </div>
                        ) : column.label === "Vendor Email" ? (
                          row?.vendorId?.email
                        ) : column.id === "socialMediaLink" ? (
                          row?.socialMediaLink === true ? (
                            "YES"
                          ) : (
                            "NO"
                          )
                        ) : column.id === "ticketSystem" ? (
                          row?.ticketSystem === true ? (
                            "YES"
                          ) : (
                            "NO"
                          )
                        ) : column.id === "datetime" ? (
                          `${row?.startDate} - ${row?.startTime}`
                        ) : column.id === "enddatetime" ? (
                          `${row?.endDate} - ${row?.endTime}`
                        ) : column.id === "createdAt" ? (
                          moment.utc(row?.createdAt).format("YYYY-MM-DD")
                        ) : column.id === "startDate" ? (
                          moment.utc(row?.startDate).format("YYYY-MM-DD")
                        ) : column.id === "endDate" ? (
                          moment.utc(row?.endDate).format("YYYY-MM-DD")
                        ) : column.label === "Current Subscription" ? (
                          row?.activeSubscription ? (
                            row?.activeSubscription?.subscriptionTypeId?.name
                          ) : (
                            "InActive"
                          )
                        ) : column.label === "Subscription Expiry" ? (
                          row?.activeSubscription ? (
                            moment
                              .utc(row?.activeSubscription?.expiryDate)
                              .format("YYYY-MM-DD")
                          ) : (
                            "-"
                          )
                        ) : column.id === "vendorName" ? (
                          row?.vendorId?.fullName
                        ) : column.id === "addonName" ? (
                          row?.addon?.name
                        ) : (
                          getNestedProperty(row, column.id)
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Grid justifyContent={"center"} container pt={3}>
            <Pagination
              align="center"
              count={count}
              page={page}
              onChange={handlePageChangePagination}
            />
          </Grid>
        </>
      )}
    </>
  );
};

export default CustomTable;
