<template>
  <div>
    <!--  Banner  -->
    <div class="relative h-screen flex flex-col gap-24 justify-center align-center bg-black">
      <h3 class="font-medium tracking-widest uppercase">Август, 24-27 / Ташкент</h3>
      <h1 class="text-6xl font-medium tracking-wide	">Гастро-фестиваль Zira Fest</h1>
      <div class="arrow"></div>
    </div>

    <!--  About Event  -->
    <div class="flex flex-col py-32 gap-32">
      <div class="max-w-4xl px-3.5 mx-auto">
        <p class="text-2xl font-extralight text-center">Ежегодный весенний фестиваль с винтажными лавками, музыкой и современным искусством. Вы увидите живые выступления актеров, попробуете местной еды и запустите сотни небесных фонарей!</p>
      </div>
      <div class="max-w-7xl mx-auto	flex align-center justify-between gap-14">
        <div class="w-full flex flex-col gap-4">
          <h3 class="text-lg font-bold">4 дня</h3>
          <p class="text-base">Каждый день мы представляем новую программу</p>
        </div>
        <div class="w-full flex flex-col gap-4">
          <h3 class="text-lg font-bold">300 участников</h3>
          <p class="text-base">В фестивале участвуют артисты, музыканты, художники и повара</p>
        </div>
        <div class="w-full flex flex-col gap-4">
          <h3 class="text-lg font-bold">6 сцен</h3>
          <p class="text-base">На каждой площадке города своя программа</p>
        </div>
        <div class="w-full flex flex-col gap-4">
          <h3 class="text-lg font-bold">9 площадок</h3>
          <p class="text-base">Выбирайте любую удобную точку для празднования</p>
        </div>
      </div>
    </div>

    <!--  Map  -->
    <div class="py-32 bg-gray-100">
      <div class="flex flex-col gap-10 max-w-5xl mx-auto px-3.5">
        <h2 class="text-5xl font-bold">Где проходит фестиваль?</h2>
        <p class="text-2xl font-extralight text-center font-light	">В городе мы задействовали 9 площадок в километровой доступности друг от друга. Сменяйте локацию во время прогулок по городу.</p>
      </div>
      <div>
        <GMapMap
          :center="center"
          :options="options"
          :zoom="10"
        >
          <GMapCluster :zoomOnClick="true">
            <GMapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true"
                        @click="center = m.position" />
          </GMapCluster>
        </GMapMap>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  data() {
    return {
      center: { lat: 51.093048, lng: 6.84212 },
      options: {
        zoomControl: true,
        mapTypeControl: true,
        scaleControl: true,
        streetViewControl: true,
        rotateControl: true,
        fullscreenControl: true,
      },
      markers: [
        {
          position: {
            lat: 51.093048, lng: 6.842120
          },
        }
      ]
    }
  }
}
</script>
