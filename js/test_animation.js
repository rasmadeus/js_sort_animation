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
        var array = [1, 3, 2, 8, 4];
        var array_length = array.length;

        var border = partition(array, 2, 2);
        assert.deepEqual(array, [1, 3, 2, 8, 4]);
        assert.equal(border, 2);

        border = partition(array, 1, 3);
        assert.deepEqual(array, [1, 2, 3, 8, 4]);
        assert.equal(border, 2);

        border = partition(array, 0, 5);
        assert.deepEqual(array, [1, 2, 3, 4, 8]);
        assert.equal(border, 4);

        assert.equal(array.length, array_length);

        array = [2, 8, 7, 1, 3, 5, 6, 4];
        border = partition(array, 0, 8);
        assert.deepEqual(array, [2, 1, 3, 4, 7, 5, 6, 8]);
        assert.equal(border, 4);
    }
);
