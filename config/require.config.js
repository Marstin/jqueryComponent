require.config({
    baseUrl:'',
    paths:{
        'jquery':'common/jquery.min',
        'input':'component/js/input',
        'select':'component/js/select',
    },
    map: {
        '*': {
            'css': 'common/css.min'
        }
    },
    shim:{
        'input':{
            deps:['jquery','css!component/css/input']
        },
        'select':{
            deps:['jquery','css!component/css/select']
        }
    }
});