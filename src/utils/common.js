import { keyBy, merge, values } from 'lodash';

export const mergeTwoArraysByProperty = (firstArray, secondArray, property) => {
    const mergedChartData = merge(
        keyBy(firstArray, property),
        keyBy(secondArray, property)
    );

    return values(mergedChartData);
}