<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col>
          <div class="mt-2">
            <router-link to="/">
              <b-img src="./assets/images/madf.png" fluid alt="Make a Difference Foundation"></b-img>
            </router-link>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-navbar toggleable="lg" variant="faded" type="light">
      <b-container>
        <b-navbar-toggle class="ml-auto" target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to>Medical missions</b-nav-item>
            <b-nav-item to="/opportunities">Opportunities</b-nav-item>
            <b-nav-item to>Partners</b-nav-item>
            <b-nav-item to="/about">About</b-nav-item>
            <b-nav-item to>Contact</b-nav-item>
            <b-nav-item href="https://makingadifferencefdn.org/blog/" target="_blank">Blog</b-nav-item>
            <b-nav-item to>Donate</b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown text="Opportunities" right>
              <b-dropdown-item to>Division name</b-dropdown-item>
              <b-dropdown-item to>Division name</b-dropdown-item>
              <b-dropdown-item to>Division name</b-dropdown-item>
              <b-dropdown-item to>Division name</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <template v-slot:button-content>
                <em>User</em>
              </template>
              <b-dropdown-item to>Sign in</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>

    <div class="vh">
      <router-view />
    </div>

    <div class="site-footer d-flex justify-content-center align-items-center w-100 bg-light">
      <b-container>
        <b-row>
          <b-col sm="12" lg="2">
            <router-link to="/">Medical missions</router-link>
          </b-col>
          <b-col sm="12" lg="2">
            <router-link to>Partners</router-link>
          </b-col>
          <b-col sm="12" lg="2">
            <router-link to="/about">About</router-link>
          </b-col>
          <b-col sm="12" lg="2">
            <router-link to>Contact</router-link>
          </b-col>
          <b-col sm="12" lg="2">
            <a href="https://makingadifferencefdn.org/blog/" target="_blank">Blog</a>
          </b-col>
          <b-col sm="12" lg="2">
            <router-link to>Donate</router-link>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    document.querySelector(".vh").style.minHeight =
      window.innerHeight - 200 + "px";
  }
};
</script>

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