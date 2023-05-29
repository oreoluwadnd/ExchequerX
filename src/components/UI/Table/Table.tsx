import React, { Fragment } from "react";
import "./Table.css";
import { RiNetflixFill } from "react-icons/ri";

interface TableProps {
  tableData: object[];
  tableHeader: string[];
}

const Table: React.FC<TableProps> = ({ tableData, tableHeader }) => {
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
            <tr className="tableDataRow ">
              {item.refrenceId && (
                <td className="tableData hideTable">
                  <div>{item.refrenceId}</div>
                </td>
              )}

              {item.icon && item.description && item.info && (
                <td className="tableData ">
                  <div className="tableDataDescription">
                    <div
                      className="tableDataDescriptionLogo"
                      style={{
                        backgroundColor: item.color,
                      }}
                    >
                      {React.createElement(item.icon, {
                        size: "30",
                      })}
                    </div>
                    <div className="tableDataDescriptionText">
                      <div className="tableDataDescriptionDetails">
                        {item.description}
                      </div>
                      <span className="tableDataDescriptionInfo">
                        {item.info}
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

              {item.date && item.time && (
                <td className="tableData hideTable">
                  <div className="tableDataDate">
                    <div>{item.date}</div>
                    <span className="tableDataDateTime ">{item.time}</span>
                  </div>
                </td>
              )}
              {item.medium && (
                <td className="tableData hideTable">
                  <div className="tableDataMedium">{item.medium}</div>
                </td>
              )}
              {item.status && (
                <td className="tableData hideTable">
                  <div
                    className={`tableDataStatus ${
                      item.status === "SUCCESS"
                        ? "backGroundGreen"
                        : item.status === "FAILED"
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
