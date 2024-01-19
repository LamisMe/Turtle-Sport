import { Link } from "react-router-dom";
import { HeaderManager } from "../home/HeaderManager";
import { infoToken } from "../../service/AuthService";
import * as CustomerService from "../../service/CustomerService";
import { useEffect, useState } from "react";

export function ManagerOverview() {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [username, setUsername] = useState("");

  const inforUser = async () => {
    const res = infoToken();
    // sub token;
    if (res != null) {
      setUsername(res.sub);
    }
  };



  useEffect(() => {
      inforUser();

    
  }, []);



if(!user) return null;

  return (
    <>
        <HeaderManager />

    

      <div class="bg-light">
        <div class="container">
          <div class="footer-content">
            <p class="text-center">
              &copy; 2024 Turtle Company. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
