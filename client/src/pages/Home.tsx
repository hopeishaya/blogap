import { usePosts } from "@/hooks/use-posts";
import { PostCard } from "@/components/PostCard";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Loader2 } from "lucide-react";

export default function Home() {
  const { data: posts, isLoading, error } = usePosts();

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-accent/20">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 px-4 border-b border-border/40 bg-gradient-to-b from-secondary/30 to-background overflow-hidden">
          <div className="container mx-auto max-w-5xl text-center relative z-10">
            <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase mb-6 animate-fade-in-up">
              Welcome to Bloom
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6 leading-tight tracking-tight animate-fade-in-up delay-100">
              Stories for the <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Curious Mind</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              A collection of thoughts on design, development, and the art of building software.
            </p>
          </div>
          
          {/* Abstract background elements */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        </section>

        {/* Content Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="w-10 h-10 animate-spin text-accent mb-4" />
              <p className="text-muted-foreground font-medium">Loading stories...</p>
            </div>
          ) : error ? (
            <div className="text-center py-20 bg-destructive/5 rounded-2xl border border-destructive/20 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-destructive mb-2">Unable to load posts</h3>
              <p className="text-muted-foreground">Please try again later or check your connection.</p>
            </div>
          ) : posts?.length === 0 ? (
            <div className="text-center py-20 max-w-xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-6">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">No posts yet</h3>
              <p className="text-muted-foreground">We're just getting started. Check back soon for new content.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {posts?.map((post, i) => (
                <div key={post.id} className="animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: `${i * 100}ms` }}>
                  <PostCard post={post} index={i} />
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
