<template>
    <div class="todo-list">
        <ul>
            <TodoItem
                v-for="(todo, index) of todos" :key="index"
                :indexTodo="index"
                :todo="todo"
                @removeTodo="removeTodo"
            />
        </ul>
    </div>
</template>

<script>
    import TodoItem from "@/components/TodoItem";

    export default {
        components: {
            TodoItem
        },
        props: [
            'todos'
        ],
        methods: {
            removeTodo(id) {
                this.$emit('removeTodo', id)
            }
        }
    }
</script>

<style scoped>
    .todo-list {
        width: 100%;
    }
</style>