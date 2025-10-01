import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, ChevronDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logoImage from "@assets/WhatsApp_Image_2025-10-01_at_1.27.41_PM-removebg-preview_1759322801060.png";

const Header = () => {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const designServices = [
    { name: "PCB Design", href: "/services/design/pcb-design" },
    { name: "Web Design", href: "/services/design/web-design" },
  ];

  const developmentServices = [
    { name: "Firmware Development", href: "/services/development/firmware" },
    { name: "Hardware Development", href: "/services/development/hardware" },
    { name: "App Development", href: "/services/development/app-development" },
  ];

  const solutions = [
    { name: "Milk Analyzer", href: "/solutions/milk-analyzer" },
    { name: "DPU & AMCU", href: "/solutions/dpu-amcu-systems" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50" data-testid="header">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" data-testid="logo">
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
          <nav className="hidden lg:flex items-center gap-8" data-testid="desktop-nav">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1" data-testid="design-service-dropdown">
                  <span>Design Service</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="glass-card rounded-lg shadow-xl">
                {designServices.map((service) => (
                  <DropdownMenuItem key={service.href} asChild>
                    <Link href={service.href} className="cursor-pointer" data-testid={`link-${service.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1" data-testid="development-service-dropdown">
                  <span>Development Service</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="glass-card rounded-lg shadow-xl">
                {developmentServices.map((service) => (
                  <DropdownMenuItem key={service.href} asChild>
                    <Link href={service.href} className="cursor-pointer" data-testid={`link-${service.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1" data-testid="solutions-dropdown">
                  <span>Solutions</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="glass-card rounded-lg shadow-xl">
                {solutions.map((solution) => (
                  <DropdownMenuItem key={solution.href} asChild>
                    <Link href={solution.href} className="cursor-pointer" data-testid={`link-${solution.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      {solution.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/about" className="px-4 py-2 text-muted-foreground hover:text-foreground transition-colors" data-testid="link-about">
              About
            </Link>
            <Link href="/contact" className="px-4 py-2 text-muted-foreground hover:text-foreground transition-colors" data-testid="link-contact">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90" data-testid="button-get-quote">
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
            <SheetContent side="right" className="glass-card">
              <nav className="space-y-4 mt-8" data-testid="mobile-nav">
                <div className="space-y-2">
                  <p className="font-semibold text-foreground">Design Service</p>
                  {designServices.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block py-2 pl-4 text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => setIsOpen(false)}
                      data-testid={`mobile-link-${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-foreground">Development Service</p>
                  {developmentServices.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block py-2 pl-4 text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => setIsOpen(false)}
                      data-testid={`mobile-link-${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-foreground">Solutions</p>
                  {solutions.map((solution) => (
                    <Link
                      key={solution.href}
                      href={solution.href}
                      className="block py-2 pl-4 text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => setIsOpen(false)}
                      data-testid={`mobile-link-${solution.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {solution.name}
                    </Link>
                  ))}
                </div>
                <Link href="/about" className="block py-3 text-muted-foreground hover:text-foreground transition-colors" onClick={() => setIsOpen(false)} data-testid="mobile-link-about">
                  About
                </Link>
                <Link href="/contact" className="block py-3 text-muted-foreground hover:text-foreground transition-colors" onClick={() => setIsOpen(false)} data-testid="mobile-link-contact">
                  Contact
                </Link>
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-primary text-primary-foreground mt-4" data-testid="mobile-button-get-quote">
                    Get Quote
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
