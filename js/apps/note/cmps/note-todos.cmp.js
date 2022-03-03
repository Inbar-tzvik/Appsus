export default {
    props: ['info'],
    template: `
    <div>
        <ul>
            <li v-for="todo in info.todos">
                {{todo.txt}}
            </li>
        </ul>
    </div>
    `
}