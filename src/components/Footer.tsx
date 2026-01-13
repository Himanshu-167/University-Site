import { GraduationCap, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-sidebar text-sidebar-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sidebar-primary">
                <GraduationCap className="h-6 w-6 text-sidebar-primary-foreground" />
              </div>
              <span className="text-xl font-bold">EduConnect</span>
            </div>
            <p className="text-sidebar-foreground/70 text-sm leading-relaxed">
              Empowering minds and shaping futures through excellence in education, research, and innovation since 1965.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-sidebar-foreground/70">
              <li><a href="#about" className="hover:text-sidebar-foreground transition-colors">About Us</a></li>
              <li><a href="#academics" className="hover:text-sidebar-foreground transition-colors">Academics</a></li>
              <li><a href="#admissions" className="hover:text-sidebar-foreground transition-colors">Admissions</a></li>
              <li><a href="#campus" className="hover:text-sidebar-foreground transition-colors">Campus Life</a></li>
              <li><a href="#" className="hover:text-sidebar-foreground transition-colors">Research</a></li>
              <li><a href="#" className="hover:text-sidebar-foreground transition-colors">Library</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-sidebar-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>123 University Avenue, Academic City, State 12345</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <span>info@educonnect.edu</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-sidebar-accent hover:bg-sidebar-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-sidebar-accent hover:bg-sidebar-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-sidebar-accent hover:bg-sidebar-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-sidebar-accent hover:bg-sidebar-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-sidebar-border text-center text-sm text-sidebar-foreground/50">
          <p>© 2024 EduConnect University. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
