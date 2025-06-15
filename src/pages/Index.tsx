
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ToolCard from "@/components/ToolCard";
import { FileUp, Globe, LineChart, Gavel, Timer } from "lucide-react";
import { useRef } from "react";

const DilemmaUploadDemo = () => {
  const fileInput = useRef<HTMLInputElement | null>(null);

  // Demo: Alert on file upload, designed for next phase
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      alert("Dilemma uploaded: " + e.target.files[0].name + "\n(Analysis coming soon!)");
    }
  };

  return (
    <div className="flex flex-col gap-2 mt-4">
      <input type="file" ref={fileInput} accept=".txt,.doc,.pdf" className="hidden" onChange={handleUpload} />
      <button
        className="ethics-btn max-w-xs mx-auto"
        onClick={() => fileInput.current?.click()}
      >
        Upload Dilemma
      </button>
      <span className="text-xs text-muted-foreground mt-1">
        Personal, corporate, or national issues —{" "}
        <span className="underline">anonymous & secure</span>
      </span>
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-transparent">
      <Header />

      <main className="container px-2 py-4 flex flex-col items-center">
        <div
          className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ethics-dashboard gap-8 my-8"
        >
          {/* Upload Your Dilemma */}
          <ToolCard
            icon={FileUp}
            title="Upload Your Dilemma"
            description="Submit any scenario — from the personal to the global. Our AI analyzes it through dozens of ethical philosophies and cultural perspectives, providing transparent multi-lens evaluations."
            action={<DilemmaUploadDemo />}
          />

          {/* Global Cultural Ethics Spectrum */}
          <ToolCard
            icon={Globe}
            title="Global Cultural Ethics Spectrum"
            description="Visualize and compare how civilizations — from Confucian to Ubuntu — interpret your case. See overlays, historical views, and region-by-region ethical reasoning."
            locked
          />

          {/* Moral Outcome Optimizer */}
          <ToolCard
            icon={LineChart}
            title="Moral Outcome Optimizer"
            description="AI-powered optimizer proposes decisions that maximize good, minimize harm, and balance long-term consequences. Interactive graphs coming soon."
            locked
          />

          {/* Policy Ethics Evaluator */}
          <ToolCard
            icon={Gavel}
            title="Policy Ethics Evaluator"
            description="Test upcoming laws, business rules, or proposals: Does your policy align globally? Identify virtue and pitfalls before implementation."
            locked
          />

          {/* Future Ethics Simulator */}
          <ToolCard
            icon={Timer}
            title="Future Ethics Simulator"
            description="Predict how today's actions might be judged a century from now, using longitudinal datasets and projection models."
            locked
          />
        </div>

        {/* Philosophy Engine Feature */}
        <section className="ethics-scroll p-8 my-12 max-w-4xl mx-auto flex flex-col items-center animate-fade-in">
          <h3 className="text-3xl font-bold mb-3 ethics-emerald" style={{fontFamily: "'Playfair Display', serif"}}>
            The AI & Philosophy Engine
          </h3>
          <ul className="list-disc pl-6 text-lg mb-2 text-neutral-700">
            <li>3,000 years of moral theory — from Aristotle to Ubuntu</li>
            <li>Ethical NLP classifier trained for nuance & transparency</li>
            <li>Cross-cultural and temporal ontology models</li>
            <li>Anonymous, private case processing</li>
            <li>Source transparency and citation for every output</li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
