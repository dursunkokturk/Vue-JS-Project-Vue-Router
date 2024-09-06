<template>
    <div class="row justify-content-center">
        <div class="col-lg-9 col-md-8">
            <h4 class="mb-5 text-center">İletişim</h4>
            <form>
                <div class="row g-3">
                    <div class="col-sm-6">
                        <label class="form-label">Ad</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="col-sm-6">
                        <label class="form-label">Soyad</label>
                        <input type="text" class="form-control">
                    </div>
                </div>
                <div class="col-12">
                       <label class="form-label">Email</label>
                       <input type="email" class="form-control">
                </div>
                 <div class="col-12">
                       <label class="form-label">Konu</label>
                       <textarea type="email" class="form-control" rows="5"/>
                </div>
                <hr class="my-4"/>
                <button class="btn btn-primary btn-lg w-100">
                    Gönder
                </button>
            </form>
        </div>
    </div>
</template>

<script>

    import {onBeforeRouteLeave} from 'vue-router'

    /* setup Method Icindeki Islemler 
        Composition Api Icinde Gecerli Olan Islemler */
    export default{
        setup(){

            /* Sayfadan Çıkış Yapmadan Önce Yapilmasi Istenen Islemler Yada 
                Islem Kontrolleri Var Ise Kullanilan Method */
            onBeforeRouteLeave((to,form)=>{
                const answer = window.confirm("Sayfayı Terketmek İstiyor Musun?")
                if(!answer){
                    return false;
                }
            })
        },
        /* setup Method Disindaki Islemler 
            Options Api Icinde Gecerli Olan Islemler */
        /* Sayfa Acilmak Istenildiginda Yapilacak Islemleri Duzenliyoruz */
        beforeRouteEnter(){
            const isAdmin = ()=>{
                const isAdmin = true

                /* Admin Girisi Yapilmadi Ise 
                    Admin Girisi Yapmaya Yonlendiriyoruz */
                if(!isAdmin){
                    return '/'
                }
            }
        }
    }
</script>