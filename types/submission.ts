export interface ProjectSubmission {
  id: string;
  title: string;
  description: string;
  repoUrl: string;
  demoUrl?: string;
  thumbnailUrl?: string;
  techStack: string[];
  teamMembers: string[];
  submittedAt: Date;
  hackathonId: string;
  status: 'draft' | 'submitted' | 'under_review';
}

export interface SubmissionFormData {
  title: string;
  description: string;
  repoUrl: string;
  demoUrl?: string;
  techStack: string[];
  teamMembers: string[];
}