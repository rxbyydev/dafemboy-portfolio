<template>
    <div class="projects">
        <span class="title primarytext fadeinonscroll d100ms" id="projects">PROJEKTE</span>
        <div class="project-container">
            <a :class="'project-element fadeinonscroll d100ms'" data-state="neutral" v-for="(project, index) in projects" :key="project.index" :href="project.link" target="_blank">
                <img class="project-img" :src="'' + project.image" alt="" draggable="false">
                <div class="project-content">
                    <span class="project-title">{{ project.title }} <Icon v-if="project.link" name="arrow-up-right" class="project-title-arrow" /></span>
                    <p class="project-description secondarytext">{{ project.description }}</p>
                    <div v-if="project.extra" class="primarytext" style="display: flex; gap: 0.3rem; align-items: center; margin-bottom: 0.4rem; font-size: 0.85rem"><Icon :name="project.extra.icon" style="font-size: 0.7rem;" />{{ project.extra.text }}</div>
                    <div class="project-tags">
                        <Tag :class="'project-tag fadeinonscroll d' + ((tindex + 1) * 100 + 100) + 'ms'"  v-for="(tag, tindex) in project.tags" :value="tag" rounded severity="primary" />
                    </div>
                </div>
            </a>
        </div>
        <span class="subtitle primarytext fadeinonscroll d100ms">Und noch vieles mehr...</span>
    </div>
</template>
<script>
import Tag from 'primevue/tag';
import Icon from "@/components/Icon.vue"

export default {

    components: {
        Tag,
        Icon
    },

    data() {
        return {
            projects: [
                {
                    index: 0,
                    title: "Online Essenbestellungsapp (In Entwicklung)",
                    image: "/Bestellando.png",
                    description: "Eine moderne Essenbestellungsapp für Online Bestellungen ähnlich wie Lieferando. Diese wird als Projekt der Karl-Hofmann-Schule BBS Worms entwickelt.",
                    tags: ["JavaScript", "React", "React Native", "PrimeReact", "PrimeFlex", "Node.js", "Appwrite", "Express", "NestJS", "PostgreSQL"],
                    link: "https://github.com/devgosling/bestellando"
                },
                {
                    index: 0,
                    title: "Admin Control Panel für Spielserver",
                    image: "/ACP.png",
                    description: "Admin Control Panel für Spieladministratoren mit Firebase und eigener Express API. Benutzer- und Rollenverwaltungssystem mit Berechtigungen durch MySQL Datenbank.",
                    tags: ["JavaScript", "VueJS", "PrimeVue", "Node.js", "Firebase", "APIs", "Express", "MySQL"],
                    link: ""
                },
                {
                    index: 0,
                    title: "Bußgeldrechner für Spielserver",
                    image: "/BUSSGELDRECHNER.png",
                    description: "Bussgeldrechner um sich für einen Grand Theft Auto 5 Rollenspiel Spielserver Bußgelder nach Auswahl berechnen zu lassen.",
                    extra: {
                        icon: "user",
                        text: "2.000+ Monatliche Benutzer"
                    },
                    tags: ["JavaScript", "Html", "CSS", "GTag"],
                    link: "https://devgosling.github.io/bussgeldrechner/"
                },
                {
                    index: 0,
                    title: "WELT Nachrichten Discord Bot",
                    image: "/WELT.png",
                    extra: {
                        icon: "discord",
                        text: "Auf 250+ Discord Servern"
                    },
                    description: "Verifizierter Discord Bot, welcher den RRS-Feed von den Kategorien die ein Benutzer eingestellt hat ausließt und sobald eine neue Nachricht in dieser Kategorie erscheint automatisch in einen vom Benutzer angegeben Discord Textkanal sendet.",
                    tags: ["JavaScript", "RRS Reader", "Node.js", "Discord.js"],
                    link: ""
                },
            ]
        }
    },
    
    methods: {
        isInFadeIn(element) {
            return element.classList.contains("fadein") || element.classList.contains("fadeinonscroll")
        }
    },

    mounted() {
        const projectElements = document.querySelectorAll(".project-element")

        projectElements.forEach((projectElement) => {
            projectElement.addEventListener("mouseover", () => {
                if (window.screen.width <= 1024) return;
                if (this.isInFadeIn(projectElement)) return;

                projectElements.forEach(b => {
                    if (this.isInFadeIn(b)) return;
                    b.setAttribute("data-state", "not-hovered")
                })
                projectElement.setAttribute("data-state", "neutral")
            })
        })

        projectElements.forEach((projectElement) => {
            projectElement.addEventListener("mouseleave", () => {
                if (window.screen.width <= 1024) return;
                if (this.isInFadeIn(projectElement)) return;
                projectElements.forEach(b => b.setAttribute("data-state", "neutral"))
            })
        })
    }

}
</script>
<style lang="scss">
.projects {
    padding-top: 6rem;
    display: flex;
    flex-direction: column;
} 

.project-container {
    display: flex;
    flex-direction: column;

    gap: 0.5rem;
}

.projects .title {
    font-size: 1rem;
    letter-spacing: 0.13rem;
    font-weight: 700;
    padding: 1rem;

}

.projects .subtitle {
    font-size: .95rem;
    font-weight: 600;
    padding: 1rem;

}

.project-element {
    display: grid;
    grid-template-columns: 27% 73%;

    padding: 1rem;

    border-radius: 0.5rem;

    transition: 0.2s;

    cursor: pointer;
}

.project-element[data-state=not-hovered] {
    opacity: 0.5;
}

.project-img {
    width: 90%;
    aspect-ratio: 16 / 9;
    border-radius: 0.4rem;
    border: 0.15rem solid;
    border-color: rgba(226, 232, 240, 0.1);
    object-fit: cover;

    transition: 0.15s;
}

.project-element:hover .project-img {
    border-color: rgba(226, 232, 240, 0.3);
}

.project-element:hover {
    background-color: rgba(30, 41, 59, 0.5);
    box-shadow: inset 0 1px 0 0 rgba(148, 163, 184, 0.1);
}

.project-element:hover * .project-title {
    color: rgb(123, 255, 255);
}

.project-element:hover * .project-title-arrow {
    transform: translate(30%, -30%);
}

.project-element .period {
    font-size: 0.75rem;
    font-weight: 600;
    color: rgb(98, 108, 121);

    padding-top: 0.3rem;
}

.project-title {
    font-size: 1.1rem;
    font-weight: 500;
    color: var(--primarytextcolor);

    transition: 0.2s;
}

.project-positions {
    margin-top: 0.2rem;
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
    color: rgb(98, 108, 121);
}

.project-title-arrow {
    font-size: 0.8rem;

    transition: 0.2s;
}

.project-description {
    font-size: 0.9rem;
    line-height: 1.5;

    margin-top: 0.7rem;
}

.project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem;
}


.project-tag .p-tag-label {
    font-weight: 500;
    padding: 0.1rem;
}

@media screen and (max-width: 1200px) {
  /*Tablets*/
  .project-element:hover .project-img {
    border-color: rgba(226, 232, 240, 0.1);
  }

  .project-element:hover {
    background-color: inherit;
    box-shadow: inherit;
  }

  .project-element:hover * .project-title {
    color: inherit;
  }

  .project-element:hover * .project-title-arrow {
    transform: inherit;
  }
}

@media screen and (max-width: 600px) {
  /*Phones*/

  .projects {
    padding-top: 3rem;
  }

  .project-element {
    display: flex;
    flex-direction: column-reverse;
  }

  .project-img {
    margin-top: 0.5rem;
    max-width: 50%;
  }

  .project-description {
    font-size: 0.85rem;
  }
}
</style>