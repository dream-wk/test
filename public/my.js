var cookieOperation = {
          /**
           * @param cookieName 名 
           * @param cookieValue 值
           * @param expiredays  期限
           */
          getCookie: function (cookieName) {
              var strCookie = document.cookie;
              var arrCookie = strCookie.split(";");
              for (var i = 0; i < arrCookie.length; i++) {
                  var arr = arrCookie[i].split("=");
                  arr[0] = arr[0].replace(/^\s*/, "");
                  if (arr[0] == cookieName) return arr[1];//arr[1];
              }//对于到name的value 如果没有则返回null
          },
          setCookie: function (cookieName, cookieValue, expiredays) {
              var exdate = new Date();//返回当天的日期和时间
              exdate.setDate(exdate.getDate() + expiredays);//设置过期时间
              document.cookie = cookieName + "=" + escape(cookieValue) +
                  ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
          },
         
          delCookie: function (cookieName) {
              var exdate = new Date();//返回当天的日期和时间
              exdate.setTime(exdate.getTime() - 1);
              var cval = this.getCookie(cookieName);
              if (cval != null)
                  document.cookie =cookieName + "=" + cval + ";expires=" + exdate.toGMTString();
          }
      
      }
export default cookieOperation