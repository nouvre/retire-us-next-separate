import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { TaskType } from "./type";

interface ComponentProps {
    index: number;
    task: TaskType;
    // disabled: boolean | undefined;
}

const Task: React.FC<ComponentProps> = (props) => {
    return (
        <div className="my-2 w-full">
            <Draggable
                draggableId={props.task.id}
                index={props.index}
            >
                {(provided, snapshot) => {
                    return (
                        <div
                            className="border relative z-50 bg-[#72C9EE] border-[#72C9EE] text-white rounded-sm h-9 box-border  flex items-center leading-4 text-center px-2 justify-center w-full"
                            style={{
                                backgroundColor: snapshot.isDragging
                                    ? "green"
                                    : "white",
                            }}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                        >
                            {props.task.content}
                        </div>
                    );
                }}
            </Draggable>
        </div>
    );
};

export default Task;
