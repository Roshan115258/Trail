import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, CircuitBoard, Code, Cpu, Beaker, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logoImage from "@assets/WhatsApp_Image_2025-10-01_at_1.27.41_PM-removebg-preview_1759322801060.png";

const Header = () => {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const serviceCategories = [
    {
      title: "Design Services",
      icon: CircuitBoard,
      items: [
        { name: "PCB Design", href: "/services/design/pcb-design", desc: "Circuit board layout & design" },
        { name: "Web Design", href: "/services/design/web-design", desc: "Modern web applications" },
      ]
    },
    {
      title: "Development Services",
      icon: Code,
      items: [
        { name: "Firmware Development", href: "/services/development/firmware", desc: "Embedded software solutions" },
        { name: "Hardware Development", href: "/services/development/hardware", desc: "IoT & embedded systems" },
        { name: "App Development", href: "/services/development/app-development", desc: "Mobile & web apps" },
      ]
    },
    {
      title: "Solutions",
      icon: Beaker,
      items: [
        { name: "Milk Analyzer", href: "/solutions/milk-analyzer", desc: "Precision dairy testing" },
        { name: "DPU & AMCU", href: "/solutions/dpu-amcu-systems", desc: "Automated collection systems" },
      ]
    }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50 backdrop-blur-xl" data-testid="header">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity" data-testid="logo">
            <img 
              src={logoImage} 
              alt="Several Sustain Logo" 
              className="w-10 h-10 lg:w-12 lg:h-12 object-contain"
            />
            <div>
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground">
                Several <span className="text-primary">Sustain</span>
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" data-testid="desktop-nav">
            {serviceCategories.map((category) => (
              <div
                key={category.title}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(category.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 rounded-lg hover:bg-muted/50"
                  data-testid={`dropdown-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.title}</span>
                </button>
                
                {/* Dropdown Menu */}
                <div className={`absolute top-full left-0 mt-2 w-72 glass-card rounded-xl shadow-2xl border border-border/50 overflow-hidden transition-all duration-200 ${
                  activeDropdown === category.title ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}>
                  <div className="p-2">
                    {category.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block p-3 rounded-lg hover:bg-primary/10 transition-colors group/item"
                        data-testid={`link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        <div className="font-medium text-foreground group-hover/item:text-primary transition-colors">
                          {item.name}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {item.desc}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <Link 
              href="/about" 
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                location === '/about' 
                  ? 'text-primary bg-primary/10' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
              data-testid="link-about"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                location === '/contact' 
                  ? 'text-primary bg-primary/10' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
              data-testid="link-contact"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <Button className="gradient-primary text-white hover:opacity-90 transition-opacity shadow-lg" data-testid="button-get-quote">
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" data-testid="button-mobile-menu">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="glass-card w-full sm:w-[400px] p-0">
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-6 border-b border-border/50">
                  <div className="flex items-center gap-3">
                    <img 
                      src={logoImage} 
                      alt="Several Sustain Logo" 
                      className="w-10 h-10 object-contain"
                    />
                    <div>
                      <h2 className="text-lg font-bold text-foreground">
                        Several <span className="text-primary">Sustain</span>
                      </h2>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setIsOpen(false)}
                    className="hover:bg-muted"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex-1 overflow-y-auto p-6" data-testid="mobile-nav">
                  <div className="space-y-6">
                    {serviceCategories.map((category) => (
                      <div key={category.title} className="space-y-3">
                        <div className="flex items-center gap-2 text-sm font-bold text-foreground uppercase tracking-wide">
                          <category.icon className="w-4 h-4 text-primary" />
                          <span>{category.title}</span>
                        </div>
                        <div className="space-y-2 pl-6">
                          {category.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block p-3 rounded-lg hover:bg-primary/10 transition-colors"
                              onClick={() => setIsOpen(false)}
                              data-testid={`mobile-link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                              <div className="font-medium text-foreground">
                                {item.name}
                              </div>
                              <div className="text-xs text-muted-foreground mt-1">
                                {item.desc}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}

                    <div className="pt-4 border-t border-border/50 space-y-2">
                      <Link 
                        href="/about" 
                        className={`block p-3 rounded-lg font-medium transition-colors ${
                          location === '/about' 
                            ? 'text-primary bg-primary/10' 
                            : 'text-foreground hover:bg-muted'
                        }`}
                        onClick={() => setIsOpen(false)} 
                        data-testid="mobile-link-about"
                      >
                        About Us
                      </Link>
                      <Link 
                        href="/contact" 
                        className={`block p-3 rounded-lg font-medium transition-colors ${
                          location === '/contact' 
                            ? 'text-primary bg-primary/10' 
                            : 'text-foreground hover:bg-muted'
                        }`}
                        onClick={() => setIsOpen(false)} 
                        data-testid="mobile-link-contact"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </nav>

                {/* Mobile CTA */}
                <div className="p-6 border-t border-border/50">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <Button className="w-full gradient-primary text-white hover:opacity-90 transition-opacity shadow-lg py-6 text-base font-semibold" data-testid="mobile-button-get-quote">
                      Get a Free Quote
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
