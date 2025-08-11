
import React, { useState, useMemo } from 'react';
import { SearchBar } from '../components/SearchBar';
import { GitCommand } from '../components/GitCommand';
import { GitWorkflow } from '../components/GitWorkflow';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  GitBranch, 
  Terminal, 
  BookOpen, 
  Code2, 
  ArrowRight,
  Users,
  Star,
  Download,
  Heart
} from 'lucide-react';
import { gitCommands } from '../data/gitCommands';

const categories = ['All', 'Basic', 'Branching', 'Remote', 'Advanced'];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredCommands = useMemo(() => {
    return gitCommands.filter(cmd => {
      const matchesSearch = cmd.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           cmd.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           cmd.command.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || cmd.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const stats = [
    { label: 'Commands', value: '50+', icon: Terminal },
    { label: 'Categories', value: '4', icon: BookOpen },
    { label: 'Examples', value: '100+', icon: Code2 },
    { label: 'Users', value: '1K+', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Modern Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 border-b border-border">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:4rem_4rem]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Star className="w-4 h-4 mr-2" />
                Git Command Reference
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Master{' '}
                <span className="gradient-text">Git Commands</span>
                <br />
                with Interactive Learning
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
                Comprehensive Git command reference with interactive examples, workflows, and best practices. 
                Perfect for beginners and experienced developers alike.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                Start Learning
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                <Download className="mr-2 h-4 w-4" />
                Cheat Sheet
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <Card key={index} className="p-4 text-center">
                  <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="w-full lg:w-96">
              <SearchBar 
                value={searchTerm}
                onChange={setSearchTerm}
                placeholder="Search git commands..."
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all duration-200"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Git Workflow Section */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <GitBranch className="w-6 h-6 text-primary" />
                Git Workflow
              </h2>
              <GitWorkflow />
            </div>

            {/* Popular Commands */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Most Popular</h3>
              <div className="space-y-3">
                {gitCommands.slice(0, 5).map((cmd, index) => (
                  <div key={index} className="flex items-center justify-between p-2 rounded-md hover:bg-accent/50 transition-colors">
                    <span className="text-sm font-mono">{cmd.command.split(' ')[0]}</span>
                    <Badge variant="secondary" className="text-xs">{cmd.category}</Badge>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Commands Grid */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Terminal className="w-6 h-6 text-primary" />
                Commands ({filteredCommands.length})
              </h2>
              {searchTerm && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setSearchTerm('')}
                >
                  Clear search
                </Button>
              )}
            </div>

            {filteredCommands.length === 0 ? (
              <Card className="p-12 text-center">
                <Terminal className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-semibold mb-2">No commands found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search terms or category filter.
                </p>
              </Card>
            ) : (
              <div className="grid gap-6">
                {filteredCommands.map((command) => (
                  <GitCommand
                    key={command.id}
                    title={command.title}
                    command={command.command}
                    description={command.description}
                    category={command.category}
                    example={command.example}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold">Ready to Master Git?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of developers who have improved their Git skills with our interactive reference guide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                <Heart className="mr-2 h-4 w-4 text-red-500" />
                Bookmark This Page
              </Button>
              <Button variant="outline" size="lg">
                Share with Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
