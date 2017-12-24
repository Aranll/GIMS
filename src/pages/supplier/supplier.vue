<template>

  <imp-panel>
    <div slot="body">
      <el-table
        :data="tableData.rows"
        border
        style="width: 100%"
        v-loading="listLoading"
        @selection-change="handleSelectionChange">
        <!--checkbox 适当加宽，否则IE下面有省略号 https://github.com/ElemeFE/element/issues/1563-->

        <el-table-column
          prop="name"
          label="名称">
        </el-table-column>
        <el-table-column
          prop="units"
          label="单位">
        </el-table-column>
        <el-table-column
          prop="purchasingPrice"
          label="进价">
        </el-table-column>
        <el-table-column
          prop="amount"
          label="库存数量">
        </el-table-column>
        <el-table-column
          prop="totalMoney"
          label="总金额">
        </el-table-column>
        <el-table-column
          prop="batchNumber"
          label="产品批号">
        </el-table-column>
        <el-table-column
          prop="origin"
          label="产地">
        </el-table-column>
        <el-table-column
          prop="usefulLife"
          label="有效期">
        </el-table-column>
        <el-table-column
          prop="miniQuantity"
          label="预警下限">
        </el-table-column>
        <el-table-column
          prop="dueTime"
          label="到期时间">
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="tableData.pagination.pageNo"
        :page-sizes="[5, 10, 20]"
        :page-size="tableData.pagination.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.pagination.total">
      </el-pagination>

    </div>


  </imp-panel>
</template>

<script>
  import panel from "../../components/panel.vue"
  import * as api from "../../api"
  import testData from "../../../static/data/data.json"
  import * as sysApi from '../../services/sys'

  export default {
    components: {
      'imp-panel': panel
    },
    data(){
      return {
        currentRow: {},
        dialogVisible: false,
        dialogLoading: false,
        defaultProps: {
          children: 'children',
          label: 'name',
          id: "id",
        },
        roleTree: [],
        listLoading: false,
        searchKey: '',
        tableData: {
          pagination: {
            total: 0,
            pageNo: 1,
            pageSize: 10,
            parentId: 0
          },
          rows: []
        }
      }
    },
    methods: {
      search(target){
        this.loadData();
      },
      handleSizeChange(val) {
        this.tableData.pagination.pageSize = val;
        this.loadData();
      },
      handleCurrentChange(val) {
        this.tableData.pagination.pageNo = val;
        this.loadData();
      },

      loadData(){
        sysApi.userList({
          key: this.searchKey,
          pageSize: this.tableData.pagination.pageSize,
          pageNo: this.tableData.pagination.pageNo
        })
          .then(res => {
            this.tableData.rows = res.records;
            this.tableData.pagination.total = res.total;
          });
      }
    },
    created(){
      this.loadData();
    }
  }
</script>
<style>
  .el-pagination {
    float: right;
    margin-top: 15px;
  }
</style>
