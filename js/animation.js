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

function quick_sort(array, from, to, f) {
    if (to > from) {
        if (f !== undefined) {
            f();
        }
        swap(array, random(from, to), to);
        var border = partition_lomuto(array, from, to);
        quick_sort(array, from, border - 1, f);
        quick_sort(array, border + 1, to, f);
    }
}

function SortAnimation () {
	var source = [];

    var show_source = function () {
       	document.getElementById("source").innerHTML = get_source_as_string();
    };

    var append_source_to_view = function () {
        var node = document.createElement("div");
        node.className = "steps";
        node.appendChild(document.createTextNode(get_source_as_string()));
        document.getElementById("container").appendChild(node);
    };

    var clear_steps = function () {
        var steps = document.getElementsByClassName("steps");
        while(steps.length > 0) {
            steps[0].parentNode.removeChild(steps[0]);
        }
    };

    var get_source_as_string = function () {
        return source.join(", ");
    };

    this.push_back = function () {
        var value = parseInt(document.getElementById("item").value);
        if (!isNaN(value)) {
            source.push(parseInt(value));
            show_source();
        }
    };

    this.clear = function () {
        source = [];
        show_source();
        clear_steps();        
    };

    this.sort = function () {
        clear_steps();
        quick_sort(source, 0, source.length - 1, append_source_to_view);
    };
}
