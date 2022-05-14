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
            <p class="text-white text-left font-light">7 марта / парк Fillier / 22:30</p>
          </div>
        </div>
      </div>
    </div>

    <!--  How to was in 2016 - Slider  -->
    <div class="flex flex-col py-32 gap-24 bg-gray-100 align-center justify-center">
      <div class="flex flex-col gap-10 max-w-5xl mx-auto px-3.5">
        <h2 class="text-5xl font-bold">Программа фестиваля</h2>
        <p class="text-2xl font-extralight text-center font-light	">Мы активно насыщаем программу: устраиваем игры и конкурсы для детей, играем музыку и делаем световые представления.</p>
      </div>

      <div class="center max-w-5xl overflow-hidden">
          <el-carousel class="w-full" height="60vh">
            <el-carousel-item>
              <img class="h-full object-cover w-full" src="https://picsum.photos/1200/700" alt="">
            </el-carousel-item>
            <el-carousel-item>
              <img class="h-full object-cover w-full" src="https://picsum.photos/1201/700" alt="">
            </el-carousel-item>
            <el-carousel-item>
              <img class="h-full object-cover w-full" src="https://picsum.photos/1202/700" alt="">
            </el-carousel-item>
            <el-carousel-item>
              <img class="h-full object-cover w-full" src="https://picsum.photos/1203/700" alt="">
            </el-carousel-item>
            <el-carousel-item>
              <img class="h-full object-cover w-full" src="https://picsum.photos/1204/700" alt="">
            </el-carousel-item>
          </el-carousel>
        </div>
    </div>

    <!--  How to get involved  -->
    <div class="flex flex-col py-32 gap-24 align-center justify-center max-w-5xl mx-auto relative">
      <div class="flex flex-col gap-10 max-w-5xl mx-auto px-3.5">
        <h2 class="text-5xl font-bold">Как стать участником?</h2>
        <p class="text-2xl font-extralight text-center font-light	">Если вы варите невероятный кофе, делаете украшения, играете в группе или театре или ведете другое интересное дело, мы вам очень рады! Напишите как вы сможете сделаете фестиваль ярче!</p>
      </div>

      <div class="max-w-4xl center">
        <div class="email">
          <label for="email"></label>
          <input type="email" placeholder="Имейл" name="email" id="email" required>
        </div>
        <div class="email">
          <label for="phone"></label>
          <input type="email" placeholder="Телефон" name="phone" id="phone" required>
        </div>
        <div class="email">
          <label for="name"></label>
          <input type="email" placeholder="Имя" name="name" id="name" required>
        </div>
        <div class="message">
          <label for="message"></label>
          <textarea name="message" placeholder="Напишите нам" id="message" cols="30" rows="3" required></textarea>
        </div>
        <div class="submit">
          <input type="submit" value="Отправить" id="form_button" />
        </div>
      </div>
    </div>

    <!--  Questions  -->
    <div class="flex max-w-4xl mx-auto flex-col pt-32 gap-24">
      <div class="flex flex-col gap-10 max-w-5xl mx-auto px-3.5">
        <h2 class="text-5xl font-bold">Популярные вопросы</h2>
        <p class="text-2xl font-extralight text-center font-light	">Здесь мы собрали популярные вопросы о фестивале. Если вы не нашли ответа, напишите нам на <a href="https://mail.ru/" class="text-amber-500">info@festival.go</a>.</p>
      </div>

      <div>
        <el-collapse>
          <el-collapse-item title="Какое оборудование необходимо мне, чтобы продавать еду на маркете?" name="1">
            <div class="text-left">
              Consistent with real life: in line with the process and logic of real
              life, and comply with languages and habits that the users are used to;
            </div>
            <div class="text-left">
              Consistent within interface: all elements should be consistent, such
              as: design style, icons and texts, position of elements, etc.
            </div>
          </el-collapse-item>
          <el-collapse-item title="Какие нужны документы для участия в фестивале?" name="2">
            <div class="text-left">
              Consistent with real life: in line with the process and logic of real
              life, and comply with languages and habits that the users are used to;
            </div>
            <div class="text-left">
              Consistent within interface: all elements should be consistent, such
              as: design style, icons and texts, position of elements, etc.
            </div>
          </el-collapse-item>
          <el-collapse-item title="Можно ли на фестиваль с маленькими детьми?" name="3">
            <div class="text-left">
              Consistent with real life: in line with the process and logic of real
              life, and comply with languages and habits that the users are used to;
            </div>
            <div class="text-left">
              Consistent within interface: all elements should be consistent, such
              as: design style, icons and texts, position of elements, etc.
            </div>
            <div class="text-left">
              Easy to identify: the interface should be straightforward, which helps
              the users to identify and frees them from memorizing and recalling.
            </div>
          </el-collapse-item>
          <el-collapse-item title="Как соблюдаются санитарные условия?" name="4">
            <div class="text-left">
              Decision making: giving advices about operations is acceptable, but do
              not make decisions for the users;
            </div>
            <div class="text-left">
              Controlled consequences: users should be granted the freedom to
              operate, including canceling, aborting or terminating current
              operation.
            </div>
          </el-collapse-item>
          <el-collapse-item title="Можно ли готовить на открытом огне во время проведения фестиваля?" name="5">
            <div class="text-left">
              Decision making: giving advices about operations is acceptable, but do
              not make decisions for the users;
            </div>
            <div class="text-left">
              Controlled consequences: users should be granted the freedom to
              operate, including canceling, aborting or terminating current
              operation.
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>

    <!--  Speakkers  -->
    <div class="flex flex-col py-32 gap-24">
      <div class="flex flex-col gap-10 max-w-5xl mx-auto px-3.5">
        <h2 class="text-5xl font-bold">Программа фестиваля</h2>
        <p class="text-2xl font-extralight text-center font-light	">Мы активно насыщаем программу: устраиваем игры и конкурсы для детей, играем музыку и делаем световые представления.</p>
      </div>

      <div class="flex justify-center gap-6 flex-wrap">
        <div class="w-56 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 object-cover">
          <img class="rounded-t-lg w-full object-cover" src="https://randomuser.me/api/portraits/men/15.jpg" alt="" />
          <div class="p-2">
            <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white text-left">Стас Савин</h5>
            <p class="font-light text-left text-xs text-gray-700 dark:text-gray-400 mb-6">Дизайн дироектор</p>
            <p class="font-light text-left text-sm text-gray-700 dark:text-gray-400">Стас знает все о локациях, расположении партнеров и оборудовании</p>
          </div>
        </div>
        <div class="w-56 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 object-cover">
          <img class="rounded-t-lg w-full object-cover" src="https://randomuser.me/api/portraits/women/18.jpg" alt="" />
          <div class="p-2">
            <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white text-left">Ева Надинова</h5>
            <p class="font-light text-left text-xs text-gray-700 dark:text-gray-400 mb-6">Партнеры и спонсоры</p>
            <p class="font-light text-left text-sm text-gray-700 dark:text-gray-400">Ева — голос нашего фестиваля! Она уделяет много внимания каждому клиенту.</p>
          </div>
        </div>
        <div class="w-56 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 object-cover">
          <img class="rounded-t-lg w-full object-cover" src="https://randomuser.me/api/portraits/women/6.jpg" alt="" />
          <div class="p-2">
            <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white text-left">Елена Бакина</h5>
            <p class="font-light text-left text-xs text-gray-700 dark:text-gray-400 mb-6">Основатель и директор фестиваля</p>
            <p class="font-light text-left text-sm text-gray-700 dark:text-gray-400">Капитан нашего фестиваля! Лена знает о фестивале все! Она собрала нас в отличную команду лучшего городского праздника!</p>
          </div>
        </div>
        <div class="w-56 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 object-cover">
          <img class="rounded-t-lg w-full object-cover" src="https://randomuser.me/api/portraits/women/23.jpg" alt="" />
          <div class="p-2">
            <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white text-left">Жанна Корина</h5>
            <p class="font-light text-left text-xs text-gray-700 dark:text-gray-400 mb-6">Менеджер проекта</p>
            <p class="font-light text-left text-sm text-gray-700 dark:text-gray-400">Все что нужно знать о расписании событий, участниках и партнерах, знает Жанна.</p>
          </div>
        </div>
      </div>
    </div>

    <!--  Footer section  -->
    <footer class="flex flex-col gap-12 bg-black py-24">
      <div class="flex gap-6 justify-center align-middle">
        <a href="https://twitter.com/" target="_blank">
          <svg class="t-sociallinks__svg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xml:space="preserve"><desc>Twitter</desc><path style="fill:#ffffff;" d="M41.8 12.7c-1.3.6-2.8 1-4.2 1.1 1.5-1 2.6-2.3 3.2-4-1.5.8-2.9 1.5-4.7 1.8-1.3-1.5-3.2-2.3-5.3-2.3-4 0-7.3 3.2-7.3 7.3 0 .6 0 1.1.2 1.6-6-.3-11.3-3.2-15.1-7.6-.6 1.1-1 2.3-1 3.7 0 2.6 1.3 4.7 3.2 6-1.1 0-2.3-.3-3.2-1v.2c0 3.6 2.4 6.5 5.8 7.1-.6.2-1.3.3-1.9.3-.5 0-1 0-1.3-.2 1 2.9 3.6 5 6.8 5-2.4 1.9-5.7 3.1-9.1 3.1-.6 0-1.1 0-1.8-.2 3.2 2.1 7 3.2 11.2 3.2 13.4 0 20.7-11 20.7-20.7v-1c1.7-.7 2.8-2 3.8-3.4z"></path></svg>
        </a>
        <a href="https://vk.com/?lang=en" target="_blank">
          <svg class="t-sociallinks__svg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 109 109" enable-background="new 0 0 109 109" xml:space="preserve"><desc>VK</desc><path style="fill:#ffffff;" fill-rule="evenodd" clip-rule="evenodd" d="M58.8408 81C29.458 81 12.6984 60.7296 12 27H26.7184C27.2018 51.7567 38.0522 62.2433 46.6469 64.4056V27H60.5062V48.3515C68.9934 47.4326 77.9093 37.7026 80.9174 27H94.7766C92.4668 40.1893 82.7978 49.9189 75.922 53.9189C82.7978 57.1622 93.8103 65.6489 98 81H82.7443C79.4677 70.73 71.3033 62.7837 60.5062 61.703V81H58.8408Z"></path></svg>
        </a>
        <a href="https://www.youtube.com/" target="_blank">
          <svg class="t-sociallinks__svg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 48 48" enable-background="new -455 257 48 48" xml:space="preserve"><desc>Youtube</desc><path style="fill:#ffffff;" d="M43.9 15.3c-.4-3.1-2.2-5-5.3-5.3-3.6-.3-11.4-.5-15-.5-7.3 0-10.6.2-14.1.5-3.3.3-4.8 1.8-5.4 4.9-.4 2.1-.6 4.1-.6 8.9 0 4.3.2 6.9.5 9.2.4 3.1 2.5 4.8 5.7 5.1 3.6.3 10.9.5 14.4.5s11.2-.2 14.7-.6c3.1-.4 4.6-2 5.1-5.1 0 0 .5-3.3.5-9.1 0-3.3-.2-6.4-.5-8.5zM19.7 29.8V18l11.2 5.8-11.2 6z"></path></svg>
        </a>
        <a href="https://telegram.me/" target="_blank">
          <svg class="t-sociallinks__svg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="40px" viewBox="0 0 60 60" xml:space="preserve"><desc>Telegram</desc><path style="fill:#ffffff;" d="M52.5,9L6.1,26.9c-0.9,0.4-0.9,1.8,0,2.3l11.9,4.9l4.4,14.1c0.3,0.8,1.2,1,1.8,0.5l6.8-6.4l12.9,8.7c0.7,0.4,1.6,0,1.7-0.7L54,10.3C54.2,9.5,53.3,8.7,52.5,9z M24.5,36.7L23.8,44l-3.6-11.2l25.3-16.8L24.5,36.7z"></path></svg>
        </a>
      </div>

      <h4 class="w-72 mx-auto text-xl text-white font-bold">Свяжитесь с нами по любому вопросу по почте или в социальных сетях</h4>
      <a href="https://mail.ru/" class="text-center text-white text-base font-light" target="_blank">hello@springfest.go</a>
    </footer>
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
      ],
    }
  }
}
</script>
