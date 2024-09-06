<template>

    <!-- Main.js Dosyasinda Olusturdugumuz Component i Kullanmak Icin
        Component i Cagirmak Icin Yazdigimiz Ismi Kullaniyoruz -->
    <app-header />

    <div class="container">

        <!-- index.js Dosyasinda Acilacak Sayfalarin import Edilmesi Ve Sonra
            routes Array Icinde path ve component Attribute larinin Duzenlenmesi Isleminden Sonra
            Butonlara Tiklandiginda Acilacak Sayfalarin Componentlerinin Bulunmasi Icin 
            RouterView Kullanarak Proje Klasoru Icinde
            RouterLink Component Tarama Islemini Yapiyoruz -->
        <RouterView></RouterView>

        <RouterView name="warning"></RouterView>
    </div>
</template>

<script setup>
    import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>

</style>