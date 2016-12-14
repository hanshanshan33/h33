/**
 * Created by Administrator on 2016/12/5.
 */
    $(function(){
                $.ajax({
                    url:'wad/' + Arg('id'),
                    type:'get',
                    dateType:'json',
                    success:function(data,status,xhr){
                        //var e = ;
                        //for(var i=0 ; i<data.length ; i++){
                        //    if (e==data[i].id){
                        $('#article_0').text('菜名：'+data[0].name);
                        $('#article_1').text('别名：'+data[0].alias);
                        $('#article_2').text('口味：'+data[0].taste);
                        $('#article_3').text('历史追溯：'+data[0].history);
                        $('#article_4').text('适合人群: '+data[0].propose);
                        $('#article_5').text('地区：'+data[0].history);
                        $('#pp').attr('src',data[0].pic_1)
                        $('#sd').attr('src',data[0].pic_2)
                        $('#as').attr('src',data[0].pic_2)
                        $('#nx').attr('src',data[0].pic_2)
                        $('#sda').attr('src',data[0].pic_2)
                        $('#intro').text('介绍：'+data[0].intro)
                        //}
                        //}
                console.log(data);
            },
        })
    })


