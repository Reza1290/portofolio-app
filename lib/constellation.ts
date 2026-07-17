export type GraphNode = {
  id: "about" | "experience" | "projects" | "skills" | "certifications" | "contact";
  label: string;
  hint: string;
  x: number;
  y: number;
};

export const GRAPH_CENTER = { x: 50, y: 50 };

export const graphNodes: GraphNode[] = [
  { id: "about", label: "About", hint: "The story", x: 19, y: 24 },
  { id: "experience", label: "Experience", hint: "The path", x: 81, y: 21 },
  { id: "projects", label: "Projects", hint: "The work", x: 89, y: 57 },
  { id: "skills", label: "Skills", hint: "The stack", x: 70, y: 85 },
  { id: "certifications", label: "Certifications", hint: "The proof", x: 27, y: 86 },
  { id: "contact", label: "Contact", hint: "Say hello", x: 11, y: 56 },
];

export const graphEdges: [GraphNode["id"], GraphNode["id"]][] = [
  ["about", "experience"],
  ["experience", "projects"],
  ["projects", "skills"],
  ["skills", "certifications"],
  ["certifications", "contact"],
  ["contact", "about"],
  ["about", "projects"],
  ["experience", "skills"],
  ["contact", "skills"],
];
