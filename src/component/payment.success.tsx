import axios from "axios";
import { useSearchParams } from "react-router-dom";

const PaymentSuccess = () => {
  const [param] = useSearchParams();
  let CHECKOUT_SESSION_ID = param.get("session_id");

  const printPaymentDetails = async () => {
    const response = await axios.get(
      `http://localhost:8000/transaction/payment/details?session_id=${CHECKOUT_SESSION_ID}`
    );
    console.log(response);
  };
  return (
    <>
      Payment Confirmed!!!
      <button onClick={printPaymentDetails}>Payment Details</button>
    </>
  );
};

export default PaymentSuccess;
