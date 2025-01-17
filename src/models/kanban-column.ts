import KanbanCard from "./kanban-card";

export default interface KanbanColumn {
  id: string;
  title: string;
  cards: KanbanCard[]
}
