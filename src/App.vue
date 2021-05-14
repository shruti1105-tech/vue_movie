<template>
  <header>
    <router-link to="/">
      <h1><span>Vue</span> MovieWorld</h1>
    </router-link>
    <Navbar/>
  </header>
  <main>
    <router-view/>
  </main>
</template>

<script>
import Navbar from './components/Navbar';

export default {
  name:'app',
  components:{
    Navbar
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fire Sans', sans-serif;

  &::selection {
    background: transparentize(#42B893, 0.5);
  }
}
body{
  background-color: lightcyan;
}
a{
  text-decoration: none;
}
header{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 40px;
  background-color: #2C3D4E;
  box-shadow: 0px 0px 6px rgba(0,0,0,0.1);

  h1{
    color: #FFF;
    font-size: 35px;

    span{
      color: #42B883;
    }
  }
}
</style>
