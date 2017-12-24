<template>
  <imp-panel :title="form.id ? '编辑':'入库'">
    <el-form ref="form" :model="form" label-width="180px">
      <el-form-item label="药品名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="单位">
        <el-input v-model="form.units"></el-input>
      </el-form-item>
      <el-form-item label="进价">
        <el-input v-model="form.purchasingPrice"></el-input>
      </el-form-item>
      <el-form-item label="库存数量">
        <el-input v-model="form.amount"></el-input>
      </el-form-item>
      <el-form-item label="总金额">
        <el-input v-model="form.totalMoney"></el-input>
      </el-form-item>
      <el-form-item label="预警下限">
        <el-input v-model="form.dueTime"></el-input>
      </el-form-item>
      <el-form-item label="产品批号">
        <el-input v-model="form.batchNumber"></el-input>
      </el-form-item>
      <el-form-item label="产地">
        <el-input v-model="form.origin"></el-input>
      </el-form-item>
      <el-form-item label="有效期">
        <el-input v-model="form.usefulLife"></el-input>
      </el-form-item>
      <el-form-item label="到期时间">
        <el-input v-model="form.dueTime"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="info" @click="onEditSubmit" v-if="form.id">保存</el-button>
        <el-button type="primary" @click="onSubmit" v-else>立即创建</el-button>
      </el-form-item>
    </el-form>
  </imp-panel>
</template>
<script>
  import panel from "../../components/panel.vue"
  import * as api from "../../api"

  export default {
    components: {
      'imp-panel': panel
    },
    data(){
      return {
        form: {
          id: null,
          name: '',
          units: '',
          purchasingPrice: '',
          amount: '',
          totalMoney: '',
          batchNumber: '',
          origin: '',
          usefulLife: '',
          dueTime:''
        }
      }
    },
    created(){
      this.loadData();
    },
    methods: {
      onSubmit(){
        this.$http.post(api.SYS_USER_ADD, this.form)
          .then(res => {
            this.form = res.data;
            this.$confirm('添加成功, 是否返回列表?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'success'
            }).then(() => {
              this.$router.push({path: 'userList'})
            })
          })
      },
      onEditSubmit(){
        this.$http.post(api.SYS_USER_UPDATE, this.form)
          .then(res => {
            this.form = res.data;
            this.$confirm('修改成功, 是否返回列表?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'success'
            }).then(() => {
              this.$router.push({path: 'manageList'})
            })
          })
      },
      loadData(){
        if (this.$route.query && this.$route.query != null && this.$route.query.id && this.$route.query.id != null) {
          this.form.id = this.$route.query.id;
          this.$http.get(api.MANAGE + "?id=" + this.form.id)
            .then(res => {
              this.form = res.data;
            })
        }
      }
    }
  }
</script>
