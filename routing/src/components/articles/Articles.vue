<template>
    <div class="row g-4">
        <div class="col-lg-3 col-md-6 col-12" v-for="article in data.articles" :key="article.id">
            <div class="card shadow-sm" >
                <img :src="article.img+'?'+article.id" class="card-img-top" >
                <div class="card-body">                   
                    <p class="card-text summary">
                        {{ article.summary }}    
                    </p>

                    <!-- to Attribute un Icinde 
                        Yazilar Icinde Bulunan Herhangi Bir Yazinin Altindaki Butona Tiklandiginda 
                        Yazinin id Bilgisine Gore 
                        Tum Yazilar Icinden Tiklanilan Yazinin Ayrintilarini Alma Islemi Yapiyoruz -->
                    <!-- Tiklanilan Butondan Alinan Bilgiler Ile 
                        router Klasoru Icindeki index.js Dosyasinda Bulunan
                        articleId Yazan Kisim Ile Baglantiya Geciyoruz Ve
                        Tiklanilan Yazinin id Bilgisine Gore Detaylarini Aliyoruz -->
                    <RouterLink :to="'/articles/'+article.id">
                        <button href="#" class="btn btn-outline-secondary">
                            Devamını Oku
                        </button>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>

    <router-view></router-view>
</template>

<script setup>

    import Axios from 'axios'

    /* Sayfa Acilma Islemi Bittikten Sonra
        Data Alma Islemi Icin
        onMounted Method Kullaniyoruz */
    import { onMounted,reactive } from 'vue';
    import Article from './Article.vue';

    const data = reactive({
        articles:[]
    })

    onMounted (()=>{
        Axios.get('http://localhost:3000/articles')
        .then(response=>{
            data.articles = response.data;
        })
    })

</script>

<style scoped>
    .summary{
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>