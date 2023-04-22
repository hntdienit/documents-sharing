import React, { useState } from "react";
import { Link } from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";

import images from "../../assets/images";

const Table = ({ title, data }) => {
  const [sl, setSl] = useState(1);

  const tang = (value) => {
    setSl(value + 1);
  };
  const giam = (value) => {
    setSl(value - 1);
  };

  return (
    <>
      <div className="cart-table table-responsive mb--60">
        <table className="table">
          <thead>
            <tr>
              {title.map((t) => (
                <th key={t.name} className={t?.class}>
                  {t?.name}
                </th>
              ))}
              <th className="pro-remove">Remove</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr key={d?.id}>
                {title.map((t) => (
                  <td key={t.name} className={t.class}>
                    {t.name === "Image" ? (
                      <a href="#">
                        <img src={images.course_online_01} alt="Product" />
                      </a>
                    ) : t.name !== "Quantity" ? (
                      <span>$48.00</span>
                    ) : (
                      <div className="pro-qty">
                        <span
                          className="dec qtybtn"
                          onClick={() => {
                            giam(sl);
                          }}
                        >
                          -
                        </span>
                        <input type="text" value={sl} readOnly />
                        <span
                          className="inc qtybtn"
                          onClick={() => {
                            tang(sl);
                          }}
                        >
                          +
                        </span>
                      </div>
                    )}
                  </td>
                ))}
                <td className="pro-remove">
                  <a href="#">
                    <ClearIcon />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
