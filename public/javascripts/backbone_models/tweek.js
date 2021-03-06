/**
 * Created with JetBrains WebStorm.
 * User: liangjun.zhong
 * Date: 13-7-14
 * Time: PM11:02
 * To change this template use File | Settings | File Templates.
 */


define (
    [
        'backbone'
    ],
    function(){
        var Tweek = Backbone.Model.extend(
            {
                idAttribute : '_id',
                action : 'create',
                url : function(){
                    var u = null;
                    switch(this.action){
                        case 'create':
                            u = '';
                            break;
                        case 'get':
                            u = '';
                            break;
                        case 'add':
                            u = '/tweek/add';
                            break;
                        case 'update':
                            u = '';
                            break;
                        case 'delete':
                            u = '';
                            break;
                    }
                    return u;
                },
                initialize : function(){

                },
                defaults: {
                    'userId' : Math.floor((Math.random()*10000)+1),
                    'headImg' : '/images/default.png',
                    'tweekBody' : '今天多喝水哈！'
                }
//                parse: function(resp, options) {
//                    console.log('resp:---------')
//                    console.log(JSON.stringify(resp));
//                    return resp;
//                }
            }
        );
        return Tweek;
    }
);
