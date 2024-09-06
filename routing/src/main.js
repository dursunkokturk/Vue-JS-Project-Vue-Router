import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Header from './components/header/Header.vue'
import Article from './components/articles/Article.vue'

const app = createApp(App)

app.use(router)

/* Eklenen Componente Proje Icinde Her Yerden Ulasmak Icin
    Component i Global Olarak Ekliyoruz  */
/* Method Icindeki 
    Ilk Parametre Componenti Cagirmak Icin Kullanilacak Isim
    Ikinci Parametre Cagirilacak Component Adi*/
app.component('app-header',Header)
app.component('article',Article)

app.mount('#app')