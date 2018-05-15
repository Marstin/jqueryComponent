require(['input','select'],function (input,Select) {
    let select1 = new Select({
        id:'test1',
        onExpand:function () {
            //console.log(1)
        },
        onSelect:function () {
            console.log(1);
            select1.onSelect = () => {
                console.log(2);
            };

        }
    });

    let select2 = new Select({
        id:'test2',
        onExpand:function () {
            console.log(1)
        }
    });
});