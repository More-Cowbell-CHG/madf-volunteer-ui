<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-container>
        <b-navbar-brand to="/">Site logo</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/about">About</b-nav-item>
            <b-nav-item to="/opportunities">Voluteer</b-nav-item>
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

    <div class="site-footer position-absolute d-flex justify-content-center align-items-center w-100 bg-light">
      <b-container>
        <b-row>
          <b-col sm="12" lg="2">
            <router-link to="/">Home</router-link>
          </b-col>
          <b-col sm="12" lg="2">
            <router-link to="/about">About</router-link>
          </b-col>
          <b-col sm="12" lg="2">
            <router-link to="/opportunities">Volunteer</router-link>
          </b-col>
          <b-col sm="12" lg="2">
            <router-link to="#">Donate</router-link>
          </b-col>
          <b-col sm="12" lg="2">
            <router-link to="#">Resources</router-link>
          </b-col>
          <b-col sm="12" lg="2">
            <router-link to="#">Contact & FAQ</router-link>
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
.site-footer {
  bottom: 0;
  height: 150px;
}
</style>
