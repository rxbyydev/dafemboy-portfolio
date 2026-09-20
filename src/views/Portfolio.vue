<template>
  <div class="portofolio">
    <LeftSide />
    <RightSide />
  </div>
</template>
<script>
import LeftSide from "@/components/LeftSide.vue"
import RightSide from "@/components/RightSide.vue"; 
import EmailLink from "@/components/EmailLink.vue"

export default {
  components: {
    LeftSide,
    RightSide,
    EmailLink
  }
}
</script>
<style lang="scss">
.portofolio {
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;

  position: relative;
} 


@media screen and (max-width: 1200px) {
  /*Tablets*/
  .portofolio {
    display: flex;
    flex-direction: column;
  }
}
</style>