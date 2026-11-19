"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { libraryLink, navGroups, planLink } from "@/config/site";
import { Logo } from "@/shared/components/logo";
import { Icon } from "@/shared/components/icon";

const isActive = (pathname: string, href: string) => pathname === href || pathname.startsWith(`${href}/`);

export function Header() {
  const pathname = usePathname();
  const { scrollY, scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState<string | null>(null);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const resize = () => { if (desktop.matches) setOpen(false); };
    document.addEventListener("keydown", close);
    desktop.addEventListener("change", resize);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", close);
      desktop.removeEventListener("change", resize);
    };
  }, [open]);

  useMotionValueEvent(scrollY, "change", (value) => setScrolled(value > 60));

  return (
    <motion.header
      onKeyDown={(event) => {
        if (!open || event.key !== "Tab") return;
        const focusable = Array.from(event.currentTarget.querySelectorAll<HTMLElement>("a, button")).filter((element) => element.getClientRects().length > 0);
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background,padding,box-shadow] duration-500 ${
        scrolled || open ? "border-ocean-950/10 bg-sand-50/95 py-3 shadow-lg shadow-ocean-950/5 backdrop-blur-xl" : "border-white/20 py-5"
      }`}
    >
      <motion.div aria-hidden style={{ scaleX: scrollYProgress }} className="absolute inset-x-0 top-0 h-0.5 origin-left bg-ocean-400" />
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          aria-label="Nha Trang — trang chủ"
          className={`transition-colors ${scrolled || open ? "text-ocean-800" : "text-white"}`}
        >
          <Logo />
        </Link>

        <nav aria-label="Điều hướng chính" className="hidden items-center gap-8 lg:flex">
          {navGroups.map((group) => {
            const active = isActive(pathname, group.href);
            return (
              <div
                key={group.id}
                data-dismissed={dismissed === group.id}
                onKeyDown={(event) => {
                  if (event.key === "Escape") {
                    setDismissed(group.id);
                    event.currentTarget.querySelector("a")?.focus();
                  }
                }}
                onFocus={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setDismissed(null); }}
                onMouseEnter={() => setDismissed(null)}
                onMouseLeave={() => setDismissed(null)}
                className="group relative"
              >
                <Link
                  href={group.href}
                  onClick={(event) => {
                    setDismissed(group.id);
                    event.currentTarget.blur();
                  }}
                  aria-current={active ? "page" : undefined}
                  className={`relative flex items-center gap-1.5 text-sm font-medium transition-colors ${
                    scrolled ? "text-ocean-950" : "text-white/90"
                  }`}
                >
                  {group.label}
                  <svg
                    aria-hidden
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="transition-transform group-hover:rotate-180 group-focus-within:rotate-180"
                  >
                    <path d="M1 1l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-sun-400 transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
                <div className="invisible absolute left-1/2 top-full w-80 -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100 group-data-[dismissed=true]:!invisible group-data-[dismissed=true]:!opacity-0">
                  <ul className="rounded-3xl bg-white p-2 shadow-2xl shadow-ocean-950/15 ring-1 ring-ocean-950/5">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={(event) => {
                            setDismissed(group.id);
                            event.currentTarget.blur();
                          }}
                          aria-current={isActive(pathname, link.href) ? "page" : undefined}
                          className={`block rounded-2xl px-4 py-3 transition-colors hover:bg-ocean-50 ${
                            isActive(pathname, link.href) ? "bg-ocean-50" : ""
                          }`}
                        >
                          <span className="block text-sm font-semibold text-ocean-950">{link.label}</span>
                          <span className="mt-0.5 block text-xs leading-snug text-ocean-800/70">{link.description}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
          <Link
            href={libraryLink.href}
            aria-current={isActive(pathname, libraryLink.href) ? "page" : undefined}
            className={`relative text-sm font-medium transition-colors ${scrolled ? "text-ocean-950" : "text-white/90"}`}
          >
            {libraryLink.label}
            <span
              className={`absolute -bottom-1 left-0 h-0.5 bg-sun-400 transition-all duration-300 ${
                isActive(pathname, libraryLink.href) ? "w-full" : "w-0 hover:w-full"
              }`}
            />
          </Link>
        </nav>

        <Link
          href={planLink.href}
          aria-current={isActive(pathname, planLink.href) ? "page" : undefined}
          className="button-primary hidden min-h-11 gap-4 lg:inline-flex"
        >
          {planLink.label}
          <Icon name="arrow-up" className="h-4 w-4" />
        </Link>

        <button
          ref={menuButton}
          type="button"
          aria-label={open ? "Đóng menu" : "Mở menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
          className={`flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full lg:hidden ${
            scrolled || open ? "text-ocean-950" : "text-white"
          }`}
        >
          <span className={`h-0.5 w-6 bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Điều hướng di động"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            data-lenis-prevent
            className="max-h-[calc(100dvh-80px)] overflow-y-auto overscroll-contain lg:hidden"
          >
            <div className="flex flex-col gap-4 px-5 py-4">
              {navGroups.map((group) => (
                <div key={group.id}>
                  <Link
                    href={group.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 text-xs font-semibold uppercase tracking-[0.2em] text-ocean-600"
                  >
                    {group.label}
                  </Link>
                  <ul className="mt-1 flex flex-col gap-1">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={() => setOpen(false)}
                          aria-current={isActive(pathname, link.href) ? "page" : undefined}
                          className={`block rounded-xl px-4 py-2.5 text-lg font-medium hover:bg-ocean-50 ${
                            isActive(pathname, link.href) ? "bg-ocean-50 text-ocean-600" : "text-ocean-950"
                          }`}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <Link
                href={libraryLink.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(pathname, libraryLink.href) ? "page" : undefined}
                className={`block rounded-xl px-4 py-2.5 text-lg font-medium hover:bg-ocean-50 ${
                  isActive(pathname, libraryLink.href) ? "bg-ocean-50 text-ocean-600" : "text-ocean-950"
                }`}
              >
                {libraryLink.label}
              </Link>
              <Link
                href={planLink.href}
                onClick={() => setOpen(false)}
                className="button-primary"
              >
                {planLink.label}
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
