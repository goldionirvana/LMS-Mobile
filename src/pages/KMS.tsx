import { useState } from 'react';
import { KMS_DATA } from '@/lib/mockData';
import { Search, Book, ChevronRight, ChevronLeft, Calendar, User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { KMSEntry } from '@/types';

export default function KMS() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedArticle, setSelectedArticle] = useState<KMSEntry | null>(null);

  const categories = ['All', ...new Set(KMS_DATA.map(item => item.category))];

  const filteredKMS = KMS_DATA.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (selectedArticle) {
    return (
      <div className="min-h-screen bg-background pb-24 text-foreground">
        <div className="px-6 py-4 flex items-center justify-between border-b border-border sticky top-0 bg-background z-10">
          <button onClick={() => setSelectedArticle(null)} className="p-2 -ml-2 text-muted-foreground">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-sm font-black text-foreground truncate px-4">Article View</h1>
          <div className="w-10" />
        </div>

        <ScrollArea className="h-[calc(100vh-80px)]">
          <div className="px-6 py-8">
            <Badge className="mb-4 bg-guide-gold/10 text-guide-gold border-none uppercase text-[10px] tracking-widest">
              {selectedArticle.category}
            </Badge>
            <h1 className="text-3xl font-black text-foreground leading-tight mb-6">
              {selectedArticle.title}
            </h1>
            
            <div className="flex items-center gap-6 mb-8 text-muted-foreground text-xs">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{selectedArticle.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{selectedArticle.updatedAt}</span>
              </div>
            </div>

            <div className="prose prose-slate max-w-none">
              <p className="text-muted-foreground leading-relaxed text-lg whitespace-pre-wrap">
                {selectedArticle.content}
              </p>
            </div>
          </div>
        </ScrollArea>
      </div>
    );
  }

  return (
    <div className="pb-24 bg-background min-h-screen text-foreground">
      <div className="px-6 py-8 bg-academy-blue text-white rounded-b-[40px] mb-8 shadow-xl">
        <h1 className="text-2xl font-black mb-2">Knowledge Base</h1>
        <p className="text-white/60 text-sm mb-6">Access our internal documentation and best practices.</p>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
          <Input 
            placeholder="Search knowledge..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-white/10 border-white/10 text-white placeholder:text-white/40 focus-visible:ring-1 focus-visible:ring-guide-gold h-12 rounded-2xl"
          />
        </div>
      </div>

      <div className="px-6">
        <ScrollArea className="w-full whitespace-nowrap mb-6">
          <div className="flex gap-2 pb-2">
            {categories.map((cat) => (
              <Badge
                key={cat}
                variant={selectedCategory === cat ? 'default' : 'outline'}
                className={`px-4 py-1.5 rounded-full cursor-pointer transition-all ${
                  selectedCategory === cat 
                    ? 'bg-guide-gold text-white border-guide-gold' 
                    : 'bg-muted text-muted-foreground border-border'
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </Badge>
            ))}
          </div>
          <ScrollBar orientation="horizontal" className="hidden" />
        </ScrollArea>

        <div className="space-y-4">
          {filteredKMS.map((item) => (
            <Card 
              key={item.id} 
              onClick={() => setSelectedArticle(item)}
              className="border-border bg-card hover:bg-muted/50 transition-all cursor-pointer group shadow-sm"
            >
              <CardContent className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-guide-gold/10 flex items-center justify-center text-guide-gold shrink-0">
                      <Book className="w-5 h-5" />
                    </div>
                    <div>
                      <Badge variant="outline" className="text-[10px] uppercase tracking-wider mb-2 border-guide-gold/20 text-guide-gold">
                        {item.category}
                      </Badge>
                      <h3 className="font-bold text-foreground mb-1 group-hover:text-academy-blue transition-colors">{item.title}</h3>
                      <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">{item.content}</p>
                      <div className="flex items-center gap-3 mt-3 text-[10px] font-medium text-muted-foreground/40">
                        <span>By {item.author}</span>
                        <span className="w-1 h-1 bg-border rounded-full"></span>
                        <span>Updated {item.updatedAt}</span>
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground/20 group-hover:text-academy-blue transition-colors mt-1" />
                </div>
              </CardContent>
            </Card>
          ))}
          
          {filteredKMS.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-muted-foreground/20" />
              </div>
              <p className="text-muted-foreground/40 font-medium">No results found for your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
