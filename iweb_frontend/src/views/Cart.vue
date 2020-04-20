<template>
  <div>
    <Header></Header>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  data: () => {
    return {};
  },
  components: {
    Header: Header,
    Footer: Footer
  }
};
</script>
