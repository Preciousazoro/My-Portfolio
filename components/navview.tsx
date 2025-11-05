"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Briefcase, Mail } from "lucide-react";

type NavItem = {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
};

export default function UserNav() {
  const pathname = usePathname();

  const navItems: NavItem[] = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Work", href: "#work", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  const isActive = (href: string) => 
    pathname === href || (href !== '/' && pathname?.startsWith(`${href}/`));

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-md mx-auto md:hidden">
      <div className="bg-black/80 backdrop-blur-lg border border-gray-800 rounded-2xl p-1.5 shadow-2xl shadow-black/30">
        <div className="flex justify-between items-center px-1 sm:px-2">
          {navItems.map(({ name, href, icon: Icon }) => {
            const active = isActive(href);
            return (
              <Link
                key={name}
                href={href}
                className={`flex flex-col items-center justify-center w-full py-2.5 px-1 rounded-xl transition-all duration-300 group ${
                  active 
                    ? 'bg-gray-800 text-[#ff004f]' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                <div className="relative p-2">
                  <Icon 
                    className={`w-5 h-5 transition-transform duration-300 ${
                      active ? 'scale-110' : 'group-hover:scale-110'
                    }`} 
                    strokeWidth={active ? 2.5 : 2}
                  />
                  {active && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#ff004f] rounded-full"></span>
                  )}
                </div>
                <span className={`text-xs font-medium mt-1 ${
                  active ? 'text-white' : 'text-gray-400'
                }`}>
                  {name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}