<template>

</template>

<script>
import { indexx } from "@/api";

export default {
  name: "index",
  data() {
    return {
      s:"No",
    }
  },
  mounted() {
    indexx().then(res=>{
      this.s = res.data
      console.log(this.s)
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  }
}
</script>

<style scoped>

</style>
