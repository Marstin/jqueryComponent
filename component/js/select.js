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
            this.options={
                data:[1,2,3]
            };
            this.options = $.extend({},this.options,parameter);
            console.log(this.options);
            {
                this._bindDropDown();
            }
        };
        _bindDropDown(){
            $('#' + this.options.id + ' .dropdown').bind("click",e => {
                this._showOptions(e);
            })
        };
        _showOptions(e){
            this._initOptions().then(this._showOptionsPanel);
        };
        _showOptionsPanel(){
            $('.select-panel').removeClass('display-none');
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
            $('.select-options').append("<div class=\"select-option\">" + data + "</div>")
        };
    }
    return Select;
});