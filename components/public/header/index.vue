<template>
  <el-row :gutter="15" class="m-header">
    <el-col :span="6">
      <geo/>
    </el-col>
    <el-col></el-col>
    <el-col></el-col>
  </el-row>
</template>
<script>
import Geo from './geo'
export default {
  components: {
    Geo
  }
}
</script>

