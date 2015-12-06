function random(from, to) {
    return Math.floor(Math.random() * (to - from + 1)) + from;
}

function swap(array, from, to) {
    var first_item = array.splice(from, 1, array[to])[0];
    array.splice(to, 1, first_item);
}

function partition_lomuto(array, from, to) {
    var last_item = array[to];
    var border = from - 1;
    for(var i = from; i < to; ++i) {
        if (array[i] <= last_item) {
            ++border;
            swap(array, i, border); 
        }
    }
    ++border;
    swap(array, border, to);
    return border;
}

function quick_sort(array, from, to) {
    if (to > from) {
        swap(array, random(from, to), to);
        var border = partition_lomuto(array, from, to);
        quick_sort(array, from, border - 1);
        quick_sort(array, border + 1, to);
    }
}

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

    this.sort = function () {
        quick_sort(source, 0, source.length - 1);
        show_source();
    }
}
