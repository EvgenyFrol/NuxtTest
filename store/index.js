import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    state: {
      headerLinks: [
        {link: '/about', title: 'about', text: 'О комплексе'},
        {link: '/features', title: 'features', text: 'Особенности'},
        {link: '/penthouses', title: 'penthouses', text: 'Пентхаусы'},
        {link: '/apartaments', title: 'apartaments', text: 'Выбрать квартиру'},
      ],
      menuLinks: [
        {
          title: 'Архитектура',
          text: `Оригинальная архитектура жилого комплекса бизнес-класса «Первомайская» формирует современный стиль жизни`,
          img: require('@/static/img/secure.png'),
        },
        {
          title: 'Благоустройство',
          text: `Запроектированные большие окна, которые пропускают много солнечного света, наполнят ваши квартиры теплотой и уютом`,
          img: require('@/static/img/благоустройство.png'),
        },
        {
          title: 'Безопасность',
          text: `Современный двор европейского уровня — территория для детей, игр на свежем воздухе и вечерних`,
          img: require('@/static/img/архитектура.png'),
        },
        {
          title: 'Инженерия',
          text: `Оригинальная архитектура жилого комплекса бизнес-класса «Первомайская» формирует современный стиль жизни`,
          img: require('@/static/img/инженерия.png'),
        },
        {
          title: 'Инфраструктура',
          text: `Прекрасный вариант для тех, кто предпочитает жить в спокойном районе среди интеллигенции, но при этом чувствовать ритм мегаполиса`,
          img: require('@/static/img/arch.png'),
        },
        {
          title: 'Транспортная доступность',
          text: `Жилой комплекс «Первомайская» расположен в престижном Академическом районе`,
          img: require('@/static/img/транспортнаядоступность.png'),
        },
      ]
    },
    mutations: {
      returnLinks(state) {
        return this.$store.state.headerLinks
      },
      returnMenu(state) {
        return this.$store.state.menuLinks
      }
    }
  })

export default store
