define(function () {
    $.fn.getValue = function () {
        const node = this.first();
        return node.length > 0 ? node[0].componentvalue || node.val() : null;
    };
    $.fn.setValue = function (data) {
        const node = this.first();
        const type = node.attr('ctype');
        Common.setValue.call(node,type,data);
    };
    $.fn.initComponent = function () {
        this.each(function () {
            const node = $(this);
            const type = node.attr('ctype');
            Common.initComponent.call(node,type);
        })
    };
    class Common{
        static setValue(type,data){
            require([type],Component => {
                Component.setValue.apply(this,[data])
            })
        }

        static initComponent(type){
            require([type],Component => {
                var obj = {};
                Common.setProperty.call(this,obj,['id','name']);
                Common.setOptions.call(this,obj);
                Common.setFunction.call(this,obj,['onSelect']);
                new Component(obj);
            })
        }

        static setProperty(obj,pl){
            pl.forEach((p)=>{
                let pv = this.attr(p);
                pv != null ? (()=>{
                    obj[p] = pv;
                })() : (()=>{
                    return;
                })();
            });
        };

        static setFunction(obj,pl){
            pl.forEach((p)=>{
                let pv = window[p];
                pv != null ? (()=>{
                    obj[p] = pv;
                })() : (()=>{
                    return;
                })();
            });
        };

        static setOptions(obj){
            let pv = this.attr('options');
            pv != null ? (()=>{
                obj.options = JSON.parse(pv);
            })() : (()=>{
                return;
            })();
        };
    }
    {
        $('[ctype]').initComponent();
    }
});