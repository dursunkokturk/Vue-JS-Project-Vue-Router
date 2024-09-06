<template>
    <div class="bg-light p-5 rounded-3 mb-4">
        <div class="container">
            <h1 class="fw-bold">
                Angular 17
            </h1>
            <p class="col-md-8 fs-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium quis omnis doloribus, vero inventore nam unde quisquam assumenda repellat aut iure, voluptatibus suscipit qui maiores? Placeat iusto nisi ipsum consequatur!
            </p>

            <!-- Butona Tiklandiginda 
                router Degiskeni Uzerinden 
                userRouter Methodunu Kullanarak
                Sayfa Yonlendirme Islemini Yapiyoruz -->
            <button @click="router.push('/articles')" class="btn btn-primary btn-lg">
                Devamını Oku
            </button>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-6 bg-dark text-white p-5 rounded-3">
                <h2>
                    React Router
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente repudiandae, aliquid et veniam, facere ratione pariatur sequi possimus at ipsa adipisci, non atque dolorum hic veritatis sed voluptate harum. Nobis?
                </p>
                <button class="btn btn-outline-light">
                    Devamını Oku
                </button>
            </div>
            <div class="col-md-6 p-5 rounded-3 bg-light">
                <h2>
                    Vue Router
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente repudiandae, aliquid et veniam, facere ratione pariatur sequi possimus at ipsa adipisci, non atque dolorum hic veritatis sed voluptate harum. Nobis?
                </p>
                <button class="btn btn-outline-secondary">
                    Devamını Oku
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {useRouter,useRoute} from 'vue-router'

    /* Sayfalar Arasinda Yonlerdirme Islemlerini Yapiyoruz */
    const router = useRouter();

    /* Yonlendirilen Sayfalarda Yapilacak Islemleri Belirliyoruz */
    const route = useRoute();

</script>