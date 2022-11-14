<template>
    <div>
        <!-- 背景 -->
        <div class="h-bg">
            <!-- 公用顶部 -->
            <div class="hearBar">
                <header>
                    <div class="header-logo">
                        <div class="header-logo-left">
                            <!-- <img src="../images/logo.png" alt="" /> -->
                        </div>
                        <div class="header-logo-center"></div>
                        <div class="header-logo-right">GIS行业聚集地</div>
                    </div>
                    <div class="header-router">
                        <div class="header-router-one "> 首页</div>
                        <div class="header-router-one active"> 行业服务</div>
                        <div class="header-router-one"> GIS仓库 </div>
                        <div class="header-router-one"> 需求大厅 </div>
                        <div class="header-router-one"> 免费素材 </div>
                        <div class="header-router-one">咨询中心 </div>
                    </div>
                    <div class="header-login">
                        <div class="header-login-content">
                            <div class="login">登录</div>
                            <div class="line"></div>
                            <div class="register">注册</div>
                        </div>
                    </div>
                    <div class="header-user">
                        <div class="dropdown">
                            <button class="btn btn-default " type="button" id="dropdownMenu1" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="true">
                                Dropdown
                                <span class="caret"></span>
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                                <li class="accountInfo"> 账号信息</li>
                                <!-- <li class="avatar"><img src="../images/db-photo.png" alt=""> <span>admin</span></li> -->
                                <li class="line"></li>
                                <!-- <li class="dropdown-item"><img src="../images/center-yhzx.png" alt=""><a -->
                                        <!-- href="#">用户中心</a></li> -->
                                <!-- <li class="dropdown-item"><img src="../images/center-tc.png" alt=""><a href="#">安全退出 -->
                                    <!-- </a></li> -->
                            </ul>
                        </div>
                    </div>
                </header>
            </div>
            <!-- 搜素 -->
            <div class="search">
                <div class="text1  margin-top50">全新的合作，从这里开始</div>
                <div class="text2 margin-top30">免费发布需求，商机无忧</div>
                <div class="search-content flex margin-top50">
                    <form role="search" method="post" action="/search">
                        <input type="text" name="entity['keywords']" placeholder="请输入搜索内容">
                        <!-- <input  placeholder="请输入搜索内容" > -->
                        <input placeholder="" type="hidden" value="82yp7u3e" name="entity['typeid']">
                        <input placeholder="" type="hidden" value="solution_list.html" name="entity['path']">
                        <input type="submit" class="btn" value="搜索">&gt;
                    </form>
                </div>
            </div>
        </div>

        <!-- mainBar -->
        <div class="mainBar flex_col_centet ">
            <div class="mainBar-top ">
                <!-- 分类 -->
                <div class="menu flex_left ">
                    <div class="menu_left flex_center">选择分类</div>
                    <div class="menu_all text_align_center active"> 全部 </div>
                    <div class="menu_items flex_left">
                        <div class="menu_item">倾斜摄影 </div>
                        <div class="menu_item">软件开发 </div>
                        <div class="menu_item">三维建模 </div>
                        <div class="menu_item">正射影像 </div>
                        <div class="menu_item">产品文案 </div>
                        <div class="menu_item">智能设备 </div>
                    </div>
                </div>
                <!-- 领域 -->
                <div class="menu flex_left margin_top10">
                    <div class="menu_left flex_center">选择领域</div>
                    <div class="menu_all text_align_center active">全部 </div>
                    <div class="menu_items flex_left">
                        <div class="menu_item">智慧校园 </div>
                        <div class="menu_item">智慧园区 </div>
                        <div class="menu_item">智慧停车 </div>
                        <div class="menu_item">视频监控 </div>
                        <div class="menu_item">智慧农业 </div>
                        <div class="menu_item">只能门禁 </div>
                        <div class="menu_item">智慧城市 </div>
                        <div class="menu_item">智慧交通 </div>
                        <div class="menu_item">门禁监控 </div>
                        <div class="menu_item">智慧教室 </div>
                        <div class="menu_item">智慧消防 </div>
                        <div class="menu_item">智慧医院 </div>
                        <div class="menu_item">智慧养老 </div>
                        <div class="menu_item">智慧安防 </div>
                        <div class="menu_item">水质检测 </div>
                        <div class="menu_item">智慧水利 </div>
                        <div class="menu_item">智慧消防 </div>
                        <div class="menu_item">安保防控 </div>
                        <div class="menu_item">智慧水务 </div>
                        <div class="menu_item">智慧照明 </div>
                        <div class="menu_item">垃圾处理 </div>
                        <div class="menu_item">智慧环卫 </div>
                        <div class="menu_item">洪水灾害 </div>
                        <div class="menu_item">生物灾害 </div>
                        <div class="menu_item">智慧社区 </div>
                    </div>
                    <div class="menu_more ">更多<i class="iconfont icon-xiajiantou margin-left5"></i></div>
                </div>
            </div>
            <div class="mainBar-middle flex_between_wrap margin-top20">
                <!-- 循环 -->
                <div class="mainBar-middle-item">
                    <!-- <img src="../images/banner01.png" alt="" /> -->
                    <div class="mainBar-middle-header">
                        <div class="mainBar-middle-header-title">智慧园区</div>
                        <div class="mainBar-middle-header-content">
                            智慧村务5G孪生云平台是基于靓马科技数字孪生平台开放能力,集数据融合、智能感知阿斯顿撒大苏打实打实大苏打、业务联动为一体的乡村...
                        </div>
                    </div>
                    <div class="margin_top20 flex_between margin-top20 mainBar-middle-item-bottom">
                        <div class="mainBar-middle-content flex_left_center">
                            <i class="iconfont icon-bijiben"></i>
                            <div class="mainBar-middle-text">完整方案</div>
                        </div>
                        <div>
                            <button class="mainBar-middle-btn">我要同款 <i class="iconfont icon-jiantou"></i></button>
                        </div>
                    </div>
                </div>
                <!-- == -->
                <div class="mainBar-middle-item">
                    <!-- <img src="../images/banner01.png" alt="" /> -->
                    <div class="mainBar-middle-header">
                        <div class="mainBar-middle-header-title">智慧园区</div>
                        <div class="mainBar-middle-header-content">
                            智慧村务5G孪生云平台是基于靓马科技数字孪生平台开放能力,集数据融合、智能感知阿斯顿撒大苏打实打实大苏打、业务联动为一体的乡村...
                        </div>
                    </div>
                    <div class="margin_top20 flex_between margin-top20 mainBar-middle-item-bottom">
                        <div class="mainBar-middle-content flex_left_center">
                            <i class="iconfont icon-bijiben"></i>
                            <div class="mainBar-middle-text">完整方案</div>
                        </div>
                        <div>
                            <button class="mainBar-middle-btn">我要同款 <i class="iconfont icon-jiantou"></i></button>
                        </div>
                    </div>
                </div>
                <div class="mainBar-middle-item">
                    <!-- <img src="../images/banner01.png" alt="" /> -->
                    <div class="mainBar-middle-header">
                        <div class="mainBar-middle-header-title">智慧园区</div>
                        <div class="mainBar-middle-header-content">
                            智慧村务5G孪生云平台是基于靓马科技数字孪生平台开放能力,集数据融合、智能感知阿斯顿撒大苏打实打实大苏打、业务联动为一体的乡村...
                        </div>
                    </div>
                    <div class="margin_top20 flex_between margin-top20 mainBar-middle-item-bottom">
                        <div class="mainBar-middle-content flex_left_center">
                            <i class="iconfont icon-bijiben"></i>
                            <div class="mainBar-middle-text">完整方案</div>
                        </div>
                        <div>
                            <button class="mainBar-middle-btn">我要同款 <i class="iconfont icon-jiantou"></i></button>
                        </div>
                    </div>
                </div>
                <div class="mainBar-middle-item">
                    <!-- <img src="../images/banner01.png" alt="" /> -->
                    <div class="mainBar-middle-header">
                        <div class="mainBar-middle-header-title">智慧园区</div>
                        <div class="mainBar-middle-header-content">
                            智慧村务5G孪生云平台是基于靓马科技数字孪生平台开放能力,集数据融合、智能感知阿斯顿撒大苏打实打实大苏打、业务联动为一体的乡村...
                        </div>
                    </div>
                    <div class="margin_top20 flex_between margin-top20 mainBar-middle-item-bottom">
                        <div class="mainBar-middle-content flex_left_center">
                            <i class="iconfont icon-bijiben"></i>
                            <div class="mainBar-middle-text">完整方案</div>
                        </div>
                        <div>
                            <button class="mainBar-middle-btn">我要同款 <i class="iconfont icon-jiantou"></i></button>
                        </div>
                    </div>
                </div>
                <div class="mainBar-middle-item">
                    <!-- <img src="../images/banner01.png" alt="" /> -->
                    <div class="mainBar-middle-header">
                        <div class="mainBar-middle-header-title">智慧园区</div>
                        <div class="mainBar-middle-header-content">
                            智慧村务5G孪生云平台是基于靓马科技数字孪生平台开放能力,集数据融合、智能感知阿斯顿撒大苏打实打实大苏打、业务联动为一体的乡村...
                        </div>
                    </div>
                    <div class="margin_top20 flex_between margin-top20 mainBar-middle-item-bottom">
                        <div class="mainBar-middle-content flex_left_center">
                            <i class="iconfont icon-bijiben"></i>
                            <div class="mainBar-middle-text">完整方案</div>
                        </div>
                        <div>
                            <button class="mainBar-middle-btn">我要同款 <i class="iconfont icon-jiantou"></i></button>
                        </div>
                    </div>
                </div>
                <div class="mainBar-middle-item">
                    <!-- <img src="../images/banner01.png" alt="" /> -->
                    <div class="mainBar-middle-header">
                        <div class="mainBar-middle-header-title">智慧园区</div>
                        <div class="mainBar-middle-header-content">
                            智慧村务5G孪生云平台是基于靓马科技数字孪生平台开放能力,集数据融合、智能感知阿斯顿撒大苏打实打实大苏打、业务联动为一体的乡村...
                        </div>
                    </div>
                    <div class="margin_top20 flex_between margin-top20 mainBar-middle-item-bottom">
                        <div class="mainBar-middle-content flex_left_center">
                            <i class="iconfont icon-bijiben"></i>
                            <div class="mainBar-middle-text">完整方案</div>
                        </div>
                        <div>
                            <button class="mainBar-middle-btn">我要同款 <i class="iconfont icon-jiantou"></i></button>
                        </div>
                    </div>
                </div>
                <div class="mainBar-middle-item">
                    <!-- <img src="../images/banner01.png" alt="" /> -->
                    <div class="mainBar-middle-header">
                        <div class="mainBar-middle-header-title">智慧园区</div>
                        <div class="mainBar-middle-header-content">
                            智慧村务5G孪生云平台是基于靓马科技数字孪生平台开放能力,集数据融合、智能感知阿斯顿撒大苏打实打实大苏打、业务联动为一体的乡村...
                        </div>
                    </div>
                    <div class="margin_top20 flex_between margin-top20 mainBar-middle-item-bottom">
                        <div class="mainBar-middle-content flex_left_center">
                            <i class="iconfont icon-bijiben"></i>
                            <div class="mainBar-middle-text">完整方案</div>
                        </div>
                        <div>
                            <button class="mainBar-middle-btn">我要同款 <i class="iconfont icon-jiantou"></i></button>
                        </div>
                    </div>
                </div>
                <!-- == -->
                <div class="mainBar-bottom ">
                    <ul class="flex page">
                        <li class="page-li margin-right10 ">上一页</li>
                        <li class="page-li margin-right10 pageActive">1</li>
                        <li class="page-li margin-right10 ">2</li>
                        <li class="page-li margin-right10 ">3</li>
                        <li class="page-li margin-right10 ">4</li>
                        <li class="page-li margin-right10 ">5</li>
                        <li class="page-li margin-right10 ">6</li>
                        <li class="page-li margin-right10 ">...</li>
                        <li class="page-li ">下一页</li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 公用底部 -->
        <div class="bottomBar">
            <div class="bottomBar-bottom">
                <div class="bottomBar-bottom-t">
                    <div class="bottomBar-bottom-t-left">
                        <!-- <img src="../images/logo.png" alt=""> -->
                        <p>GIS行业聚集地</p>
                    </div>
                    <div class="bottomBar-bottom-t-center">
                        <div class="bottomBar-bottom-t-center-one">
                            <div class="bottomBar-bottom-t-center-one-title">关于我们</div>
                            <div class="bottomBar-bottom-t-center-one-content">
                                <p>公司简介</p>
                                <p>平台公告</p>
                                <p>媒体报道</p>
                                <p>联系方式</p>
                            </div>
                        </div>
                        <div class="bottomBar-bottom-t-center-one">
                            <div class="bottomBar-bottom-t-center-one-title">交易保障</div>
                            <div class="bottomBar-bottom-t-center-one-content">
                                <p>拍保交易</p>
                                <p>公司资质</p>
                                <p>媒体报道</p>
                                <p>支付方式</p>
                            </div>
                        </div>
                        <div class="bottomBar-bottom-t-center-one">
                            <div class="bottomBar-bottom-t-center-one-title">案例中心</div>
                            <div class="bottomBar-bottom-t-center-one-content">
                                <p>作品案例</p>
                                <p>精彩专题</p>
                                <p>成功雇主</p>
                                <p>优秀威客</p>
                            </div>
                        </div>
                        <div class="bottomBar-bottom-t-center-one last">
                            <div class="bottomBar-bottom-t-center-one-title">帮助中心</div>
                            <div class="bottomBar-bottom-t-center-one-content">
                                <p class="phone">0555-2333558</p>
                                <p>全国官方客服咨询热线</p>
                            </div>
                        </div>
                    </div>
                    <div class="bottomBar-bottom-t-right">
                        <div class="bottomBar-bottom-t-right-title">关注GIS+</div>
                        <div class="bottomBar-bottom-t-right-content">
                            <div class="bottomBar-bottom-t-right-content-one">
                                <!-- <img src="../images/qr-code.png" alt=""> -->
                                <p>官方公众号</p>
                            </div>
                            <div class="bottomBar-bottom-t-right-content-one">
                                <!-- <img src="../images/qr-code.png" alt=""> -->
                                <p>官方抖音号</p>
                            </div>
                            <div class="bottomBar-bottom-t-right-content-one">
                                <!-- <img src="../images/qr-code.png" alt=""> -->
                                <p>官方APP</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bottomBar-bottom-b">
                    <div class="bottomBar-bottom-b-left">
                        <p>安徽GIS+网络科技有限公司版权所有</p>
                        <p>Copyright©2022 https://www.tgis.com 皖ICP备12001463号 皖网文〔2022〕5594-101号</p>
                    </div>
                    <div class="bottomBar-bottom-b-right">
                        <!-- <img src="../images/approve01.png" alt="">
                        <img src="../images/approve02.png" alt="">
                        <img src="../images/approve03.png" alt="">
                        <img src="../images/approve04.png" alt="">
                        <img src="../images/approve05.png" alt=""> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

html {
    min-width: 1420px
}

a {
    text-decoration: none;
}

ul,
ol {
    list-style: none;
}


/* base  */

button {
    cursor: pointer;
}

.flex {
    display: flex;
}

.flex-justify-center {
    display: flex;
    justify-content: center;
}

.flex-justify-between {
    display: flex;
    justify-content: space-between;
}

.margin-top10 {
    margin-top: 10px;
}

.margin-top20 {
    margin-top: 20px;
}

.margin-top30 {
    margin-top: 30px;
}

.margin-top50 {
    margin-top: 50px;
}

.margin-left5 {
    margin-left: 5px;
}

.margin-right5 {
    margin-right: 5px;
}

.margin-right10 {
    margin-right: 10px;
}

.margin-right30 {
    margin-right: 30px;
}

.margin-bottom10 {
    margin-bottom: 10px;
}

.margin-bottom30 {
    margin-bottom: 30px;
}

.text-align-center {
    text-align: center;
}

.word_ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.flex_left {
    display: flex;
    flex-wrap: wrap;
}

.flex_left_center {
    display: flex;
    align-items: center;
}

.flex_center {
    display: flex !important;
    justify-content: center;
}

.flex_align_center {
    display: flex !important;
    justify-content: center;
    align-items: center;
}

.text_align_center {
    text-align: center;
}

.margin_top10 {
    margin-top: 10px;
}

.flex_between {
    display: flex !important;
    justify-content: space-between;
}

.flex_col_centet {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.flex_between_wrap {
    display: flex !important;
    justify-content: space-between;
    flex-wrap: wrap;
}

.rowCenter {
    margin: 0 auto;
}

.overflow_hidden {
    overflow: hidden;
}

.margin_right5 {
    margin-right: 5px
}

.margin_top50 {
    margin-top: 50px;
}

.margin_top30 {
    margin-top: 30px;
}

.margin_top20 {
    margin-top: 20px;
}

.position_relative {
    position: relative;
}
.isHidden {
    display: none !important;
}

.hearBar {
    width: 100%;
    height: 70px;
    z-index: 2000;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background-color: #000;
}

.hearBar header {
    width: 1420px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
}

.hearBar header .header-logo {
    width: 300px;
    height: 100%;
    display: flex;
    align-items: center;
}

.hearBar header .header-logo .header-logo-left {
    width: 105px;
    font-size: 36px;
    font-family: Inter, Inter-Bold;
    font-weight: 700;
    color: #fffefe;
    display: flex;
    align-items: center;
}

.hearBar header .header-logo .header-logo-left img:hover {
    cursor: pointer;
}

.hearBar header .header-logo .header-logo-left span {
    margin-left: 3px;
}

.hearBar header .header-logo .header-logo-center {
    width: 1px;
    height: 32px;
    margin-left: 13px;
    margin-right: 23px;
    background-color: #fff;
}

.hearBar header .header-logo .header-logo-right {
    font-size: 22px;
    font-family: Inter, Inter-Regular;
    font-weight: 400;
    text-align: LEFT;
    color: #fffefe;
}

.hearBar header .header-router {
    display: flex;
    align-items: center;
    height: 100%;
}

.hearBar header .header-router .header-router-one {
    height: 100%;
    padding: 0 23px;
    color: #fffefe;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
}

.hearBar header .header-router .header-router-one a {
    color: #fff;
}

.hearBar header .header-router .active {
    background-color: #08a6ff;
}

.hearBar header .header-login {
    width: 145px;
    padding: 0 20px;
    height: 35px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: end;
    font-size: 14px;
    color: #fffefe;
}

.hearBar header .header-login .header-login-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 105px;
    height: 35px;
    border: 1px solid #f4f5fb;
    border-radius: 50px;
    padding: 0 15px;
}

.hearBar header .header-login .header-login-content .line {
    width: 0px;
    height: 15px;
    opacity: 0.5;
    border: 1px solid #f4f5fb;
}

.hearBar header .header-login .header-login-content .login:hover {
    cursor: pointer;
    color: #08a6ff;
}

.hearBar header .header-login .header-login-content .register:hover {
    cursor: pointer;
    color: #08a6ff;
}

.hearBar header .header-user {
    /* display: none !important; */
    width: 125px;
    padding: 0 20px;
    height: 35px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: end;
    font-size: 14px;
    color: #fffefe;
}

.hearBar header .header-user:hover {
    cursor: pointer;
}

.user_image {
    vertical-align: text-bottom;
    margin-right: 10px;
}

.user_avatar {
    vertical-align: middle;
    margin-right: 10px;
}

.header-user .dropdown .btn {
    background-color: transparent;
    border: none;
    color: #fff;
    outline: none !important;
}

.dropdown-menu {
    width: 239px;
    /* height: 235px; */
    background: linear-gradient(180deg, #e9ebf3, #ffffff 100%);
    border-radius: 2px;
    box-shadow: 0px -1px 8px 3px rgba(0, 0, 0, 0.05);
    left: -110px !important;
    top: 50px !important;
    padding: 11px 15px !important;
    position: relative;
}

.dropdown-menu .accountInfo {
    font-size: 12px;
    font-family: Microsoft YaHei UI, Microsoft YaHei UI-Regular;
    font-weight: 400;
    color: #919292;
}

.dropdown-menu .avatar img {
    width: 33px;
    height: 33px;
    border-radius: 16px;
    margin-top: 6px;
    vertical-align: middle;
}

.dropdown-menu .avatar span {
    font-size: 14px;
    font-family: Microsoft YaHei UI, Microsoft YaHei UI-Regular;
    font-weight: 400;
    color: #000000;
}

.dropdown-menu .dropdown-item {
    display: flex;
}

.dropdown-menu .dropdown-item img {
    width: 15px;
    height: 15px;
    position: relative;
    top: 8px;
}

.dropdown-menu .line {
    width: 212px;
    height: 1px;
    background-color: #EAE8E8;
    margin-top: 10px;
    margin-bottom: 10px;
}

.dropdown-menu .dropdown-item a {
    font-size: 12px;
    font-family: Microsoft YaHei UI, Microsoft YaHei UI-Light;
    font-weight: 300;
    color: #474747;
    line-height: 31px;
    padding: 0 10px;
}

.dropdown-menu::before {
    content: '';
    border-top: 15px solid transparent;
    border-bottom: 15px solid #e9ebf3;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    position: absolute;
    top: -25px;
    right: 60px;
}

.bottomBar {
    width: 100%;
    height: 333px;
    background: #333333;
    z-index: 2000;
    display: flex;
    justify-content: center;
    overflow: hidden
}

.bottomBar .bottomBar-bottom {
    width: 1420px;
    height: 100%;
    padding-top: 31px;
    padding-bottom: 27px;
}

.bottomBar .bottomBar-bottom .bottomBar-bottom-t {
    width: 100%;
    height: 190px;
    display: flex;
}

.bottomBar .bottomBar-bottom .bottomBar-bottom-t .bottomBar-bottom-t-left {
    width: 214px;
    height: 100%;
}

.bottomBar .bottomBar-bottom .bottomBar-bottom-t .bottomBar-bottom-t-left img {
    width: 128px;
}

.bottomBar .bottomBar-bottom .bottomBar-bottom-t .bottomBar-bottom-t-left p {
    font-size: 18px;
    font-family: Microsoft YaHei UI, Microsoft YaHei UI-Light;
    color: rgba(255, 255, 255, 0.5);
}

.bottomBar .bottomBar-bottom .bottomBar-bottom-t .bottomBar-bottom-t-center {
    width: 800px;
    height: 100%;
    display: flex;
    font-size: 16px;
    font-family: Microsoft YaHei UI, Microsoft YaHei UI-Light;
    color: rgba(255, 255, 255, 0.5);
}

.bottomBar .bottomBar-bottom .bottomBar-bottom-t .bottomBar-bottom-t-center .bottomBar-bottom-t-center-one {
    width: 153px;
}

.bottomBar .bottomBar-bottom .bottomBar-bottom-t .bottomBar-bottom-t-center .bottomBar-bottom-t-center-one .bottomBar-bottom-t-center-one-content {
    font-size: 14px;
    margin-top: 27px;
}

.bottomBar .bottomBar-bottom .bottomBar-bottom-t .bottomBar-bottom-t-center .bottomBar-bottom-t-center-one .bottomBar-bottom-t-center-one-content p {
    line-height: 30px;
}

.bottomBar .bottomBar-bottom .bottomBar-bottom-t .bottomBar-bottom-t-center .bottomBar-bottom-t-center-one .bottomBar-bottom-t-center-one-content .phone {
    font-size: 30px;
}

.bottomBar .bottomBar-bottom .bottomBar-bottom-t .bottomBar-bottom-t-center .last {
    width: 300px;
}

.bottomBar .bottomBar-bottom .bottomBar-bottom-t .bottomBar-bottom-t-right {
    font-size: 16px;
    font-family: Microsoft YaHei UI, Microsoft YaHei UI-Light;
    color: rgba(255, 255, 255, 0.5);
}

.bottomBar .bottomBar-bottom .bottomBar-bottom-t .bottomBar-bottom-t-right .bottomBar-bottom-t-right-title {
    margin-bottom: 20px;
}

.bottomBar .bottomBar-bottom .bottomBar-bottom-t .bottomBar-bottom-t-right .bottomBar-bottom-t-right-content {
    display: flex;
    padding-left: 10px;
}

.bottomBar .bottomBar-bottom .bottomBar-bottom-t .bottomBar-bottom-t-right .bottomBar-bottom-t-right-content .bottomBar-bottom-t-right-content-one {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 42px;
}

.bottomBar .bottomBar-bottom .bottomBar-bottom-t .bottomBar-bottom-t-right .bottomBar-bottom-t-right-content .bottomBar-bottom-t-right-content-one img {
    width: 106px;
    height: 106px;
}

.bottomBar .bottomBar-bottom .bottomBar-bottom-t .bottomBar-bottom-t-right .bottomBar-bottom-t-right-content .bottomBar-bottom-t-right-content-one p {
    font-size: 14px;
    line-height: 30px;
    margin-top: 5px;
}

.bottomBar .bottomBar-bottom .bottomBar-bottom-b {
    width: 100%;
    display: flex;
    height: 60px;
    margin-top: 25px;
}

.bottomBar .bottomBar-bottom .bottomBar-bottom-b .bottomBar-bottom-b-left {
    width: 50%;
    line-height: 30px;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.5);
}

.bottomBar .bottomBar-bottom .bottomBar-bottom-b .bottomBar-bottom-b-right {
    width: 50%;
    display: flex;
    height: 100%;
    align-items: center;
}

.bottomBar .bottomBar-bottom .bottomBar-bottom-b .bottomBar-bottom-b-right img {
    width: 131px;
    height: 46px;
    margin-right: 6px;
}

.h-bg {
    height: 394px;
    position: relative;
    width: 100%;
    /* background: url('../images/Group 14.png') no-repeat 50%/cover; */
}

.h-bg .search {
    width: 1420px;
    margin: 0 auto;
    overflow: hidden;
}

.h-bg .search .text1 {
    height: 51px;
    font-size: 40px;
    font-family: Microsoft YaHei UI, Microsoft YaHei UI-Bold;
    font-weight: 700;
    text-align: LEFT;
    color: #ffffff;
    line-height: 40px;
    letter-spacing: 0.4px;
    margin-top: 118px;
}

.h-bg .search .text2 {
    height: 28px;
    font-size: 22px;
    font-family: Microsoft YaHei UI, Microsoft YaHei UI-Regular;
    font-weight: 400;
    text-align: LEFT;
    color: #ffffff;
    line-height: 22px;
    letter-spacing: 0.88px;
}

.h-bg .search .search-content {
    width: 544px;
}

.h-bg .search .search-content form {
    /* width: 544px; */
    position: relative;
}

.h-bg .search .search-content input:nth-child(1) {
    width: 442px;
    height: 50px;
    background: #ffffff;
    border-radius: 5px 0px 0px 5px;
    outline: none;
    border: none;
    padding: 0 20px;
}

.h-bg .search .search-content .btn {
    width: 98px;
    height: 50px;
    background: #09a6ff;
    border-radius: 0px 5px 5px 0px;
    outline: none;
    border: none;
    font-size: 16px;
    font-family: Microsoft YaHei UI, Microsoft YaHei UI-Regular;
    font-weight: 400;
    color: #fffefe;
    line-height: 16px;
}

.h-bg .search .search-content form {
    display: flex;
}

.haveBg {
    background-color: transparent !important;
    position: absolute;
    top: 0;
}

.mainBar {
    width: 100%;
    background: #f4f5fb;
    overflow: hidden;
    padding-top: 30px;
}

.mainBar-top {
    width: 1420px;
    background-color: #fff;
    padding: 20px;
    box-sizing: border-box;
}

.menu_left {
    height: 25px;
    font-size: 14px;
    font-family: Microsoft YaHei UI, Microsoft YaHei UI-Light;
    font-weight: 300;
    color: #474747;
    line-height: 25px;
    margin-right: 20px;
}

.menu_all {
    padding: 2px 18px;
    height: 25px;
    border-radius: 50px;
    font-size: 14px;
    font-family: Microsoft YaHei UI, Microsoft YaHei UI-Light;
    font-weight: 300;
    color: #474747;
    margin-right: 20px;
    line-height: 25px;
}

.active {
    background: #08a6ff;
    color: #fff;
    height: 25px;
}

.menu {
    overflow: hidden;
}

.menu_items {
    width: 1076px;
}

.menu_item {
    padding: 2px 12px;
    height: 25px;
    border-radius: 50px;
    font-size: 14px;
    font-family: Microsoft YaHei UI, Microsoft YaHei UI-Light;
    font-weight: 300;
    color: #474747;
    line-height: 25px;
}

.menu_item:hover {
    cursor: pointer;
}

.menu_more {
    height: 25px;
    font-size: 14px;
    font-family: Microsoft YaHei UI, Microsoft YaHei UI-Light;
    font-weight: 300;
    text-align: LEFT;
    color: #007ff3;
    line-height: 25px;
}

.menu_more:hover {
    cursor: pointer;
}

.mainBar-middle {
    width: 1420px;
}

.mainBar-middle-item {
    width: 340px;
    height: 365px;
    padding: 0;
    background-color: #fff;
    margin-top: 20px;
}

.mainBar-middle-item img {
    width: 339px;
    height: 203px;
}

.mainBar-middle-header-title {
    height: 33px;
    font-size: 16px;
    font-family: Microsoft YaHei UI, Microsoft YaHei UI-Light;
    font-weight: 300;
    color: #0e0e0e;
    line-height: 33px;
}

.mainBar-middle-header-content {
    height: 40px;
    font-size: 12px;
    font-family: Microsoft YaHei UI, Microsoft YaHei UI-Light;
    font-weight: 300;
    color: #919292;
    line-height: 20px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.mainBar-middle-header {
    border-bottom: 1px solid #f4f5fb;
    padding: 10px 20px;
}

.mainBar-middle-text {
    font-size: 12px;
    font-family: Microsoft YaHei UI, Microsoft YaHei UI-Light;
    font-weight: 300;
    color: #474747;
    line-height: 20px;
}

.mainBar-middle-btn {
    width: 91px;
    height: 32px;
    background: #08a6ff;
    border-radius: 1px;
    border: none;
    color: #fff
        /*  */
    ;
}

.mainBar-bottom {
    width: 1419px;
    height: 85px;
    background: #ffffff;
    margin-top: 30px;
    margin-bottom: 30px;
}

.page-li {
    height: 30px;
    background: #f4f5fb;
    line-height: 30px;
    font-size: 14px;
    font-family: Microsoft YaHei UI, Microsoft YaHei UI-Light;
    font-weight: 300;
    color: #919292;
    padding: 2px 13px;
}

.pageActive {
    background: #08a6ff;
    color: #fff
}

.mainBar-bottom {
    display: flex;
    justify-content: center;
    align-items: center;
}

.mainBar-middle-item-bottom {
    padding: 0 20px
}

/*  */
</style>