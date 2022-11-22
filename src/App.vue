<template>
  <Loading v-if="isLoading" :color="color" :value="value" />
  <Footer></Footer>
</template>

<script>
import Loading from "./components/LoadingView.vue";
import Footer from "./components/FooterView.vue";

export default {
  name: "App",
  components: {
    Loading,
    Footer,
  },
  data() {
    return {
      isLoading: true,
      color: "linear-gradient(270deg, #00ffe0 0%, rgba(0, 255, 224, 0) 100%)",
      value: 100,
    };
  },
  methods: {
    loadingHandler() {
      setTimeout(() => {
        this.isLoading = false;
      }, 3550);
    },
  },
  mounted() {
    this.loadingHandler();
  },
};
</script>

<style lang="scss" scoped></style>
