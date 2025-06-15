
import { BookOpen } from "lucide-react";

const Header = () => (
  <header className="w-full pt-12 pb-7 px-7 md:px-0">
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-3">
        <BookOpen size={38} className="ethics-gold" strokeWidth={2.05} />
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#2d624d] font-sans">
          Universal Ethics Engine
        </h1>
      </div>
      <div className="h-2 w-24 rounded-full ethics-gold-bg mb-2"/>
      <p className="ethics-quote max-w-2xl text-center font-sans">
        “Act only according to that maxim whereby you can at the same time will that it should become a universal law.”<br /><span className="font-medium text-[#a49b81]">— Immanuel Kant</span>
      </p>
      <span className="text-lg text-center text-muted-foreground max-w-2xl font-sans">
        AI Moral Alignment Platform — Harmonizing Decisions Across Cultures & Time
      </span>
    </div>
  </header>
);

export default Header;
