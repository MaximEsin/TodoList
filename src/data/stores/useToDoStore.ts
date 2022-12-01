import create from "zustand";

interface Task {
  id: string;
  title: string;
  createdAt: number;
}

interface ToDoStore {
  tasks: Task[];
  createTask: (title: string) => void;
  updateTast: (id: string, title: string) => void;
  removeTast: (id: string) => void;
}
