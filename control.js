require(['input','select'],function (input,Select) {
    let select1 = new Select({
        id:'test1',
        onExpand:function () {
            console.log(1)
        },
        onSelect:function () {
            console.log(this)
            console.log(this.getValue())
        }
    });

    let select2 = new Select({
        id:'test2',
        onExpand:function () {
            console.log(1)
        }
    });
});