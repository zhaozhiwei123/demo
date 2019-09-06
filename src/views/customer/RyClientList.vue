<template>
  <a-card :bordered="false">
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="48">
          <a-col :md="5" :sm="15">
            <a-form-item label="手机号">
              <a-input placeholder="请输入手机号" v-model="queryParam.phone"/>
            </a-form-item>
          </a-col>
          <a-col :md="5" :sm="15">
            <a-form-item label="姓名">
              <a-input placeholder="请输入姓名" v-model="queryParam.name"/>
            </a-form-item>
          </a-col>
          <a-col :md="5" :sm="15">
            <a-form-item label="身份证">
              <a-input placeholder="请输入身份证" v-model="queryParam.idcard"/>
            </a-form-item>
          </a-col>
          <!-- <a-col :md="5" :sm="15">
            <a-form-item label="来源渠道">
              <a-input placeholder="请输入来源渠道" v-model="queryParam.sources"/>
            </a-form-item>
          </a-col>
          <a-col :md="5" :sm="15">
            <a-form-item label="推荐人">
              <a-input placeholder="请输入推荐人" v-model="queryParam.referrerName"/>
            </a-form-item>
          </a-col> -->
          <a-col :md="8" :sm="24">
            <span class="table-page-search-submitButtons">
              <a-button type="primary" @click="$refs.table.refresh(true)">查询</a-button>
              <a-button style="margin-left: 8px" @click="() => queryParam = {}">重置</a-button>
            </span>
          </a-col>
        </a-row>
      </a-form>
    </div>
    <div class="table-operator">
      <!-- <a-button v-if="addEnable" type="primary" icon="plus" @click="$refs.modal.add()">新建</a-button> -->
      <!-- <a-dropdown v-if="removeEnable&&selectedRowKeys.length > 0">
        <a-button type="danger" icon="delete" @click="delByIds(selectedRowKeys)">删除</a-button>
      </a-dropdown> -->
    </div>
    <s-table
      size="default"
      ref="table"
      rowKey="id"
      :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}"
      :columns="columns"
      :data="loadData"
    >
      <template slot="order" slot-scope="text,record,index">
        <span>{{ index+1 }}</span>
      </template>
      <template slot="status" slot-scope="text,record">
        <span>{{ record.status == 1 ? '已启用': '未启用' }}</span>
      </template>
      <template slot="authStatus" slot-scope="text,record">
        <span>{{ record.authStatus == 1 ? '已认证': '未认证' }}</span>
      </template>
      <template slot="sex" slot-scope="text,record">
        <span>{{ record.sex == 1?'未知' : record.sex == 2 ? '男': '女' }}</span>
      </template>
      <template slot="sourceType" slot-scope="text,record">
        <span>{{ record.sourceType == 1?'自然客户' : record.sourceType == 2 ? '导流客户': '邀请推荐' }}</span>
      </template>
      <span slot="action" slot-scope="text,record">
        <a v-if="lookEnable" @click="openCustomerModal(record.id)">查看</a>
        <!-- <a-divider type="vertical" /> -->
        <!-- @click="delByIds([record.${primaryKey.attrname}])" -->
      </span>

    </s-table>
    <!-- 客户详情弹窗 -->
    <a-modal
      title="客户信息"
      v-model="customerState"
      @ok="handleOk"
      destroyOnClose
      :width="1000"
    >
      <customer-info :id="infoId"></customer-info>
    </a-modal>
    <ryClient-modal ref="modal" @ok="handleOk"/>
  </a-card>
</template>
<script>
import { STable } from '@/components'
import customerInfo from '@/components/customerInfo/customerInfo'
import { getRyClientList, delRyClient } from '@/api/client'
import RyClientModal from './modules/RyClientModal.vue'
import { checkPermission } from '@/utils/permissions'

export default {
  name: 'TableList',
  components: {
    STable,
    RyClientModal,
    customerInfo

  },
  data () {
    return {
      infoId: '', // 传给子组件id值
      customerState: false, // 详情弹窗
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      },
      form: this.$form.createForm(this),
      mdl: {},
      // 高级搜索 展开/关闭
      advanced: false,
      // 查询参数
      queryParam: {},
      // 表头
      columns: [
        {
          title: '序号',
          scopedSlots: { customRender: 'order' }
        },
        {
          title: '手机号',
          dataIndex: 'phone'
        },
        {
          title: '姓名',
          dataIndex: 'name'
        },
        {
          title: '身份证',
          dataIndex: 'idcard'
        },
        {
          title: '性别',
          dataIndex: 'sex',
          scopedSlots: { customRender: 'sex' }
        },
        {
          title: '年龄',
          dataIndex: 'age'
        },
        {
          title: '注册时间',
          dataIndex: 'createTime',
          sorter: true
        },
        {
          title: '认证状态',
          dataIndex: 'authStatus',
          scopedSlots: { customRender: 'authStatus' }
        },
        {
          title: '来源渠道',
          dataIndex: 'sources'
        },
        {
          title: '来源分类',
          dataIndex: 'sourceType',
          scopedSlots: { customRender: 'sourceType' }
        },
        {
          title: '推荐人',
          dataIndex: 'referrerName'
        },
        {
          title: '账户状态',
          dataIndex: 'status',
          scopedSlots: { customRender: 'status' }
        },
        {
          title: '操作',
          width: '100px',
          dataIndex: 'action',
          scopedSlots: { customRender: 'action' }
        }
      ],
      // 加载数据方法 必须为 Promise 对象
      loadData: parameter => {
        return getRyClientList(Object.assign(parameter, this.queryParam))
      },
      selectedRowKeys: [],
      selectedRows: [],
      lookEnable: checkPermission('system:client:list')
      // addEnable: checkPermission('system:client:add'),
      // editEnabel: checkPermission('system:client:edit'),
      // removeEnable: checkPermission('system:client:remove')
    }
  },
  filters: {
  },
  created () {
  },
  methods: {
    // 打开客户详情弹窗
    openCustomerModal (id) {
      this.customerState = true
      this.infoId = id
    },
    onSelectChange (selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys
      this.selectedRows = selectedRows
    },
    handleAdd () {
      this.$refs.modal.add()
    },
    handleEdit (record) {
      this.$refs.modal.edit(record)
    },
    handleOk () {
      this.$refs.table.refresh(true)
      console.log('handleSaveOk')
    },
    delByIds (ids) {
      delRyClient({ ids: ids.join(',') }).then(res => {
        if (res.code === 0) {
          this.$message.success('删除成功')
          this.handleOk()
        } else {
          this.$message.error(res.msg)
        }
        this.selectedRowKeys = []
      })
    }
  },
  watch: {
    /*
      'selectedRows': function (selectedRows) {
        this.needTotalList = this.needTotalList.map(item => {
          return {
            ...item,
            total: selectedRows.reduce( (sum, val) => {
              return sum + val[item.dataIndex]
            }, 0)
          }
        })
      }
      */
  }
}
</script>
