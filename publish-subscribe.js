var Event = (function() {
    var list = [],
        subscribe, 
        publish, 
        remove;
    subscribe = function (key, fn) {
        // 添加缓存列表，用以存放订阅消息回调
        if (!list[key]) {
            list[key] = [];
        }
        list[key].push(fn);
    };

    publish = function () {
        var key = Array.prototype.shift.call(arguments);
        var fns = list[key];

        if (!fns || fns.length ===0) {
            return;
        } 
        for (var i = 0, fn; fn = fns[i++];) {
            fn.apply(this, arguments);
        }
    };

    remove = function (key, fn) {
        var fns = list[key];
        // 如果没有取消订阅，直接返回
        if (!fns) {
            return false;
        }
        // 如果没有传入具体的回调函数，表示需要取消key对应消息的所有订阅
        if(!fn) {
            fn && (fns.length = 0);
        } else {
            for(var i = fns.length - 1; i >= 0; i--) {
                // fns[i]
                var _fn = fns[i];
                if (_fn === fn) {
                    // 删除订阅者的回调
                    list.slice(i, 1);
                }
            }
        }
    };

    return {
        subscribe,
        publish,
        remove
    }

})();

Event.subscribe('color', (size) => {
    console.log(`尺寸为 ${size}`);
});

Event.publish('color', 40);