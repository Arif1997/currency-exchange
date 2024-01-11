import { ChangeEvent, useState } from "react";
import "../../css/dashboard/user.css";
import axios from "axios";
export const User = (props: any) => {
  const [updatedUserData, setUpdatedUserData] = useState(
    props.user ? props.user : undefined
  );

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedUserData({
      ...updatedUserData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault;
    try {
      await axios.post(
        `http://localhost:8000/user/update/${updatedUserData.id}`,
        updatedUserData
      );
      alert("User data updated successfully");
    } catch (error) {
      console.log(error);
    }
  };
  console.log(props.user);

  return (
    <>
      {props.user && (
        <div
          style={{
            border: "1px solid lightgrey",
            borderRadius: "15px",
            margin: "20px 0px",
            textAlign: "left",
            padding: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src="/images/my_photo.JPG"
              alt="profile picture"
              width={"60px"}
              style={{
                borderRadius: "50%",
                margin: "10px",
              }}
            />
            {props?.user.first_name} {props?.user.last_name}
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ padding: "20px 10px", minWidth: "400px" }}>
              <div>Username: {props?.user.username}</div>
              <div>Email: {props?.user.email} </div>
              <div>Phone: {props?.user.phone}</div>
              <div>Created At: {props?.user.created_at}</div>
              <div>Updated At: {props?.user.updated_at}</div>
              <div>Status: {props?.user.isActive ? "Active" : "Deactive"}</div>
            </div>
            <div id="user__management__btn">
              <button>Edit</button>
              <button>Activate</button>
              <button>View Transactions</button>
              <button>Deactivate</button>
            </div>
          </div>
          {updatedUserData && (
            <form className="user__update__section">
              <div style={{ display: "flex", margin: "10px auto" }}>
                <label> First name: </label>
                <input
                  type="text "
                  name="first_name"
                  value={updatedUserData.first_name}
                  onChange={handleInputChange}
                />
                <label> Last name: </label>
                <input
                  type="text "
                  name="last_name"
                  value={updatedUserData.last_name}
                  onChange={handleInputChange}
                />
                <label> Email: </label>
                <input
                  type="text "
                  name="email"
                  value={updatedUserData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <label> Phone: </label>
                  <input
                    type="number"
                    name="first_name"
                    value={updatedUserData.phone}
                  />
                </div>
                <button type="submit" onClick={handleSubmit}>
                  Submit the changes
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </>
  );
};
