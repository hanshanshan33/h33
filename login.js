//var user;
//$(function () {
//  $('#login').on('click', function () {
//    $.ajax({
//      url: 'login',
//      data: {
//        account: $('#account').val(),
//        password: $('#password').val()
//      },
//      type: 'post',
//      dataType: 'json',
//      success: function (data, status, xhr) {
//        if (data.message == 'OK') {
//          //user=data.name
//          //Cookies.set('user',user);
//          console.log('login');
//          window.location.href = 'index.html';
//        } else {
//          alert('账号或密码错误');
//        }
//      },
//      error: function (xhr, status, data) {
//        console.log(data);
//        alert('服务器错误');
//      }
//    });
//  });
//});

    $(function () {
      $('#login').on('click', function () {
        var c;
        var d;
        var user;
        user=document.getElementById('account').value;
        c=$('#account').val();
        d=$('#password').val();
        //d=document.getElementById('password').value;
        //e=document.getElementById('password2').value;
        if (c==''||d==''){
          layer.msg('请把信息填写完整')
          return;
        }
        $.ajax({
          url: 'login',
          data: {
            account: $('#account').val(),
            password: $('#password').val()
          },
          type: 'post',
          dataType:'json',
          success: function (data, status, xhr) {
            if (data.message == 'OK') {
              layer.msg('欢迎进入登录成功')
              //Cookies.set('nickname',user);
              //console.log(nickname);
              Cookies.set('user',user);
              console.log(user);
              window.location.href = 'index.html';

            } else {
              layer.msg('账号或密码错误')
            }
          },
          error: function (xhr, status, data) {
            console.log(data);
            alert('服务器错误');
          }
        });
      });
    });


