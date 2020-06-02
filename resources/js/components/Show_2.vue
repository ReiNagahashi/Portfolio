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
                <h1 class="show-main__title secondary-title">Burger Geek</h1>  
                <article class="contents flex">
                    <div class="detail-left columns">
                        <div class="detail-left__caption detail-left__caption--1 flex">
                            <span>〜〜〜〜</span>
                                <div class="caption-text">Info</div>
                            <span>〜〜〜〜</span>
                        </div>
                        <div class="detail-left__paragraph detail-left__paragraph--1">
                            <p>The name of website is “Burger Geek”, its services are just running restaurant and delivery of Hamburger.I have learned Vanila Javascript which is included ES6 (perfect pure Javascript!) for two months, I wanted to create a project as compilation of only the skill.</p> 
                            <p>The website consists 3 pages.</p>
                            <p>First, I’d like to introduce the login page. One of the biggest features of it is that it’s used only pure HTML5 and CSS3. The login form doesn’t work though, I wanted to express the ambience of Burger Geek.</p> 
                            <p>In contrast, I used mostly Materialize CSS(which is CSS frame work ) on Home page to compare the differences of frame work and pure css page.</p> 
                            <p>Moreover.The delivery page is the website's main page, which I was willing to use Vanila Javascript for various aspects such of setting address, Carousel etc… Frankly, here is pretty fun! You can type your address and choose your favorite burger to put it into a cart. If you wanna examine my Javascript ability, I recommend to inspect this page carefully.</p> 
                        </div>
                        <div class="detail-left__view-link">
                            <a href="https://github.com/ReiNagahashi/BurgerGeek" target="blank"><i class="fab fa-github"></i>  View Git Repository</a>
                        </div>
                        <div class="detail-left__caption detail-left__caption--2 flex">
                            <span>〜〜〜〜</span>
                                <div class="caption-text">Tool</div>
                            <span>〜〜〜〜</span>
                        </div> 
                        <div class="detail-left__paragraph detail-left__paragraph--2">
                            <ul class="detail-list">
                                <li class="detail-list__info">Vanila Javascript</li>
                                <li class="detail-list__info">HTML</li>
                                <li class="detail-list__info">CSS</li>
                                <li class="detail-list__info">Materialize</li>
                            </ul>
                        </div>
                        <div class="show-link flex detail-left__link">
                            <a @click="$router.go(-1)">
                                <img :src="images.worksImages[0]" alt="show-icon" class="show-link__arrow arrow-img">
                            </a>
                            <a @click="$router.go(-1)" class="show-link__text">
                                <span class="arrow-text">Back</span>
                            </a>
                        </div>
                    </div>
                    <div class="detail-right columns">
                        <img :src="images.worksImages[1]" class="detail-right__image detail-right__image--1" alt="detail-image">
                        <img :src="images.worksImages[2]" class="detail-right__image detail-right__image--2" alt="detail-image">
                    </div>
                </article>
            </div>
        </div>
    </div>
</template>

<script>
export default {
     data(){
      return {
            images:{
                worksImages:['/upload/showArrow-left.png','/upload/works-burger2.png','/upload/works-burger3.png']
            }
        }
    }
}
</script>

<style>

</style>