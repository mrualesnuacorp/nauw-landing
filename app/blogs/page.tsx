import Navbar from "../components/Navbar";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export const metadata = {
  title: "Blog — nauw.",
  description: "Aprende sobre nutrición deportiva, chocho andino y los beneficios de nauw.",
};

export default function BlogsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <CTA />
      </main>
      <Footer />
    </>
  );
}
