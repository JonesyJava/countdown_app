<template>
  <header>
  </header>
  <main class="bg-snow">
    <router-view />
  </main>
  <footer>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
.bg-snow{
  background-image: url("https://images.unsplash.com/photo-1589988896299-ef86bbf5102e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c25vd3xlbnwwfHwwfGJsYWNrfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");
  background-size: cover;
  background-position: center center;
}

@import "./assets/scss/main.scss";

</style>
