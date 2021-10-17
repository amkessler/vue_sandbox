<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-link to="/contact">Contact</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
    padding:0;  
    background: #201f1f;  
    font-family:Arial, sans serif;  
    font-size:12px;  
    text-transform:uppercase;
}

#nav a {
    display:inline-block;  
    padding:10px;  
    color:white;  
    text-decoration:none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
