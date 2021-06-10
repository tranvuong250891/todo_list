import { html, createStore } from '../core/index.js'
import { connect } from '../js/store.js'
import Header from './Header.js'
import TodoList from './TodoList.js'
import Footer from './Footer.js'
const connector = connect()

const App = ({ todos }) => {
    return html`
        <section class="todoapp">
            ${Header()}
            ${todos.length > 0 && TodoList()}
            ${todos.length > 0 && Footer()}
        </section>`
}



export default connect()(App)
