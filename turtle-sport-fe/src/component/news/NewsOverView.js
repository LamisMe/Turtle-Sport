import { News } from "./News";
import { Header } from "../home/Header";


export function NewsOverview(){
    return (
        <>
        <div className="container-fluid">
        <Header/>
      </div>
          <News/>
        </>
      );
}