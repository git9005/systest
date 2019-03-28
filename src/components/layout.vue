<template>
  <div>
    <Menu mode="vertical" :model="curentActive" @on-select="changeMenu" theme="light">
      <MenuItem key="home" name="home">首页</MenuItem>
      <MenuItem key="contract" name="contract">合同列表</MenuItem>
      <MenuItem key="contact" name="contact">联系人</MenuItem>
    </Menu>
    <keep-alive>
    <router-view/>
    </keep-alive>
  </div>
</template>
<script>
import { Menu, MenuItem } from "iview";
export default {
  name: "",
  data() {
    return {
      curentActive: ""
    };
  },
  methods: {
    changeMenu(a) {
      this.$router.push({name:a});
    }
  },
  components: {
    Menu,
    MenuItem
  }
};
</script>
<style>
</style>