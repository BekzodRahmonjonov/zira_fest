<template>
  <div>
    <!--  Banner  -->
    <div style="background: url('https://picsum.photos/2000/800'), -webkit-linear-gradient(top, rgba(0,0,0,0.0), rgba(0,0,0,0.60));" class="w-full relative h-screen flex flex-col gap-24 justify-center align-center bg-black">
      <h3 class="font-medium tracking-widest uppercase text-white">Август, 24-27 / Ташкент</h3>
      <h1 class="text-6xl font-medium tracking-wide	text-white">Гастро-фестиваль Zira Fest</h1>
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
    <div class="flex flex-col py-32 bg-gray-100 gap-24">
      <div class="flex flex-col gap-10 max-w-5xl mx-auto px-3.5">
        <h2 class="text-5xl font-bold">Где проходит фестиваль?</h2>
        <p class="text-2xl font-extralight text-center font-light	">В городе мы задействовали 9 площадок в километровой доступности друг от друга. Сменяйте локацию во время прогулок по городу.</p>
      </div>
      <div>
        <GMapMap
          :center="center"
          :options="options"
          :zoom="10"
          style="height: 70vh"
        >
          <GMapCluster :zoomOnClick="true">
            <GMapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true"
                        @click="center = m.position" />
          </GMapCluster>
        </GMapMap>
      </div>
    </div>

    <!--  About festival  -->
    <div class="flex flex-col py-32 gap-24">
      <div class="flex flex-col gap-10 max-w-5xl mx-auto px-3.5">
        <h2 class="text-5xl font-bold">Программа фестиваля</h2>
        <p class="text-2xl font-extralight text-center font-light	">Мы активно насыщаем программу: устраиваем игры и конкурсы для детей, играем музыку и делаем световые представления.</p>
      </div>

      <div class="flex flex-col gap-16">
        <div class="card max-w-5xl mx-auto bg-gradient-to-t from-gray-400 to-white relative object-cover">
          <img style="height: 80vh; position: relative; z-index: -1" class="w-full object-cover" src="https://picsum.photos/1200/700" alt="Gallery image">
          <div class="flex flex-col gap-10 absolute bottom-0.5 p-10 pb-16">
            <h3 class="text-white text-4xl font-bold text-left">Винтажные распродажи</h3>
            <p class="text-white text-left font-light">5-8 марта</p>
          </div>
        </div>

        <div class="flex gap-5 max-w-5xl mx-auto px-6">
          <div class="card card_small w-1/2 mx-auto bg-gradient-to-t from-gray-400 to-white relative">
            <img style="height: 80vh; position: relative; z-index: -1" class="w-full" src="https://picsum.photos/600/700" alt="Gallery image">
            <div class="flex flex-col gap-6 absolute bottom-0.5 p-10">
              <h3 class="text-white text-2xl font-bold text-left">Маркет еды</h3>
              <p class="text-white text-left font-light text-sm">5-8 марта</p>
            </div>
          </div>

          <div class="card card_small w-1/2 mx-auto bg-gradient-to-t from-gray-400 to-white relative">
            <img style="height: 80vh; position: relative; z-index: -1" class="w-full" src="https://picsum.photos/600/701" alt="Gallery image">
            <div class="flex flex-col gap-6 absolute bottom-0.5 p-10">
              <h3 class="text-white text-2xl font-bold text-left">Стрит арт конкурсы</h3>
              <p class="text-white text-left font-light text-sm">5-8 марта</p>
            </div>
          </div>
        </div>

        <div class="card max-w-5xl mx-auto bg-gradient-to-t from-gray-400 to-white relative object-cover">
          <img style="height: 80vh; position: relative; z-index: -1" class="w-full object-cover" src="https://picsum.photos/1201/700" alt="Gallery image">
          <div class="flex flex-col gap-10 absolute bottom-0.5 p-10 pb-16">
            <h3 class="text-white text-4xl font-bold text-left">MILL MAC,<br> презентация нового альбома</h3>
            <p class="text-white text-left font-light">5-8 марта</p>
          </div>
        </div>
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
