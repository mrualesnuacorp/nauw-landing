import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export const metadata = {
  title: "Productos — nauw.",
  description: "Toda la línea nauw. Proteína de chocho, electrolitos, geles energéticos y creatina.",
};

export default function ProductosPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Products />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
