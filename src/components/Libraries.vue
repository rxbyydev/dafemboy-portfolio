<template>
    <div class="libraries">
        <span class="title primarytext fadeinonscroll d100ms" id="libraries">LIBRARIES & FRAMEWORKS</span>
        <div class="libraries-container">
            <div :class="'libraries-container-library fadeinonscroll d' + ((index + 1) * 100) + 'ms'" v-for="(library, index) in libraries" data-state="neutral">
                <a :href="library[1]" target="_blank">
                    <img :src="'' + library[0]" :data-name="library[0].replace('/', '').replace(/\.(png|svg)$/, '')" draggable="false">
                </a>
            </div>
        </div>
    </div>
</template>
<script>
import Tag from 'primevue/tag';

export default {

    components: {
        Tag
    },

    data() {
        return {
            libraries: [
                ["/NodeJS.png", 'https://nodejs.org/en'],
                ["/Express.png", 'https://expressjs.com'],
                ["/Vue.png", "https://vuejs.org"],
                ["/JDA.svg", "https://github.com/discord-jda/JDA"],
                ["/Bukkit.png", "https://dev.bukkit.org"],
                ["/PaperMC.png", "https://papermc.io"],
                ["/PrimeVue.png", "https://primevue.org"],
                ["/Rage.png", "https://rage.mp"],
            ]
        }
    },

    methods: {
        isInFadeIn(element) {
            return element.classList.contains("fadein") || element.classList.contains("fadeinonscroll")
        }
    },

    mounted() {
        const libraryElements = document.querySelectorAll(".libraries-container-library")

        libraryElements.forEach((libraryElement) => {
            libraryElement.addEventListener("mouseover", () => {
                if (window.screen.width <= 1024) return;
                if (this.isInFadeIn(libraryElement)) return;
                libraryElements.forEach(b => {
                    if (this.isInFadeIn(b)) return;
                    b.setAttribute("data-state", "not-hovered")
                })
                libraryElement.setAttribute("data-state", "neutral")
            })
        })

        libraryElements.forEach((libraryElement) => {
            libraryElement.addEventListener("mouseleave", () => {
                if (window.screen.width <= 1024) return;
                if (this.isInFadeIn(libraryElement)) return;
                libraryElements.forEach(b => b.setAttribute("data-state", "neutral"))
            })
        })
    }

}
</script>
<style lang="scss">
.libraries {
    padding-top: 6rem;
    display: flex;
    flex-direction: column;
}

.libraries .title {
    font-size: 1rem;
    letter-spacing: 0.13rem;
    font-weight: 700;
    padding: 1rem;
}

.libraries-container {
    padding: 1rem;
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;

    border-radius: 0.5rem;

    transition: 0.15s;

}

.libraries-container-library {
    aspect-ratio: 1;
    width: 100%;

    padding-right: 0.4rem;
    padding-bottom: 0.4rem;

    font-weight: 700;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.15s;
}

.libraries-container-library[data-state=not-hovered] {
    opacity: 0.5;
}

.libraries-container-library a {
    width: 100%;
    height: 100%;

    display: flex block;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    background-color: rgba(113, 123, 136, 0.19);

    opacity: 0.6;

    transition: 0.15s;
    border-radius: 0.5rem;
    border: 2px rgba(255, 255, 255, 0.2) solid;
}

.libraries-container-library a:hover {
    filter: brightness(1) grayscale(0);
    opacity: 1;
    border: 2px rgba(255, 255, 255, 0.4) solid;
}

.libraries-container-library a img {
    stroke-width: 0px;
    object-fit: scale-down;
}

.libraries-container-library a img[data-name=NodeJS] {
    width: 65%;
}

.libraries-container-library a img[data-name=Vue] {
    width: 65%;
}

.libraries-container-library a img[data-name=PrimeVue] {
    height: 65%;
}

.libraries-container-library a img[data-name=Rage] {
    width: 75%;
}

.libraries-container-library a img[data-name=Bukkit] {
    height: 65%;
}

.libraries-container-library a img[data-name=PaperMC] {
    height: 65%;
}

.libraries-container-library a img[data-name=Express] {
    width: 75%;
}

.libraries-container-library a img[data-name=JDA] {
    width: 72%;
    border-radius: 0.3rem;
}
</style>
