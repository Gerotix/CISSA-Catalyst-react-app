import AsyncStorage from "@react-native-async-storage/async-storage";
import { Project } from "../models/Project";

const PROJECTS_KEY = "projects";

export async function saveProjects(projects: Project[]) {
  await AsyncStorage.setItem(PROJECTS_KEY, JSON.stringify(projects));
}

export async function loadProjects(): Promise<Project[]> {
  const data = await AsyncStorage.getItem(PROJECTS_KEY);
  return data ? JSON.parse(data) : [];
}
