define(function () {
    $.fn.getValue = function () {
        const node = this.first();
        return node.length > 0 ? node[0].componentvalue || node.val() : null;
    };
    $.fn.setValue = function (data) {
        const node = this.first();
        const type = node.attr('ctype');
        Component.setValue.call(node,type,data);
    };
    class Component{
        static setValue(type,data){
            console.log(Component)
            require([type],component => {
                console.log(this);
                component.setValue.apply(this,[data])
            })
        }
    }
});