import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import PageLayout from "../layouts/PageLayout";
import NotFound from "../pages/NotFound";
import Cardapio from "../pages/Cardapio";
import { Suspense } from "react";

const Ways = () => {
    return(
        <>
            <Suspense>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<PageLayout/>}>
                            <Route index element={<Home />} />
                            <Route path="/cardapio" element={<Cardapio />} />
                        </Route>
                        <Route path="*" element={<NotFound/>} />
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </>
    );
}


export default Ways;
