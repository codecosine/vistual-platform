<template>
    <div>
        this is a test page.{{ msg }}
    </div>
</template>
<style>
    body{
        background-color:#ff0000;
    }
</style>
<script>
    export default{
      data() {
        return {
          msg: 'hello vue',
        };
      },
    };
</script>
