<template>
    <div class="container">
        <header class="d-flex py-3 border-bottom mb-4">
            <RouterLink class="me-auto text-decoration-none text-dark" to="/">
                <span class="fs-4">Dursun Köktürk</span>
            </RouterLink>
            <ul class="nav nav-pills">
                <li class="nav-item">

                    <!--Eklenen Dosyanin Linkini Olusturuyoruz-->
                    <!--index.js Dosyasinda Eklenen Dosya Icin Duzenlenen Path Attribute unda Yazan Degeri
                        to Attribute unda Yaziyoruz-->
                    <RouterLink class="nav-link" aria-current="page" to="/">Anasayfa</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" to="/articles">Yazılarım</RouterLink>
                </li>
                <li class="nav-item">

                    <!-- Iletisim Linkine Tiklandiginda Contact.vue Dosyasina Yonlendirmek Icin 
                        index.js Dosyasinda componenti Contact Olan Objenin
                        name Attribute unda Yazan Degeri Aliyoruz -->
                    <RouterLink class="nav-link" :to="{name:'contact'}">İletişim</RouterLink>
                </li>
            </ul>
        </header>
    </div>
</template>

<script setup>
    import { RouterLink } from 'vue-router';
</script>