/**
 * Created with JetBrains WebStorm.
 * User: liangjun.zhong
 * Date: 13-7-19
 * Time: PM8:50
 * To change this template use File | Settings | File Templates.
 */

define (

    [
        'backbone',
        'Tweek',
        'TweekList',
        //'TweekListTemplate'
        'text!../templates/tweeklist.html'
    ],
    function(_backbone, Tweek, TweekList, TweekListTemplate){
        var TweekListView = Backbone.View.extend(
            {
                checkScroll : function (){
                    //that.page = that.page + 1;
                    //console.log('that.getPage()');
                },
                initialize : function(){
                    page : 1
                    $(window).bind('scroll', this.checkScroll);
//                    var self = this;
//                    $(window).bind('scroll', function (self) {
//                        self.checkScroll(self);
//                    });
                },
                setPage : function(n){
                    this.page = n;
                },
                getPage : function(){
                    return this.page;
                },
                render : function(){
                    var that = this; // view上下文

                    var tweeklist = new TweekList();
                    tweeklist.action = 'get';
                    tweeklist.fetch(
                        {
                            data : {
                                page : that.page
                            },
                            success : function(collection, response, options){
                                console.log('success '+JSON.stringify(response));
                                var compiledTemplate = _.template(TweekListTemplate, {'tweeklist':response});
                                $(that.el).append(compiledTemplate);
                            },
                            error : function(collection, response, options){
                                console.log('error '+JSON.stringify(response));
                            }
                        }
                    );
                },
                events : {
                    //'window scroll' : 'checkScroll'
                }

            }
        );
        return TweekListView;
    }


);