/**
 * Created by Administrator on 2016/12/5.
 */
$(function(){
    $.ajax({
        url:'wad/recommand/12',
        method:'get',
        dataType:'json',
        success:function(data,status,xhr){
            console.log(data);

            for(var i=0;i<data.length;i++){

                $('#name_'+i).text(data[i].name);
                $('#alias_'+i).text(data[i].alias);
                $('#taste_'+i).text(data[i].taste);
                $('#area_'+i).text(data[i].area);
                $('#propose_'+i).text(data[i].propose);
                $('#intro_'+i).text(data[i].history);
                $('#pic_'+i).attr('src',data[i].pic_1);
                $('#ss'+i).attr('href','index2.html?id='+data[i].id);
            }
        },
        error:function(xhr,status,data){
            console.log(data);
            //alert('服务器错误');
        }

    })
})

