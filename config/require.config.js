require.config({
    baseUrl:'',
    paths:{
        'input':'component/js/input',
        'select':'component/js/select',
        'common':'component/component'
    },
    map: {
        '*': {
            'css': 'util/css.min'
        }
    },
    shim:{
        'common':{deps:['jquery']},
        'input':{
            deps:['common','css!component/css/input','css!component/component']
        },
        'select':{
            deps:['common','css!component/css/select','css!component/component']
        }
    }
});