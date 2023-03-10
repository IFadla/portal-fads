<template>
  <div id="app">
    <header>
      <Navbar />
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>
<script>
import Navbar from './components/navbar.vue'

export default {
  components: {
    Navbar
  },
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');

*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

$--clr-white: #FFFFFF;
$--clr-gray-1: #F8F8F8;
$--clr-gray-2: #545353;
$--clr-black: #191818;

$--font-1: 'roboto', sans-serif;
$--font-2: 'Merriweather', serif;

h1, h2, h3, h4, h5, h6 {
  font-size: 1rem;
  font-weight: normal;
}

.nav {
  a {
    color: $--clr-black;
  }
}

.home {
  .information-title {
    font-family: $--font-2;
    font-weight: 700;
  }
}

.detail {
  .show-title {
    font-family: $--font-2;
    font-weight: 700;
  }
}

html {
	font-size: 10px;
	scroll-behavior: smooth;
}

body {
  padding: 3rem;
  border: 1px solid transparent;
  font-family: $--font-1;
}

#app {
  width: 100%;
  max-width: 144rem;
  background-color: $--clr-gray-1;
  border-radius: 1.5rem;
  border: 1px solid transparent;
  margin: 0 auto;
}

</style>
