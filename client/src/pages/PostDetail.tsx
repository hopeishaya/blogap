import { useRoute, Link } from "wouter";
import { usePost } from "@/hooks/use-posts";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Loader2, ArrowLeft, ArrowRight, Calendar, Share2, Bookmark } from "lucide-react";
import { format } from "date-fns";
import NotFound from "./not-found";

export default function PostDetail() {
  const [, params] = useRoute("/post/:id");
  const id = params?.id ? parseInt(params.id) : 0;
  const { data: post, isLoading, error } = usePost(id);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-accent" />
        </div>
        <Footer />
      </div>
    );
  }

  // 404 is handled by the usePost hook returning null or error, 
  // but explicitly checking here allows us to render the NotFound component
  if (error || !post) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-accent/20">
      <Header />

      <main className="flex-grow animate-in fade-in duration-500">
        <article className="pb-20">
          {/* Article Header */}
          <header className="pt-20 pb-16 px-4 border-b border-border/40 bg-secondary/10">
            <div className="container mx-auto max-w-4xl text-center">
              <Link href="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-accent mb-8 transition-colors group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Journal
              </Link>
              
              <div className="flex items-center justify-center gap-4 text-sm font-medium text-muted-foreground mb-6">
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {post.createdAt ? format(new Date(post.createdAt), "MMMM d, yyyy") : "Unknown Date"}
                </span>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span>5 min read</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-8 leading-tight text-balance">
                {post.title}
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-serif italic">
                {post.excerpt}
              </p>
            </div>
          </header>

          {/* Article Content */}
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl pt-16">
            <div className="prose prose-lg prose-slate md:prose-xl mx-auto prose-headings:font-serif prose-headings:font-bold prose-headings:text-primary prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-img:shadow-lg">
              {post.content.split('\n').map((paragraph, i) => (
                <p key={i} className="mb-6 text-foreground/80 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            
            {/* Article Footer / Actions */}
            <div className="mt-16 pt-8 border-t border-border flex items-center justify-between">
              <div className="flex gap-4">
                <button className="p-2 rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors" title="Share">
                  <Share2 className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors" title="Save">
                  <Bookmark className="w-5 h-5" />
                </button>
              </div>
              
              <Link href="/" className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20">
                Read Next Article
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
