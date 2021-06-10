import { html } from '../core/index.js'
import { connect } from '../js/store.js'

const TodoItem = ({ todo, index, editIndex }) => {

    return html`
    <li class="${todo.completed && 'completed'} ${editIndex === index && 'editing'}">
        <div class="view">
            <input 
                class="toggle" 
                type="checkbox" 
                ${todo.completed && 'checked'}
                onchange="dispatch('toggle', ${index})"
            >
            <label ondblclick="dispatch('startEdit', ${index})" >${todo.title}</label>
            <button class="destroy" onclick="dispatch('destroy', ${index})"></button>
        </div>
        <input class="edit" value="${todo.title}"
            onkeyup="event.keyCode===13 && dispatch('endEdit', this.value.trim(), ${index}) || event.keyCode===27 && dispatch('cancelEdit')"
            onblur="dispatch('endEdit', this.value.trim(), ${index})"
        >
    </li>`}
export default connect()(TodoItem)