import { Route, Routes } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import MenuPage from "@/pages/MenuPage";
import ContactPage from "@/pages/ContactPage";
import CheckoutPage from "@/pages/CheckoutPage";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0c0b09] text-foreground">
      <Header />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
