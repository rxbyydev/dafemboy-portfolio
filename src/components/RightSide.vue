<template>
    <div class="rightside" id="aboutme">
      <p class="about-p fadein d1500ms">Vor rund sechs Jahren bin ich über eigene <b>Minecraft-Plugins</b> in die Programmierung mit Java gestolpert — zuerst mit Bukkit, später mit PaperMC. Aus der Neugier, wie ein Spiel unter der Haube funktioniert, wurde ein Hobby, das mich bis heute nicht mehr loslässt. Heute durfte ich bereits die <a href="https://gta5apexure.com" target="_blank">Projektleitung bei der GTA-V-Multiplayer-Community Apexure</a> übernehmen und den <a href="https://yourmcshop.com" target="_blank">Minecraft-Shop YourMCShop</a> als Administrator betreuen.</p>
      <p class="about-p fadein d1700ms">Mit der Zeit kamen Discord-Bots mit JDA und die Webentwicklung dazu. Heutzutage baue ich Interfaces mit Vue und PrimeVue, Backends mit Node.js und Express und experimentiere mit Game-Development in Lua und Luau auf Roblox sowie im RAGE-Multiplayer. Am meisten Spaß macht mir der Teil, an dem sich Programmierung und Design treffen — Sachen, die gut aussehen, aber zugleich sauber unter der Haube programmiert worden sind.</p>
      <p class="about-p fadein d1900ms">Ich bin 18 Jahre alt, komme aus Baden-Württemberg und lerne am liebsten, indem ich in meiner Freizeit einfach Projekte baue und neue Technologien ausprobiere.</p>

      <Experience />
      <ProgrammingLanguages />
      <Libraries />
      <Tools />

      <p class="credits-p fadeinonscroll d500ms">Basiert auf dem Portfolio-Template von <a href="https://github.com/devgosling/portfolio-source" target="_blank">Steven Kukla (devgosling)</a>, lizenziert unter <a href="https://www.gnu.org/licenses/agpl-3.0.html" target="_blank">AGPL-3.0</a> — angepasst von Lee Daniel Hertel. Erstellt mit <a href="https://vuejs.org" target="_blank">Vue.js</a> und <a href="https://primevue.org" target="_blank">PrimeVue</a>, gebaut mit <a href="https://vite.dev" target="_blank">Vite</a> und deployed auf einem <a href="https://workers.cloudflare.com" target="_blank">Cloudflare Worker</a>. Der <a href="https://github.com/DEIN-GITHUB/dafemboy-portfolio" target="_blank">Quellcode dieser Seite</a> ist öffentlich verfügbar. Text ist auf die <a href="https://rsms.me/inter/" target="_blank">Inter</a> Schriftart gesetzt.</p>
    </div>
</template>
<script>
import Experience from "@/components/Experience.vue"
import ProgrammingLanguages from "./ProgrammingLanguages.vue";
import Libraries from "./Libraries.vue";
import Tools from "./Tools.vue";

export default {
  components: {
    Experience,
    ProgrammingLanguages,
    Libraries,
    Tools
  }
}
</script>
<style lang="scss">
.rightside {
  padding-top: 5rem;
}

.rightside .about-p {
  color: var(--secondarytextcolor);
  line-height: 1.65;
  font-size: 1rem;

  padding-left: 1rem;
  padding-right: 1rem;
}

.rightside .about-p b {
  color: var(--primarytextcolor);
  font-weight: 600;
}

.rightside .credits-p {
  color: var(--secondarytextcolor);
  line-height: 1.65;
  font-size: 0.9rem;

  width: 90%;

  margin-top: 10vh;
  margin-bottom: 7rem;
  padding-left: 1rem;
  padding-right: 1rem;
}


@media screen and (max-width: 1200px) {
  /*Tablets*/
  .rightside {
    padding-top: 1rem;
  }
}

@media screen and (max-width: 600px) {
  /*Phones*/
  .rightside {
    padding-top: 1rem;
  }

  .rightside .about-p {
    font-size: 0.9rem;
  }

  .rightside .credits-p {
    width: 100%;
    font-size: 0.8rem;
  }
}
</style>
