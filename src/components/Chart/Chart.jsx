import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';
import { useEffect, useState } from 'react';
import { fetchDailyData } from '../../api';
import { Typography } from '@material-ui/core';

const Chart = ({ data, country }) => {
    const [dailyData, setDailyData] = useState({});
    const [keys, setKeys] = useState([]);
    const [casesValues, setCasesValues] = useState([]);
    const [deathsValues, setDeathsValues] = useState([]);
    const [recoveredValues, setRecoveredValues] = useState([]);

    const { cases, deaths, recovered } = data;

    useEffect(() => {
        const fetchDaily = async () => {
            const { cases, deaths, recovered } = await fetchDailyData();
            setDailyData({ cases, deaths, recovered });
            setKeys(Object.keys(cases));
            setCasesValues(Object.values(cases));
            setDeathsValues(Object.values(deaths));
            setRecoveredValues(Object.values(recovered));
        }

        fetchDaily();
    }, [setDailyData]);


    const lineChart = (
        dailyData &&
        <Line
            data={{
                labels: keys,
                datasets: [{
                    label: 'Infected',
                    data: casesValues,
                    borderColor: 'rgba(0, 0, 255, 0.5)',

                }, {
                    label: 'Deaths',
                    data: deathsValues,
                    borderColor: 'rgba(255, 0, 0, 0.5)',

                }, {
                    label: 'Recovered',
                    data: recoveredValues,
                    borderColor: 'rgba(0, 255, 0, 0.5)',

                }]
            }}
        />
    );

    const barChart = (
        data &&
        <Bar
            data={{
                labels: ['Infected', 'Deaths', 'Recovered'],
                datasets: [{
                    label: 'People',
                    backgroundColor: [
                        'rgba(0, 0, 255, 0.5)',
                        'rgba(255, 0, 0, 0.5)',
                        'rgba(0, 255, 0, 0.5)'
                    ],
                    data: [cases, deaths, recovered]
                }]
            }}
        />
    );
    return (

        <div className={styles.container}>
            <Typography variant="h4" gutterBottom>
                Bar Chart for selected country
            </Typography>
            {barChart}
            <Typography variant="h4" gutterBottom>
                Line Chart for global (with time)
            </Typography>
            {lineChart}
        </div>
    );
}

export default Chart;