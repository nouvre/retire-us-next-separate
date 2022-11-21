import React, { useEffect, useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import TaskTarget from "./TaskTarget";
import { ColumnType, TaskType } from "./type";

interface ComponentProps {
    type: string | undefined;
    tasks: TaskType[];
    column: ColumnType;
    draggingNums: {
        start: number,
        end: number,
        isOrder: boolean,
    }
}
const TargetColumn: React.FC<ComponentProps> = (props) => {

    const [tasks, setTasks] = useState<any>([]);
    useEffect(() => {
        let tmpArray = props.tasks.map((task, index) => {
            let num = 0
            if(!props.draggingNums.isOrder || props.draggingNums.start === null || props.draggingNums.end === null) {
                num = 1;
            } else {
                if(props.draggingNums.start < index && index <= props.draggingNums.end) {
                    num = 0;
                } else if(props.draggingNums.start > index && index >= props.draggingNums.end) {
                    num = 2;
                } else {
                    num = 1;
                }
            }
            
            return {...task, placeholder: index + num};
        })
        setTasks(tmpArray);
    }, [props.tasks])
    
    return (
        <div className="w-52 flex flex-col">
            <div hidden={props.type === "order"} className="">
                {props.tasks.map((task, index) => {
                    if (task.blank) {
                        return (
                            <div
                                key={index}
                                className="h-9 my-2 border border-gray-300 border-dashed p-2 flex justify-center text-center items-center"
                            >
                                {index + 1}
                            </div>
                        );
                    } else {
                        return (
                            <div
                                key={index}
                                className="h-9 my-2 border  bg-[#72C9EE] border-[#72C9EE] text-white p-2 flex text-center justify-center items-center leading-4"
                            >
                                {task.content}
                            </div>
                        );
                    }
                })}
            </div>
            <div hidden={props.type !== "order"}>
                <Droppable droppableId={props.column.id} type={`Task`}>
                    {(provided, snapshot) => (
                        <div
                            className=" flex-1"
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {tasks.map((task, index) => {
                                return  (
                                    <TaskTarget
                                        key={task.id}
                                        task={task}
                                        index={index}
                                        placeholder={task.placeholder}
                                        draggingNums={props.draggingNums}
                                    />
                                )}
                              )}
                              {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        </div>
    );
};

export default TargetColumn;
