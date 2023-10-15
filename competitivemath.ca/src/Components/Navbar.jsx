import { useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
    return (
        <>
        <nav className="bg-blue-800 text-white flex justify-between items-stretch gap-8 px-4 py-1">
            <div className="justify-between inline-flex">
                <a href="/" className="inline-flex ">
                    <img src="../images/CM logo.svg" className="w-16 l-16"/>
                    <h1 className="text-2xl font-bold mt-4 ml-3">CompetitiveMath.ca</h1>
                </a>

                <ul className="list-none flex gap-3 text-lg float-right ml-16">
                    <NavBtn href="/">Home</NavBtn>
                    <NavBtn href="/problems">Problems</NavBtn>
                    <NavBtn href="/contests">Contests</NavBtn>
                    <NavBtn href="/community">Community</NavBtn>
                    <NavBtn href="/about">About</NavBtn>
                </ul>
            </div>
        
            <a href="/profile" className="inline-flex items-center">
                <img src="../images/Default PFP.svg" className="w-14 l-14"/>
            </a>
        </nav>
        </>
    )
}

function NavBtn({href, children, ...props}) {
    const resolvedPath = useResolvedPath(href)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})

    return (
        <li>
            <a href={href} className="h-full inline-flex items-center px-5" {...props}>{children}</a>
            {isActive && (
                <hr className="border-t-4 border-white"/>
            )}
        </li>
    )
}
