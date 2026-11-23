import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ProductPage } from './pages/Product';
import { EpisodesPage } from './pages/Episodes';
import { HowItCalmsPage } from './pages/HowItCalms';
import { BuildYourKitPage } from './pages/BuildYourKit';
import { CartPage } from './pages/Cart';
import { CheckoutPage } from './pages/Checkout';
import { OrderPage } from './pages/Order';
import { ConfirmationPage } from './pages/Confirmation';
import { FAQPage } from './pages/FAQ';
import { NotFoundPage } from './pages/NotFound';
import { CartProvider } from './context/CartProvider';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/episodes" element={<EpisodesPage />} />
          <Route path="/how-it-calms" element={<HowItCalmsPage />} />
          <Route path="/build-your-kit" element={<BuildYourKitPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
