define(function () {
    $.fn.select = (parameter) => {
        let defaults = {
            name:'',
            maxHeight:'',
            minHeight:'',
        };
        var options = $.extend({},defaults,parameter);

    };
    class Select {
        constructor(parameter){
            this.options = {
                style:'',
                id:'',
                value:'',
                data:[{name:'Jack',value:'student_1'},{name:'Martin',value:'student_2'},{name:'Robin',value:'student_3'}]
            };
            this.options = $.extend({},this.options,parameter);
            {
                this._initSelect();
            }
        };
        _initSelect(){
            this.bind();
        };
        set value(data){
            this.value = data.value;
        };
        bind(){
            this._bindDropDown();
            this._bindChooseOption();
        };
        _bindChooseOption(){
            $('#' + this.options.id).on("click",".select-option",e => {
                //this._showOptions(e);
            })
        };
        _bindDropDown(){
            $('#' + this.options.id).on("click",".dropdown",e => {
                this._showOptions(e);
            })
        };
        _showOptions(e){
            this._initOptions().then(this._showOptionsPanel());
        };
        _showOptionsPanel(){
            const node = $("#" + this.options.id);
            $('.select-panel').removeClass('display-none');
            let top = node.offset().top;
            let left = node.offset().left;
            $('.select-panel').css({position: "absolute",'top':top+20,'left':left})
        };
        _emptyOptions(){
            $('.select-options').empty();
        };
        _initOptions(){
            this._emptyOptions();
            this.options.data.forEach(data => {
                this._insertOption(data)
            });
            return new Promise(resolve => {
                resolve();
            });
        };
        _insertOption(data){
            $('.select-options').append("<div class=\"select-option\">" + data.name + "</div>")
        };
    }
    return Select;
});