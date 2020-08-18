import {makeStyles} from '@material-ui/core/styles';

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
  }
}));

export default useStyles;
