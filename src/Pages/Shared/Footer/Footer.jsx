const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-gray-400 sm:flex-row sm:px-6 lg:px-8">
        <div>
          © 2026 <span className="font-semibold text-white">CineScope</span>.
          All rights reserved.
        </div>

        <div className="flex gap-5">
          <a href="#" className="transition hover:text-white">
            GitHub
          </a>
          <a href="#" className="transition hover:text-white">
            Facebook
          </a>
          <a href="#" className="transition hover:text-white">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
