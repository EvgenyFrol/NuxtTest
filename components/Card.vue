<template lang="pug">
.card
  .card__item(:class="active?'card__item--active':''")
    transition(v-for="(item, i) in data" :name="animateTop?'descUp':'descDown'")
      .card__desc( v-if="active===i"  :style="{top: posTop}" )
        h1.card__title {{item.title}}
        |
        p.card__text(:style="{height: textHeight + 'px'}" ref="text") {{item.text.length>item.size&&fullText?item.text.slice(0, item.size):item.text}}
          span.card__box(@click="visibleText()" v-if="item.text.length>item.size") ...
    transition(name="counter" mode="out-in")
      span.card__number(ref="count") {{active + 1}} / {{data.length}}
    transition(v-for="(item, i) in data" :name="animateTop?'imgDown':'imgUp'")
      .card__image( v-if="active === i")
        img.card__pic(:src='item.img' :alt='item.alt')

</template>

<script>
export default {
  name: "Card",
  data() {
    return {
      isActiveNumber: 0,
      data: this.$store.state.menuLinks,
      textHeight: 0,
      textMaxHeight: 0,
      posTop: 0,
      posLeft:0,
      posBottom: 0,
      fullText: true,
    }
  },
  props: {
    active: Number,
    animateTop: Boolean,
    size: Number,
  },
  computed:{
    returnMenu() {
      return this.$parent.$data.data
    },
  },
  watch: {
    active() {
      this.posTop = 38 + '%';
      this.fullText = true;
    }
  },
  methods: {
    visibleText() {

      this.fullText = !this.fullText

      this.$refs.text[0].classList.toggle('card__text--open');

      let str = parseInt(getComputedStyle(this.$refs.text[0]).lineHeight, 10);
      let padd = (document.querySelector('.card__item').offsetHeight - document.querySelector('.card__desc').offsetHeight) / 4;
      console.log(padd)

      if (this.$refs.text[0].classList.contains('card__text--open')) {

        this.posTop = padd + 'px';
        this.textHeight = document.querySelector('.card__text--open').offsetHeight;

        this.$refs.count.style.opacity = 0;

      } else this.changeTop();
    },
    changeTop() {

      let str = parseInt(getComputedStyle(this.$refs.text[0]).lineHeight, 10);

      this.textHeight = str * 3;
      this.textMaxHeight = str * 10;
      this.posTop = 38 + '%';
      this.$refs.text[0].scrollTop = 0;
      this.$refs.count.style.opacity = 1;
    }
  },
  mounted() {

    this.changeTop();

  }
}
</script>

<style lang="scss">
.card {

  width: 84%;
  background: #F0F0F0;
  position: relative;
  overflow: hidden;
  top: 64px;
  height: 87vh;

  &__item {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1516px;
    height: 100%;
  }

  &__desc {
    display: inline-block;
    width: 29%;
    position: absolute;
    top: 38%;
    left: 11.5%;
    transition: all 0.5s ease;
  }

  &__title {
    font-style: normal;
    font-weight: bold;
    font-size: 2.9em;
    line-height: 53px;
    letter-spacing: -3.65px;
    text-transform: uppercase;
    color: #262525;
    text-align: left;
    padding: 0 0 42px 0;
  }

  &__text {
    position: relative;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    letter-spacing: -0.0220791px;
    color: #262525;
    text-align: left;
    white-space: normal;
    transition: all 0.5s ease;

    &--open {
      height: 100%!important;
    }
  }

  &__box {
    display: none;
    margin-left: 8px;
    display: inline-block;
    background: #262525;
    padding: 0 7px;
    color: #ffffff;

    &:hover {
      cursor: pointer;
      background: #363535;
      color: #ffffffbd;
    }
  }

  &__number {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 300;
    font-size: 17px;
    line-height: 20px;
    color: #262525;
    position: absolute;
    left: 11.5%;
    bottom: 18%;
    transition: all 0.3s ease;
  }

  &__image {
    position: absolute;
    right: 0;
    width: 50%;
    height: 100%;
    transition: all 0.5s ease;
    overflow: hidden;
  }

  &__pic {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  &__size {
    display: none;
  }

  @media (max-width: 1440px) {

    &__desc {
      left: 8%;
      width: 35%;
    }

    &__title {
      font-size: 33px;
      line-height: 38px;
    }

    &__text {
      font-size: 12px;
      line-height: 20px;
    }
  }

  @media (max-width:1024px) {
    &__desc {
      left: 6%;
      width: 40%;
    }

    &__text {
      font-size: 12px;
      line-height: 15px;
    }

    &__number {
      font-size: 13px;
      line-height: 15px;
      bottom: -119px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;

    &__item {
      display: flex;
      flex-direction: column-reverse;
    }

    &__image {
      position: static;
      width: 100%;
      overflow: hidden;
    }

    &__pic {
      object-fit: scale-down;
    }

    &__desc {
      position: static;
      height: 20%;
      padding: 30px 10%;
      width: 100%;
    }

    &__text {
      top: auto;
      bottom: 5%;
    }

    &__number {
      top: 20px;
      right: 20px;
      left: auto;
    }

    &__box {
      width: 20px;
      height: 20px;
      padding: 0 5px;
    }
  }

  @media (max-width: 375px) {
    &__number {
      font-size: 12px;
      line-height: 14px;
    }
  }
}


.counter-enter {
  transform: translateY(100%);
  opacity: 0;
}

.counter-enter-to {
  opacity: 1;
  transform: none;
  }

.counter-leave {
  opacity: 1;
}

.counter-leave-to {
  opacity: 0;
}

.descUp-enter {
  transform: translateY(100%);
  opacity: 0;
}

.descUp-enter-to {
  opacity: 1;
  transform: none;
  }

.descUp-leave {
  opacity: 1;
}

.descUp-leave-to {
  opacity: 0;
}

.descDown-enter {
  transform: translateY(-100%);
  opacity: 0;
}

.descDown-enter-to {
  opacity: 1;
  transform: none;
}

.descDown-leave {
  opacity:1;
}

.descDown-leave-to {
  opacity:0;
}

.imgUp-enter {
  transform: translateY(100%);
  z-index:1;
}

.imgUp-enter-to {
  z-index:1;
}

.imgUp-leave {
  z-index:1;
}

.imgUp-leave-to {
  z-index:0;
}

.imgDown-enter {
  transform: translateY(-100%);
  z-index:1;
}

.imgDown-enter-to {
  z-index:1;
 }

.imgDown-leave {
  z-index:0;
}
.imgDown-leave-to {
  z-index:0;
}

</style>
