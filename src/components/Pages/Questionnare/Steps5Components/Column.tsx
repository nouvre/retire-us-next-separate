import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";
import { ColumnType, TaskType } from "./type";

interface ComponentProps {
    column: ColumnType;
    tasks: TaskType[];
    defaultTask: TaskType;
}

const Column: React.FC<ComponentProps> = (props) => {
    return (
        <Droppable droppableId={props.column.id} type="Task">
            {(provided, snapshot) => (
                <div
                    className="w-52  flex-1 h-9 box-border my-2 relative"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                >
                    {props.tasks.map((task, index) => {
                        return <Task key={task.id} task={task} index={index} />
                    })}
                    <div className="w-full absolute top-0">
                        <div className="border border-gray-300 rounded-sm h-9 box-border  flex items-center leading-4 text-center px-2 justify-center w-full opacity-50">
                            {props.defaultTask.content}
                        </div>
                    </div>
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    );
};

export default Column;
