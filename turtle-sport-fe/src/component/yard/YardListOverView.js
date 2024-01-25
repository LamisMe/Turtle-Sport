import { Header } from "../home/Header";
import Address from "../location/Address";
import AddressSearch from "../location/AddressSearch";
import { YardList } from "./YardList";
import { Link } from "react-router-dom";

export function YardListOverView() {
  return (
    <>
        <YardList/>
       
        
        <div class="footer mt-4">
        <div class="container">
          <div class="footer-content">
            <p class="text-center mt-5">
              &copy; 2024 Turtle Company. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
