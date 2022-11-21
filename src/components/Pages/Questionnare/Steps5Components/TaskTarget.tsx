import React, { useEffect, useRef } from "react";
import { Draggable } from "react-beautiful-dnd";
import { TaskType } from "./type";

interface ComponentProps {
    task: TaskType;
    index: number;
    draggingNums: {
        start: number,
        end: number | null,
        isOrder: boolean | null,
    }
    placeholder: number
}

const TargetTask: React.FC<ComponentProps> = (props) => {

    useEffect(() => {
        if(props.task.blank) {
            if(node.current) {
                node.current.innerHTML = props.placeholder.toString();
            }
        }
    }, [props.placeholder])
    
    const node = useRef<HTMLSpanElement>(null);

    return (
        <Draggable
            draggableId={props.task.id}
            index={props.index}
            isDragDisabled={props.task.blank}
        >
            {(provided, snapshot) => (
                <div
                    className={`border ${props.task.blank ? 'border-dashed' : 'border-solid'} my-2 ${props.task.blank ? 'bg-white  border-gray-300' : ' bg-[#72C9EE] border-[#72C9EE] text-white'} rounded-sm h-9 box-border  flex items-center justify-center text-center leading-4 px-2 w-52`}
                    style={{
                        backgroundColor: props.task.blank
                            ? "lightgrey"
                            : snapshot.isdragging
                            ? "lightgreen"
                            : "white", 
                    }}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <span ref={node}>
                        {props.task.blank
                            ? props.placeholder
                            : props.task.content}
                    </span>
                </div>
            )}
        </Draggable>
    );
};

export default TargetTask;
