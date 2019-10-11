const host="http://39.108.9.188/";
export default{
    getBlogList:`${host}index.php`,//获取博文列表
    getBlog:`${host}index.php`,//获取博文 游客观看 和博主编辑
    getComment:`${host}index.php`,//获取博文的评论
    addComment:`${host}index.php`,//添加评论
    login:`${host}user/login`, //后台博主登陆
    logout:`${host}user/logout`, //后台博主退出
    registering:`${host}user/registering`, //添加博主
    updateBlog:`${host}index.php`, //添加或改变博文
    delBlog:`${host}index.php`, //删除博文
    getBlogerInfor:`${host}index.php`, //获取后台博主的信息
    blogerImg:`${host}index.php`,//后台博主头像提交
    changeBlogerInfor:`${host}index.php`//后台博主修改信息
}