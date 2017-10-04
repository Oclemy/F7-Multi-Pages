/*
 -Initialize your app
 -Export selectors engine
 */
var myApp = new Framework7();
var $$ = Dom7;

var mainClass=function()
{
    this.initializeApp=function()
    {
        var mainView=myApp.addView('.view-main',{dynamicNavbar:true});
    }
}

m=new mainClass();
m.initializeApp();