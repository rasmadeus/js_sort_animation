function swap(array, index_first, index_second) {
    var first_item = array.splice(index_first, 1, array[index_second])[0];
    array.splice(index_second, 1, first_item);
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
        quick_sort(source, 0, source.length);
        show_source();
    }
}
