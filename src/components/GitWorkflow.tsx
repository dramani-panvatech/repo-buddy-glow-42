import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GitBranch, GitMerge, GitCommit } from "lucide-react";

const workflowSteps = [
  {
    id: 1,
    command: "git init",
    description: "Initialize repository",
    type: "main",
    icon: GitCommit,
  },
  {
    id: 2,
    command: "git add . && git commit",
    description: "Stage and commit changes",
    type: "main",
    icon: GitCommit,
  },
  {
    id: 3,
    command: "git checkout -b feature/new",
    description: "Create and switch to new branch",
    type: "feature",
    icon: GitBranch,
  },
  {
    id: 4,
    command: "git commit -m 'Add feature'",
    description: "Commit feature changes",
    type: "feature",
    icon: GitCommit,
  },
  {
    id: 5,
    command: "git merge feature/new",
    description: "Merge feature into main",
    type: "merge",
    icon: GitMerge,
  },
];

export const GitWorkflow = () => {
  const getStepStyles = (type: string) => {
    switch (type) {
      case 'main':
        return {
          dot: 'bg-primary border-primary/20',
          command: 'text-primary',
          bg: 'bg-primary/5 border-primary/20'
        };
      case 'feature':
        return {
          dot: 'bg-accent border-accent/20',
          command: 'text-accent-foreground',
          bg: 'bg-accent/5 border-accent/20'
        };
      case 'merge':
        return {
          dot: 'bg-green-500 border-green-500/20',
          command: 'text-green-700',
          bg: 'bg-green-50 border-green-200'
        };
      default:
        return {
          dot: 'bg-muted border-muted/20',
          command: 'text-muted-foreground',
          bg: 'bg-muted/5 border-muted/20'
        };
    }
  };

  return (
    <Card className="p-6 bg-gradient-to-br from-card via-card to-primary/5">
      <div className="flex items-center gap-2 mb-6">
        <GitBranch className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold text-foreground">Workflow Visualization</h3>
      </div>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-border"></div>
        
        {/* Workflow steps */}
        <div className="space-y-6 relative">
          {workflowSteps.map((step, index) => {
            const styles = getStepStyles(step.type);
            const Icon = step.icon;
            
            return (
              <div key={step.id} className="flex items-start gap-4 relative">
                {/* Timeline dot */}
                <div className={`
                  relative z-10 w-3 h-3 rounded-full border-2 ${styles.dot}
                  flex items-center justify-center shrink-0 mt-2
                `}>
                  <div className="w-1 h-1 bg-current rounded-full"></div>
                </div>
                
                {/* Step content */}
                <div className={`
                  flex-1 border rounded-lg p-4 ${styles.bg}
                  transition-all duration-200 hover:shadow-sm
                `}>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-4 h-4 text-muted-foreground" />
                    <Badge variant="outline" className="text-xs">
                      Step {step.id}
                    </Badge>
                  </div>
                  
                  <div className={`text-sm font-mono mb-1 ${styles.command}`}>
                    {step.command}
                  </div>
                  
                  <div className="text-xs text-muted-foreground">
                    {step.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Branch connection indicators */}
        <div className="absolute left-3 top-24 w-6 h-6 border-l-2 border-b-2 border-accent/30 rounded-bl-lg"></div>
        <div className="absolute left-3 bottom-24 w-6 h-6 border-l-2 border-t-2 border-green-300 rounded-tl-lg"></div>
      </div>
    </Card>
  );
};