<template>
    <div id="portfolio">
        <!-- <header class="hero">
                <div class="heading-primary">
                    <h1 class="heading-primary__title primary-title">Portfolio</h1>
                    <h4 class="heading-primary__publisher"><i>By Rei Nagahashi</i></h4>
                </div>
                <div class="hero__box" v-scroll-spy-active v-scroll-spy-link>
                    <section class="hero-menu">
                        <a>
                            <h2 class="hero-menu__text secondary-title">About</h2>
                            <img :src="images.arrow_image" class="hero-menu__image" alt="menu__image"> 
                        </a>
                    </section>
                    <section class="hero-menu">
                        <a>
                            <h2 class="hero-menu__text secondary-title">Works</h2>
                            <img :src="images.arrow_image" class="hero-menu__image" alt="menu__image"> 
                        </a>
                    </section>
                    <section class="hero-menu">
                        <a>
                            <h2 class="hero-menu__text secondary-title">Contact</h2>
                            <img :src="images.arrow_image" class="hero-menu__image" alt="menu__image">
                        </a>
                    </section>
                </div>
        </header> -->
        <main v-scroll-spy = "{time: 1000, steps: 90}">
            <div class="sections-about">
                <h1 class="sections-about__caption secondary-title">About Me</h1>
                <section class="info sections-about__contents">
                    <div class="flex info--flex">
                        <p class="info__paragraph">Name: Rei Nagahashi Born:1998/03/20</p>
                        <p class="info__paragraph">University(2016~): Komazawa University, Fucalty: Management</p>
                    </div>
                    <div class="flex info--flex">
                        <p class="info__paragraph">Position: Design-FrontEnd-BackEnd</p>
                        <p class="info__paragraph">Lisence: TOEIC(L-R)700(2018/12/10)</p>
                    </div>
                </section>
                <div class="positions sections-about__contents">
                    <section class="position-content">
                        <img :src="images.iconImages[0]" class="position-content__image" alt="icon__image"> 
                        <h4 class="position-content__title">Design</h4>
                        <p class="position-content__paragraph">The experience is that creating some of existing works(Landing page, Icon like those...) by following tutorials.Then I created a SPA web site and my portfolio as well!</p>
                    </section>
                    <section class="position-content">
                        <img :src="images.iconImages[1]" class="position-content__image" alt="icon__image"> 
                        <h4 class="position-content__title">Front End</h4>
                        <p class="position-content__paragraph">I have almost done enjoying Vanila Javascript mainly included ES6.As next step, I created the project which is structured by Vue.js as frontend and firebase as backend in July 2020.</p>
                    </section>
                    <section class="position-content">
                        <img :src="images.iconImages[2]" class="position-content__image" alt="icon__image"> 
                        <h4 class="position-content__title">Back End</h4>
                        <p class="position-content__paragraph">Essencially, I have started doing programming through learning PHP(Laravel). It means that I have the longest experience of Laravel among some languages so far.</p>
                    </section>
                </div>
                <section class="vision sections-about__contents">
                    <h2 class="vision__caption">What I did so far</h2>
                    <p>
                        <ul class="vision__lists">
                            <li>-Going abroad for studying English in Cebu (2019/2 ~ /3)</li>
                            <li>-Going abroad for studying English and programming in Bangalore (2019/4 ~ /9)</li>
                            <li>-Working on web development company as an internship in Hanoi (2020/1 ~ /6)</li>
                        </ul>
                    </p>
                    <h2 class="vision__caption">"Create art as solutions"</h2>
                    <p class="vision__paragraph">It’s my belief which pushes my back to create something innovative and novel.Specifically,I've desired to create and share something beautiful and valuable for someonone who need the value no matter where they live through going abroad. </p>
                    <!-- Strength -->
                    <h2 class="vision__caption">My Strength</h2>
                    <ul class="strengths">
                        <li>More than a year of career as Programmer</li>
                        <li>Speak English(Let's talk!)</li>
                        <li>Use Modern tool(Vue.js, Sass, Firebase,etc…)</li>
                        <li>Really Eager about Design such UI/UX as well</li>
                        <li>Always Passionate with New Stuffs and Life</li>
                    </ul>
                </section>
            </div>
        <!-- Works -->
            <div>
                <div class="works-header">
                    <h1 class="works-header__title primary-title">works</h1>
                </div>
                <div class="secondarySection">
                    <div class="container">
                        <!-- SPEAK -->
                        <section class="gallery">
                            <div class="gallery__title gallery__title--1 secondary-title">SPEAK</div>
                            <router-link :to="{ name:'show_3' }" class="link-image">
                                <img :src="images.worksImages[3]" alt="gallery__image" class="gallery__image gallery__image--1">                            
                            </router-link>
                            <div class="link-arrow">
                                <router-link :to="{ name:'show_3' }" class="gallery__link arrow-text">
                                    <span>See Detail</span>
                                </router-link>
                                <router-link :to="{ name:'show_3' }">
                                    <img :src="images.worksImages[0]" alt="show-icon" class="gallery__arrow arrow-img">
                                </router-link>
                            </div>
                        </section>
                        <!-- BURGER GEEK -->
                        <section class="gallery">
                            <div class="gallery__title gallery__title--1 secondary-title">Burger Geek</div>
                            <router-link :to="{ name:'show_2' }" class="link-image">
                                <img :src="images.worksImages[2]" alt="gallery__image" class="gallery__image gallery__image--1">
                            </router-link>
                            <div class="link-arrow">
                                <router-link :to="{ name:'show_2' }" class="gallery__link arrow-text">
                                    <span>See Detail</span>
                                </router-link>
                                <router-link :to="{ name:'show_2' }">
                                    <img :src="images.worksImages[0]" alt="show-icon" class="gallery__arrow arrow-img">
                                </router-link>
                            </div>
                        </section>
                        <!-- MUSIC COMPASS -->
                        <section class="gallery">
                            <div class="gallery__title gallery__title--1 secondary-title">Music Compass</div>
                            <router-link :to="{ name:'show_1' }" class="link-image">
                                <img :src="images.worksImages[1]" alt="gallery__image" class="gallery__image gallery__image--1">
                            </router-link>
                            <div class="link-arrow">
                                <router-link :to="{ name:'show_1' }" class="gallery__link arrow-text" >
                                    <span>See Detail</span>
                                </router-link>
                                <router-link :to="{ name:'show_1' }" >
                                    <img :src="images.worksImages[0]" alt="show-icon" class="gallery__arrow arrow-img">
                                </router-link>
                            </div>
                        </section>
                    </div>
            <div class="contact">
                <div class="container">
                    <div class="contact-box">
                        <h1 class="contact-box__title secondary-title">
                            Contact
                        </h1>
                        <ul class="contact-links">
                            <li class="contact-links__content">Email: <span class="link-colored">rerenaga9170@icloud.com</span></li>
                            <li class="contact-links__content">Linkedin: <a href="httlis://www.linkedin.com/in/rei-nagahashi-76b5611ab" class="link-colored" target="_blank">www.linkedin.com/in/rei-nagahashi-76b5611ab</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <small>2020 Desiged By Rei Nagahashi</small>
        </div>
    </div>
 </main>
</div>
</template>

<script>
export default {
    data(){
        return{
            images:{
                arrow_image:'/upload/arrow.png',
                iconImages:['/upload/adobe.png','/upload/vue-icon.png','/upload/laravel.png'],
                worksImages:['/upload/showArrow-right.png','/upload/works-compass0.png','/upload/works-burger1.png','/upload/speak1.png']
            }
        }
    }
}
</script>