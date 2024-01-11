import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import axios from "axios";
import "../../css/dashboard/admin.css";
import { useEffect, useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const Admin = () => {
  const adminCreator = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const admin_data = {
      first_name: data.get("first_name"),
      last_name: data.get("last_name"),
      email: data.get("email"),
      phone: data.get("phone"),
      password: data.get("password"),
      secret_key: data.get("secret_key"),
    };

    const response = await axios.post(
      "http://localhost:8000/admin/create",
      admin_data
    );
    console.log(response);
  };
  const [admins, setAdmins] = useState<any[]>();
  useEffect(() => {
    fetch("http://localhost:8000/admin/")
      .then((response) => response.json())
      .then((data) => setAdmins(data.admins));
  }, []);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <form onSubmit={adminCreator} id="create_admin_form">
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Item>
                <input type="text" placeholder="First Name" name="first_name" />
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <input type="text" placeholder="Last Name" name="last_name" />
              </Item>
            </Grid>

            <Grid item xs={3}>
              <Item>
                <input type="text" placeholder="Email" name="email" />
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <input type="number" placeholder="Phone" name="phone" />
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <input
                  type="text"
                  placeholder="Initial Password"
                  name="password"
                />
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <input type="text" placeholder="Secret Key" name="secret_key" />
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <select>
                  <option>Gov ID</option>
                  <option>Passport</option>
                  <option>Tazkira</option>
                  <option>Driving Licence</option>
                  <option>Voter ID</option>
                  <option>Adhaar</option>
                </select>
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <input type="text" placeholder="ID No." />
              </Item>
            </Grid>
          </Grid>
          <button
            type="submit"
            style={{ background: "blue", margin: "40px", color: "white" }}
          >
            Create
          </button>
        </form>
      </Box>
      <Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {admins &&
                admins.map((admin: any) => (
                  <TableRow
                    key={admin.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {admin.id}
                    </TableCell>
                    <TableCell>{admin.first_name}</TableCell>
                    <TableCell>{admin.last_name}</TableCell>
                    <TableCell>{admin.email}</TableCell>
                    <TableCell>{admin.phone}</TableCell>
                    <TableCell>
                      <button style={{ background: "blue", color: "white" }}>
                        Edit
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};
