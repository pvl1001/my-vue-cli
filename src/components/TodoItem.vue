<template>
    <li class="todo-item">
        <input type="checkbox" @change="todo.completed = !todo.completed">
        <span :class="{ 'done': todo.completed }">{{ indexTodo + 1 + '.' }} {{ todo.title | uppercase}}</span>
        <button @click="$emit('removeTodo', todo.id)">&times;</button>
    </li>
</template>

<script>
    export default {
        props: ['todo', 'indexTodo'],
        filters: {
            uppercase(value) {
                return value.toUpperCase()
            }
        }
    }

</script>

<style lang="scss" scoped>

    .done {
        text-decoration: line-through;
    }

    li {
        list-style-type: none;
        display: flex;
        align-items: center;
        padding: 1rem;
        box-shadow: 0 3px 9px -4px #000;
        margin-bottom: 20px;
        border-radius: 5px;
    }
    
    button {
        cursor: pointer;
        margin-left: auto;
    }

    span {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: -1px;
    }

    input {
        margin-right: 1rem;
    }


</style>