$(function () {
  $('#register').on('click', function () {
    /*
    var f=0;
    var c=' ';
    var d=' ';
    var e=' ';
    var w;
    function myFunction(){
      c=document.getElementById('account').value;
      d=document.getElementById('password').value;
      e=document.getElementById('password2').value;
      if(c==''){layer.msg('请输入用户名');return}
      if(d==''){layer.msg('请输入密码');return}
      if(f==0&&d!=e){layer.msg('两次密码不一致，请重新输入')}
      if(f==0&&e==d){window.location.href='login.html'}

    }*/
    if($('#password2').val()!=$('#password').val()||$('#password2').val()=='') {
      layer.msg('密码不一致')
      return
    }
    $.ajax({
      url: 'register',
      method: 'post',
      data: {
        account: $('#account').val(),
        password: $('#password').val()
      },
      dataType: 'json',
      success: function (data, status, xhr) {
        console.log(data);
        if(data.message=='OK'){
          window.location.href='login.html';

        } else {
          if ('DUPLICATED_ACCOUNT' == data.error) {
            alert('此用户已被注册');
          }
        }
      },
      error: function (xhr, status, error) {
        console.log(error);
      }
    });
  });
})