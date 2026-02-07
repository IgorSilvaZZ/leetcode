/* 
    Given an array arr and a chunk size size, return a chunked array.

    A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.
*/

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = (arr, size) => {
	const chunks = [];

	for (let i = 0; i < arr.length; i += size) {
		const chunk = arr.slice(i, i + size);

		chunks.push(chunk);
	}

	return chunks;
};

const arrParam = [1, 2, 3, 4, 5];

const sizeParam = 1;

const result = chunk(arrParam, sizeParam);

console.log(result);
