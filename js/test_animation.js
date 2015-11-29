QUnit.test(
    "Swap array's items test",
    function(assert) {
        var array  = [2, 5, 1];
        var array_length = array.length;

        swap(array, 0, 1);
        assert.deepEqual(array, [5, 2, 1]);

        swap(array, 2, 1);
        assert.deepEqual(array, [5, 1, 2]);

        swap(array, 1, 1);
        assert.deepEqual(array, [5, 1, 2]);

        assert.equal(array_length, array.length);
    }
);

QUnit.test(
    "Partition test",
    function(assert) {
        var data = [
            {"source": [1], "from": 0, "to": 0 , "expected_source": [1], "expected_border": 0, "expected_length": 1},
            {"source": [2, 1], "from": 0, "to": 1 , "expected_source": [1, 2], "expected_border": 0, "expected_length": 2},
            {"source": [1, 2], "from": 0, "to": 1 , "expected_source": [1, 2], "expected_border": 1, "expected_length": 2},
            {"source": [1, 3, 2], "from": 0, "to": 2 , "expected_source": [1, 2, 3], "expected_border": 1, "expected_length": 3},
            {"source": [-1, 3, 1, 2, 5], "from": 1, "to": 3 , "expected_source": [-1, 1, 2, 3, 5], "expected_border": 2, "expected_length": 5},

            {"source": [2, 8, 7, 1, 3, 5, 6, 4], "from": 0, "to": 7 , "expected_source": [2, 1, 3, 4, 7, 5, 6, 8], "expected_border": 3, "expected_length": 8},
        ];
        for(var i = 0; i < data.length; ++i) {
            var source = data[i]["source"];
            var border = partition_lomuto(source, data[i]["from"], data[i]["to"]);
            assert.deepEqual(source, data[i]["expected_source"]);
            assert.equal(border, data[i]["expected_border"]);
            assert.equal(source.length, data[i]["expected_length"]);
        }
    }
);
