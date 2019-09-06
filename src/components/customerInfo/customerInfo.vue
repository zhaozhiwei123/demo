<template>
  <div class="customer">
    <a-layout>
      <!-- 头部 -->
      <a-layout-header>
        <a-row>
          <a-col :span="6">
            <div style="text-align:center">
              <a-avatar :size="64" icon="user" />
              <p>姓名: {{ baseInfo.name }}</p>
            </div>
          </a-col>
          <a-col :span="18">
            <div class="info flex flex-wrap">
              <p><span class="space-left">用户ID:</span><span>--</span></p>
              <p><span>当前角色:</span><span>--</span></p>
              <p><span>认证情况:</span><span>{{ baseInfo.authStatus == 1 ? '已认证': '未认证' }}</span></p>
              <p><span>风险等级:</span><span>--</span></p>
              <p><span>账户状态:</span><span>{{ baseInfo.status == 1 ? '已启用': '未启用' }}</span></p>
            </div>
          </a-col>
        </a-row>
      </a-layout-header>
      <!-- 中间内容区域 -->
      <a-layout-content>
        <div class="contain">
          <a-tabs type="card" @change="changeTab">
            <a-tab-pane tab="基本信息" key="1">
              <div class="table-box">
                <div class="common-table">

                  <!--基本信息-->
                  <div class="table-title flex align-c">
                    <span></span><span>基本信息</span>
                  </div>
                  <div class="table">
                    <table border="1" borderColor="#d1d3c4" class="layui-table">
                      <tr>
                        <th>性别</th>
                        <td>{{ baseInfo.sex == 1?'未知' : baseInfo.sex == 2 ? '男': '女' }}</td>
                        <th>年龄：</th>
                        <td>{{ baseInfo.age }}</td>
                        <th>身份证号：</th>
                        <td colspan="3">{{ baseInfo.idcard }}</td>
                      </tr>
                      <tr>
                        <th>手机号</th>
                        <td>{{ baseInfo.phone }}</td>
                        <th>婚姻状况：</th>
                        <td>--</td>
                        <th>学历：</th>
                        <td>--</td>
                        <th>民族：</th>
                        <td>--</td>
                      </tr>
                      <tr>
                        <th>职业类型：</th>
                        <td>--</td>
                        <th>供养人数：</th>
                        <td>--</td>
                        <th>住宅类型：</th>
                        <td>--</td>
                        <th>住宅电话：</th>
                        <td>--</td>
                      </tr>
                      <tr>
                        <th>QQ：</th>
                        <td>--</td>
                        <th>微信：</th>
                        <td>--</td>
                        <th>邮箱：</th>
                        <td colspan="3">--</td>
                      </tr>
                      <tr>
                        <th>籍贯地址：</th>
                        <td colspan="5"><div style="width:560px;">--</div></td>
                        <th>邮编：</th>
                        <td>--</td>
                      </tr>
                      <tr>
                        <th>居住地址：</th>
                        <td colspan="5"><div style="width:560px;">--</div></td>
                        <th>邮编：</th>
                        <td>--</td>
                      </tr>
                      <tr>
                        <th>个人描述：</th>
                        <td colspan="7">--</td>
                      </tr>
                    </table>
                  </div>
                  <!--基本信息 end-->

                  <!--联系人-->
                  <div class="table-title flex align-c" style="position:relative;">
                    <span></span><span>联系人</span>
                    <span @click="telName()" style="position:absolute; right:0px; color:#40a9ff; cursor:pointer;">通讯录</span>
                  </div>
                  <div class="table">
                    <div class="table">
                      <table border="1" borderColor="#d1d3c4" class="layui-table linkman">
                        <tr>
                          <th>姓名：</th>
                          <td>木纹套</td>
                          <th>手机号：</th>
                          <td>13313817173</td>
                          <th>居住地址：</th>
                          <td style="width:37.5%" title=""><div style="width:347px;">上海</div></td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <!--联系人 end-->

                  <!--工作-->
                  <div class="table-title flex align-c">
                    <span></span><span>工作</span>
                  </div>
                  <div class="table">
                    <div class="table">
                      <table border="1" borderColor="#d1d3c4" class="layui-table linkman">
                        <tr>
                          <th>单位名称：</th>
                          <td colspan="3">天上人间</td>
                          <th>单位性质：</th>
                          <td>服务业</td>
                          <th>所属行业：</th>
                          <td>娱乐业</td>
                        </tr>
                        <tr>
                          <th>单位地址：</th>
                          <td colspan="3">寻欢街</td>
                          <th>所属部门：</th>
                          <td>筛选部</td>
                          <th>担任职务：</th>
                          <td>美女筛选员</td>
                        </tr>
                        <tr>
                          <th>公积金：</th>
                          <td>1.00</td>
                          <th>社保：</th>
                          <td>1.00</td>
                          <th>入职时间：</th>
                          <td>2018-09-09</td>
                          <th>单位电话：</th>
                          <td>178178178178</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <!--工作 end-->

                  <!--财务-->
                  <div class="table-title flex align-c">
                    <span></span><span>财务</span>
                  </div>
                  <div class="table">
                    <div class="table">
                      <table border="1" borderColor="#d1d3c4" class="layui-table linkman">
                        <tr>
                          <th>月均收入：</th>
                          <td>5000</td>
                          <th>收入构成：</th>
                          <td>固定+提成</td>
                          <th>月均支出：</th>
                          <td>10000</td>
                          <th>支出构成：</th>
                          <td>吃+喝+嫖+赌</td>
                        </tr>
                        <tr>
                          <th>参股企业：</th>
                          <td>天上人间</td>
                          <th>参股金额：</th>
                          <td>1000万</td>
                          <th>其他描述：</th>
                          <td colspan="3">无</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <!--财务 end-->

                  <!--银行卡-->
                  <div class="table-title flex align-c">
                    <span></span><span>银行卡</span>
                  </div>
                  <div class="table">
                    <div class="table">
                      <table border="1" borderColor="#d1d3c4" class="layui-table linkman">
                        <tr>
                          <th>开户人：</th>
                          <td>--</td>
                          <th>卡类型：</th>
                          <td>--</td>
                          <th>卡号：</th>
                          <td>--</td>
                          <th>手机号：</th>
                          <td>--</td>
                        </tr>
                        <tr>
                          <th>开户行：</th>
                          <td>--</td>
                          <th>支行名称：</th>
                          <td>--</td>
                          <th>所在地：</th>
                          <td colspan="3">--</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <!--银行卡 end-->

                  <!--房产-->
                  <div class="table-title flex align-c">
                    <span></span><span>房产</span>
                  </div>
                  <div class="table">
                    <div class="table">
                      <table border="1" borderColor="#d1d3c4" class="layui-table linkman">
                        <tr>
                          <td colspan="8" class="blueColor">房产1</td>
                        </tr>
                        <tr>
                          <th>房产类型：</th>
                          <td>--</td>
                          <th>房产面积：</th>
                          <td>--</td>
                          <th>房产价值：</th>
                          <td>--</td>
                          <th>建筑年份：</th>
                          <td>--</td>
                        </tr>
                        <tr>
                          <th>所有权1：</th>
                          <td>--</td>
                          <th>所有权2：</th>
                          <td>--</td>
                          <th>是否按揭：</th>
                          <td>--</td>
                          <th>供款状况：</th>
                          <td>--</td>
                        </tr>
                        <tr>
                          <th>借款年限：</th>
                          <td>--</td>
                          <th>月供：</th>
                          <td>--</td>
                          <th>尚欠余额：</th>
                          <td colspan="3">--</td>
                        </tr>
                        <tr>
                          <th>房产地址：</th>
                          <td colspan="3">--</td>
                          <th>其他描述：</th>
                          <td colspan="3">--</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <!--房产 end-->

                  <!--车辆-->
                  <div class="table-title flex align-c">
                    <span></span><span>车辆</span>
                  </div>
                  <div class="table">
                    <div class="table">
                      <table border="1" borderColor="#d1d3c4" class="layui-table linkman">
                        <tr>
                          <td colspan="8" class="blueColor">车辆1</td>
                        </tr>
                        <tr>
                          <th>车辆号码：</th>
                          <td>--</td>
                          <th>车辆品牌：</th>
                          <td>--</td>
                          <th>车辆型号：</th>
                          <td>--</td>
                          <th>车辆类型：</th>
                          <td>--</td>
                        </tr>
                        <tr>
                          <th>出厂年份：</th>
                          <td>--</td>
                          <th>车辆价值：</th>
                          <td>--</td>
                          <th>是否进口：</th>
                          <td>--</td>
                          <th>车辆用途：</th>
                          <td>--</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <!--车辆 end-->

                  <!--教育-->
                  <div class="table-title flex align-c">
                    <span></span><span>教育</span>
                  </div>
                  <div class="table">
                    <div class="table">
                      <table border="1" borderColor="#d1d3c4" class="layui-table linkman">
                        <tr>
                          <td colspan="8" class="blueColor">学校1</td>
                        </tr>
                        <tr>
                          <th>学校名称：</th>
                          <td style="width:37.5%">--</td>
                          <th>开始时间：</th>
                          <td>--</td>
                          <th>结束时间：</th>
                          <td>--</td>
                        </tr>
                        <tr>
                          <th>地址：</th>
                          <td style="width:37.5%">--</td>
                          <th>学制：</th>
                          <td>--</td>
                          <th>证明人：</th>
                          <td>--</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <!--教育 end-->

                  <!--私营业主-->
                  <div class="table-title flex align-c">
                    <span></span><span>私营业主</span>
                  </div>
                  <div class="table">
                    <div class="table">
                      <table border="1" borderColor="#d1d3c4" class="layui-table linkman">
                        <tr>
                          <th>企业名称：</th>
                          <td colspan="3">--</td>
                          <th>企业类型：</th>
                          <td>--</td>
                          <th>企业类别：</th>
                          <td>--</td>
                        </tr>
                        <tr>
                          <th>注册日期：</th>
                          <td>--</td>
                          <th>员工人数：</th>
                          <td>--</td>
                          <th>月净利润：</th>
                          <td>--</td>
                          <th>经营场所：</th>
                          <td>--</td>
                        </tr>
                        <tr>
                          <th>经营业务：</th>
                          <td colspan="7">--</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <!--私营业主 end-->

                  <div style="height:20px;"></div>

                </div>

              </div>
            </a-tab-pane>
            <a-tab-pane tab="影像资料" class="img-info" key="2">
              <a-spin :spinning="spinning2" tip="Loading...">
                <a-carousel arrows dotsClass="slick-dots slick-thumb">
                  <div
                    slot="prevArrow"
                    class="custom-slick-arrow"
                    style="left: 10px;zIndex: 1"
                  >
                    <a-icon type="left-circle" />
                  </div>
                  <div
                    slot="nextArrow"
                    class="custom-slick-arrow"
                    style="right: 10px"
                  >
                    <a-icon type="right-circle" />
                  </div>
                  <a slot="customPaging" slot-scope="props">
                    <img :src="getImgUrl(props.i)" />
                  </a>

                  <div v-for="(item,index) in imgList" :key="index" v-viewer="{movable: false}">
                    <img :src="item.filePath" />
                  </div>
                </a-carousel>
              </a-spin>
            </a-tab-pane>
            <a-tab-pane tab="认证信息" class="auth-info" key="3">
              <a-tabs defaultActiveKey="2" @change="authInfo" :animated="false">
                <a-tab-pane tab="运营商" key="1">
                  <div>
                    <iframe frameborder="0" width="100%" height="380" src="https://www.baidu.com"></iframe>
                  </div>
                </a-tab-pane>
                <a-tab-pane tab="淘宝" key="2">
                  <div>
                    <iframe frameborder="0" width="100%" height="380" src="https://www.bilibili.com"></iframe>
                  </div>
                </a-tab-pane>
                <a-tab-pane tab="魔杖" key="3">
                  <div>
                    <iframe frameborder="0" width="100%" height="380" src="https://www.douyu.com/"></iframe>
                  </div>
                </a-tab-pane>
              </a-tabs>
            </a-tab-pane>
          </a-tabs>
        </div>
      </a-layout-content>
      <!-- 尾部 -->
      <a-layout-footer>
        <div class="flex flex-around align-c info-footer">
          <p><span>推荐人:</span><span>{{ baseInfo.referrerName ? baseInfo.referrerName : '--' }}</span></p>
          <p><span>注册来源:</span><span>{{ baseInfo.sourceType == 1?'自然客户' : baseInfo.sourceType == 2 ? '导流客户': '邀请推荐' }}</span></p>
          <p><span>注册时间:</span><span>{{ baseInfo.createTime }}</span></p>
          <p><span>最近登录:</span><span>{{ baseInfo.lastTime ? baseInfo.lastTime : '--' }}</span></p>
        </div>
      </a-layout-footer>
    </a-layout>

    <!--通讯录弹窗-->
    <a-modal
      title="通讯录"
      v-model="mobile_visible"
      @ok="mobile_handleOk"
      width="800px"
    >
      <div>
        <a-table :columns="txl_columns" :dataSource="txl_data">

        </a-table>
      </div>
    </a-modal>
  </div>
</template>
<script>
import { baseInfo, fileList } from '@/api/client'

export default {
  props: {
    id: {
      type: Number,
      default: 0
    }
  },

  data () {
    return {
      imgList: [],
      imgEnable: false,
      spinning2: false,
      mobile_visible: false,
      baseInfo: {},
      txl_columns: [ {
        title: '姓名',
        dataIndex: 'name',
        key: 'name'
      }, {
        title: '手机号',
        dataIndex: 'tel',
        key: 'tel'
      }, {
        title: '获取时间',
        dataIndex: 'getTime',
        key: 'getTime'
      }, {
        title: '状态',
        dataIndex: 'status',
        key: 'status'
      }],

      txl_data: [{
        key: '1',
        name: 'SB',
        tel: '17317855668',
        getTime: '2018-01-01',
        status: '正常'
      }, {
        key: '2',
        name: 'SB22',
        tel: '17317855668',
        getTime: '2018-01-01',
        status: '正常'
      },
      {
        key: '3',
        name: 'SB33',
        tel: '17317855668',
        getTime: '2018-01-01',
        status: '正常'
      }]

    }
  },

  mounted () {
    this.getInitialInfo()
  },
  methods: {
    // 获取影像资料的地址
    getImgUrl (i) {
      console.log(i)
      // console.log(i, `${baseUrl}abstract0${i + 1}.jpg`)
      return this.imgList[i].filePath
    },
    // 切换三大内容区域
    changeTab (key) {
      console.log(key, typeof key)
      if (key === '2') {
        this.getFileList()
      }
    },
    // 影像资料tab切换要做的操作
    imageInfo (key) {
      // this.spinning2 = !this.spinning2
    },
    // 认证信息tab切换做的操作
    authInfo (key) {

    },

    // 通讯录弹窗
    telName () {
      this.mobile_visible = true
    },

    mobile_handleOk () {
      this.mobile_visible = false
    },

    // 初始化信息获取
    getInitialInfo () {
      const data = {
        id: this.id
      }
      baseInfo(data).then((res) => {
        this.baseInfo = res
      })
    },
    // 影像资料的获取
    getFileList () {
      const data = {
        id: this.id
      }
      fileList(data).then((res) => {
        if (res.code === 0) {
          // var imgList = []
          // res.rows.forEach((v) => {
          //   imgList.push(v.filePath)
          // })
          this.imgList = res.rows
          this.imgEnable = true
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
  .customer{
    .ant-layout{
      background: #fff;
      .ant-layout-header{
        background:none;
        padding:0;
        padding-top:10px;
        line-height: normal;
        height:110px;
        .info{
          p{
            width: 33.3%;
            span:first-child{
              margin-right:16px;
              &.space-left{
                margin-right:30px;
              }
            }
          }
        }
      }
      .ant-layout-content{
        .contain{
          .ant-tabs{
            .table-box{
              .common-table{
                .table-title{
                  margin-bottom: 10px;
                  padding-top: 20px;
                  span:first-child{
                    width: 2px;
                    height:16px;
                    background:#40a9ff;
                    margin-right: 15px;
                  }
                }

              }
            }
          }
        }
      }
      .ant-layout-footer{
        background:rgba(235, 235, 235, 1);
        height:45px;
        border-top:1px solid rgba(209, 211, 196, 1);
        box-shadow:0px -1px 5px rgba(0, 0, 0, 0.266666666666667);
        padding: 0;
        .info-footer{
          p{
            height:45px;
            line-height:45px;
            margin-bottom: 0;
            span:first-child{
              margin-right: 15px;
            }
          }
        }
      }
    }

  }
  //基础信息表格样式
  .table .layui-table { width: 100%; border-color: rgba(209, 211, 196, 1);}
  .table .layui-table th {padding: 7px 10px;width: 12.5%; background-color: #f2f2f2; font-family: '微软雅黑'; font-weight: 400; font-style: normal; font-size: 12px; color: #6B6B6B; text-align: left;}
  .table .layui-table td {width: 12.5%; font-family: '微软雅黑'; font-weight: 400; font-style: normal; font-size: 12px; text-align: left; color: #333;padding: 7px 2px;}
  .table .layui-table td div {overflow: hidden; text-overflow: ellipsis; white-space: nowrap;}
  .table .layui-table tbody tr:hover {
      background-color: #fff;
  }
  .table .layui-table td.blueColor{color:#40a9ff; text-indent:10px;}

</style>
<style scoped>
.customer >>> .ant-tabs-bar{
  margin: 0;
}
/* 设置tab标签的内容的高度 */
.customer >>> .ant-tabs-top-content{
  height: 440px;
  border-left:1px solid #e8e8e8;
  border-right:1px solid #e8e8e8;
  padding:0 20px;
  overflow-y: auto;
}
/* 将影像资料tab内容的高度设置为0 */
.customer .img-info >>> .ant-tabs-top-content{
  height: 0;
  border:none;
  padding: 0;
  overflow: hidden;;
}
/* 认证信息tab美容的高度 */
.customer .auth-info>>> .ant-tabs-top-content{
  height: 380px;
  border:none;
  padding: 0;
  overflow: hidden;
}
/* 关于跑马灯的样式 */
.ant-carousel{
  margin-top: 20px;
}
.ant-carousel >>> .slick-dots {
  height: auto
}
.ant-carousel >>> .slick-slide img{
    border: 5px solid #FFF;
    display: block;
    margin: auto;
    max-width: 60%;
}
.ant-carousel >>> .slick-thumb {
  bottom: -45px;
}
.ant-carousel >>> .slick-thumb li {
  width: 60px;
  height: 45px;
}
.ant-carousel >>> .slick-thumb li img {
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
}
.ant-carousel >>> .slick-thumb li.slick-active img{
    filter: grayscale(0%);
}
.ant-carousel >>> .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31,45,61,.5);
  opacity: 1;
}
.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
  opacity: 0.5;
}

</style>
