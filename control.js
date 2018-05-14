require(['input','select'],function (input,Select) {
    let select = new Select({
        id:'select-component',
        onExpand:function () {
            console.log(1)
        }
    });
});