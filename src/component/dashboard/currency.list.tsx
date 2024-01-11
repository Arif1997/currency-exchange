import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";

export default function Currency() {
  const [currencies, setCurrencies] = useState<any[]>();
  useEffect(() => {
    fetch("http://localhost:8000/currency/")
      .then((response) => response.json())
      .then((data) => setCurrencies(data.currencies));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Country</TableCell>
            <TableCell>Code</TableCell>
            <TableCell>Symbol</TableCell>
            <TableCell>Decimal Places</TableCell>
            <TableCell>Created At</TableCell>
            <TableCell>Updated At</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currencies &&
            currencies.map((currency) => (
              <TableRow
                key={currency.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {currency.id}
                </TableCell>
                <TableCell>{currency.currency_name}</TableCell>
                <TableCell>{currency.country}</TableCell>
                <TableCell>{currency.currency_code}</TableCell>
                <TableCell>{currency.symbol}</TableCell>
                <TableCell>{currency.decimal_places}</TableCell>
                <TableCell>{currency.created_at}</TableCell>
                <TableCell>{currency.updated_at}</TableCell>
                <TableCell>
                  <button style={{ background: "blue", color: "white" }}>
                    View
                  </button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
