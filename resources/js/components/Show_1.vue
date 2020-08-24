<template>
    <div class="works-show">
        <div class="container">
            <div class="show-link flex">
                <a @click="$router.go(-1)">
                    <img :src="images.worksImages[0]" alt="show-icon" class="show-link__arrow arrow-img">
                </a>
                <a @click="$router.go(-1)" class="show-link__text">
                    <span class="arrow-text">Back</span>
                </a>
            </div>
            <div class="show-main">
                <h1 class="show-main__title secondary-title">music compass</h1>  
                <article class="contents flex">
                    <div class="detail-left columns">
                        <div class="detail-left__caption detail-left__caption--1 flex">
                            <span>〜〜〜〜</span>
                                <div class="caption-text">Info</div>
                            <span>〜〜〜〜</span>
                        </div>
                        <div class="detail-left__paragraph detail-left__paragraph--1">
                            <p>The concept is meeting new friends with your favorite music.</p> 
                            <p>First, you register with your email and new password, and then you can see some of posts which another users made in homepage.</p> 
                            <p>These contain mostly about music event (ex, concert hall, music bar, festival…).
                            When you’re interested in any particular post, you can send a message or use attending system so you can communicate with others.</p> 
                            <p>But before communicating with them, you should make your profile because another users can notice your information easily (ex, your favorite music, your image, your native place like that…).</p> 
                            <p>Finally when you get along with someone, you can follow them, the follow system will become a symbol of trust and you can hang out with anyone more with music!</p>
                        </div>
                        <div class="detail-left__view-link">
                            <a href="http://musiccompassrei.herokuapp.com" target="blank"><i class="fas fa-search-plus"></i>  View This Web Site</a>
                        </div>
                        <div class="detail-left__caption detail-left__caption--2 flex">
                            <span>〜〜〜〜</span>
                                <div class="caption-text">Tool</div>
                            <span>〜〜〜〜</span>
                        </div> 
                        <div class="detail-left__paragraph detail-left__paragraph--2">
                            <ul class="detail-list">
                                <li class="detail-list__info">Laravel</li>
                                <li class="detail-list__info">HTML</li>
                                <li class="detail-list__info">CSS</li>
                                <li class="detail-list__info">Bootstrap</li>
                                <li class="detail-list__info">AWS(S-3) for saving images</li>
                                <li class="detail-list__info">Heroku</li>
                            </ul>
                        </div>
                    </div>
                    <div class="detail-right columns">
                        <img :src="images.worksImages[1]" class="detail-right__image detail-right__image--1" alt="detail-image">
                        <img :src="images.worksImages[2]" class="detail-right__image detail-right__image--2" alt="detail-image">
                    </div>
                </article>
            </div>
            <!-- gallery -->
            <section class="gallery">
                <img :src="images.worksImages[4]" class="gallery__image gallery__image--2" alt="gallery image">
                <img :src="images.worksImages[5]" class="gallery__image gallery__image--3" alt="gallery image">
                <img :src="images.worksImages[3]" class="gallery__image gallery__image--1" alt="gallery image">
                <img :src="images.worksImages[6]" class="gallery__image gallery__image--3" alt="gallery image">
            </section>
            <div class="show-link flex">
                <a @click="$router.go(-1)">
                    <img :src="images.worksImages[0]" alt="show-icon" class="show-link__arrow arrow-img">
                </a>
                <a @click="$router.go(-1)" class="show-link__text">
                    <span class="arrow-text">Back</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
     data(){
      return {
            images:{
                worksImages:['/upload/showArrow-left.png','/upload/works-compass1.png','/upload/works-compass2.png','/upload/works-compass3.png','/upload/works-compass4.png','/upload/works-compass5.png','/upload/works-compass6.png']
            }
        }
    }
}
</script>

<style>

</style>