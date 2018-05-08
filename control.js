require(['input','select'],function (input,Select) {
    console.log(Select);
    let select = new Select({
        id:'select-component',
        data:[7,8,9]
    })
});