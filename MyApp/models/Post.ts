export type PostType = "note" | "task" | "link" | "image";

export type Post = {
  id: string;
  type: PostType;
  title: string;
  defaultImage: string;
  customImage?: string | null;
  connections: string[]; // IDs of other posts
  projectId: string;
};
