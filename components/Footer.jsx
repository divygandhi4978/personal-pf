import socialLinks from "@/constants/data/socialLinks";
const Footer = () => {
  return (
    <footer className="border-t-2 border-[#562e66] py-5 mt-5">
      <div className="max-w-6xl mx-auto px-6">
        <div className=" content-center sm:space-x-8 mb-8 max-sm:flex-col items-center max-sm:space-y-4 grid grid-cols-4 max-sm:grid-cols-2 ">
          {socialLinks.map((link) => (
            <div className="flex justify-center" key={link.name}>
              <a
                key={link.name}
                href={link.url}
                className=" flex items-center space-x-2 text-gray-400 hover:text-[#edc1ff] transition-colors duration-300"
              >
                <div className="transform transition-transform duration-300 group-hover:scale-105">
                  {link.icon}
                </div>
                <span className="text-sm font-medium">{link.name}</span>
              </a>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-400 text-sm">
            <span className="mx-1">Designed & Developed by</span>
            <span className="text-white font-medium">Divy Gandhi </span>© 2025.
          </p>
        </div>

        <div className="text-sm flex justify-center mt-3">
          <p>Last updated - 11 June 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
