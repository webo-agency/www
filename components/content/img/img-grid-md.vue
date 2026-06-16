<template>
  <div class="img-grid">
    <div class="w-full tablet:w-2/3 tablet:h-1/2">
        <effect-appear class="w-full h-full">
            <nuxt-picture v-if="Img1" 
            class="image"
            :src="Img1" />
            <div v-else class="placeholder">1</div>
        </effect-appear>
    </div>
    <div class="w-full tablet:w-2/3 tablet:h-1/2 flex flex-col tablet:flex-row gap-2 tablet:gap-[18px]" >
        <div class="w-full tablet:basis-1/2">
            <effect-appear class="w-full h-full">
                <nuxt-picture v-if="Img2"
                class="image"
    
                :src="Img2" />
                <div v-else class="placeholder">2</div>
            </effect-appear>
        </div>
        <div class="w-full tablet:basis-1/2" >
            <effect-appear class="w-full h-full">
                <nuxt-picture v-if="Img3" 
                class="image"
                :src="Img3" />
                <div v-else class="placeholder">3</div>
            </effect-appear>
        </div>            
    </div>            


    <div class="w-full tablet:w-1/3 tablet:h-3/5">
        <effect-appear class="w-full h-full">
            <nuxt-picture v-if="Img4" 
            class="image"
            :src="Img4" />
            <div v-else class="placeholder">4</div>
        </effect-appear>
    </div>          

    <div class="w-full tablet:w-1/3 tablet:h-2/5">
        <effect-appear class="w-full h-full">
            <nuxt-picture v-if="Img5" 
            class="image"
            :src="Img5" />
            <div v-else class="placeholder">5</div>
        </effect-appear>
    </div>            

    <div
      class="absolute !p-0 -z-10 w-[217px] h-[237px] -bottom-5 tablet:-bottom-[30px] desktop:-bottom-[50px] -left-3 tablet:-left-[30px] desktop:-left-[50px] rounded-[5px] bg-gray-light"
    ></div>
    <div class="absolute -bottom-[100px] tablet:-bottom-24 -right-3 tablet:-right-10 fullHd:-right-28">
      <svg class="w-14 tablet:w-auto" width="75" height="100" viewBox="0 0 96 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.6677 0.0102295L19.659 0.0156311H19.6509L19.6412 0.0210328C19.5634 0.037241 19.4894 0.0750363 19.4256 0.134467L19.4181 0.139899L19.4078 0.150702L19.3976 0.156104L0.158325 19.4008L0.149124 19.4062L0.138336 19.4169L0.130219 19.4277L0.121582 19.4385L0.116699 19.4439C0.0718563 19.5034 0.039982 19.5629 0.0210724 19.6331L0.0189362 19.6385L0.0157013 19.6493L0.0146027 19.6601C0.0119013 19.6709 0.0097385 19.6762 0.00811768 19.687C0.00325519 19.7194 0 19.752 0 19.779V107.066C0 107.287 0.134017 107.482 0.338242 107.568L45.36 125.759C53.851 129.185 61.5386 128.256 67.1088 124.025C71.4418 120.74 74.4997 115.435 75.6343 108.584C87.1314 108.065 95.3598 98.4215 95.3598 83.229V30.86C95.3598 30.6385 95.2247 30.4385 95.0194 30.3575L19.9886 0.0426697C19.9664 0.0318642 19.9432 0.0264355 19.92 0.0210328L19.9086 0.0156311H19.9027L19.893 0.0102295C19.8184 -0.00597874 19.7417 -0.000575983 19.6677 0.0102295ZM19.484 28.0182L1.08057 20.584V106.704L45.7652 124.755C53.8407 128.018 61.1603 127.191 66.455 123.166C71.7767 119.13 75.04 111.901 75.04 102.468V50.4613L19.679 28.0938C19.6082 28.083 19.5424 28.056 19.484 28.0182ZM94.2792 32.1729L76.1206 50.3208V102.468C76.1206 104.219 76.0071 105.899 75.7964 107.498C86.6506 106.888 94.2792 97.6219 94.2792 83.229V32.1729ZM20.3203 27.1915L75.4506 49.4617L93.8686 31.0544L20.3203 1.33927V27.1915ZM1.49982 19.5844L19.2398 26.7539V1.84724L1.49982 19.5844Z" fill="#07E7C4"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        Img1: String,
        Img2: String,
        Img3: String,
        Img4: String,
        Img5: String,
    }

}
</script>

<style>
.img-grid{
    @apply relative flex flex-col flex-wrap tablet:h-[900px] 
}

.img-grid > div {
    @apply  p-[4px] tablet:p-[9px];
}

.img-grid .placeholder{
    @apply flex h-full justify-center bg-gray-light items-center text-4xl text-gray-dark/50 rounded-[5px] transition duration-300 hover:scale-105
}

.img-grid .image{
    @apply block h-full w-full object-cover rounded-[5px] transition duration-500 hover:scale-[1.02] overflow-hidden
}

.img-grid .image img{
    @apply h-full w-full object-cover
}
</style>