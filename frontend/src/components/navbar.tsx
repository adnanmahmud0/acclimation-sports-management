"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import React from "react";

const aboutItems = [
  {
    title: "Our Vision",
    href: "/#about",
    description: "The economic edge that sets Acclimation apart from traditional agencies.",
  },
  {
    title: "Joe Grekoski, CVA",
    href: "/#about",
    description: "Meet the intellectual property expert leading the next era of NBA representation.",
  },
  {
    title: "Valuation Expertise",
    href: "/#services",
    description: "Courtroom-proven economic analysis for your personal brand.",
  },
];

const serviceItems = [
  {
    title: "Contract Negotiation",
    href: "/contract-negotiation",
    description: "Litigation-grade strategy designed to maximize your career earnings.",
  },
  {
    title: "Brand Development",
    href: "/personal-branding",
    description: "Transforming your talent into a premium, monetizable economic asset.",
  },
  {
    title: "Salary Cap Analytics",
    href: "/salary-cap",
    description: "Proprietary models for real-time forecasting and luxury-tax simulations.",
  },
  {
    title: "Marketing & Endorsements",
    href: "/marketing-endorsements",
    description: "Maximizing off-court income through shoe deals, NIL, and legacy partnerships.",
  },
  {
    title: "Pre-Draft Mastery",
    href: "/pre-draft",
    description: "Tailored preparation and strategic positioning for the NBA Combine.",
  },
  {
    title: "Holistic Concierge",
    href: "/holistic-concierge",
    description: "Elite trainers, personal chefs, private jets, and wealth management support.",
  },
];

const playerItems = [
  { 
    title: "Elite High School Talent", 
    href: "/high-school-talent",
    description: "Multi-million dollar NIL deal strategy for top-ranked prep prospects."
  },
  { 
    title: "Active NBA Players", 
    href: "/nba-players",
    description: "Veteran representation focused on wealth architecture and contract extensions."
  },
  { 
    title: "College Prospects", 
    href: "/college-prospects",
    description: "NIL optimization and strategic brand launch for collegiate standouts."
  },
  { 
    title: "WNBA", 
    href: "/wnba",
    description: "Leading advocates for women's basketball professionalization and equity."
  },
  { 
    title: "Two-Way Contracts", 
    href: "/two-way-contracts",
    description: "Maximizing the strategic value and progression of Two-Way agreements."
  },
  { 
    title: "G-League Elite", 
    href: "/g-league-elite",
    description: "Specialized advocacy for G-League athletes rising to the NBA stage."
  },
];

export function Navbar() {
  const pathname = usePathname();

  // Hide navbar on admin pages
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <nav className="sticky top-0 z-50 px-6 py-4 lg:px-12 flex justify-between items-center glass border-none! bg-[#05070a]/80">
      {/* Mobile Menu (Left) */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger
            render={
              <button className="p-2 text-white/70 hover:text-primary transition-colors cursor-pointer">
                <Menu className="w-6 h-6" />
              </button>
            }
          />
          <SheetContent side="left" className="bg-[#05070a] border-white/10 text-white w-80">
            <SheetHeader className="text-left pb-6 border-b border-white/5">
              <SheetTitle>
                <div className="flex flex-col items-start leading-none">
                  <span className="text-xl font-bold tracking-tighter text-white">ACCLIMATION</span>
                  <span className="text-[8px] font-bold tracking-[0.3em] text-primary">SPORTS MANAGEMENT</span>
                </div>
              </SheetTitle>
            </SheetHeader>
            
            <div className="flex flex-col gap-6 py-8">
              <Link 
                href="/" 
                className="text-lg font-bold hover:text-primary transition-colors"
                onClick={() => {
                  if (pathname === "/") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
              >
                Home
              </Link>
              
              <div className="space-y-4">
                <h4 className="text-xs font-black tracking-widest text-white/30 uppercase">About</h4>
                <div className="grid gap-2 pl-2">
                  {aboutItems.map(item => (
                    <Link key={item.title} href={item.href} className="text-sm font-medium text-white/70 hover:text-primary transition-colors">
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-black tracking-widest text-white/30 uppercase">Services</h4>
                <div className="grid gap-2 pl-2">
                  {serviceItems.map(item => (
                    <Link key={item.title} href={item.href} className="text-sm font-medium text-white/70 hover:text-primary transition-colors">
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/#advantage" className="text-lg font-bold hover:text-primary transition-colors">The Advantage</Link>

              <div className="space-y-4">
                <h4 className="text-xs font-black tracking-widest text-white/30 uppercase">For Players</h4>
                <div className="grid gap-2 pl-2">
                  {playerItems.map(item => (
                    <Link key={item.title} href={item.href} className="text-sm font-medium text-white/70 hover:text-primary transition-colors">
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/contact" className="text-lg font-bold hover:text-primary transition-colors">Contact</Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Custom Text Logo */}
      <Link 
        href="/" 
        className="flex flex-col items-start group"
        onClick={() => {
          if (pathname === "/") {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}
      >
        <span className="text-3xl font-bold tracking-[0.1em] text-white leading-none group-hover:text-primary transition-colors">
          ACCLIMATION
        </span>
        <div className="w-full h-[1px] bg-primary/50 my-1" />
        <span className="text-[10px] font-bold tracking-[0.4em] text-white/70 leading-none">
          SPORTS MANAGEMENT
        </span>
      </Link>

      {/* Navigation Menu (Desktop) */}
      <div className="hidden lg:flex items-center gap-2">
        <NavigationMenu>
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <Link 
                href="/" 
                data-slot="navigation-menu-link"
                className={cn(
                  navigationMenuTriggerStyle(), 
                  "bg-transparent text-white/90 hover:bg-transparent focus:bg-transparent hover:text-primary transition-colors"
                )}
                onClick={() => {
                  if (pathname === "/") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
              >
                Home
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-white/90 hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent hover:text-primary data-[active]:text-primary transition-colors">
                About
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] glass-premium border-none!">
                  {aboutItems.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-white/90 hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent hover:text-primary data-[active]:text-primary transition-colors">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] glass-premium border-none!">
                  {serviceItems.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link 
                href="/#advantage" 
                data-slot="navigation-menu-link"
                className={cn(
                  navigationMenuTriggerStyle(), 
                  "bg-transparent text-white/90 hover:bg-transparent focus:bg-transparent hover:text-primary transition-colors text-center leading-tight"
                )}
              >
                The Acclimation Advantage
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-white/90 hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent hover:text-primary data-[active]:text-primary transition-colors">
                For Players
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] glass-premium border-none!">
                  {playerItems.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link 
                href="/contact" 
                data-slot="navigation-menu-link"
                className={cn(
                  navigationMenuTriggerStyle(), 
                  "bg-transparent text-white/90 hover:bg-transparent focus:bg-transparent hover:text-primary transition-colors"
                )}
              >
                Contact
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* CTA Button */}
      <div className="flex items-center gap-4">
        <Link href="/book" className="group">
          <button className="relative px-3 md:px-6 py-2 bg-gradient-to-br from-primary via-secondary to-purple-600 rounded-xl leading-tight text-center transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,210,255,0.3)] hover:shadow-[0_0_30px_rgba(0,210,255,0.5)]">
            <span className="hidden sm:block text-[10px] font-bold tracking-wider text-white opacity-90 uppercase">Schedule Confidential</span>
            <span className="block text-[10px] md:text-xs font-black tracking-widest text-white uppercase">Strategy Call</span>
          </button>
        </Link>
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <Link
        href={href || "#"}
        ref={ref}
        data-slot="navigation-menu-link"
        className={cn(
          "flex flex-col select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-primary focus:text-primary",
          "hover:bg-muted focus:bg-muted text-sm",
          className
        )}
        {...props}
      >
        <div className="text-sm font-bold leading-none">{title}</div>
        {children && (
          <p className="line-clamp-2 text-xs leading-snug text-white/50">
            {children}
          </p>
        )}
      </Link>
    </li>
  );
});
ListItem.displayName = "ListItem";
