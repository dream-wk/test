<template>
<div>
    <div class="btn_select">//删除保存按钮
        <ul>
            <li>
                <div class="   btn" id="delete">删除</div>
            </li>
            <li>
                <div class="   btn" id="save">保存</div>
            </li>
        </ul>
    </div>
    <div class="back display" id="pop">//弹窗灰色背景
        <div class="pop_content">//弹窗白色内容
            <div class="confirm">确认删除该联系信息吗?</div>//显示信息
            <div class="">

              <div class="cancel fl pop_select">取消</div>
              <div class="sure fl pop_select">确定</div>//选择按钮
            </div>

        </div>
    </div>
</div>
</template>
<script>
export default {
    mounted(){
        var that=this
        that.$('#delete').on('click', function() {//点击删除按钮显示弹窗
        that.$("#pop").removeClass("display")
    })
    
	that.$(".cancel").on('click', function() {//点击取消隐藏弹窗
        that.$("#pop").addClass("display")
    })
    
    that.$(".sure").on('click', function() {//点击确认进行删除操作并隐藏弹窗
    	that.$("#pop").addClass("display")
        alert("删除成功！")
    })
    }
}
</script>
<style>
.back {
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,0.5);//rgba(红，绿，蓝，透明度)，0，0，0代表黑

}

.pop_content {
	background:#ffffff;
	width: 70%;
	z-index: 1;
	margin: 50% auto;
	overflow: auto;
  border-radius: 0.5rem;
}
.confirm{
height: 4rem;
text-align: center;
line-height: 4rem;
font-size: 0.8rem;
}
.pop_select{
  height: 1.9rem;
  background: #dc432a;
  line-height: 1.9rem;
  text-align: center;
  color: #fff;
  width: calc(50% - 1rem);
  font-size: 0.8rem;
  border-radius: 0.2rem;
  margin: 0.5rem;
}
.cancel{
  background: #9a9a9a;
}
.display{
  display: none;
}

</style>

