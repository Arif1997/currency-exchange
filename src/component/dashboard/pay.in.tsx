import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function PayIn() {
  return (
    <div>
      <div>
        <button>Review</button>
        <button>Confirm</button>
        <button>Reject</button>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Transaction ID</TableCell>
              <TableCell>Origin Cur</TableCell>
              <TableCell>Payment Cur</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                425265634
              </TableCell>
              <TableCell>AUD</TableCell>
              <TableCell>AFN</TableCell>
              <TableCell>500000</TableCell>
              <TableCell>Paid</TableCell>
            </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                234543563
              </TableCell>
              <TableCell>USD</TableCell>
              <TableCell>EUR</TableCell>
              <TableCell>800000</TableCell>
              <TableCell>Pending</TableCell>
            </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                234543563
              </TableCell>
              <TableCell>EUR</TableCell>
              <TableCell>INR</TableCell>
              <TableCell>100000</TableCell>
              <TableCell>Cancelled</TableCell>
            </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                425265634
              </TableCell>
              <TableCell>AUD</TableCell>
              <TableCell>AFN</TableCell>
              <TableCell>500000</TableCell>
              <TableCell>Paid</TableCell>
            </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                234543563
              </TableCell>
              <TableCell>USD</TableCell>
              <TableCell>EUR</TableCell>
              <TableCell>800000</TableCell>
              <TableCell>Pending</TableCell>
            </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                234543563
              </TableCell>
              <TableCell>EUR</TableCell>
              <TableCell>INR</TableCell>
              <TableCell>100000</TableCell>
              <TableCell>Cancelled</TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                425265634
              </TableCell>
              <TableCell>AUD</TableCell>
              <TableCell>AFN</TableCell>
              <TableCell>500000</TableCell>
              <TableCell>Paid</TableCell>
            </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                234543563
              </TableCell>
              <TableCell>USD</TableCell>
              <TableCell>EUR</TableCell>
              <TableCell>800000</TableCell>
              <TableCell>Pending</TableCell>
            </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                234543563
              </TableCell>
              <TableCell>EUR</TableCell>
              <TableCell>INR</TableCell>
              <TableCell>100000</TableCell>
              <TableCell>Cancelled</TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                425265634
              </TableCell>
              <TableCell>AUD</TableCell>
              <TableCell>AFN</TableCell>
              <TableCell>500000</TableCell>
              <TableCell>Paid</TableCell>
            </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                234543563
              </TableCell>
              <TableCell>USD</TableCell>
              <TableCell>EUR</TableCell>
              <TableCell>800000</TableCell>
              <TableCell>Pending</TableCell>
            </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                234543563
              </TableCell>
              <TableCell>EUR</TableCell>
              <TableCell>INR</TableCell>
              <TableCell>100000</TableCell>
              <TableCell>Cancelled</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
