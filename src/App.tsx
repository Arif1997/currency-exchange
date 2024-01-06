import "./App.css";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SendMoney from "./pages/send.money";
import PaymentSuccess from "./component/payment.success";
import PaymentFail from "./component/payment.fail";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { Footer } from "./component/footer";
import Header from "./component/header";
import { validateToken } from "./services/token.validation";

// Custom PrivateRoute component for authenticated routes
const PrivateRoute = () => {
  const token = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")!).token
    : null;

  // Validate the token
  const isAuthenticated = token ? validateToken(token) : false;
  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" />;
};
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/transfer" element={<PrivateRoute />}>
          <Route path="/transfer" element={<SendMoney />} />
        </Route>
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payment-fail" element={<PaymentFail />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
