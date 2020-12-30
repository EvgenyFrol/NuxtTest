<template lang="pug">
.card
  .card__item(:class="active?'card__item--active':''")
    transition(v-for="(item, i) in data" :name="animateTop?'descUp':'descDown'")
      .card__desc( v-if="active===i")
        h1.card__title(v-text="item.title")
        |
        span.card__text(ref="text" v-text="item.text") 
    transition(name="counter" mode="in-out" ) 
      span.card__number(:key="active") {{active + 1}} / {{data.length}}
    transition(v-for="(item, i) in data" :name="animateTop?'imgDown':'imgUp'")
      .card__image(v-if="active === i")
        img.card__pic(:src='item.img' :alt='item.title')

</template>

<script>
export default {
  name: "Card",
  data() {
    return {
      isActiveNumber: 0,
      data: this.$store.state.menuLinks,
      full: true, 
    }
  },
  props: {
    active: Number,
    animateTop: Boolean,
  },
  methods: {
    cutText() {
      let textBlock = this.$refs.text[0];
      let text = textBlock.textContent.split(' ');
      let checkText = () => textBlock.getClientRects().length > 3;

      this.full = false;
  
      let correctLength = () => {
        let button = document.createElement('span');
        button.classList.add('card__box');
        button.textContent = '...';
        
        button.addEventListener('click', () => {
          if (this.full) correctLength(button);
          else {
            this.full = true;
            textBlock.innerHTML = text.join(' ');
            textBlock.append(button);
          }
        }
      );
      
      for (let i = 0; i < text.length; i++) {
        textBlock.innerHTML = text.slice(0, text.length - 1 - i).join(' ');
        textBlock.append(button);
        if(!checkText()) break
      }
        
      this.full = false;
    }

      if (checkText()) correctLength();
    }
  },
  mounted() {

    this.cutText();

  },
  updated() {

    this.cutText();

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
    font: bold 2.9em/53px "Gilroy", sans-serif;
    letter-spacing: -3.65px;
    text-transform: uppercase;
    color: #262525;
    text-align: left;
    padding: 0 0 42px 0;
  }

  &__text {
    position: relative;
    font: 300 18px/30px "Roboto", sans-serif;
    letter-spacing: -0.0220791px;
    color: #262525;
    text-align: left;
    white-space: normal;
    transition: all 0.5s ease;
  }

  &__box {
    width: 28px;
    height: 28px;
    display: inline;
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
    font: 300 17px/20px "Gilroy", serif;
    color: #262525;
    position: absolute;
    left: 11.5%;
    bottom: 18%;
    transition: all 0.1s ease;
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
}

.counter-enter {
  opacity: 0;
}

.counter-enter-to {
  opacity: 0.5;

  }

.counter-leave {
  opacity: 1;
}

.counter-leave-to {
  opacity: 0;
}

.descUp-enter {
  transform: translateY(100%);
  opacity: 1;
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
