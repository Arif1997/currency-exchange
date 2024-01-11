import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { User } from "./user";

export default function UserList() {
  const [users, setUsers] = useState<any[]>();
  const [selectedUser, setSelectedUser] = useState<any>();
  useEffect(() => {
    fetch("http://localhost:8000/user/")
      .then((response) => response.json())
      .then((data) => setUsers(data.Users));
  }, []);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Updated At</TableCell>
              <TableCell>View</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users &&
              users.map((user) => (
                <TableRow
                  key={user.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {user.id}
                  </TableCell>
                  <TableCell>{user.first_name}</TableCell>
                  <TableCell>{user.last_name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.created_at}</TableCell>
                  <TableCell>{user.updated_at}</TableCell>
                  <TableCell>
                    <button
                      style={{
                        borderRadius: "8px",
                        background: "blue",
                        color: "white",
                      }}
                      onClick={() => setSelectedUser(user)}
                    >
                      View
                    </button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>{" "}
      <User user={selectedUser} />
    </>
  );
}
