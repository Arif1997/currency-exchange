import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { useState, useEffect, ChangeEvent } from "react";
import { CreatRate } from "./create.rate";
import axios from "axios";

export const ExchangeRates = () => {
  const [exchange_rates, setExchangeRates] = useState<any[]>();
  const [updatedRate, setUpdatedRate] = useState<number>(0);

  useEffect(() => {
    fetch("http://localhost:8000/rate/")
      .then((response) => response.json())
      .then((data) => setExchangeRates(data.exchange_rates));
  }, []);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setUpdatedRate(parseFloat(value));
  };

  const handleUpdateRate = async (exchange_rate: any) => {
    if (updatedRate !== 0) {
      const response = await axios.post(`http://localhost:8000/rate/create`, {
        from_currency: exchange_rate?.from_currency.currency_code,
        to_currency: exchange_rate?.to_currency.currency_code,
        rate: updatedRate,
      });
      console.log(response);
    }
  };

  return (
    <>
      <CreatRate />
      <TableContainer component={Paper} style={{ marginTop: "30px" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>From</TableCell>
              <TableCell>To</TableCell>
              <TableCell>Rate</TableCell>
              <TableCell>Updated At</TableCell>
              <TableCell>View</TableCell>
              <TableCell>Change Rate</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {exchange_rates &&
              exchange_rates.map((exchange_rate) => (
                <TableRow
                  key={exchange_rate.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {exchange_rate.id}
                  </TableCell>
                  <TableCell>
                    {exchange_rate.from_currency.currency_code}{" "}
                    {exchange_rate.from_currency.symbol}
                  </TableCell>
                  <TableCell>
                    {exchange_rate.to_currency.currency_code}{" "}
                    {exchange_rate.to_currency.symbol}
                  </TableCell>
                  <TableCell>{exchange_rate.rate}</TableCell>
                  <TableCell>{exchange_rate.last_updated}</TableCell>
                  <TableCell>
                    <button
                      style={{
                        borderRadius: "8px",
                        background: "blue",
                        color: "white",
                      }}
                      onClick={() => console.log(exchange_rate)}
                    >
                      View
                    </button>
                  </TableCell>
                  <TableCell>
                    <input
                      type="number"
                      value={updatedRate}
                      style={{ width: "70px", marginRight: "15px" }}
                      onChange={handleInputChange}
                    />
                    <button
                      style={{
                        borderRadius: "8px",
                        background: "blue",
                        color: "white",
                      }}
                      onClick={() => handleUpdateRate(exchange_rate)}
                    >
                      Update
                    </button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>{" "}
    </>
  );
};
