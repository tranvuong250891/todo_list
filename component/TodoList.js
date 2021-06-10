import { html } from '../core/index.js'
import TodoItem from './TodoItem.js'
import { connect } from '../js/store.js'


const TodoList = ({ todos, filter, filters }) => {

    return html`
    <section class="main">
            <input 
                id="toggle-all" 
                class="toggle-all" 
                type="checkbox"
                onchange="dispatch('toggleAll', this.checked)"
                ${todos.every(filters.completed) && 'checked'}
            >
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
                
            ${todos
            .filter(filters[filter])
            .map((todo, index) =>
                TodoItem({ todo, index })
            )}
             
            </ul >
        </section > `}
export default connect()(TodoList)