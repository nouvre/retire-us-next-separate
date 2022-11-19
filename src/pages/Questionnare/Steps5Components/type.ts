export interface ColumnType {
    id: string;
    title: string;
    accept: string;
    taskIds: string[];
}
export interface TaskType {
    id: string;
    content: string;
    blank: boolean | undefined;
}