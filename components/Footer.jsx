import socialLinks from "@/constants/data/socialLinks";

const Footer = () => {
  return (
    <footer className="py-5 mt-5">
   

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center justify-center">
          {/* Links title for mobile */}
          <div className="text-white text-4xl font-black tracking-tight mb-5 sm:hidden">
            <div>Links.</div>
          </div>
          
          {/* Social links */}
          <div className="flex flex-wrap items-center justify-center gap-5">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 border border-gray-700 outline outline-1 outline-gray-600 outline-offset-3 rounded-2xl flex items-center justify-center hover:border-[#562e66] hover:outline-[#956c8a] transition-all duration-200 ease-in-out cursor-pointer"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="text-sm flex justify-center mt-8 text-gray-400">
          <p>Last updated - 11 June 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;