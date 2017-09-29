
function SetClass() {
    var items = {};

    this.has = function(value) {
        return items.hasOwnProperty(value);
    };

    this.add = function (value) {
        if(!this.has(value)) {
            items[value] = value;
            return true; 
        }
        return false; 
    };

    this.values = function() {
        return Object.keys(items);
    };

    this.union = function(otherSet) {
        var unionSet = new SetClass();
        var values = this.values();

        for(var i=0; i<values.length; i++) {
            // unionSet.
        }
    };

    //-------------------------------------------
    console.log("-----------------------------");
    console.log("function SetClass is invoked.");
}

module.exports = function(){
    SetClass();
};

