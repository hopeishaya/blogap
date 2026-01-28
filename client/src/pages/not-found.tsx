import { Link } from "wouter";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-destructive/10 rounded-full flex items-center justify-center animate-bounce-slow">
            <AlertCircle className="w-12 h-12 text-destructive" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
          Page Not Found
        </h1>
        
        <p className="text-lg text-muted-foreground mb-8">
          The story you are looking for doesn't exist or has been moved to another chapter.
        </p>
        
        <Link href="/" className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          Return Home
        </Link>
      </div>
    </div>
  );
}
