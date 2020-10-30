<template>
    <div class="home">
        <h2>Home page</h2>
        <nav>
            <ul>
                <li>
                    <router-link to="/todos">Todos</router-link>
                </li>
                <li>
                    <router-link to="/about">About</router-link>
                </li>
            </ul>
        </nav>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi error itaque laborum omnis quod? Ad
            adipisci aperiam architecto aut ea error explicabo illum mollitia nihil, officia omnis optio quam quis quos
            recusandae sit soluta, sunt ullam. Accusamus architecto deserunt error iste nihil nulla quae quibusdam
            repellendus sequi temporibus! Facere, itaque!
        </p>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped lang="scss">

    nav ul {
        display: flex;
        justify-content: center;
    }

    nav ul li {
        padding: 1rem;
    }

</style>