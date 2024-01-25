import { useEffect, useState } from "react";
import Paypal from "../paypal/PayPal";
import { Link, useParams } from "react-router-dom";
import { GetYardDetail } from "../../service/YardService";


export function Payment(){
    const [price, setPrice] = useState();
    const {id} = useParams();
    const [orderDto, setOrderDto] = useState([]);

    const getYard = async () => {
        let res = await GetYardDetail(id);
        setOrderDto(res.data);
        let money = parseInt(res.data.price / 23000);
        setPrice(money);
      };

      useEffect(() => {
        getYard();
      }, []);
console.log(orderDto);
      if(!orderDto) return null
    return(
        <>
        <div className="container text-center">
            <p className="text-center mt-5 fs-3" style={{fontWeight : "600"}}>Trang đang được phát triển</p>
            <Link as="small" to="/">Vui lòng quay lại sau</Link>
            <div class="d-flex justify-content-center m-4">
            < Paypal amount={price} payload={id} />
            </div>
        </div>
        </>
    )
}