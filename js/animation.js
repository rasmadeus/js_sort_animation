function swap(array, index_first, index_second) {
    var first_item = array.splice(index_first, 1, array[index_second])[0];
    array.splice(index_second, 1, first_item);
}

function partition(array, begin, end) {
    if (end - begin < 2) {
        return begin;
    }

    var border_item = array[end - 1];
    var border_index  = begin - 1;
    
    for(var i = begin; i < end - begin; ++i) {
        if (array[i] < border_item) {
            ++border_index;
            swap(array, i, border_index);
        }
    }

    ++border_index;
    swap(array, border_index, end - 1);

    return border_index + 1;
}

function SortAnimation () {
	var source = [];

    var show_source = function () {
       	document.getElementById("source").innerHTML = source.join(", ");
    }

    var swap = function (first, second) {        
        var first_value = source.splice(first, 1, source[second]);
        source.splice(second, 1, first_value);
        document
    }

    var lomuto_partition = function (begin, end) {
        border = begin;
        border_item = source[end - 1];
        for (var i = begin; i < end; ++i) {
            if (source[i] < border_item) {
                swap(border, i);
                ++border;
            }
        }
        swap(end, border);
        return border;
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
        lomuto_partition(0, source.length);
        show_source();
    }
}
