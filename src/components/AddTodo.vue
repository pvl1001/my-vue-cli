<template>
    <form @submit.prevent="onSubmit" >
        <input v-model="title" type="text" placeholder="Введите имя">
        <button type="submit">Create</button>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                title: '',
            }
        },
        methods: {
            onSubmit() {
                if (this.title.trim()) {
                    const newTodo = {
                        id: Date.now(),
                        title: this.title,
                        completed: false
                    }

                    this.$emit('add-todo', newTodo)
                    this.title = ''
                }
            }
        }
    }
</script>

<style scoped>

    form {
        margin-bottom: 20px;
    }

    input {
        margin-right: 10px;
        padding: .5rem;
    }

    button {
        padding: .5rem;
    }
</style>