import { Github, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-heading text-sm font-bold text-primary tracking-wider">
              SCIENCE ASSOCIATION
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Malnad College of Engineering, Hassan
            </p>
          </div>

          <div className="flex items-center gap-4">
            {[
              { Icon: Instagram, href: "https://www.instagram.com/sa_malnad?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
              { Icon: Linkedin, href: "#" },
              { Icon: Github, href: "#" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Science Association. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
