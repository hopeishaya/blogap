import { Link } from "wouter";
import { format } from "date-fns";
import { type Post } from "@shared/schema";
import { ArrowRight, Calendar } from "lucide-react";

interface PostCardProps {
  post: Post;
  index: number;
}

export function PostCard({ post, index }: PostCardProps) {
  return (
    <article 
      className="group flex flex-col h-full bg-card hover:bg-secondary/30 border border-border/40 hover:border-border transition-all duration-300 rounded-xl overflow-hidden shadow-sm hover:shadow-md"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Decorative top bar for visual interest */}
      <div className="h-1.5 w-full bg-gradient-to-r from-accent/0 via-accent/50 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-4 uppercase tracking-wider">
          <Calendar className="w-3.5 h-3.5" />
          {post.createdAt ? format(new Date(post.createdAt), "MMMM d, yyyy") : "Unknown Date"}
        </div>
        
        <Link href={`/post/${post.id}`}>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-3 leading-tight group-hover:text-accent transition-colors cursor-pointer">
            {post.title}
          </h2>
        </Link>
        
        <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="mt-auto pt-4 border-t border-border/30">
          <Link href={`/post/${post.id}`} className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-accent transition-colors">
            Read Article 
            <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}
