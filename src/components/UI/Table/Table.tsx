import React, { Fragment } from "react";
import "./Table.css";
// import { FaPersonArrowUpFromLine } from "react-icons/fa";
import { MdPersonRemove } from "react-icons/md";

interface TableProps {
  tableData: object[];
  tableHeader: string[];
}

const Table: React.FC<TableProps> = ({ tableData, tableHeader }) => {
  function convertDateToTime(DateTime: Date): string {
    // console.log(mongoDate);
    const currentTime = new Date(DateTime);
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    const timeString = `${padZero(hours)}:${padZero(minutes)}:${padZero(
      seconds
    )}`;

    function padZero(value: number): string {
      return value.toString().padStart(2, "0");
    }
    return timeString;
  }

  function convertMongoDBDateToDateMonthYear(mongoDate: Date): string {
    console.log(mongoDate);
    const convertToDate = new Date(mongoDate);
    const options = { month: "long", day: "numeric", year: "numeric" };
    const dateString = convertToDate.toLocaleDateString(undefined, options);
    return dateString;
  }

  return (
    <table className="tableWrapper">
      <thead>
        <tr className="tableHeadRow hideTable">
          {tableHeader.map((item: any, index: number) => {
            return (
              <th className="tableHead" key={index}>
                {item}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {tableData.map((item: any, index: number) => {
          return (
            <tr className="tableDataRow " key={index}>
              {item._id && (
                <td className="tableData hideTable">
                  <div>{item._id}</div>
                </td>
              )}

              {item.transactionType && (
                <td className="tableData">
                  <div className="tableDataDescription">
                    <div
                      className="tableDataDescriptionLogo"
                      style={{
                        backgroundColor: item.color,
                      }}
                    >
                      <MdPersonRemove size={30} />
                    </div>

                    <div className="tableDataDescriptionText">
                      <div className="tableDataDescriptionDetails">
                        {item.transactionType}
                      </div>
                      <span className="tableDataDescriptionInfo">
                        {item.receiver.email}
                      </span>
                    </div>
                  </div>
                </td>
              )}

              {item.amount && (
                <td className="tableData">
                  <div className="tableDataAmount">
                    <span>{item.amount}</span>
                  </div>
                </td>
              )}

              {item.date && item.date && (
                <td className="tableData ">
                  <div className="tableDataDate">
                    <div>{convertMongoDBDateToDateMonthYear(item.date)}</div>
                    <span className="tableDataDateTime ">
                      {convertDateToTime(item.date)}
                    </span>
                  </div>
                </td>
              )}
              {item.balance && (
                <td className="tableData hideTable">
                  <div className="tableDataMedium">{item.balance}</div>
                </td>
              )}
              {item.status && (
                <td className="tableData hideTable">
                  <div
                    className={`tableDataStatus ${
                      item.status === "success"
                        ? "backGroundGreen"
                        : item.status === "failed"
                        ? "backGroundRed"
                        : "backGroundYellow"
                    }`}
                  >
                    {item.status}
                  </div>
                </td>
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
function padZero(hours: number) {
  throw new Error("Function not implemented.");
}
