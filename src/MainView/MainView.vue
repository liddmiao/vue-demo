<template>
  <div>
    <el-row>
      <nav-menu></nav-menu>
      <page-view></page-view>
    </el-row>
  </div>
</template>
<script>
import NavMenu from './components/NavMenu'
import PageView from './components/PageView'
export default {
  name: 'MainView',
  components: {
    NavMenu,
    PageView
  },
  data () {
    return {}
  }
}
</script>
