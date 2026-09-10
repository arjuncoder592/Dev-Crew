import Link from "next/link";
const items=[["/dashboard","Overview"],["/skills","Skills"],["/assessments","Assessments"],["/gaps","Skill gaps"],["/simulations","Simulations"],["/opportunities","Opportunities"],["/portfolio","Portfolio"]];
export function Sidebar(){return <aside className="side">{items.map(([href,label])=><Link key={href} href={href}>{label}</Link>)}</aside>}
