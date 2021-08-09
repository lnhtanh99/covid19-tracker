import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import CountUp from 'react-countup';
import styles from './Cards.module.css'
import cx from 'classnames'

const Cards = ({ data, isLoading }) => {
    const {
        cases,
        deaths,
        recovered,
        casesPerOneMillion,
        deathsPerOneMillion,
        recoveredPerOneMillion } = data;

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justifyContent="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography
                            color="textSecondary"
                            gutterBottom
                        >
                            Infected
                        </Typography>
                        <Typography
                            variant="h5"
                        >
                            {isLoading ? 'Loading...' :
                                <CountUp
                                    start={0}
                                    end={cases}
                                    duration={2.5}
                                    separator=","
                                >

                                </CountUp>
                            }
                        </Typography>
                        <Typography
                            color="textSecondary"
                        >
                            Cases per one million
                        </Typography>
                        <Typography
                            variant="h6"
                        >
                            {isLoading ? 'Loading...' :
                                <CountUp
                                    start={0}
                                    end={casesPerOneMillion}
                                    duration={2.5}
                                    separator=","
                                >

                                </CountUp>
                            }
                        </Typography>
                        <Typography
                            variant="body2"
                        >
                            Number of active cases of Covid19
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography
                            color="textSecondary"
                            gutterBottom
                        >
                            Deaths
                        </Typography>
                        <Typography
                            variant="h5"
                        >
                            {isLoading ? 'Loading...' :
                                <CountUp
                                    start={0}
                                    end={deaths}
                                    duration={2.5}
                                    separator=","
                                >

                                </CountUp>
                            }
                        </Typography>
                        <Typography
                            color="textSecondary"
                        >
                            Deaths per one million
                        </Typography>
                        <Typography
                            variant="h6"
                        >
                            {isLoading ? 'Loading...' :
                                <CountUp
                                    start={0}
                                    end={deathsPerOneMillion}
                                    duration={2.5}
                                    separator=","
                                >

                                </CountUp>
                            }
                        </Typography>
                        <Typography
                            variant="body2"
                        >
                            Number of death cases of Covid19
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}  xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography
                            color="textSecondary"
                            gutterBottom
                        >
                            Recovered
                        </Typography>
                        <Typography
                            variant="h5"
                        >
                            {isLoading ? 'Loading...' :
                                <CountUp
                                    start={0}
                                    end={recovered}
                                    duration={2.5}
                                    separator=","
                                >

                                </CountUp>
                            }
                        </Typography>
                        <Typography
                            color="textSecondary"
                        >
                            Recovered per one million
                        </Typography>
                        <Typography
                            variant="h6"
                        >
                            {isLoading ? 'Loading...' :
                                <CountUp
                                    start={0}
                                    end={recoveredPerOneMillion}
                                    duration={2.5}
                                    separator=","
                                >

                                </CountUp>
                            }
                        </Typography>
                        <Typography
                            variant="body2"
                        >
                            Number of recovered cases of Covid19
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
}

export default Cards;