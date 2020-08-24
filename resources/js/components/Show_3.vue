<template>
    <div id="Show_3" class="works-show">
        <div class="show-link flex">
            <a @click="$router.go(-1)">
                <img :src="images.worksImages[0]" alt="show-icon" class="show-link__arrow arrow-img">
            </a>
            <a @click="$router.go(-1)" class="show-link__text">
                <span class="arrow-text">Back</span>
            </a>
        </div>
        <kinesis-container event="scroll" class="field" :duration="1000">
            <!-- Bubbles  -->
            <kinesis-element v-for="num in ramdomNums1" :key="num.index"
                :strength="600" class="float-bubble" :style="{ top: `${num}%`}" style="left:-3%;">
                <svg width="200" height="200">
                    <circle class="bubble" cx="100" cy="100" :r="num" />
                </svg>
            </kinesis-element>
            <kinesis-element v-for="num in ramdomNums2" :key="num.index"
                :strength="800" class="float-bubble" :style="{ bottom: `${num}%`}" style="right:-3%;">
                <svg width="200" height="200">
                    <circle class="bubble" cx="100" cy="100" :r="num" />
                </svg>
            </kinesis-element>
            <div class="container">
                <div class="show-main">
                        <div class="title-box">
                            <svg width="100" height="100">
                                <circle class="bubble" cx="50" cy="45" r="20" />
                            </svg>
                            <h1 class="show-main__title secondary-title">Speak</h1>  
                        </div>
                    <article class="contents">
                        <!-- Image -->
                        <div class="detail-images">
                            <img :src="images.worksImages[1]" class="detail-images__image detail-images__image--1" alt="detail-image">
                            <img :src="images.worksImages[2]" class="detail-images__image detail-images__image--2" alt="detail-image">
                            <img :src="images.worksImages[3]" class="detail-images__image detail-images__image--2" alt="detail-image">
                        </div>
                        <!-- Info & Tool Section -->
                        <section class="info-tool">
                                <div class="info columns">
                                    <div class="info__caption info-tool__caption title-box">
                                        <svg width="100" height="100">
                                            <circle class="bubble" cx="50" cy="50" r="10" />
                                        </svg>
                                        <div class="caption-text">Info</div>
                                    </div>
                                    <div class="info__paragraph info__paragraph--1">
                                        <p>After learning Vue.js from basic to practical contents, I finally created the project wich is completely consists of Vue structure on Jul-Aug/2020</p> 
                                        <p>The website has three main features.</p>
                                        <p>The first thing is that the user on this web site can realize really various entertaining features (for instance: Registering, creating own profile etc...) with super fast loading browser. </p> 
                                        <p>The second, you can chat with another users on realtime after creating own profile. This function has been created by snapshot from firebase so that you don't have to refresh the page.</p> 
                                        <p>The last thing is that I manipulated plenty of animations which is for UX such proggress bar/button, scroll animation, carousel, dynamic validation etc...</p> 
                                    </div>
                                    <div class="info__view-link">
                                        <a href="https://github.com/ReiNagahashi/speak" target="blank"><i class="fab fa-github"></i> View Git Repository</a>
                                        <a href="https://speak-cae21.web.app/" class="viewWeb" target="blank"><i class="fas fa-search-plus"></i> View This Web Site</a>
                                    </div>
                                </div>
                                <div class="tool">
                                    <div class="tool__caption info-tool__caption title-box">
                                        <svg width="100" height="100">
                                            <circle class="bubble" cx="50" cy="50" r="10" />
                                        </svg>
                                        <div class="caption-text">Tool</div>
                                    </div> 
                                    <div class="tool__paragraph tool__paragraph--2">
                                        <ul class="detail-list">
                                            <li class="detail-list__info">Vue.js</li>
                                            <li class="detail-list__info">Firebase</li>
                                            <li class="detail-list__info">Sass</li>
                                            <li class="detail-list__info">HTML</li>
                                            <li class="detail-list__info">Kinesis</li>
                                            <li class="detail-list__info">Designed by Adobe XD</li>
                                        </ul>
                                    </div>
                                </div>
                        </section>
                        <!-- Image -->
                        <div class="detail-images">
                            <img :src="images.worksImages[4]" class="detail-images__image detail-images__image--1" alt="detail-image">
                            <img :src="images.worksImages[5]" class="detail-images__image detail-images__image--2" alt="detail-image">
                            <img :src="images.worksImages[6]" class="detail-images__image detail-images__image--2" alt="detail-image">
                            <img :src="images.worksImages[7]" class="detail-images__image detail-images__image--2" alt="detail-image">
                        </div>
                    </article>
                </div>
            </div>
        </kinesis-container>
        <div class="show-link flex tool__link">
            <a @click="$router.go(-1)">
                <img :src="images.worksImages[0]" alt="show-icon" class="show-link__arrow arrow-img">
            </a>
            <a @click="$router.go(-1)" class="show-link__text">
                <span class="arrow-text">Back</span>
            </a>
        </div>
    </div>
</template>

<script>
import { KinesisContainer, KinesisElement} from 'vue-kinesis'

export default {
    name:'Show_3',
     data(){
      return {
            images:{
                worksImages:['/upload/showArrow-left.png','/upload/speak1.png','/upload/speak2.png','/upload/speak3.png','/upload/speak4.png',
                '/upload/speak5.png','/upload/speak6.png','/upload/speak7.png','/upload/speak8.png','/upload/speak9.png',]
            },
            val:Array.from({ length: 20 })
        }
    },
    computed:{
        // Create bubbles
        ramdomNums1(){
            let ramdomNums = this.val.map(v => {
               return Math.floor(Math.random() * (75 - 1 + 1)) + 1
               
            })
            return ramdomNums
        },
        ramdomNums2(){
            let ramdomNums = this.val.map(v => {
               return Math.floor(Math.random() * (75 - 1 + 1)) + 1
               
            })
            return ramdomNums
        }
    }
}
</script>

<style>

</style>