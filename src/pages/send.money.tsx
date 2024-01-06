import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { UserData } from "../interfaces";
import { IoMdSwap } from "react-icons/io";
import "../css/send.money.css";

const SendMoney = () => {
  const userString: string | null = localStorage.getItem("user");
  let user_data: UserData = userString && JSON.parse(userString);
  const [formData, setFormData] = useState({
    sender_name: `${user_data.first_name} ${user_data.last_name}
    }`,
    receiver_name: "Jawad",
    email: `${user_data.email}`,
    receiver_id: "O2448070",
    from_amount: 5000,
    to_amount: 5000,
    from_currency: "USD",
    to_currency: "AFN",
    rate: 47.5,
    payment_method: "card",
  });
  const location = useLocation();

  useEffect(() => {
    if (location)
      setFormData((prev) => ({
        ...prev,
        from_amount: location?.state?.from_amount,
        to_amount: location?.state?.to_amount,
        from_currency: location?.state?.from_currency.currency_code,
        to_currency: location?.state?.to_currency.currency_code,
        rate: location?.state?.rate,
        payment_method: location?.state?.payment_method,
        fee: location?.state?.fee,
        total: location?.state?.total,
      }));
  }, []);

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const payment = async () => {
      const response = await axios.post(
        "http://localhost:8000/transaction/payment",
        formData
      );
      const url = response.data.url;
      if (url) {
        window.location.replace(url); // Redirect the user to Stripe Checkout
      } else {
        // Handle the case where URL is not available
        console.error("Error: URL not received from server");
      }
    };
    await payment();
    const response = await axios.post(
      "http://localhost:8000/transaction/receipt",
      formData
    );
    console.log(response);
  };

  return (
    <form onSubmit={handleSubmit} className="send_money_page">
      <p style={{ fontSize: "large" }}>
        Please Provide the details of the receiver!!!
      </p>
      <TextField
        id="filled-basic"
        label="Receiver Full Name"
        variant="filled"
        name="receiver_name"
        type="text"
        sx={{ m: 1 }}
        className="custom__text__fields"
        onChange={handleInputChange}
      />
      <TextField
        id="filled-basic"
        label="Receiver ID"
        variant="filled"
        name="receiver_id"
        type="text"
        sx={{ m: 1 }}
        onChange={handleInputChange}
        className="custom__text__fields"
      />
      <TextField
        id="outlined-basic"
        label="Phone"
        variant="filled"
        name="receiver_phone"
        type="number"
        sx={{ m: 1 }}
        className="custom__text__fields"
        onChange={handleInputChange}
      />
      <TextField
        id="filled-basic"
        label="Address"
        variant="filled"
        name="receiver_address"
        type="text"
        sx={{ m: 1 }}
        className="custom__text__fields"
        onChange={handleInputChange}
      />
      <div
        style={{
          display: "flex",
          margin: "30px auto",
          border: "1px solid white",
          borderRadius: "8px",
          padding: "10px",
        }}
      >
        <span style={{ marginRight: "20px" }}>
          Transfer : {formData.from_amount} {formData.from_currency}
        </span>
        <IoMdSwap />
        <span style={{ marginLeft: "20px" }}>
          Collect: {formData.to_amount} {formData.to_currency}
        </span>
      </div>
      <Button variant="contained" color="primary" type="submit">
        Transfer
      </Button>
    </form>
  );
};

export default SendMoney;
