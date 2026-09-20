<template>
    <div class="leftside">
      <div class="upper">
        <span class="name primarytext d400ms fadein">Lee Daniel Hertel</span>
        <span class="job primarytext d600ms fadein">Hobby-Softwareentwickler</span>
        <span class="catchline secondarytext d700ms fadein">Ich baue Minecraft-Plugins, Websites und Discord-Bots — mit Fokus auf sauberen Code und durchdachtes Design.</span>
        <span class="email d800ms fadein"><a href="mailto:uwu@dafemboy.dev">uwu@dafemboy.dev</a></span>
      </div>
      <div class="navigation">
        <span class="navpoint fadein d900ms" @click="navigateTo(0)" :data-active="navIndex == 0">ÜBER MICH</span>
        <span class="navpoint fadein d1000ms" @click="navigateTo(1)" :data-active="navIndex == 1">ERFAHRUNG</span>
        <span class="navpoint fadein d1100ms" @click="navigateTo(2)" :data-active="navIndex == 2">PROGRAMMIERSPRACHEN</span>
        <span class="navpoint fadein d1200ms" @click="navigateTo(3)" :data-active="navIndex == 3">LIBRARIES & FRAMEWORKS</span>
        <span class="navpoint fadein d1300ms" @click="navigateTo(4)" :data-active="navIndex == 4">TOOLS & PLATTFORMEN</span>
      </div>
      <div class="socials">
        <a :class="'social fadein d' + (parseInt(index) * 100 + 1300) + 'ms'" v-for="(social, index) in socials" :href="social[1]" target="_blank"><Icon :name="social[0]" /></a>
      </div>
    </div>
</template>
<script>
import Icon from "@/components/Icon.vue"

export default {
  components: {
    Icon
  },

  data() {
    return {
      navIndex: 0,
      socials: [
        ["github", "#"],
        ["discord", "#"],
        ["at", "mailto:uwu@dafemboy.dev"],
      ],
    }
  },

  methods: {
    navigateTo(index) {
      const elementsByIndex = [
        document.getElementById("aboutme"),
        document.getElementById("erfahrung"),
        document.getElementById("programminglanguages"),
        document.getElementById("libraries"),
        document.getElementById("tools"),
      ]

      elementsByIndex[index].scrollIntoView({ behavior: "smooth" })
    },
    isOnScreenOrPassed(elm) {
      if (!elm) return false;
      var rect = elm.getBoundingClientRect();
      var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
      return !(rect.top - viewHeight + viewHeight / 1.9 >= 0);
    }
  },

  mounted() {
    document.addEventListener("scroll", (event) => {
      const experienceElement = document.getElementById("erfahrung")
      const languagesElement = document.getElementById("programminglanguages")
      const librariesElement = document.getElementById("libraries")
      const toolsElement = document.getElementById("tools")

      if (this.isOnScreenOrPassed(toolsElement)) {
        this.navIndex = 4;
        return;
      }

      if (this.isOnScreenOrPassed(librariesElement)) {
        this.navIndex = 3;
        return;
      }

      if (this.isOnScreenOrPassed(languagesElement)) {
        this.navIndex = 2;
        return;
      }

      if (this.isOnScreenOrPassed(experienceElement)) {
        this.navIndex = 1;
        return;
      }

      this.navIndex = 0;
    })
  }
}
</script>
<style lang="scss">
.leftside {
  padding-top: 5rem;
  padding-bottom: 5rem;
  height: 90vh;
  width: 100%;

  position: sticky;
  top: 0;
}

.socials {
  position: absolute;
  bottom: 0;

  display: flex;
  font-size: 1.5rem;

  gap: 1rem;

  color: rgb(148, 163, 184);

}

.social {
  color: rgb(148, 163, 184);
  transition: 0.15s;
}

.social:hover {
  color: rgb(226, 232, 240);
}

.leftside .upper {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  .name {
    font-weight: 700;
    font-size: 3.3rem;
  }

  .job {
    font-weight: 500;
    font-size: 1.2rem;
  }

  .catchline {
    padding-top: 1rem;
    line-height: 1.5;

    width: 70%;
  }

  .email {
    margin-top: 0.15rem;
  }
}

.navigation {
  display: inline-flex;
  flex-direction: column;

  margin-top: 5rem;
  font-size: 0.82rem;
  letter-spacing: 0.13rem;
  font-weight: 700;
}

.navigation .navpoint {
  position: relative;

  left: 3rem;
  padding: 0.7rem 0;
  padding-right: 1rem;
  padding-left: 3rem;

  margin-left: -3rem;

  color: rgb(98, 108, 121);
  transition: 0.15s;

  cursor: pointer;
}

.navigation .navpoint::before {
  content: "";
  display: block;
  height: 1px;
  width: 2rem;

  position: absolute;
  top: 50%;
  transform: translateX(-3rem);
  background-color: rgb(98, 108, 121);

  transition: 0.15s;
}

.navigation .navpoint[data-active="true"],
.navigation .navpoint:hover {
  left: 5rem;
  color: var(--primarytextcolor);

  padding-left: 5rem;
  margin-left: -5rem;
}

.navigation .navpoint[data-active="true"]::before,
.navigation .navpoint:hover:before {
  width: 4rem;
  transform: translateX(-5rem);
  background-color: var(--primarytextcolor);
}


@media screen and (max-width: 1200px) {
  /*Tablets*/

  .leftside {
    position: relative;
    height: auto;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .navigation {
    display: none;
  }

  .socials {
    position: relative;
    margin-top: 1.5rem;
  }
}

@media screen and (max-width: 600px) {
  /*Phones*/

  .leftside {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  .leftside .upper .name {
    font-size: 2.8rem;
  }

  .leftside .upper .job {
    font-size: 1.1rem;
  }

  .leftside .upper .catchline {
    width: 100%;
  }

  .social {
    font-size: 1.3rem;
  }

  .social:hover {
    color: inherit;
  }
}
</style>
