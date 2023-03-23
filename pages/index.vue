<template>
  <div>
    <div class="lg:flex lg:h-[90vh]">
      <div class="lg:w-7/12 border-r-2">
        <div class="lg:text-[13vw] md:text-9xl w-full uppercase text-6xl whitespace-nowrap overflow-hidden border-b-2">
          <h2 class="project-title">Projects * <span>Projects</span> * Projects</h2>
        </div>
        <div class="flex flex-col">
          <NuxtLink to="/projects/wasted">
            <ProjectCard :name="'Wasted Paris Shop'" :src="'img/repu.png'"/>
          </NuxtLink>
          <NuxtLink to="/projects/republique">
            <ProjectCard :name="'République'" :src="'img/repu.png'"/>
          </NuxtLink>
          <NuxtLink to="/projects/phone">
            <ProjectCard :name="'Phone App'" :src="'img/phone.png'"/>
          </NuxtLink>
          <NuxtLink to="/projects/object">
            <ProjectCard :name="'Object Detection'" :src="'img/object.svg'"/>
          </NuxtLink>
          <NuxtLink to="/projects/protect">
            <ProjectCard :name="'Civil Protection'" :src="'img/protect.svg'"/>
          </NuxtLink>
        </div>
      </div>
      <div class="c-pres lg:w-5/12 py-14 px-8 md:px-12 relative lg:overflow-y-auto border-b-2">
        <div class="absolute top-0 left-0 py-2 px-4 border-r-2 border-b-2 font-semibold dev">
          <span>Fullstack Developer</span>
        </div>
        <div class="md:w-3/5 m-auto">
          <img src="public/img/hello.png" alt="" class="pres w-full border-2">
        </div>
        <div class="pt-8">
          <p>
            My name's Thomas, I'm a second year student in the world of web development at the <a href="https://www.iim.fr/" class="text-link">IIM Digital School</a>
            I'd like to specialise in front-end development because I like the creative aspect of web development
            Other than programming, I like surfing 🏄 (I'm member of <a href="https://www.instagram.com/lavaguedevinci/" class="text-link">La vague de Vinci</a>), discover new technologies, listening to music, go out with my friends
            During these two years, I've been able to work on several projects, both in group and individually, and I've been able to learn a lot of new things like Symfony and Vue.js and that's why I'm looking forward to specialise in these two frameforks.
            <br>
            <strong>And that's why I'm looking for an internship in september 2023 in order to put my knowledge into practice and to learn new things.</strong>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
.project-title{
  font-family: $strange;
  animation: rotate 30s linear infinite!important;
  span{
    color: transparent;
    -webkit-text-stroke: 2px;
    -webkit-text-stroke-color: $text;
  }
  @keyframes rotate {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
}

.pres{
  box-shadow: 5px 5px 0 2px #F0A04B;
}
.c-pres{
  &::-webkit-scrollbar {
    width: 0px !important;
  }
  .text-link{
    text-decoration: underline;
    text-decoration-color: #F0A04B;
  }
}
.dev{
  box-shadow: 5px 5px 0 2px #F0A04B;
}


</style>