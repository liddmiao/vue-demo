<template>
  <div>
    <el-col :span="2" class="nav-menu">
      <vue-scroll>
        <el-menu
          default-active="1"
          background-color="#343848"
          text-color="#fff"
          active-text-color="#fff"
          router
        >
          <el-menu-item index="/" @click="showSubMenu">
            <i class="el-icon-s-home"></i>
            <span>首页</span>
          </el-menu-item>
        </el-menu>
        <el-menu
          background-color="#343848"
          text-color="#fff"
          active-text-color="#fff"
        >
          <template v-for="(item, index) in routeList">
            <el-menu-item :key="index" @click="showSubMenu(item)">
              <i :class="item.meta.icon"></i>
              <span>{{ item.meta.title }}</span>
            </el-menu-item>
          </template>
        </el-menu>
      </vue-scroll>
    </el-col>
    <template v-if="showSub">
      <sub-menu :routeList="subMenuList" :parentRoute="parentRoute"></sub-menu>
    </template>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import SubMenu from './SubMenu'
export default {
  components: {
    SubMenu
  },
  data() {
    return {
      showSub: false,
      subMenuList: [],
      parentRoute: ''
    }
  },
  computed: {
    ...mapState({}),
    routeList() {
      return this.$store.state.pageroutes
    }
  },
  methods: {
    showSubMenu(item) {
      if (item.children) {
        this.subMenuList = item.children
        this.parentRoute = item.path
        this.showSub = true
      } else {
        this.subMenuList = []
        this.parentRoute = ''
        this.showSub = false
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.nav-menu {
  height: 100vh;
  background-color: #343848;
  div {
    height: 100%;
  }
  .el-menu {
    text-align: left;
    overflow: hidden;
    height: 100%;
    border: 0;
    .el-submenu {
      .el-menu-item {
        min-width: 0;
      }
    }
  }
}
</style>
