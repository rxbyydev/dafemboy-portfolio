<template>
  <div>
    <div :style="getGradientPos()" />
    <RouterView class="routerview" />
    <EmailLink style="position: fixed;" />
  </div>
</template>
<script> 
import { RouterView } from 'vue-router';
import EmailLink from "@/components/EmailLink.vue"

export default {
  components: {
    RouterView,
    EmailLink
  },

  data() {
    return {
      mouseX: 0,
      mouseY: 0
    }
  },

  methods: {
    getGradientPos() {
      return {
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        'z-index': 30,
        'pointer-events': 'none',
        'background': `radial-gradient(600px at ${this.mouseX}px ${this.mouseY}px, rgba(236, 72, 153, 0.16), transparent 80%)`
      }
    },

    hasTouch() {
      return 'ontouchstart' in document.documentElement
             || navigator.maxTouchPoints > 0
             || navigator.msMaxTouchPoints > 0;
    }
  },

  mounted() {
    document.onanimationend = (event) => {
      if (event.animationName == "fadein" && event.target.classList.contains("fadein")) {
        event.target.classList.remove("fadein")
      }
    }

    document.onmousemove = (event) => {
      if (window.screen.width <= 1024) return;
      let gradient = document.getElementById("radial-gradient-mouse")
      this.mouseX = event.clientX
      this.mouseY = event.clientY
    }

    document.onscroll = (event) => {
      let onScrollElements = document.querySelectorAll(".fadeinonscroll")

      onScrollElements.forEach((scrollElement) => {
        var distanceToView = scrollElement.getBoundingClientRect().top - window.innerHeight + 20;
        if (distanceToView < 0 && scrollElement.classList.contains("fadeinonscroll")) {
          scrollElement.classList.add("fadein")
          scrollElement.classList.remove("fadeinonscroll")

          let waitTime = 0;
          scrollElement.classList.forEach(classTag => { 
            if (classTag.endsWith("ms") && classTag.startsWith("d")) {
              waitTime = parseInt(classTag.replace("ms", "").replace("d", ""))
            }
          })

          //setTimeout(() => {
          //  scrollElement.classList.remove("fadein")
          //}, waitTime + 500 + 250)
        }
      })
    }
  }
}
</script>
<style lang="scss">
.routerview {
  max-width: 79.8vw;
  padding: 0 10.2vw;
  margin: 0 10.2vw;
}


@media screen and (max-width: 1200px) {
  /*Tablets*/
  .routerview {
    max-width: 90vw;
    padding: 0 5vw;
    margin: 0 5vw;
  }
}

@media screen and (max-width: 600px) {
  /*Phones*/
  .routerview {
    max-width: 95vw;
    padding: 0 2.5vw;
    margin: 0 2.5vw;
  }
}
</style>