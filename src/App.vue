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
          <b-col class="text-left">
            <a to="#">Site footer</a>
          </b-col>
          <b-col sm="12" md="auto">
            <a to="#">Home</a>
          </b-col>
          <b-col sm="12" md="auto">
            <a to="#">About</a>
          </b-col>
          <b-col sm="12" md="auto">
            <a to="#">Volunteer</a>
          </b-col>
          <b-col sm="12" md="auto">
            <a to="#">Donate</a>
          </b-col>
          <b-col sm="12" md="auto">
            <a to="#">Resources</a>
          </b-col>
          <b-col sm="12" md="auto">
            <a to="#">Contact & FAQ</a>
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
