<template>
<div>
    <div class="btn_select">
        <ul>
            <li>
                <div class="btn" id="delete">删除</div>
            </li>
            <li>
                <div class="btn" id="save">保存</div>
            </li>
        </ul>
    </div>
    <div class="back display" id="pop">
        <div class="pop_content">
            <div class="confirm">确认删除该联系信息吗?</div>
            <div class="">
              <div class="cancel fl pop_select">取消</div>
              <div class="sure fl pop_select">确定</div>
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
	background-color: rgba(0,0,0,0.5);
}

.pop_content {
	background:#ffffff;
	width: 60%;
	z-index: 1;
	margin: 0 auto;
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

