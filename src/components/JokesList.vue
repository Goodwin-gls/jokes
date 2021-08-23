<template>
  <div class="jokes">
    <Joke v-for="joke in jokes" :key="joke.id" :jokeData="joke" />
  </div>
</template>

<script>
import Joke from "@/components/Joke";

export default {
  components: {
    Joke,
  },
  data: () => ({
    jokes: [],
  }),
  async created() {
    await this.$store.dispatch("fetchJokes");
    this.jokes = this.$store.state.jokes;
  },
};
</script>
