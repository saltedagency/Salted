
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronRight, Globe, Code, Copyright } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface RecentProjectsProps {
  isLoading?: boolean;
}

interface Project {
  id: string;
  icon: React.ReactNode;
  title: string;
  rate: string;
  isPaid: boolean;
  description?: string;
  tags: string[];
  location?: string;
  timeAgo?: string;
}

export function RecentProjects({ isLoading = false }: RecentProjectsProps) {
  const projects: Project[] = [
    {
      id: "p1",
      icon: <Code className="h-5 w-5 text-white" />,
      title: "Web Development Project",
      rate: "$10/hour",
      isPaid: true,
      description: "This project involves implementing both frontend and backend functionalities, as well as integrating with third-party APIs.",
      tags: ["Remote", "Part-time"],
      location: "Germany",
      timeAgo: "2h ago"
    },
    {
      id: "p2",
      icon: <Copyright className="h-5 w-5 text-white" />,
      title: "Copyright Project",
      rate: "$10/hour",
      isPaid: false,
      tags: []
    },
    {
      id: "p3",
      icon: <Globe className="h-5 w-5 text-white" />,
      title: "Web Design Project",
      rate: "$10/hour",
      isPaid: true,
      tags: []
    }
  ];

  return (
    <Card className="overflow-hidden bg-white/95 border-0 shadow-sm h-full">
      <CardHeader className="px-6 pt-6 pb-2 flex flex-row items-center justify-between">
        <CardTitle className="text-xl font-semibold">Your Recent Projects</CardTitle>
        <Button variant="outline" size="sm" className="text-xs bg-gray-50 border-gray-200 text-gray-700">
          See all Project
        </Button>
      </CardHeader>
      <CardContent className="p-3">
        <div className="space-y-1">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-lg hover:bg-gray-50 p-3 transition-colors group relative">
      <div className="flex items-start gap-3">
        <div className={`p-3 rounded-lg bg-orange-500 flex-shrink-0 ${project.id === 'p2' ? 'bg-gray-800' : project.id === 'p3' ? 'bg-blue-500' : ''}`}>
          {project.icon}
        </div>
        
        <div className="flex-grow">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-medium">{project.title}</h3>
            <ChevronDown className="h-5 w-5 text-gray-400 group-hover:hidden" />
            <ChevronRight className="h-5 w-5 text-gray-400 hidden group-hover:block" />
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">{project.rate}</span>
            <Badge 
              variant={project.isPaid ? "default" : "outline"}
              className={project.isPaid 
                ? "bg-blue-900 hover:bg-blue-900 text-white rounded-sm text-xs px-2" 
                : "bg-transparent text-gray-500 border-gray-300 rounded-sm text-xs px-2"}
            >
              {project.isPaid ? "Paid" : "Not Paid"}
            </Badge>
          </div>
          
          {project.description && (
            <p className="text-sm text-gray-600 mt-2">{project.description}</p>
          )}
          
          {project.tags && project.tags.length > 0 && (
            <div className="flex gap-2 mt-2">
              {project.tags.map((tag, i) => (
                <Badge 
                  key={i} 
                  variant="outline" 
                  className="bg-gray-100 border-gray-200 text-gray-700 text-xs font-normal px-2 py-0.5 rounded-sm"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
          
          {(project.location || project.timeAgo) && (
            <div className="flex items-center gap-4 mt-2">
              {project.location && (
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  <Globe className="h-3 w-3" /> {project.location}
                </span>
              )}
              {project.timeAgo && (
                <span className="text-xs text-gray-500">
                  {project.timeAgo}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
