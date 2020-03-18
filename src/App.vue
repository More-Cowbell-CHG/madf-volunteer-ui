<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-container>
        <b-navbar-brand to="#">Site Nav</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="#">Home</b-nav-item>
            <b-nav-item to="#">About</b-nav-item>
            <b-nav-item to="#">Voluteer</b-nav-item>
            <b-nav-item to="#">Donate</b-nav-item>
            <b-nav-item to="#">Resources</b-nav-item>
            <b-nav-item to="#">Contact & FAQ</b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown text="Opportunities" right>
              <b-dropdown-item to="#">Division name</b-dropdown-item>
              <b-dropdown-item to="#">Division name</b-dropdown-item>
              <b-dropdown-item to="#">Division name</b-dropdown-item>
              <b-dropdown-item to="#">Division name</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <template v-slot:button-content>
                <em>User</em>
              </template>
              <b-dropdown-item to="#">Sign in</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>

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
