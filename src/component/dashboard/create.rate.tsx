import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { CurrencyData } from "../../interfaces";
import { IoMdSwap } from "react-icons/io";

export const CreatRate = () => {
  let iconStyles = {
    color: "darkblue",
    fontSize: "1.5em",
    margin: "auto",
    top: "15px",
    position: "relative",
  };

  const [currencies_data, setcurrencies_data] = useState<Array<CurrencyData>>(
    []
  );
  useEffect(() => {
    fetch("http://localhost:8000/currency")
      .then((response) => response.json())
      .then((data) => {
        setcurrencies_data(data.currencies);

        setFromCurrency({
          id: data.currencies[0].id,
          currency_code: data.currencies[0].currency_code,
          symbol: data.currencies[0].symbol,
        });
        setToCurrency({
          id: data.currencies[0].id,
          currency_code: data.currencies[0].currency_code,
          symbol: data.currencies[0].symbol,
        });
      });
  }, []);
  const [rate, setRate] = useState<number>(0);
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

  const handleFromSelect = async (e: any) => {
    const { value } = e.target;
    setFromCurrency({
      id: currencies_data[value].id,
      currency_code: currencies_data[value].currency_code,
      symbol: currencies_data[value].symbol,
    });
  };

  const handleToSelect = async (e: any) => {
    const { value } = e.target;

    setToCurrency({
      id: currencies_data[value].id,
      currency_code: currencies_data[value].currency_code,
      symbol: currencies_data[value].symbol,
    });
  };

  const createRate = async () => {
    const response = await axios.post(`http://localhost:8000/rate/create`, {
      from_currency,
      to_currency,
      rate,
    });
    console.log(response);
  };
  return (
    <>
      <div className="rate__converter">
        <div>
          <p style={{ textAlign: "left", margin: "3px" }}>From</p>
          <div
            style={{
              border: "1px solid darkgray",
              borderRadius: "10px",
              alignItems: "center",
              display: "flex",
              margin: "auto 50px auto auto",
            }}
          >
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
          </div>
        </div>

        <div>
          <p style={{ textAlign: "right", margin: "3px" }}>To</p>
          <div
            style={{
              border: "1px solid darkgray",
              borderRadius: "10px",
              alignItems: "center",
              display: "flex",
            }}
          >
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
        <IoMdSwap style={iconStyles} />
        <input
          type="number"
          value={rate}
          style={{ width: "60px", height: "40px", marginTop: "15px" }}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setRate(parseFloat(e.target.value))
          }
        ></input>
        <button
          style={{ color: "white", background: "blue", margin: "10px auto" }}
          onClick={createRate}
        >
          Create
        </button>
      </div>
    </>
  );
};
