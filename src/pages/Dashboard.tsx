import { useEffect } from "react";
import ResponsiveDrawer from "../component/drawer";

export const Dashboard = () => {
  useEffect(() => {
    const footer = document.querySelector<HTMLElement>("#footer");
    if (footer) {
      footer.style.display = "none";
    }
  }, []);
  return (
    <div
      style={{
        marginTop: "70px",
        height: "100vh",
        display: "flex",
      }}
    >
      <ResponsiveDrawer />
    </div>
  );
};
