<template>
  <div id="app">
    <div class="container">
      <JokesList />
    </div>
  </div>
</template>

<script>
import JokesList from "@/components/JokesList";
export default {
  name: "App",
  components: {
    JokesList,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  background-color: #cbe09b;
  color: #945448;
}
.container {
  margin: 0 auto;
  padding: 25px 50px;
  width: 1000px;
  height: 100vh;
  background-color: #cbe09b;
}
.joke {
  font-size: 18px;
  font-weight: 500;
  padding: 30px 60px;
  border: 2px #e09284 solid;
  border-radius: 15px;
}
.joke + .joke {
  margin-top: 10px;
}
</style>
