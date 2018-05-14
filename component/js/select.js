define(function () {
    class Select {
        static getValue(params){
            return 0;
            //this._getValue_selector.apply(this,params);
        };
        static _getValue_selector(){

        };
        static _getValue_node(){

        };
        static setValue(p){
            Select._set_value.call(this,p)
        };
        static _set_value(data){
            let node = this[0];
            node.componentdata = data;
            node.componentvalue = data.value;
            $('#' + node.id + " .select-input").val(data.name);

        };
        static setOptions(){
            Select
        };
        static _set_optionse(){

        }
        constructor(parameter){
            this.options = {
                style:'',
                id:'',
                value:'',
                data:[{name:'Jack',value:'student_1'},{name:'Martin',value:'student_2'},{name:'Robin',value:'student_3'}],
                onSelect:function () {

                },
                onExpand:function () {

                }
            };
            this.options = $.extend({},this.options,parameter);
            {
                this._initSelect();
            }
        };
        onSelect(){
            this.options.onSelect.apply(this.options);
        };
        onLoad(){

        };
        onExpand(){
            this.options.onExpand.apply(this.options);
        };
        _initSelect(){
            this.bind();
        };
        get value(){
            return this.data.value;
        };
        get name(){
            return this.data.name;
        };
        bind(){
            this._bindDropDown();
            this._bindChooseOption();
        };
        _bindChooseOption(){
            $(document).on("click",".select-option",e => {
                this.data = e.currentTarget.datavalue;
                $('.select-panel').addClass('display-none');
                $('#' + this.options.id + " .select-input").val(this.name);
                $('#' + this.options.id)[0].componentdata = this.data;
                $('#' + this.options.id)[0].componentvalue = this.value;
                this.onSelect();
            })
        };
        _bindDropDown(){
            $('#' + this.options.id).on("click",".dropdown",e => {
                this.onExpand();
                this._showOptions(e);
            })
        };
        getValue(id){
            return id == null || id === '' ? () => {
                return this.value || $('#' + this.options.id)[0].componentvalue;
            }:() => {
                return $('#' + id)[0].componentvalue;
            };

        };
        getData(id){
            return id == null || id === '' ? () => {
                return this.data || $('#' + this.options.id)[0].componentdata;
            }:() => {
                return $('#' + id)[0].componentdata;
            };
        };
        _showOptions(e){
            Select._initOptions(this.options).then(this._showOptionsPanel());
        };
        _showOptionsPanel(){
            const node = $("#" + this.options.id);
            $('#' )
            $('.select-panel').removeClass('display-none');
            let top = node.offset().top;
            let left = node.offset().left;
            $('.select-panel').css({position: "absolute",'top':top+20,'left':left})
        };
        _emptyOptions(){
            $('.select-options').empty();
        };
        _initOptions(options){
            this._emptyOptions();
            options.data.forEach(data => {
                Select._insertOption(data)
            });
            return new Promise(resolve => {
                resolve();
            });
        };
        _insertOption(data){
            let node = $("<div class=\"select-option\">" + data.name + "</div>").appendTo('.select-options');
            node[0].datavalue = data;
        };
    }
    return Select;
});