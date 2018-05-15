define(function () {
    class Select {
        static getValue(params){
            return 0;
            //this._getValue_selector.apply(this,params);
        };
        static setValue(p){
            Select._set_value.call(this,p)
        };
        onExpand(){
            this._bindUserFunc(this.component.onExpand);
        };
        onContract(){
            this._bindUserFunc(this.component.onContract);
        };
        onInitFinish(){
            this._bindUserFunc(this.component.onInitFinish);
        };
        onSelect(value,data){
            this._bindUserFunc(this.component.onSelect,[value,data]);
        };
        getValue(){

        };
        setValue(data){

        };
        getData(){

        };
        setOptions(){

        };
        onLoadData(){

        };
        static _set_value(data){
            let node = this[0];
            node.componentdata = data;
            node.componentvalue = data.value;
            $('#' + node.id + " .select-input").val(data.name);

        };
        constructor(parameter){
            this.component = {
                style:'',
                componentId:'',
                id:'',
                value:'',
                options:[{name:'Jack',value:'student_1'},{name:'Martin',value:'student_2'},{name:'Robin',value:'student_3'}],
                onInitFinish:function () {

                },
                getValue:function () {
                    return this.value;
                },
                getData:function () {
                    return this.data;
                }
            };
            this.component = $.extend({},this.component,parameter);
            this.convertData.apply(this.component);
            {
                this.initSelect();
            }
        };
        convertData(){
            this.componentId = this.id + "-" + 'select-component';
            this.componentPanelId = this.id + "-" + 'select-component-panel';
        };
        onLoad(){

        };

        initSelect(){
            this._initSelect.apply(this.component);
            this.bind();
            this.onInitFinish();
        };
        _bindUserFunc(func,p){
            if(func != null){
                func.apply(this.component,p);
            }
        }
        _initSelect(){
            const node = $('#' + this.id);
            node.after('<span id="'+ this.componentId + '" class="select" ctype="select" style="left:80px;margin-left:80px;width: 180px;height:20px;">\n' +
                '        <span class="dropdown">\n' +
                '            <span class="arrow-bottom"></span>\n' +
                '        </span>\n' +
                '        <span class="input-box">\n' +
                '            <input class="select-input">\n' +
                '        </span>\n' +
                '    </span>');
            node.after("<div class=\"select-panel display-none\" id=\"" + this.componentPanelId +"\" style=\"width: 180px;\">\n" +
                "        <div class=\"select-options\">\n" +
                "            <div class=\"select-option\">1</div>\n" +
                "            <div class=\"select-option\">1</div>\n" +
                "            <div class=\"select-option\">1</div>\n" +
                "        </div>\n" +
                "    </div>");
            node.addClass('display-none');
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
            $("#" + this.component.componentPanelId).on("click",".select-option",e => {
                this.data = e.currentTarget.datavalue;
                $('.select-panel').addClass('display-none');
                $('#' + this.component.id + " .select-input").val(this.name);
                $('#' + this.component.componentId + " .select-input").val(this.name);
                $('#' + this.component.id)[0].componentdata = this.data;
                $('#' + this.component.id)[0].componentvalue = this.value;
                this.component.value = this.value;
                this.component.data = this.data;
                this.onSelect(this.value,this.data);
            })
        };
        _bindDropDown(){
            $('#' + this.component.componentId).on("click",".dropdown",e => {
                const selectPanel = $("#" + this.component.componentPanelId);
                selectPanel.hasClass('display-none') ? (()=>{
                    this.onExpand();
                    this._showOptions(e);
                })() :(()=>{
                    this.onContract();
                    this._hideOptions(e);
                })();
            })
        };
        getValue(id){
            return id == null || id === '' ? () => {
                return this.value || $('#' + this.component.id)[0].componentvalue;
            }:() => {
                return $('#' + id)[0].componentvalue;
            };

        };
        getData(id){
            return id == null || id === '' ? () => {
                return this.data || $('#' + this.component.id)[0].componentdata;
            }:() => {
                return $('#' + id)[0].componentdata;
            };
        };
        _hideOptions(e){
            $("#" + this.component.componentPanelId).addClass('display-none');
        };
        _showOptions(e){
            this._initOptions(this.component.options);
            this._showOptionsPanel.apply(this.component);
        };
        _showOptionsPanel(){
            const select = $("#" + this.componentId);
            const selectPanel = $("#" + this.componentPanelId);
            let top = select.offset().top;
            let left = select.offset().left;
            selectPanel.css({position: "absolute",'top':top+20,'left':left})
            selectPanel.removeClass('display-none')
        };
        _emptyOptions(){
            $('#'+ this.componentPanelId +' .select-options').empty();
        };
        _initOptions(options){
            this._emptyOptions.apply(this.component);
            options.forEach(data => {
                this._insertOption.call(this.component,data)
            });
            /*return new Promise(resolve => {
                resolve();
            });*/
        };
        _insertOption(data){
            let node = $("<div class=\"select-option\">" + data.name + "</div>").appendTo("#" + this.componentPanelId +' .select-options');
            node[0].datavalue = data;
        };
    }
    return Select;
});