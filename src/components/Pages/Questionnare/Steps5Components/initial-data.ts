const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: "I don't want a market crash to set back my retirement" },
    'task-2': { id: 'task-2', content: "I'm not really sure if I am on pace to retire" },
    'task-3': { id: 'task-3', content: "I'm concerned about paying too much tax in retirement" },
    'task-4': { id: 'task-4', content: "I have a lot of different accounts but no real strategy" },
    'task-5': { id: 'task-5', content: "Option E" },
    'blank-1': { id: 'blank-1', content: '', blank: true },
    'blank-2': { id: 'blank-2', content: '', blank: true },
    'blank-3': { id: 'blank-3', content: '', blank: true },
    'blank-4': { id: 'blank-4', content: '', blank: true },
    'blank-5': { id: 'blank-5', content: '', blank: true },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To do',
      accept: 'task-1',
      taskIds: ['task-1']
    },
    'column-2': {
      id: 'column-2',
      title: 'In progress',
      accept: 'task-2',
      taskIds: ['task-2']
    },
    'column-3': {
      id: 'column-3',
      title: 'Done',
      accept: 'task-3',
      taskIds: ['task-3']
    },
    'column-4': {
      id: 'column-4',
      title: 'Done',
      accept: 'task-4',
      taskIds: ['task-4']
    },
    'column-5': {
      id: 'column-5',
      title: 'Done',
      accept: 'task-5',
      taskIds: ['task-5']
    },
    'column-6': {
      id: 'column-6',
      title: 'Target',
      taskIds: ['blank-1', 'blank-2', 'blank-3', 'blank-4', 'blank-5']
      // taskIds: []
    }
  },
  // Facilitate reordering of the columns
  columnOrder: ['column-1', 'column-2', 'column-3', 'column-4', 'column-5', 'column-6']
}

export default initialData
