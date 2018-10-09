/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {

        let counter = 0, firstIndex, secondIndex, thirdIndex;
        for (let i =  0; i < preferences.length; i++){
            firstIndex = preferences[i];
            secondIndex = preferences[firstIndex-1];
            thirdIndex = preferences[secondIndex-1];
            if (thirdIndex == i+1){
                counter++;
            }
        }
        return Math.floor(counter/3);
};
