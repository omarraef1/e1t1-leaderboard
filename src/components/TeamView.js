import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { Paper, Typography, Box } from '@material-ui/core';

const useStyles = theme => ({
    paper: {
      paddingRight: theme.spacing(4),
      paddingLeft: theme.spacing(4),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      margin: theme.spacing(2),
    },
    barPaper: {
        padding: theme.spacing(2),
        margin: '20px 0px 20px 0px',
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        color: 'white',
        background: theme.palette.primary.dark,
    },
    barPaperComplete: {
        padding: theme.spacing(2),
        margin: '20px 0px 20px 0px',
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        color: 'white',
        background: 'green',
    },
    name: {
      flexGrow: 1,
    },
    loading: {
        margin: theme.spacing(2),
    },
    notLoading: {
        padding: 0,
        margin: 0,
    },
    teamNames: {
        textAlign: 'center',
    }
});


class TeamView extends Component {
    
    comparePoints(a, b) {
        if (a.points === b.points) {
          return 0;
        }
        else {
          return (a.points > b.points) ? -1 : 1;
        }
    }

    Bar(props) {
        const { name, points, classes, max } = props;
        
        let width = points / max;
        
        if (window.location.pathname === "/e1t1-leaderboard/current-week") {
            width = (points > 1000) ? 1 : (points < 100) ? 0.09 : points / 1000;
        }
        
        
        let style = classes.barPaper;
        if (points >= 1000 && window.location.pathname === "/e1t1-leaderboard/current-week") {
            style = classes.barPaperComplete;
        }

        return(
            <Box width={width}>
                <Paper elevation={3} className={style}>
                    <Typography className={classes.name}> {name} </Typography>
                    <Typography> {points} </Typography>
                </Paper>
            </Box>
        );
    }

    render() {
        const { isLoading, data, classes } = this.props;

        let interns = [...data];
        let maxData = [...data];
        let maxPoints = 1;

        let team1 = interns.slice(0, 10).sort(this.comparePoints);
        let team2 = interns.slice(10, 21).sort(this.comparePoints);
        let team3 = interns.slice(21, 32).sort(this.comparePoints);
        let team4 = interns.slice(32, 41).sort(this.comparePoints);

        if (!isLoading) {
            maxPoints = maxData.sort(this.comparePoints)[0].points;
        }

        return (
            <div>
                <Typography variant='h6' className={classes.teamNames}> Team 1 </Typography>
                {team1.map((intern, key) => (
                    <this.Bar key={key} name={intern.name} points={intern.points} classes={classes} max={maxPoints}/>
                ))}
                <Typography variant='h6' className={classes.teamNames}> Team 2 </Typography>
                {team2.map((intern, key) => (
                    <this.Bar key={key} name={intern.name} points={intern.points} classes={classes} max={maxPoints}/>
                ))}
                <Typography variant='h6' className={classes.teamNames}> Team 3 </Typography>
                {team3.map((intern, key) => (
                    <this.Bar key={key} name={intern.name} points={intern.points} classes={classes} max={maxPoints}/>
                ))}
                <Typography variant='h6' className={classes.teamNames}> Team 4 </Typography>
                {team4.map((intern, key) => (
                    <this.Bar key={key} name={intern.name} points={intern.points} classes={classes} max={maxPoints}/>
                ))}
            </div>
        );
    }
}

TeamView.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    data: PropTypes.array.isRequired,
    classes: PropTypes.object.isRequired,
}

export default withStyles(useStyles)(TeamView);