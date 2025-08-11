import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Copy, CheckCircle } from "lucide-react";
import { useState } from "react";

interface GitCommandProps {
  title: string;
  command: string;
  description: string;
  category: string;
  example?: string;
}

export const GitCommand = ({ title, command, description, category, example }: GitCommandProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const getCategoryVariant = (cat: string) => {
    switch (cat.toLowerCase()) {
      case 'basic': return 'default';
      case 'branching': return 'secondary';
      case 'remote': return 'outline';
      case 'advanced': return 'destructive';
      default: return 'secondary';
    }
  };

  return (
    <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-border/50 hover:border-primary/20">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start gap-3 flex-1">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
              <Badge variant={getCategoryVariant(category)} className="text-xs">
                {category}
              </Badge>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => copyToClipboard(command)}
            className="h-8 w-8 p-0 shrink-0 opacity-60 hover:opacity-100 transition-opacity"
          >
            {copied ? (
              <CheckCircle className="h-4 w-4 text-green-600" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>

        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{description}</p>

        <div className="space-y-3">
          <div className="relative group/code">
            <div className="bg-muted/50 border border-border rounded-lg p-4 font-mono text-sm">
              <code className="text-foreground">{command}</code>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => copyToClipboard(command)}
              className="absolute top-2 right-2 h-6 w-6 p-0 opacity-0 group-hover/code:opacity-100 transition-opacity"
            >
              <Copy className="h-3 w-3" />
            </Button>
          </div>

          {example && (
            <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
              <div className="text-xs font-medium text-muted-foreground mb-2 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                Example
              </div>
              <code className="text-sm font-mono text-accent-foreground">{example}</code>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};