<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="test"></div>
  </div>
</template>

<script>
export default {
    name: 'hello',
    data () {
        return {
            msg: 'App'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .test{
    height: 50px;
    width: 50px;
    background: url('../assets/img/logo.png');
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
</style>
