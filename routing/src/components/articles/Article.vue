<template>

    <RouterLink to="/articles/5">
        5 Nolu Yazıya Git
    </RouterLink>
    <div class="row bg-dark text-white p-4 rounded mb-4">
        <div class="col-md-6">
            <h1 class="fst-italic display-4">Lorem</h1>
            <p class="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus illo, beatae, a optio ipsam qui, nisi magnam necessitatibus quis laudantium quae excepturi iusto explicabo saepe nesciunt. Animi, tenetur! Vel!</p>
        </div>
    </div>

    <div class="row" v-if="article">
        <div class="col-md-8">
            <h3 class="fst-italic border-bottom pb-4 mb-4">{{ article.title }}</h3>
            <div>
                <p> {{ article.date }} <strong>{{ article.author }}</strong></p>
                <p> {{ article.summary }} </p>
            </div>
        </div>
        <div class="col-md-4">
            <div class="bg-light p-4 rounded">
                <h4 class="fst-italic">Lorem</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolorem ipsam accusantium nisi accusamus adipisci repellendus eveniet, vel perspiciatis ea quibusdam aspernatur expedita. Temporibus itaque earum voluptas error amet ipsum!</p>
            </div>
        </div>

    </div>
</template>

<script setup>
    
    /* Yonlendirme Isleminden Sonra Yapilacak Islemleri Aliyoruz */
    import { useRoute,onBeforeRouteUpdate } from 'vue-router'
    import Axios from 'axios'
    import { onMounted,ref, watch } from 'vue'

    const route = useRoute();

    const article = ref({});

    onMounted(()=>{

        /* route Degiskeni Uzerinden Gelen Data lar Arasindan
            params attribute Kullanarak 
            index.js Dosyasinda Data ya Ulasmak Icin Kullanilan articleId Componentini 
            Attribute Olarak Kullaniyoruz Ve
            Tiklanilan Data nin Detaylarina id Bilgisi Uzerinden Ulasiyoruz*/
        loadArticle(route.params.articleId)
    })
    
    /* Tiklanilan Butondan Alinan Id Bilgisi 
        articleId Degiskeni Uzerinden Aliniyor */
    /* Alinan id Bilgisi Articles.vue Dosyasinda 
        Hangi Yazinin id Bilgisine Karsilik Geliyorsa
        O Yaziyi Ekrana Yazdirma Islemini Article.vue Dosyasinda Yapiyoruz */
        const loadArticle = (articleId)=>{
        Axios.get(`http://localhost:3000/articles/${articleId}`).
        then(response=>{
            article.value = response.data
        })
    }


    // /* Normalde Acik Olan Yazi Var iken Baska Bir Yaziyi Acmak Icin
    //     Method Icinde 
    //     Ilk Kisimda Acik Olan Yazinin id Bilgisi Yer Aliyor
    //     Ikinci Kisimda Acilacak Yazinin id Bilgisi Yer Aliyor */
    // watch(()=>route.params.articleId,async newId=>{
    //     loadArticle(newId)
    // })


    
    /* Normalde Acik Olan Yazi Var iken Baska Bir Yaziyi Acmak Icin
        Method Icinde async Fonksiyon Kullanarak  
        Ilk Kisimda Acilacak Yazinin id Bilgisi Yer Aliyor
        Ikinci Kisimda Acik Olan Yazinin id Bilgisi Yer Aliyor */
    onBeforeRouteUpdate(async(to,from)=>{
        loadArticle(to.params.articleId)
    })

</script>