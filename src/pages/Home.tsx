import Currency from "../component/currency.exchange";
import { FaTelegramPlane } from "react-icons/fa";
import "../css/home.css";
import { useState } from "react";
import StoreDetails from "../component/store.details";

const Home = () => {
  const [isSendMoneyOnline, setIsMoneyOnline] = useState(true);

  let iconStyles = { color: "blue", fontSize: "1.5em" };
  return (
    <>
      <div className="home__page"></div>
      <section className="send__money__option">
        <button
          className="send__money__online"
          onClick={() => setIsMoneyOnline(true)}
        >
          <p>Send money</p>
          <FaTelegramPlane style={iconStyles} /> <strong>Online</strong>
        </button>
        <button
          className="send__money__in__store"
          onClick={() => setIsMoneyOnline(false)}
        >
          <p>Send money</p>
          <img src="/images/location.png" alt="location icon" />
          <strong>In Store</strong>
        </button>
      </section>

      <section>
        <Currency isSendMoneyOnline={isSendMoneyOnline} />
      </section>
      {!isSendMoneyOnline && <StoreDetails />}
    </>
  );
};

export default Home;
