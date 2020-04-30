<template>
  <div>
    <userheader></userheader>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "../components/userHeader";
import "../assets/css/user.css";
export default {
  components: {
    userheader: Header
  }
};
</script>

<style>
</style>