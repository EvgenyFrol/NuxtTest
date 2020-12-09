<template lang="pug">
  section.header
    .header__headline
      a.header__title(href="/") Первомайская
    nav.header__links(ref="links")
      ul
        li
          nuxt-link.header__link(v-for="(item, i) of returnLinks"
                    :to="item.link"
                    :class="isActive==i?'header__link--active':''"
                    ref="linkItem"
                    @mouseover.native="calcWidth(i, $event)"
                    @mouseout.native="calcWidth(i, $event)"
                    :index="i"
                    @click.native="calcWidth(i, $event)"
                  ) {{item.text}}
        .header__links--line(:style="{width: widthLinks + 'px'}" ref="widthLine")
    .header__contacts
      a.header__contact(href="tel:+78888888888" alt="") 8 888 888 88 88
    .button
    .buttonBurger
      .burger
        .line1
        .line2
        .line3
</template>

<script>
export default {
  data () {
    return {
      widthLinks: 0,
      marginFromParent: 0,
      isActive: 0,
      rightDistance: 0,
    }
  },
  computed:{
    returnLinks() {
      return this.$store.state.headerLinks
    }
  },
  methods:{
    calcWidth(i, event) {

      if (event.type === 'click') {

        this.marginFromParent = event.target.offsetLeft;
        this.rightDistance = event.target.offsetParent.offsetWidth - event.target.offsetLeft - event.target.offsetWidth;

      }

      if (this.isActive > i) {

        this.$refs.widthLine.style.left = "auto";
        this.$refs.widthLine.style.right = this.rightDistance + 'px';

        this.widthLinks = this.$refs.links.offsetWidth - event.target.offsetLeft - this.rightDistance;

      } else if (this.isActive < i) {

        this.$refs.widthLine.style.right = "auto";
        this.$refs.widthLine.style.left = this.marginFromParent + 'px';   

        this.$refs.widthLine.style.left = event.target.offsetLeft + event.target.offsetWidth;
        this.widthLinks = event.target.offsetLeft + event.target.offsetWidth - this.marginFromParent;
     
      }

      if (event.type === 'mouseout') {

        this.widthLinks = document.querySelector('.header__link--active').offsetWidth;

      }

      if (event.type === 'click') {

        this.isActive = i;
        this.widthLinks = event.target.offsetWidth;     
        
      }
    },    
  },
  mounted () {
    this.widthLinks = document.querySelector('.header__link--active').offsetWidth;

  }
}
</script>

<style lang='scss'>

.header {
  display: flex;
  justify-content: space-between;
  padding: 23px 62px 17px 62px;
  font-family: "Gilroy", sans-serif;
  text-transform: uppercase;
  color: #262525;
  flex-grow: 0;
  z-index:2;
  position: absolute;
  top: 0;
  left: 56px;
  right: 56px;

  &__title {
    font: bold 16px/21px "Gilroy", sans-serif;
    text-decoration: none;
    color: #000;
  }

  &__links {
    width: auto;
    position: relative;

    &--line {
      position: absolute;
      top: 25px;
      left: 0;
      width: 0;
      max-width: 600px;
      height: 4px;
      background: #D88F5E;
      border-radius: 0.01px;
      transition: width 0.2s ease, left 0.2s, right 0.2s;
    }
  }

  &__link {
    padding: 5px 23px;
    font: bold 12px/15px "Gilroy", sans-serif;
    letter-spacing: 0.8px;
    text-decoration: none;
    color: #262525;
  }

  &__contact {
    font: bold 17px/21px "Gilroy", sans-serif;
    letter-spacing: 0.29px;
    text-decoration: none;
    color: #262525;
  }

  @media (max-width: 1440px) {

     &__title,
     &__contact {
      font-size: 14px;
      line-height: 18px;
    }

    &__link {
      padding: 0 16px;
      font-size: 12px;
      line-height: 14px;
    }
  }

  @media (max-width: 1024px) {

    &__title,
    &__contact {
      font-size: 12px;
      line-height: 16px;
    }

    &__link {
      padding: 0 10px;
      font-size: 8px;
      line-height: 10px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    &__title {
      margin-bottom: 10px;
    }

    &__links {
      display: contents;

      &--line {
        display: none;
      }
    }

    &__link {
      padding: 2px 0;
    }

    &__contacts {
      margin-top: 10px;
    }

    .isActive {
      flex: none;
      align-self: center;
      background: linear-gradient(to top, #D88F5E 50%, #FFF 50%);
    }
  }
}

.button {
  width: 70px;
  height: 70px;
  background: #262525;
  position: absolute;
  top: 25px;
  left: -33px;
  z-index:3;
}

.buttonBurger {
  width: 70px;
  height: 70px;
  background: #262525;
  position: absolute;
  top: 25px;
  right: -33px;
  padding: 25px;
  z-index:3;

  &:hover {

    .line1,
    .line3 {
      width: 25px;
      height: 3px;
    }

    .line2 {
      width: 45px;
      height: 3px;
      margin: 5px 0;
    }
  }
}

.burger {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: rotate(-45deg);
}

.line1,
.line2,
.line3 {
  transition: width 0.2s ease,
              height 0.2s ease,
              margin 0.2s ease;
}

.line1,
.line3 {
  width: 20px;
  height: 2px;
  background: #fff;
}

.line2 {
  width: 42px;
  height: 2px;
  margin: 6px 0;
  background: #fff;
}
</style>
