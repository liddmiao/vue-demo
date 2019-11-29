<template>
  <el-col :span="2" class="sub-menu">
    <vue-scroll>
      <el-menu default-active="1" router>
        <template v-for="(item, index) in this.routeList">
          <el-menu-item :index="parentRoute + '/' + item.path" :key="index">
            <span>{{ item.meta.title }}</span>
            <i class="el-icon-s-home"></i>
          </el-menu-item>
        </template>
      </el-menu>
    </vue-scroll>
  </el-col>
</template>
<script>
export default {
  props: {
    routeList: Array,
    parentRoute: String
  }
}
</script>
<style lang="scss" scoped>
.sub-menu {
  height: 100vh;
  .el-menu {
    border-right: 0;
  }
}
</style>
