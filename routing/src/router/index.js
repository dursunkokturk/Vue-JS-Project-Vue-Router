import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '@/components/Homepage.vue'
import Articles from '@/components/articles/Articles.vue'
import Article from '@/components/articles/Article.vue'
import Contact from '@/components/contact/Contact.vue'
import NotFound from '@/components/404.vue'
import Alert from '@/components/Alert.vue'
import Login from '@/components/Login.vue'

const checkAuth = ()=>{
    const isAuth = true

    /* Login Girisi Yapilmadi Ise 
        Login Girisi Yapmaya Yonlendiriyoruz */
    if(!isAuth){
        return '/login'
    }
}

const isAdmin = ()=>{
    const isAdmin = true

    /* Admin Girisi Yapilmadi Ise 
        Admin Girisi Yapmaya Yonlendiriyoruz */
    if(!isAdmin){
        return '/'
    }
}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),

    /* parth Attribute unde articleId Kullanilan Kisimda 
        Articles.vue Sayfasinda Herhangi Bir Article Tiklandiginda 
        Onu Acma Islemi Icin Gereken Yolu Belirtiyoruz */
    /* component Attribute unda Yonlendirme Yapilacak Sayfayi 
        Component Olarak Belirtiyoruz */
    /* component Attribute unda 
        NotFound Kullanildiginda 
        Sayfa Bulunamadi Islemini Yapiyoruz */
    /* component Attribute unda 
        Alert Kullanildiginda 
        Ayni Component Icinde Birden Fazla Componente Yonlendirme Yapilabilir */
    routes: [
        {
            path: '/',
            component: Homepage
        },
        {
            path: '/articles',
            component: Articles,
            // beforeEnter:[checkAuth,isAdmin]
        },
        {
            path: '/articles/:articleId',
            component: Article
        },
        {
            path: '/contact',
            components: {
                default: Contact,
                warning: Alert
            },
            name:'contact'
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/:notfound(.*)',
            component: NotFound
        }
    ],

    /* Tiklanilan Butona Gore 
        Hangi Sayfa Acildi Ise 
        Acilan Sayfada Gecerli Olan Butonu 
        Aktif Hale Getiriyoruz */
    linkActiveClass:'active'
})

// /* Islem Sonucunda Yapilacak Yonlendirmeleri Barindiriyor */
// router.beforeEach((to,from)=>{
//     const isAuth = true

//     /* Login Girisi Yapilmadi Ise 
//         Login Girisi Yapmaya Yonlendiriyoruz */
//     if(to.path !== '/login' && !isAuth){
//         return '/login'
//     }

//     /* Login Girisi Yapildi Ise 
//         Anasayfaya Yonlendiriyoruz */
//     if(to.path === '/login' && isAuth){
//         return '/'
//     }
//     return true;
// })

export default router