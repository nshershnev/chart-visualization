import React, { useEffect, useState } from 'react';
import { DualAxes } from '@ant-design/charts';
import { Spin } from 'antd';

import {
    getDifficultyLatest,
    getPriceUsdClose
} from '../../utils/api';
import { mergeTwoArraysByProperty } from '../../utils/common';
import './styles.css';

const Difficulty = () => {
    const [chartData, setChartDate] = useState([]);

    useEffect(() => {
        (async () => {
            const { data: difficultyLatestData } = await getDifficultyLatest();
            const { data: priceUsdCloseData } = await getPriceUsdClose();

            const chartDataValues = mergeTwoArraysByProperty(
                difficultyLatestData.map(({ t, v }) => ({ t, difficultyLatest: v })),
                priceUsdCloseData.map(({ t, v }) => ({ t, priceUsdClose: v })),
                't'
            );

            setChartDate(chartDataValues);
        })();
    }, []);

    const config = {
        data: [chartData, chartData],
        xField: 't',
        yField: ['difficultyLatest', 'priceUsdClose'],
        yAxis: {
            difficultyLatest: {
                tickCount: 6
            },
            priceUsdClose: {
                tickCount: 6
            }
        },
        meta: {
            t: {
                alias: 'Date',
                formatter: (date) => new Date(date * 1000).toLocaleDateString()
            },
            difficultyLatest: {
                alias: 'Mining difficulty'
            },
            priceUsdClose: {
                alias: 'Price [USD]',
                formatter: (price) => price ? '$' + price : '',
            }
        },
        geometryOptions: [
            {
                geometry: 'line',
                color: '#5B8FF9',
            },
            {
                geometry: 'line',
                color: '#5AD8A6',
            },
        ],
    };

    return (
        <div className="difficulty">
            {!chartData.length ? <Spin size="large" /> : <DualAxes {...config} />}
        </div>
    )
};

export default Difficulty;