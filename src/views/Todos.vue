<template>
    <div class="todos">
        <h2>Главая</h2>
        <router-link to="/">Home</router-link>

        <AddTodo @add-todo="addTodo"/>

        <label>
            <span>Фильтр</span>
            <select v-model="filter">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="no-completed">No-completed</option>
            </select>
        </label>

        <Loader v-if="loading"/>

        <TodoList
                v-else-if="filteredTodos.length"
                :todos="filteredTodos"
                @removeTodo="removeTodo"
        />

        <p v-else>Корзина пуста!</p>
    </div>
</template>

<script>
    import TodoList from "@/components/TodoList";
    import AddTodo from "@/components/AddTodo";
    import Loader from "@/components/Loader";

    export default {
        name: 'App',
        components: {
            TodoList,
            AddTodo,
            Loader,
        },
        data() {
            return {
                todos: [],
                loading: true,
                filter: 'all'
            }
        },
        methods: {
            removeTodo(id) {
                this.todos = this.todos.filter( t => t.id !== id )
            },
            addTodo(todo) {
                this.todos.push( todo )
            }
        },
        computed: {
            filteredTodos() {
                if (this.filter === 'completed') {
                    return this.todos.filter( el => el.completed )
                } else if (this.filter === 'no-completed') {
                    return this.todos.filter( el => !el.completed )
                } else {
                    return this.todos
                }
            }

        },
        mounted() {
            fetch( 'https://jsonplaceholder.typicode.com/todos?_limit=3' )
                .then( response => response.json() )
                .then( json => {
                    setTimeout( () => {
                        this.todos = json
                        this.loading = false
                    }, 100 )

                } )
        }
    }
</script>

<style scoped>

    .todos {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
    }

    .todos a {
        margin-bottom: 20px;
    }

    label {
        margin-bottom: 40px;
    }

    label span {
        margin-right: 10px;
    }
</style>