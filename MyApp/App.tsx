import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList } from "react-native";
import { Project } from "@/models/Project";
import { sampleProjects } from "@/data/sampleData";
import { saveProjects, loadProjects } from "@/storage/storage";

export default function App() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // load or seed data
    (async () => {
      const loaded = await loadProjects();
      if (loaded.length === 0) {
        await saveProjects(sampleProjects);
        setProjects(sampleProjects);
      } else {
        setProjects(loaded);
      }
    })();
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {projects.map((project) => (
        <View key={project.id}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            {project.name}
          </Text>
          <FlatList
            data={project.posts}
            keyExtractor={(post) => post.id}
            renderItem={({ item }) => (
              <View style={{ marginVertical: 10 }}>
                <Image
                  source={{ uri: item.customImage || item.defaultImage }}
                  style={{ width: 50, height: 50 }}
                />
                <Text>{item.title}</Text>
              </View>
            )}
          />
        </View>
      ))}
    </View>
  );
}