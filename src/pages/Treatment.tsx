import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const Treatment = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Treatment Options</h1>
        <p>
          Here you can find information about various treatment options
          available for different medical conditions.
        </p>
        <ul className="mt-4 space-y-2">
          <li>
            <strong>Physical Therapy:</strong> A treatment method that uses
            physical methods to promote healing and improve mobility.
          </li>
          <li>
            <strong>Medication:</strong> Various drugs prescribed to manage
            symptoms or treat conditions.
          </li>
          <li>
            <strong>Surgery:</strong> Surgical procedures to correct or manage
            medical issues.
          </li>
          <li>
            <strong>Counseling:</strong> Psychological support and therapy for
            mental health conditions.
          </li>
        </ul>
        <p className="mt-4">
          For more detailed information about specific treatments, please
          consult with a healthcare professional or visit our{" "}
          <a href="/contact" className="text-blue-500 hover:underline">
            Contact Us
          </a>{" "}
          page.
        </p>
      </div>
      <Footer />
    </div>
  );
};
export default Treatment;
