<template>
    <div class="home">
        <h2>{{ titles.home }}</h2>

        <div class="d-flex">
            <div>
                <section>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi error itaque laborum omnis
                        quod? Ad
                        adipisci aperiam architecto aut ea error explicabo illum mollitia nihil, officia omnis optio
                        quam quis
                        quos
                        recusandae sit soluta, sunt ullam. Accusamus architecto deserunt error iste nihil nulla quae
                        quibusdam
                        repellendus sequi temporibus! Facere, itaque!
                    </p>
                    <div class="cards">
                        <Card :product="product" @addBasket="addBasket" v-for="product of products" :key="product.id"/>
                    </div>
                </section>
            </div>
<!--            <Basket />-->
        </div>

    </div>
</template>

<script>
import Card from "@/components/Card";
// import Basket from "@/components/Basket";
import {mapState, mapActions} from 'vuex'

export default {
    name: "Home",
    props: ['titles'],
    components: {
        Card,
        // Basket
    },
    data() {
        return {
            settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                pauseOnFocus: true,
                pauseOnHover: true,
                arrows: true
            }
        }
    },
    computed: {
        ...mapState(['products'])
    },
    methods: {
        ...mapActions(['inBasket']),
        addBasket(el) {
            this.inBasket(el)
        }
    }

}
</script>

<style scoped lang="scss">

.home {
    width: 100%;
}

.cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
}

nav ul {
    display: flex;
    justify-content: center;
}

nav ul li {
    padding: 1rem;
}

</style>