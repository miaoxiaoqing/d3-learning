
const  line_data = [
    {
        country: "china",
        gdp: [
                [2008, 2033],
                [2009, 2400],
                [2010, 4333],
                [2011, 5600],
                [2012, 6500],
                [2013, 6700],
                [2014, 6933],
                [2015, 7400],
                [2016, 7733],
                [2017, 8200]
             ]
    },
    {
        country: "japan",
        gdp: [
                [2008, 3333],
                [2009, 4400],
                [2010, 5233],
                [2011, 5800],
                [2012, 6333],
                [2013, 6400],
                [2014, 6533],
                [2015, 6700],
                [2016, 7033],
                [2017, 7200]
             ]
    }

]



//节流函数
var throttle = function (fn, interval) {
        var  timer, firstTime = true;

        return function () {
          var args = arguments;
          var _me = this;

           if ( firstTime ) {
             fn.apply(_me, args)
             return firstTime = false;
           }

           if ( timer ) {
             return false
           }

           timer = setTimeout(function () {
             clearTimeout(timer);
             timer=null;
             fn.apply(_me, args)
           }, interval || 500)
        }

    }
