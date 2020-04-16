<template>
  <v-app>
    <v-content>
      <Auth/>
    </v-content>
  </v-app>
</template>

<script>
import Auth from "@/components/Auth";

export default {
  name: 'App',

  components: {
    Auth,
  },

  data: () => ({
    //
  }),
};
</script>
