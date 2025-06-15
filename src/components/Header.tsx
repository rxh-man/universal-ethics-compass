
import { BookOpen } from "lucide-react";

const Header = () => (
  <header className="w-full pt-10 pb-6 px-6 md:px-0">
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-3">
        <BookOpen size={40} className="ethics-gold" strokeWidth={2.2} />
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight ethics-emerald" style={{fontFamily: "'Playfair Display', serif"}}>
          Universal Ethics Engine
        </h1>
      </div>
      <div className="h-2 w-28 rounded-full ethics-gold-bg mb-2"/>
      <p className="ethics-quote max-w-2xl text-center">
        “Act only according to that maxim whereby you can at the same time will that it should become a universal law.”<br /><span className="font-semibold">— Immanuel Kant</span>
      </p>
      <span className="text-lg text-center text-muted-foreground max-w-2xl">
        AI Moral Alignment Platform — Harmonizing Decisions Across Cultures & Time
      </span>
    </div>
  </header>
);

export default Header;
