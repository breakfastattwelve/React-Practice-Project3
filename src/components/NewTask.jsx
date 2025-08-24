function NewTask() {
  return (
    <div className="flex items-center gap-4">
        <input type="text" className="w-64 px-2 py-1"/>
        <button>Add Task</button>
    </div>
  )
}

export default NewTask