import { ProjectSubmission } from "@/types/submission";

export const mockProjects: ProjectSubmission[] = [
  {
    id: "1",
    title: "AI-Powered Task Manager",
    description: "A smart task management system using AI for prioritization",
    repoUrl: "https://github.com/user/ai-task-manager",
    demoUrl: "https://ai-task-manager.demo",
    thumbnailUrl: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1",
    techStack: ["React", "TypeScript", "OpenAI", "TailwindCSS"],
    teamMembers: ["John Doe", "Jane Smith"],
    submittedAt: new Date("2024-03-15"),
    hackathonId: "1",
    status: "under_review",
  },
  {
    id: "2",
    title: "Blockchain Voting System",
    description: "Secure and transparent voting system using blockchain",
    repoUrl: "https://github.com/user/blockchain-voting",
    techStack: ["Solidity", "Next.js", "Ethers.js"],
    teamMembers: ["John Doe", "Alice Johnson"],
    submittedAt: new Date("2024-03-10"),
    hackathonId: "2",
    status: "submitted",
  },
  {
    id: "3",
    title: "AR Navigation App",
    description: "Augmented reality indoor navigation system",
    repoUrl: "https://github.com/user/ar-navigation",
    techStack: ["React Native", "ARKit", "Node.js"],
    teamMembers: ["John Doe"],
    submittedAt: new Date("2024-03-01"),
    hackathonId: "3",
    status: "draft",
  },
];