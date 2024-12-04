export interface Vote {
  id: string;
  projectId: string;
  judgeId: string;
  criteria: {
    innovation: number;
    technicalComplexity: number;
    impact: number;
    presentation: number;
    overall: number;
  };
  feedback?: string;
  createdAt: Date;
}

export interface Award {
  id: string;
  name: string;
  description: string;
  icon: string;
  type: 'gold' | 'silver' | 'bronze' | 'special';
  points: number;
}

export interface ProjectScore {
  projectId: string;
  averageScore: number;
  scores: {
    innovation: number;
    technicalComplexity: number;
    impact: number;
    presentation: number;
    overall: number;
  };
  votes: number;
}