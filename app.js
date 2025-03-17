function frequency(arr){
    let out = arr.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});
    return out;
};

console.log(frequency([1, 1, 2, 3, 3, 4])); 