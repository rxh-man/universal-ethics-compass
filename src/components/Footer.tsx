
const Footer = () => (
  <footer className="w-full py-6 mt-10 flex flex-col items-center justify-center opacity-90">
    <hr className="w-2/3 border-t ethics-gold-bg mb-4" />
    <div className="flex items-center gap-3">
      <span className="text-base text-muted-foreground">
        A project by Rahman Mohammad Ali
      </span>
      <a href="https://www.linkedin.com/in/rxhman" target="_blank" rel="noopener" className="ethics-gold underline hover:text-[#17633e]">LinkedIn</a>
    </div>
    <span className="mt-2 text-xs text-stone-400">© {new Date().getFullYear()} Universal Ethics Engine</span>
  </footer>
);

export default Footer;
