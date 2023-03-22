<template>
  <div>
    <div class="lg:flex">
      <div class="lg:w-7/12 border-r-2">
        <div class="lg:text-[13vw] md:text-9xl w-full uppercase text-6xl whitespace-nowrap overflow-hidden border-b-2">
          <h2>Projects * <span>Projects</span> * Projects</h2>
        </div>
        <div class="flex flex-col">
          <ProjectCard :name="'République'" :src="'img/repu.png'"/>
          <ProjectCard :name="'Phone App'" :src="'img/phone.png'"/>
          <ProjectCard :name="'Object Detection'" :src="'img/object.svg'"/>
          <ProjectCard :name="'Protection Civile'" :src="'img/protect.svg'"/>
        </div>
      </div>
      <div class="lg:w-5/12 py-14 px-12 relative">
        <div class="absolute top-0 left-0 py-2 px-4 border-r-2 border-b-2 font-semibold dev">
          <span>Fullstack Developer</span>
        </div>
        <div class="w-3/5 m-auto">
          <img src="img/hello.png" alt="" class="pres w-full border-2">
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium alias illum facere hic a consectetur ab est, illo quas voluptate nobis odit quos ipsum dignissimos ipsa, culpa, doloribus possimus dicta beatae necessitatibus eius provident. Rerum nulla voluptatum modi tempore reiciendis, magnam quisquam impedit? Ab, aut non! Fugit ipsa sapiente dignissimos?
        </p>
      </div>
    </div>
    
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
h2{
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
.dev{
  box-shadow: 5px 5px 0 2px #F0A04B;
}
</style>