<template>
    <div class="education">
        <span class="title primarytext fadeinonscroll d100ms" id="education">SCHULISCHE BILDUNG</span>
        <div class="education-container">
            <a :class="['education-element', 'fadeinonscroll d100ms']" data-state="neutral" v-for="(school, index) in education" :key="school.index" :href="school.link" target="_blank">
                <div class="education-content">
                    <span class="education-title">{{ school.title }} <Icon name="arrow-up-right" class="education-title-arrow" /></span>
                    <span class="period">{{ school.period }}</span>
                    <div class="education-diplomas" v-if="school.positions">
                        <span v-for="position in school.positions"><Icon name="graduation-cap" /> {{ position }}</span>
                    </div>
                    <p class="education-description secondarytext" v-if="school.description">{{ school.description }}</p>
                </div>
            </a>
        </div>
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
            education: [
                {
                    index: 0,
                    title: "Karl-Hofmann-Schule BBS Worms",
                    period: "2025 bis voraussichtlich 2027",
                    description: "Noch nicht vollendetes Fachabitur mit Schwerpunkt Informatik sowie Abschluss als Staatlich geprüfter informationsteschnischer Assistent.",
                    positions: ["Fachhochschulreife Schwerpunkt Informatik", "Staatlich geprüfter informationstechnischer Assistent"],
                    link: "https://khsw.biz-worms.de/"
                },
                {
                    index: 0,
                    title: "Otto-Hahn-Schule GRS+ Westhofen",
                    period: "2019 bis 2025",
                    description: "Die Wahlpflichtfächer \"Informationstechnologie und moderne Medien\" (ITE) & \"Technik und Naturwissenschaften\" (TuN) wurden belegt.",
                    positions: ["Qualifizierter Sekundarabschluss I"],
                    link: "https://ohs-westhofen.de/"
                },
                {
                    index: 0,
                    title: "Grundschule Seebachschule Osthofen",
                    period: "2017 bis 2019",
                    link: "https://seebachschule.jimdoweb.com/"
                },
                {
                    index: 0,
                    title: "Grundschule Schule an der Weschnitz Einhausen",
                    period: "2015 bis 2017",
                    link: "https://www.grundschule-einhausen.de"
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

        const educationElements = document.querySelectorAll(".education-element")

        educationElements.forEach((educationElement) => {
            educationElement.addEventListener("mouseover", () => {
                if (window.screen.width <= 1024) return;
                if (this.isInFadeIn(educationElement)) return;
                educationElements.forEach(b => {
                    if (this.isInFadeIn(b)) return;
                    b.setAttribute("data-state", "not-hovered")
                })
                educationElement.setAttribute("data-state", "neutral")
            })
        })

        educationElements.forEach((educationElement) => {
            educationElement.addEventListener("mouseleave", () => {
                if (window.screen.width <= 1024) return;
                if (this.isInFadeIn(educationElement)) return;
                educationElements.forEach(b => b.setAttribute("data-state", "neutral"))
            })
        })
    }

}
</script>
<style lang="scss">
.education {
    padding-top: 6rem;
    display: flex;
    flex-direction: column;
} 

.education-container {
    display: flex;
    flex-direction: column;

    gap: 0.5rem;
}

.education .title {
    font-size: 1rem;
    letter-spacing: 0.13rem;
    font-weight: 700;
    padding: 1rem;

}

.education-element {
    display: flex;
    flex-direction: column;

    padding: 1rem;

    border-radius: 0.5rem;

    transition: 0.2s;

    cursor: pointer;
}

.education-content {
    display: flex;
    flex-direction: column;
}

.education-element[data-state=not-hovered] {
    opacity: 0.5;
}

.education-element:hover {
    background-color: rgba(30, 41, 59, 0.5);
    box-shadow: inset 0 1px 0 0 rgba(148, 163, 184, 0.1);
}

.education-element:hover * .education-title {
    color: rgb(123, 255, 255);
}

.education-element:hover * .education-title-arrow {
    transform: translate(30%, -30%);
}

.education-element .period {
    font-size: 0.9rem;
    font-weight: 600;
    color: rgb(140, 155, 175);

    padding-top: 0.3rem;
    padding-right: 0.3rem;
}

.education-title {
    font-size: 1.1rem;
    font-weight: 500;
    color: var(--primarytextcolor);

    transition: 0.2s;
}

.education-diplomas {
    margin-top: 0.2rem;
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
    color: rgb(98, 108, 121);
}

.education-title-arrow {
    font-size: 0.8rem;

    transition: 0.2s;
}

.education-description {
    font-size: 0.9rem;
    line-height: 1.5;

    margin-top: 0.7rem;
    margin-bottom: 0;
}

.education-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem;
}


.education-tag .p-tag-label {
    font-weight: 500;
    padding: 0.1rem;
}

@media screen and (max-width: 1200px) {
  /*Tablets*/
  .education-element:hover {
    background-color: inherit;
    box-shadow: inherit;
  }
  
  .education-element:hover * .education-title {
    color: inherit;
  }
  
  .education-element:hover * .education-title-arrow {
    transform: inherit;
  }
}


@media screen and (max-width: 600px) {
  /*Phones*/
  .education {
    padding-top: 3rem;
  }

  .education-element {
    display: flex;
    flex-direction: column;
  }

  .education-description {
    font-size: 0.85rem;
  }
}
</style>