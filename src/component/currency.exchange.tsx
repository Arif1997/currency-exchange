import { useEffect, useState } from "react";
import { CurrencyData } from "../../../postman-like-app/src/interfaces";
import "../css/currency.exchange.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Input, InputAdornment } from "@mui/material";
import { FaTelegramPlane } from "react-icons/fa";
import { IoMdSwap } from "react-icons/io";
import { BASE_URL } from "../ngrokurl";

const Currency = (props: any) => {
  let iconStyles = {
    color: "darkblue",
    fontSize: "1.5em",
    margin: "auto",
    top: "15px",
    position: "relative",
  };
  let iconStylesForSendIcon = {
    color: "blue",
    fontSize: "1.6em",
    margin: "auto",
  };
  const [currencies_data, setcurrencies_data] = useState<Array<CurrencyData>>(
    []
  );
  const [from_currency, setFromCurrency] = useState({
    id: NaN,
    currency_code: "",
    symbol: "",
  });
  const [to_currency, setToCurrency] = useState({
    id: NaN,
    currency_code: "",
    symbol: "",
  });
  const [rate, setRate] = useState<number>(0);
  const [from_amount, setFromAmount] = useState<number>(1);
  const [to_amount, setToAmount] = useState<number>(0);
  const [fee, setFee] = useState<number>(0);
  const [payment_method, setPaymentMethod] = useState("");
  const [total, setTotal] = useState<number>(from_amount);

  var navigate = useNavigate();

  useEffect(() => {
    fetch(`${BASE_URL}currency`)
      .then((response) => response.json())
      .then((data) => setcurrencies_data(data.currencies));
  }, []);

  useEffect(() => {
    setFee((from_amount / 100) * 5);
    setTotal(parseFloat(`${from_amount}`) + parseFloat(`${fee}`));
  }, [from_amount]);
  const handleFromSelect = async (e: any) => {
    const { value } = e.target;
    setFromCurrency({
      id: currencies_data[value].id,
      currency_code: currencies_data[value].currency_code,
      symbol: currencies_data[value].symbol,
    });
    if (Number(currencies_data[value].id) && to_currency.id) {
      const response = await axios.get(
        `${BASE_URL}rate/${Number(currencies_data[value].id)}/${to_currency.id}`
      );
      setRate(response.data.rate);
    }
  };

  const handleToSelect = async (e: any) => {
    const { value } = e.target;

    setToCurrency({
      id: currencies_data[value].id,
      currency_code: currencies_data[value].currency_code,
      symbol: currencies_data[value].symbol,
    });
    if (from_currency.id && Number(currencies_data[value].id)) {
      const response = await axios.get(
        `${BASE_URL}rate/${from_currency.id}/${Number(
          currencies_data[value].id
        )}`
      );
      setRate(response.data.rate);
      setToAmount(response.data.rate * from_amount);
    }
  };

  const handleFromAmount = (event: { target: { value: any } }) => {
    const newValue = event.target.value;
    setFromAmount(newValue);

    // Perform conversion logic here and update 'toCurrency'
    const convertedValue = newValue * rate; // Replace with your conversion logic
    setToAmount(convertedValue);
  };

  const handleToAmount = (event: { target: { value: any } }) => {
    const newValue = event.target.value;
    setToAmount(newValue);

    // Perform conversion logic here and update 'toCurrency'
    const convertedValue = newValue / rate; // Replace with your conversion logic
    setFromAmount(convertedValue);
  };

  return (
    <>
      <div className="currency__exchange">
        {props.isSendMoneyOnline === true ? (
          <div
            style={{ color: "#686868", fontSize: "16px", lineHeight: "0.5" }}
          >
            <FaTelegramPlane style={iconStylesForSendIcon} /> Send money online
          </div>
        ) : (
          <div
            style={{ color: "#686868", fontSize: "16px", lineHeight: "0.5" }}
          >
            <FaTelegramPlane style={iconStylesForSendIcon} /> Send money in
            store
          </div>
        )}
        <p style={{ color: "#686868", fontSize: "16px", marginLeft: "20px" }}>
          Calculate the rate
        </p>
        <div className="rate__converter">
          <div>
            <p style={{ textAlign: "left", margin: "3px" }}>From</p>
            <div className="converter__inputs">
              <img
                src="/images/usa_flag.png"
                alt="Flag"
                style={{ width: "30px", height: "30px", margin: "auto 10px" }}
              />
              <select
                onChange={handleFromSelect}
                style={{ border: "none", borderRight: "1px solid darkgray" }}
              >
                {currencies_data.map((currency: any, index: number) => (
                  <option key={currency.id} value={index}>
                    {currency.currency_code}
                  </option>
                ))}
              </select>
              <Input
                id="standard-adornment-amount"
                disableUnderline
                sx={{
                  height: "30px",
                  width: "180px",
                  borderRadius: "5px",
                  border: "none",
                  "&fieldset": { border: "none" },
                }}
                size="small"
                startAdornment={
                  <InputAdornment position="start">
                    {from_currency.symbol}
                  </InputAdornment>
                }
                value={from_amount}
                onChange={handleFromAmount}
                type="number"
              />
            </div>
          </div>
          <IoMdSwap style={iconStyles} />
          <div>
            <p style={{ textAlign: "right", margin: "3px" }}>To</p>
            <div className="converter__inputs">
              <Input
                id="standard-adornment-amount"
                disableUnderline
                sx={{
                  height: "30px",
                  width: "180px",
                  borderRadius: "5px",
                  border: "none",
                }}
                startAdornment={
                  <InputAdornment position="start">
                    {to_currency.symbol}
                  </InputAdornment>
                }
                value={to_amount}
                onChange={handleToAmount}
                type="number"
              />
              <select
                onChange={handleToSelect}
                style={{ border: "none", borderLeft: "1px solid darkgray" }}
              >
                {currencies_data.map((currency: any, index: number) => (
                  <option key={currency.id} value={index}>
                    {currency.currency_code}
                  </option>
                ))}
              </select>
              <img
                src="/images/usa_flag.png"
                alt="Flag"
                style={{ width: "30px", height: "30px", margin: "auto 10px" }}
              />
            </div>
          </div>
        </div>
        {props.isSendMoneyOnline && (
          <div>
            <p style={{ color: "darkgray", marginTop: "25px" }}>
              Select your payment option
            </p>
            <div>
              <div className="debit__card">
                <button onClick={() => setPaymentMethod("debit_card")}>
                  <input
                    type="radio"
                    value={"debit_card"}
                    name="payment_option"
                  />
                  <div>
                    <p>Debit card</p>
                    <br />
                    <img src="/images/debit__card.png" alt="debit card" />
                  </div>
                </button>
                <button onClick={() => setPaymentMethod("credit_card")}>
                  <input
                    type="radio"
                    value={"credit_card"}
                    name="payment_option"
                  />
                  <div>
                    <p>Credit card</p>
                    <br />
                    <img src="/images/debit__card.png" alt="debit card" />
                  </div>
                </button>
                <button onClick={() => setPaymentMethod("paypal")}>
                  <input type="radio" value={"paypal"} name="payment_option" />
                  <div>
                    <p>PayPal</p>
                    <br />
                    <img src="/images/paypal.png" alt="debit card" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}
        {props.isSendMoneyOnline ? (
          <div>
            <p style={{ textAlign: "left", lineHeight: "0.5" }}>
              Fees: {fee} {from_currency.currency_code}
            </p>
            <p style={{ textAlign: "left", lineHeight: "0.5" }}>
              Total cost: {total} {from_currency.currency_code}
            </p>
          </div>
        ) : (
          <p style={{ textAlign: "left", marginLeft: "40px" }}>
            If you wish to transfer money through our office. Please refer to
            below addresses
          </p>
        )}

        {props.isSendMoneyOnline && (
          <button
            style={{ backgroundColor: "blue", color: "white" }}
            onClick={() => {
              navigate("/transfer", {
                state: {
                  from_currency,
                  to_currency,
                  from_amount,
                  to_amount,
                  rate,
                  payment_method,
                  fee,
                  total,
                },
              });
            }}
          >
            Next
          </button>
        )}
      </div>
    </>
  );
};

export default Currency;
