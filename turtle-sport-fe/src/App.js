import "./App.css";
import { Login } from "./component/Login";
import { Home } from "./component/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { YardListOverView } from "./component/yard/YardListOverView";
import { NotificationOverView } from "./component/notification/NotificationOverview";
import { InfomationOverview } from "./component/auth/InformationOverview";
import { NewsOverview } from "./component/news/NewsOverView";
import { GroupOverview } from "./component/group/GroupOverview";
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
