"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar(){

    const pathName = usePathname();
    const linkClass = (rota) =>
        pathName === rota
        ?"text-white font-bold rounded-2xl bg-[rgba(23,33,68,0.61)] px-5 py-0.5"
        : "text-white px-5"

    return (
        <nav className="bg-[rgba(23,33,68,0.61)] rounded-2xl inline-block py-0 space-x-6 text-white font-extralight">
            <Link href="/" className={linkClass("/")}>Home</Link>
            <Link href="/Femininos" className={linkClass("/Femininos")}>Femininos</Link>
            <Link href="/Masculinos" className={linkClass("/Masculinos")}>Masculinos</Link>
            <Link href="/Banho" className={linkClass("/Banho")}>Banho</Link>
            <Link href="/Infantil" className={linkClass("/Infantil")}>Infantil</Link>
        </nav>
    );
}