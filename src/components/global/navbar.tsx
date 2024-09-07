import { SquareDots } from "./sqaure-dot";

export default function Navbar() {
    return (
      <header data-scroll-container className="py-4 antialiased z-10 bg-background/80 border-b border-border backdrop-blur-lg fixed top-0 left-0 right-0">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="logo">
            <h1 className="expanded text-lg font-semibold">s5Sajid<span className="text-primary">.</span></h1>
          </div>
    
          <ul className="nav_links gap-2 hidden lg:flex">
            <li className="text-muted-foreground hover:text-foreground transition-all duration-200"> <a href="#home">Home</a> </li>
            <li className="text-muted-foreground hover:text-foreground transition-all duration-200"> <a href="#about">About</a> </li>
            <li className="text-muted-foreground hover:text-foreground transition-all duration-200"> <a href="#skills">Skills</a> </li>
            <li className="text-muted-foreground hover:text-foreground transition-all duration-200"> <a href="#projects">Projects</a> </li>
          </ul>
    
          <div className="cta flex gap-4 items-center">
          <div className="p-1 inline-block border border-border bg-primary/10 hover:bg-primary/20 transition-all duration-300">
            <button className="inline-flex duration-500 hover:shadow-xl hover:shadow-primary/40 items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-8 px-3">
                Contact Me
            </button>
            </div>
          </div>
        </nav>
      </header>
    );
}