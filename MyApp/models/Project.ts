// src/models/Project.ts
import { Post } from "./Post";

export type Project = {
  id: string;
  name: string;
  posts: Post[];
};
