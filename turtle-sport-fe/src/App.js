import "./App.css";
import { Login } from "./component/auth/Login";
import { Home } from "./component/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { YardListOverView } from "./component/yard/YardListOverView";
import { NotificationOverView } from "./component/notification/NotificationOverview";
import { InfomationOverview } from "./component/auth/InformationOverview";
import { NewsOverview } from "./component/news/NewsOverView";
import { GroupOverview } from "./component/group/GroupOverview";
import { CreateYard } from "./component/yard/CreateYard";
import { ManagerOverview } from "./component/manager/ManagerOverview";
import { CreateBooking } from "./component/manager/CreateBooking";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/san-bong" element={<YardListOverView />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/ho-so" element={<InfomationOverview />} />
          <Route path="/thong-bao" element={<NotificationOverView />} />
          <Route path="/tin-tuc" element={<NewsOverview />} />
          <Route path="/cau-lac-bo" element={<GroupOverview />} />
          <Route path="/tao-san" element={<CreateYard />} />
          <Route path="/quan-ly" element={<ManagerOverview />} />
          <Route path="/dat-san" element={<CreateBooking />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
