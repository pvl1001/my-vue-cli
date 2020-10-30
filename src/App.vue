<template>
    <div id="app">
        <h1 class="title-layout">Layout</h1>
        <hr>

        <div class="wrapper">
            <router-view/>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'App',
        components: {},
        data() {
            return {
                todos: []
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
        mounted() {
            fetch( 'https://jsonplaceholder.typicode.com/todos?_limit=3' )
                .then( response => response.json() )
                .then( json => this.todos = json )
        }
    }
</script>

<style lang="scss">

    ul {
        list-style-type: none;
    }

    a {
        text-decoration: none;
        color: blue;
        transition: .3s;
        border-bottom: 1px solid transparent;
    }

    a:hover {
        border-color: blue;
    }

    ul {
        padding: 0;
        margin: 0;
    }

    body {
        margin: 0;
    }

    button {
        cursor: pointer;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;

        h1.title-layout {
            padding: 100px 0;
            color: #CCC;
            background: url('./assets/img/layout-bg.jpg') center / cover no-repeat;
            font-size: 4rem;
            margin: 0;
        }

        hr {
            margin: 0;
        }

        .wrapper {
            margin: 0 auto;
            max-width: 1200px;
            padding: 0 40px;
            display: flex;
            justify-content: center;
        }
    }


</style>
