const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-gray-400 sm:flex-row sm:px-6 lg:px-8 font-sans">
        <div>
          © 2026 <span className=" text-white">CineScope</span>. All rights
          reserved.
        </div>

        <div className="flex gap-5 font-sans">
          <a
            href="https://github.com/AkasDatta"
            className="transition hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/akasdatta/"
            className="transition hover:text-white"
          >
            Linkedin
          </a>
          <a
            href="https://www.instagram.com/_akash_datta/"
            className="transition hover:text-white"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
