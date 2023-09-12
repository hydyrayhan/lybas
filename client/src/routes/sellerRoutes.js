import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "../pages/sellerProfile/components/Sidebar";


function SellerRoutes() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/seller/' element={(
            <>
              <Sidebar />
            </>
          )} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default SellerRoutes;
