import storage from '../util/storage.js'

const init = {
    todos: storage.get(),
    filter: 'all',
    filters: {
        all: () => true,
        active: todo => !todo.completed,
        completed: todo => todo.completed
    },
    editIndex: null
}

const setAction = {
    add({ todos }, args) {
        if (args) {
            todos.push({ title: args, completed: false })
            storage.set(todos)
        }
    },
    toggle({ todos }, index) {

        const todo = todos[index]
        todo.completed = !todo.completed
        storage.set(todos)
    },
    toggleAll({ todos }, completed) {
        todos.forEach(todo => todo.completed = completed)
        storage.set(todos)
    },
    destroy({ todos }, index) {

        todos.splice(index, 1)
        storage.set(todos)
    },
    switchFilter(state, filter) {

        state.filter = filter

    },
    clearCompleted(state) {
        state.todos = state.todos.filter(state.filters.active)
        storage.set(state.todos)
    },
    startEdit(state, index) {
        state.editIndex = index
    },
    endEdit(state, value, index) {
        if (value) {
            state.todos[index].title = value
            storage.set(state.todos)
        } else {
            this.destroy(state, index)
        }

        state.editIndex = null

    },
    cancelEdit(state) {
        state.editIndex = null
    }

}

export default function reducer(state = init, action, args) {
    setAction[action] && setAction[action](state, ...args)
    return state
}
