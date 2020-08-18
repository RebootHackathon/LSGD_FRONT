import {makeStyles} from '@material-ui/core/styles';

export const chartRootStyles = {
  chart: {
    // paddingRight: '20px',
    padding: 0,
    margin: 0,
  },
};

export const legendStyles = {
  root: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'column',
  },
};

export const legendLabelStyles = theme => ({
  label: {
    paddingTop: theme.spacing(1),
  },
});

export const legendItemStyles = {
  item: {
    flexDirection: 'row',
    padding: 0,
    height: 20
  },
};


const useStyles = makeStyles(theme => ({
  root: {
  },
  card: {
      backgroundImage: props => {
          console.log(props)
          return `linear-gradient(to right, ${props.fromColor}, ${props.toColor})`
      },
  },
  imgContainer: {
    position: "absolute",
    right: "-40px",
    top: "0px",
    zIndex: 0
  },
  img: {
      height: 100,
      width: 200,
      transform: 'scaleX(-1)',
  },
  tabs: {
    // height: 35,
    minHeight: 35,
  },
  tab: {
    minWidth:50,
    // padding: 0,
    paddingLeft: 0,
    paddingRight: 30,
    minHeight: 30,
    overflow: "hidden",
    color: "gray"
    
  },
  indicator: {
    height: 3,
    maxWidth: 20,
  },
  wrapper: {
    textTransform: "none",
    padding: 0,
    // color: "blue"
  },
  selected: {
    color: "red",
    '&:focus': {
      outline: "none",
    }
  },
  scroll: {
  }
}));

export default useStyles;
