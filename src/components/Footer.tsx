
const Footer = () => (
  <footer className="w-full py-8 mt-14 flex flex-col items-center justify-center opacity-95">
    <hr className="w-2/3 border-t ethics-gold-bg mb-4" />
    <div className="flex items-center gap-3">
      <span className="text-base text-muted-foreground font-sans">
        A project by Rahman Mohammad Ali
      </span>
      <a href="https://www.linkedin.com/in/rxhman" target="_blank" rel="noopener" className="ethics-gold underline hover:text-[#2d624d] font-normal">LinkedIn</a>
    </div>
    <span className="mt-2 text-xs text-[#9b9382] font-sans">© {new Date().getFullYear()} Universal Ethics Engine</span>
  </footer>
);

export default Footer;
