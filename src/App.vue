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
          <b-navbar-nav v-if="isLoggedIn">
            <b-nav-item to="/opportunities">Home</b-nav-item>
            <b-nav-item to="/create/opportunity">Create</b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <template v-slot:button-content>
                <em>User</em>
              </template>
              <b-dropdown-item v-if="!$store.state.user" to="/sign-in">Sign in</b-dropdown-item>
              <template v-else>
                <b-dropdown-item :to="`/users/${$store.state.user._id}`">User Profile</b-dropdown-item>
                <b-dropdown-text class="link" v-on:click="logout">Logout</b-dropdown-text>
              </template>
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
          <b-col sm="12" lg="6">
            <router-link to="/about">About</router-link>
          </b-col>
          <b-col sm="12" lg="6">
            <a href="https://makingadifferencefdn.org/blog/" target="_blank">Blog</a>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data: function() {
    return {
      userId: localStorage.getItem("token") ? localStorage.getItem("token") : ""
    };
  },
  mounted() {
    document.querySelector(".vh").style.minHeight =
      window.innerHeight - 200 + "px";
  },
  methods: {
    ...mapActions(["logout"])
  },
  computed: {
    ...mapGetters(["isLoggedIn"])
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

.link {
  cursor: pointer;
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