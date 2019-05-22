<template>
  <div class="container">
    <el-breadcrumb separator="/" class="header">
      <el-breadcrumb-item>我的E票</el-breadcrumb-item>
      <el-breadcrumb-item>E票支付</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content">
      <el-tabs v-model="activeName" >
        <el-tab-pane label="可支付" name="paymentAble">
          <el-form :inline="true" :model="paymentAbleSel" class="demo-form-inline" style="margin:10px 0;">
            <el-form-item label="开票方">
              <el-select v-model="paymentAbleSel.publisher" placeholder="请选择开票方" size="small">
                <el-option label="虚拟金融机构A" value="shanghai"></el-option>
                <el-option label="虚拟金融机构B" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" size="small">查询</el-button>
            </el-form-item>
          </el-form>
          <el-table :data="paymentAbleData" border style="width: 100%">
            <el-table-column prop="number" label="E票编号"></el-table-column>
            <el-table-column prop="amount" label="E票金额（元）"></el-table-column>
            <el-table-column prop="publisher" label="开票方"></el-table-column>
            <el-table-column prop="date" label="开票日期"></el-table-column>
            <el-table-column prop="id" label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="已支付" name="paymented">
          <el-form :inline="true" :model="paymentedSel" class="demo-form-inline" style="margin:10px 0;">
            <el-form-item label="接收方">
              <el-select v-model="paymentedSel.receiver" placeholder="请选择接收方" size="small">
                <el-option label="虚拟供应商A" value="shanghai"></el-option>
                <el-option label="虚拟供应商B" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" size="small">查询</el-button>
            </el-form-item>
          </el-form>
          <el-table :data="paymentedData" border style="width: 100%">
            <el-table-column prop="number" label="E票编号"></el-table-column>
            <el-table-column prop="amount" label="E票金额（元）"></el-table-column>
            <el-table-column prop="receiver" label="接收方"></el-table-column>
            <el-table-column prop="date" label="接收日期"></el-table-column>
            <el-table-column prop="id" label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleDetail(scope.$index, scope.row)">查看</el-button>
                <el-button
                  size="mini"
                  type="primary"
                  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>


    <!--编辑弹框-->
    <el-dialog title="可支付详情" :visible.sync="dialogEditVisible" width="30%">
      <el-form :model="editForm" label-width="80px">
        <el-form-item label="E票编号">
          <el-input v-model="editForm.number" autocomplete="off" disabled></el-input>
        </el-form-item>
        <el-form-item label="E票金额" >
          <el-input v-model="editForm.amount" autocomplete="off" disabled></el-input>
        </el-form-item>
        <el-form-item label="接收方">
          <el-select v-model="editForm.receiver" placeholder="请选择接收方">
            <el-option
            v-for="item in receivers"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogEditVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogEditVisible = false">确 定</el-button>
      </div>
    </el-dialog>


    <!--查看详情弹框-->
    <el-dialog title="已支付详情" :visible.sync="dialogDetailVisible" width="30%">
      <el-row class="detailTitle elRowBottom">
        <el-col>支付信息</el-col>
      </el-row>
      <el-row :gutter="10" class="elRowBottom">
        <el-col :xs="12" :sm="12" :md="4" :lg="4" :xl="4">E票编号</el-col>
        <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="8">{{detail.number}}</el-col>
        <el-col :xs="12" :sm="12" :md="4" :lg="4" :xl="4">E票金额</el-col>
        <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="8">{{detail.amount}}</el-col>
      </el-row>
      <el-row :gutter="10" class="elRowBottom">
        <el-col :xs="12" :sm="12" :md="4" :lg="4" :xl="4">接收方</el-col>
        <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="8">{{detail.receiver}}</el-col>
        <el-col :xs="12" :sm="12" :md="4" :lg="4" :xl="4">接收日期</el-col>
        <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="8">{{detail.date}}</el-col>
      </el-row>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogDetailVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogDetailVisible = false">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
  export default {
    name: "billPayment",
    data(){
      return{
        activeName:'paymentAble',
        paymentAbleData:[
          {
            id:1,
            number:1113234,
            amount:50000,
            publisher:'虚拟企业A',
            date:'1557455349'
          },
          {
            id:2,
            number:2223234,
            amount:20000,
            publisher:'虚拟企业B',
            date:'1557383648'
          }
        ],
        paymentAbleSel:{
          publisher:''
        },
        //是否显示内嵌表单的编辑弹框
        dialogEditVisible:false,
        receivers:[
          {
            value:'A',
            label:'虚拟供应商A'
          },
          {
            value:'B',
            label:'虚拟供应商B'
          }
        ],
        editForm:{
          number:'',
          amount:'',
          receiver:'',
        },
        paymentedData:[
          {
            id:1,
            number:1113234,
            amount:50000,
            receiver:'虚拟企业A',
            date:'1557455349'
          },
          {
            id:2,
            number:2223234,
            amount:20000,
            receiver:'虚拟企业B',
            date:'1557383648'
          }
        ],
        paymentedSel:{
          receiver:''
         },
        //是否显示查看详情的弹框
        dialogDetailVisible:false,
        detail:{
          number:'',
          amount:'',
          receiver:'',
          date:''
        }
      }
    },
    methods:{
      handleEdit:function(index,row){
        var _this=this;
        _this.dialogEditVisible=true;
        _this.editForm={
          number:row.number,
          amount:row.amount,
        }
      },
      handleDetail:function(index,row){
        var _this=this;
        _this.dialogDetailVisible=true;
        _this.detail=row;
      },
      handleDelete:function(index,row){
        var _this=this;
        _this.paymentedData.splice(index,1);
      }
    }
  }
</script>

<style scoped>
  .container{
    padding:20px;
  }
  .header{
    margin-bottom:30px;
  }
  .content{
    background-color: #f1f1f1;
    padding:30px;
    border-radius:8px;
  }
  .detailTitle{
    border-left:4px solid #0E3C6C;
    padding-left:10px;
  }
  .elRowBottom{
    margin-bottom:20px;
  }
</style>
