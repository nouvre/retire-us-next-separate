import React, { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";

import Column from "./Column";
import TargetColumn from "./TargetColumn";
import initialDatas from "./initial-data";

interface StateType {
  tasks: any;
  columns: any;
  columnOrder: string[];
}

interface ComponentProps {
  update: (data: any) => void,
  initialData: StateType,
}

const App: React.FC<ComponentProps> = ({initialData, update}) => {
  const [state, setState] = useState<StateType>(initialDatas);
  const [draggingNums, setDraggingNums] = useState({
    start: 0,
    end: 0,
    isOrder:false
  });
  const [moveType, setMoveType] = useState('order');

  useEffect(() => {
    setState(initialData);
  }, [])
  const onDragEnd = (result) => {
    setMoveType('order');
    setDraggingNums({start: 0, end: 0, isOrder: false});
    const { destination, source, draggableId } = result;
    let tmpState = {...state};
    if (!destination) {
      return;
    }
    if(destination.droppableId === 'column-6' && source.droppableId !== 'column-6') {
      if(!tmpState.tasks[tmpState.columns[destination.droppableId].taskIds[destination.index]]) {
        return;
      } else if(tmpState.tasks[tmpState.columns[destination.droppableId].taskIds[destination.index]] && !tmpState.tasks[tmpState.columns[destination.droppableId].taskIds[destination.index]].blank) {
        return;
      } else if(tmpState.tasks[tmpState.columns[destination.droppableId].taskIds[destination.index]]) {
        tmpState.columns[destination.droppableId].taskIds.splice(destination.index, 1);
      }
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    
    const start = tmpState.columns[source.droppableId];
    const finish = tmpState.columns[destination.droppableId];

    if(finish.id !== 'column-6') {
      if(finish.accept !== draggableId) {
        return;
      }
    }

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...state,
        columns: {
          ...tmpState.columns,
          [newColumn.id]: newColumn,
        },
      };

      update(newState);
      setState(newState);
      return;
    }
    // Moving from one list to another
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    let newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };
    if(destination.droppableId !== 'column-6' && source.droppableId === 'column-6') {
      newStart.taskIds.splice(source.index, 0, `blank-${source.index + 1}`)
    }

    const newState = {
      ...state,
      columns: {
        ...tmpState.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    update(newState);
    setState(newState);
  };

  const onDragStart = (e) => {
      if (e.source.droppableId === "column-6") {
        setMoveType('order');
      } else {
        setMoveType('assign');

      }
  };

  const targetTasks = (id) => {
    const tasks = state.columns[id].taskIds.map((taskId) => state.tasks[taskId]);
    return tasks;
  }
  const acceptTask = (id) => {
    const task = state.tasks[state.columns[id].accept];
    return task;
  }

  const onDragUpdate = (e) => {
    if(e.source && e.destination) {
      if(e.source.droppableId === 'column-6' && e.destination.droppableId === 'column-6'  ) {
        setDraggingNums({start: e.source.index, end: e.destination.index, isOrder: true});
      } else {
        setDraggingNums({start: 0, end: 0, isOrder: false});
      }
    }
  }

  return (
    <DragDropContext
      onDragEnd={onDragEnd}
      onDragUpdate={onDragUpdate}
      onDragStart={onDragStart}
    >
      <div className="w-full text-xl font-semibold">Drag each concern to the priority</div>
      <div className="flex justify-around p-5">
        <div>
          <Column key={'column-1'} defaultTask={acceptTask('column-1')} column={state.columns['column-1']} tasks={targetTasks('column-1')} />
          <Column key={'column-2'} defaultTask={acceptTask('column-2')} column={state.columns['column-2']} tasks={targetTasks('column-2')} />
          <Column key={'column-3'} defaultTask={acceptTask('column-3')} column={state.columns['column-3']} tasks={targetTasks('column-3')} />
          <Column key={'column-4'} defaultTask={acceptTask('column-4')} column={state.columns['column-4']} tasks={targetTasks('column-4')} />
          <Column key={'column-5'} defaultTask={acceptTask('column-5')} column={state.columns['column-5']} tasks={targetTasks('column-5')} />
        </div>
        <TargetColumn key={'column-6'} column={state.columns['column-6']} tasks={targetTasks('column-6')} type={moveType} draggingNums={draggingNums} />
      </div>
    </DragDropContext>
  );
};

export default App;