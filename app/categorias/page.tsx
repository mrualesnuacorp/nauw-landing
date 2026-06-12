import Navbar from "../components/Navbar";
import CategoryBar from "../components/CategoryBar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Categorías — nauw.",
  description: "Explora los productos nauw. por categoría: hidratación, energía, concentración y rendimiento.",
};

export default function CategoriasPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <CategoryBar />
      </main>
      <Footer />
    </>
  );
}
