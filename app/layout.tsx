import "./globals.css";
import Link from "next/link";
export const metadata = { title: "SkillBridge", description: "From claimed skills to demonstrated capability" };
export default function Layout({ children }: {children: React.ReactNode}) { return <html lang="en"><body><div className="shell"><nav className="nav"><Link className="brand" href="/">skillbridge</Link><div className="navlinks"><Link href="/dashboard">Dashboard</Link><Link href="/opportunities">Opportunities</Link><Link href="/login">Sign in</Link></div></nav>{children}</div></body></html> }
