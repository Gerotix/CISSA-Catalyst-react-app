import { Project } from "../models/Project";

export const sampleProjects: Project[] = [
  {
    id: "proj1",
    name: "My First Project",
    posts: [
      {
        id: "post1",
        type: "note",
        title: "First Idea",
        defaultImage: "note.png",
        customImage: "custom1.png",
        connections: ["post2", "post3"],
        projectId: "proj1"
      },
      {
        id: "post2",
        type: "task",
        title: "Todo Item",
        defaultImage: "task.png",
        connections: [],
        projectId: "proj1"
      }
    ]
  }
];
