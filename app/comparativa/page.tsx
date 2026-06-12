import Navbar from "../components/Navbar";
import BenefitsInfo from "../components/BenefitsInfo";
import BenefitsTables from "../components/BenefitsTables";
import Footer from "../components/Footer";

export const metadata = {
  title: "Comparativa — nauw.",
  description: "nauw. vs el resto. Proteína de chocho y electrolitos naturales frente a los competidores.",
};

export default function ComparativaPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <BenefitsInfo />
        <BenefitsTables />
      </main>
      <Footer />
    </>
  );
}
