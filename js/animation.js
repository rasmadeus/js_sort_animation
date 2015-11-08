

function SortAnimation () {
	var source = [];

    var show_source = function () {
       	document.getElementById("source").innerHTML = source.join(", ");
    }

	this.push_back = function () {
		source.push(document.getElementById("item").value);
        show_source();
    }

    this.clear = function () {
        source = [];
        show_source();
    }
}
