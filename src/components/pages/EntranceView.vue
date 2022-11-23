<template>
  <div class="bg">
    <div class="logo">
      <img
        class="logo__img"
        src="../../assets/images/logo/logo_hole.png"
        alt="logo"
      />
      <div class="logo__content">
        <h2 class="text-white">深入敏捷の村一探究竟</h2>
        <button
          type="button"
          class="primary-btn"
          v-on:click="nextStep"
        ></button>
      </div>
    </div>
    <div>
      <img
        class="leafs leaf_tint1"
        src="../../assets/images/bg/bg_leafTint_1_lt.png"
        alt="bg_leaf"
      />
      <img
        class="leafs leaf_tint2"
        src="../../assets/images/bg/bg_leafTint_2_lb.png"
        alt="bg_leaf"
      />
      <img
        class="leafs leaf_tint3"
        src="../../assets/images/bg/bg_leafTint_3_t.png"
        alt="bg_leaf"
      />
      <img
        class="leafs leaf_tint4"
        src="../../assets/images/bg/bg_leafTint_4_rb.png"
        alt="bg_leaf"
      />
      <img
        class="leafs leaf_dark1"
        src="../../assets/images/bg/bg_leafDark_1_l.png"
        alt="bg_leaf"
      />
      <img
        class="leafs leaf_dark2"
        src="../../assets/images/bg/bg_leafDark_2_b.png"
        alt="bg_leaf"
      />
      <img
        class="leafs leaf_dark3"
        src="../../assets/images/bg/bg_leafDark_3_r.png"
        alt="bg_leaf"
      />
      <img
        class="leafs leaf_dark4"
        src="../../assets/images/bg/bg_leafDark_4_t.png"
        alt="bg_leaf"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    nextStep() {
      // 補動畫
      this.$emit("nextstep");
    },
  },
};
</script>
<style lang="scss" scoped>
.logo {
  position: absolute;
  top: 72px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__img {
    max-width: 1000px;
    max-height: 735.95px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    bottom: 85px;
    .primary-btn {
      margin-top: 16px;
      &::before {
        content: "進入村莊";
      }
      &::after {
        content: "進入村莊";
      }
    }
  }
}

.bg {
  background: rgba(10, 13, 20);
  width: 100%;
  height: 100vh;
}

.leafs {
  position: absolute;
}
.leaf {
  &_tint1 {
    max-width: 39vw;
    left: 0;
    top: 0;
    z-index: 950;
  }
  &_tint2 {
    max-width: 55vw;
    left: 0;
    bottom: 0;
    z-index: 950;
  }
  &_tint3 {
    max-width: 48vw;
    top: 0;
    right: 15vw;
    z-index: 950;
  }
  &_tint4 {
    max-width: 55vw;
    right: 0;
    bottom: 0;
    z-index: 950;
  }
  &_dark1 {
    max-width: 55vw;
    max-height: 100vh;
    left: 0;
  }
  &_dark2 {
    max-width: 53vw;
    left: 15vw;
    bottom: 0;
  }
  &_dark3 {
    max-width: 51vw;
    max-height: 100vh;
    right: 0;
  }
  &_dark4 {
    max-width: 63vw;
    right: 15vw;
    top: 0;
  }
}
</style>
