<template>
  <Layout>
    <Header>header</Header>
    <Content>
      <Sider>
        <Menu mode="vertical" :model="curentActive" @on-select="changeMenu" theme="light">
          <MenuItem key="home" name="home">首页</MenuItem>
          <MenuItem key="contract" name="contract">合同列表</MenuItem>
          <MenuItem key="contact" name="contact">联系人</MenuItem>
        </Menu>
      </Sider>
      <Content>
        <router-view/>
      </Content>
    </Content>
    <Footer>footer</Footer>
  </Layout>
</template>
<script>
import { Layout, Header,Footer, Sider, Content, Menu, MenuItem } from "iview";
export default {
  name: "",
  data() {
    return {
      curentActive: "name"
    };
  },
  methods: {
    changeMenu(a) {
      this.$router.push({ name: a });
    }
  },
  components: {
    Layout,Footer,
    Header,
    Content,
    Sider,
    Menu,
    MenuItem
  }
};
</script>
<style>
</style>