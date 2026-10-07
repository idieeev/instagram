"use client";

import { useEffect, useState } from "react";
import s from "./Navbar.module.css";

type Item = { id: string; label: string };

export default function Navbar({
  name,
  items,
}: {
  name: string;
  items: Item[];
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={s.nav}>
      <a className={s.logo} href="#home" onClick={() => setOpen(false)}>
        {name}
      </a>

      <button
        type="button"
        className={`${s.burger} ${open ? s.open : ""}`}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="main-menu"
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        id="main-menu"
        aria-label="Main"
        className={`${s.menu} ${open ? s.show : ""}`}
      >
        {items.map((n) => (
          <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}>
            {n.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
