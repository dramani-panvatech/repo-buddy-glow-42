export interface GitCommandData {
  id: string;
  title: string;
  command: string;
  description: string;
  category: string;
  example?: string;
}

export const gitCommands: GitCommandData[] = [
  // Basic Commands
  {
    id: "1",
    title: "Initialize Repository",
    command: "git init",
    description: "Create a new Git repository in the current directory",
    category: "basic",
    example: "git init my-project"
  },
  {
    id: "2",
    title: "Clone Repository",
    command: "git clone <url>",
    description: "Download a repository from a remote server",
    category: "basic",
    example: "git clone https://github.com/user/repo.git"
  },
  {
    id: "3",
    title: "Check Status",
    command: "git status",
    description: "Show the status of changes as untracked, modified, or staged",
    category: "basic"
  },
  {
    id: "4",
    title: "Stage Changes",
    command: "git add <file>",
    description: "Add file contents to the staging area",
    category: "basic",
    example: "git add . (all files) or git add filename.js"
  },
  {
    id: "5",
    title: "Commit Changes",
    command: "git commit -m \"message\"",
    description: "Record staged changes to the repository with a message",
    category: "basic",
    example: "git commit -m \"Add user authentication\""
  },
  
  // Branching Commands
  {
    id: "6",
    title: "List Branches",
    command: "git branch",
    description: "List all local branches in the repository",
    category: "branching",
    example: "git branch -a (show all branches including remote)"
  },
  {
    id: "7",
    title: "Create Branch",
    command: "git branch <name>",
    description: "Create a new branch with the specified name",
    category: "branching",
    example: "git branch feature/user-profile"
  },
  {
    id: "8",
    title: "Switch Branch",
    command: "git checkout <branch>",
    description: "Switch to the specified branch",
    category: "branching",
    example: "git checkout main"
  },
  {
    id: "9",
    title: "Create and Switch",
    command: "git checkout -b <name>",
    description: "Create a new branch and switch to it in one command",
    category: "branching",
    example: "git checkout -b feature/new-feature"
  },
  {
    id: "10",
    title: "Merge Branch",
    command: "git merge <branch>",
    description: "Merge the specified branch into the current branch",
    category: "branching",
    example: "git merge feature/user-profile"
  },
  
  // Remote Commands
  {
    id: "11",
    title: "Add Remote",
    command: "git remote add <name> <url>",
    description: "Add a new remote repository",
    category: "remote",
    example: "git remote add origin https://github.com/user/repo.git"
  },
  {
    id: "12",
    title: "Push Changes",
    command: "git push <remote> <branch>",
    description: "Upload local commits to a remote repository",
    category: "remote",
    example: "git push origin main"
  },
  {
    id: "13",
    title: "Pull Changes",
    command: "git pull <remote> <branch>",
    description: "Download and merge changes from a remote repository",
    category: "remote",
    example: "git pull origin main"
  },
  {
    id: "14",
    title: "Fetch Changes",
    command: "git fetch <remote>",
    description: "Download changes from remote without merging",
    category: "remote",
    example: "git fetch origin"
  },
  
  // Advanced Commands
  {
    id: "15",
    title: "View Commit History",
    command: "git log",
    description: "Show commit history for the current branch",
    category: "advanced",
    example: "git log --oneline --graph"
  },
  {
    id: "16",
    title: "Reset Changes",
    command: "git reset <file>",
    description: "Unstage a file while retaining changes in working directory",
    category: "advanced",
    example: "git reset HEAD~1 (undo last commit)"
  },
  {
    id: "17",
    title: "Stash Changes",
    command: "git stash",
    description: "Temporarily store modified files",
    category: "advanced",
    example: "git stash pop (apply stashed changes)"
  },
  {
    id: "18",
    title: "Show Differences",
    command: "git diff",
    description: "Show changes between commits, branches, or working directory",
    category: "advanced",
    example: "git diff HEAD~1..HEAD"
  }
];

export const categories = ["all", "basic", "branching", "remote", "advanced"];