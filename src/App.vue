<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
    <div class="bg-light">
      <b-container>
        <b-row>
          <b-col>
            <a href="#">Site footer</a>
          </b-col>
          <b-col>
            <a href="#">Home</a>
          </b-col>
          <b-col>
            <a href="#">About</a>
          </b-col>
          <b-col>
            <a href="#">Contact</a>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
