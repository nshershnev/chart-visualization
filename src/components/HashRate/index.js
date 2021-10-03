import React, { useEffect, useState } from 'react';
import { DualAxes } from '@ant-design/charts';
import { Spin } from 'antd';

import {
    getHashRateMean,
    getPriceUsdClose
} from '../../utils/api';
import { mergeTwoArraysByProperty } from '../../utils/common';
import './styles.css';

const HashRate = () => {
    const [chartData, setChartDate] = useState([]);

    useEffect(() => {
        (async () => {
            const { data: hashRateMeanData } = await getHashRateMean();
            const { data: priceUsdCloseData } = await getPriceUsdClose();

            const chartDataValues = mergeTwoArraysByProperty(
                hashRateMeanData.map(({ t, v }) => ({ t, hashRateMean: v })),
                priceUsdCloseData.map(({ t, v }) => ({ t, priceUsdClose: v })),
                't'
            );

            setChartDate(chartDataValues);
        })();
    }, []);

    const config = {
        data: [chartData, chartData],
        xField: 't',
        yField: ['hashRateMean', 'priceUsdClose'],
        yAxis: {
            priceUsdClose: {
                tickCount: 6
            }
        },
        meta: {
            t: {
                alias: 'Date',
                formatter: (date) => new Date(date * 1000).toLocaleDateString()
            },
            hashRateMean: {
                alias: 'Mean Hash Rate'
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
        <div className="hash-rate">
            {!chartData.length ? <Spin size="large" /> : <DualAxes {...config} />}
        </div>
    )
};

export default HashRate;