import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-secondary/20 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block font-serif text-2xl font-bold text-foreground mb-4">
              Bloom
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Exploring ideas, technology, and design through carefully crafted stories. 
              Designed for reading, built for speed.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-muted-foreground hover:text-accent transition-colors">Recent Posts</Link></li>
              <li><Link href="/" className="text-muted-foreground hover:text-accent transition-colors">Featured</Link></li>
              <li><Link href="/" className="text-muted-foreground hover:text-accent transition-colors">Archives</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Twitter</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Instagram</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Bloom Blog. All rights reserved.</p>
          <p>Designed with intentionality.</p>
        </div>
      </div>
    </footer>
  );
}
