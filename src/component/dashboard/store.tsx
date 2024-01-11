import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Grid, styled } from "@mui/material";
import axios from "axios";
import "../../css/dashboard/store.css";
import { useEffect, useState } from "react";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Store() {
  const [selectedGovId, setSelectedGovId] = useState("");
  const [offices, setOffices] = useState<any>();

  useEffect(() => {
    const getOffices = async () => {
      const response = await axios.get("http://localhost:8000/office/");
      setOffices(response.data.offices);
    };
    getOffices();
  }, []);
  console.log(offices);

  const handleGovIdChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGovId(event.target.value);
  };
  const storeCreator = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const admin_data = {
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
      password: data.get("password"),
      gov_id_type: selectedGovId,
      gov_id_number: data.get("gov_id_number"),
      isActive: false,
      admin_id: "4b31e891-1874-4a49-873b-bfcf4091161e",
      secret_key: data.get("secret_key"),
    };

    const response = await axios.post(
      "http://localhost:8000/office/create",
      admin_data
    );
    console.log(response);
    const address_data = {
      add_holder_type: "store",
      door_number: data.get("door_number"),
      apartment: data.get("apartment"),
      street: data.get("street"),
      country: data.get("country"),
      city: data.get("city"),
      postal_code: data.get("postal_code"),
    };
    const address = await axios.post(
      "http://localhost:8000/office/address/create",
      address_data
    );
    console.log(address);
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <form onSubmit={storeCreator} id="create_store_form">
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Item>
                <input type="text" placeholder="Name" name="name" />
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
                <select
                  name="gov_id_type"
                  onChange={handleGovIdChange}
                  value={selectedGovId}
                >
                  <option value={""}>Gov ID</option>
                  <option value={"passport"}>Passport</option>
                  <option value={"tazkira"}>Tazkira</option>
                  <option value={"drivig licience"}>Driving Licence</option>
                  <option value={"voter id"}>Voter ID</option>
                  <option value={"adhaar"}>Adhaar</option>
                </select>
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <input type="text" placeholder="ID No." name="gov_id_number" />
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <input type="text" placeholder="Door No." name="door_number" />
              </Item>
            </Grid>

            <Grid item xs={3}>
              <Item>
                <input type="text" placeholder="Apartment" name="apartment" />
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <input type="text" placeholder="Street" name="street" />
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <input type="text" placeholder="City" name="city" />
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <input type="text" placeholder="Country" name="country" />
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <input
                  type="number"
                  placeholder="Postal Code"
                  name="postal_code"
                />
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
      {offices && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>
                <TableCell>Manager Name</TableCell>

                <TableCell>Email</TableCell>
                <TableCell>Telephone</TableCell>
                <TableCell>Created At</TableCell>
                <TableCell>Updated At</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {offices.map((office: any) => (
                <TableRow
                  key={office.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {office.id}
                  </TableCell>
                  <TableCell>{office.name}</TableCell>

                  <TableCell>{office.email}</TableCell>
                  <TableCell>{office.phone}</TableCell>
                  <TableCell>{office.created_at}</TableCell>
                  <TableCell>{office.updated_at}</TableCell>
                  <TableCell>
                    {office.isActive ? "Active" : "Deactive"}
                  </TableCell>
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
      )}
    </div>
  );
}
