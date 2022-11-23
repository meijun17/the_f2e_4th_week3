<template>
  <div>
    <Loading v-if="isLoading" :color="color" :value="value" />
    <EntranceView
      data-aos="fade-zoom-out"
      data-aos-easing="linear"
      data-aos-duration="1000"
      v-if="!isLoading"
      @nextstep="firstStep"
    ></EntranceView>
    <Footer></Footer>
  </div>
</template>
<script>
import Loading from "../components/LoadingView.vue";
import Footer from "../components/FooterView.vue";
import EntranceView from "../components/pages/EntranceView.vue";

export default {
  name: "App",
  components: {
    Loading,
    Footer,
    EntranceView,
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
    firstStep() {
      console.log("ok");
    },
  },
  mounted() {
    this.loadingHandler();
  },
};
</script>
