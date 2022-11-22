<template>
  <div class="mask">
    <img src="../assets/images/loading.gif" alt="loading" />
    <div class="progress-bar">
      <span
        class="progress-fill"
        ref="fill"
        :style="[{ background: color }]"
      ></span>
    </div>
  </div>
</template>
<script>
export default {
  name: "loading",
  props: {
    color: {
      type: String,
      default: "linear-gradient(270deg, #00ffe0 0%, rgba(0, 255, 224, 0) 100%)",
    },
    value: {
      type: [String, Number],
      default: 0,
    },
  },
  mounted() {
    setTimeout(() => this.render());
  },
  methods: {
    render() {
      this.$refs.fill.style.width = this.value + "%";
    },
  },
};
</script>
<style lang="scss" scoped>
.mask {
  background: linear-gradient(
    180deg,
    rgba(0, 255, 224, 0) 0%,
    rgba(0, 255, 224, 0.25) 1%,
    rgba(0, 255, 224, 0.45) 3%,
    rgba(0, 255, 224, 0.7) 4%,
    rgba(0, 255, 224, 0.9) 5%,
    rgba(10, 13, 20) 15%
  );
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
}

.progress-bar {
  max-width: 1000px;
  width: 1000px;
  background-color: rgba(0, 141, 150, 1);
  height: 8px;
  .progress-fill {
    display: block;
    height: 100%;
    max-width: 100%;
    width: 0;
    transition: 3.5s width ease-in-out;
  }
}
</style>
