<template>
  <div>
    <header>
      <img class="left" src="src/assets/dbfz_logo.png">
      <span>MTL DBFZ Power level ranking</span>
      <img class="right" src="src/assets/MTLTAMASHI.png">
    </header>
    <app-container>

    </app-container>
  </div>
</template>

<script type="ts">

  import AppContainer from './components/appContainer';

  export default {
    components: { AppContainer },
    name: 'app',
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  body {
    background-color: #f8c600;
    color: black;
    margin: 0;
    header {
      height: 100px;
      border-bottom: 5px groove #fc9000;
      display: flex;
      justify-content: center;
      span {
        align-self: center;
        font-size: 30px;
      }
      img {
        height: 100px;
        position: absolute;
        &.left {
          left: 0;
          margin-left: 30px;
        }
        &.right {
          right: 0;
          margin-right: 30px;

        }
      }
    }
  }
</style>
