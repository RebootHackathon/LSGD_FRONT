import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
  },
  menu: {
      borderRightWidth: 2,
      borderRightStyle: "solid",
      borderRightColor: props => {
        return props.activeTab === props.index ? theme.palette.primary.main : "transparent"
      },
      '&:hover': {
        cursor: "pointer"
      }
  },
  icon: {
      color: props => {
          return props.activeTab === props.index ? theme.palette.primary.main : "rgba(0,0,0,0.3)"
      }
  },
  label: {
    fontSize: 10,
    color: props => props.activeTab === props.index ? theme.palette.primary.main : "rgba(0,0,0,0.3)"
  }
}));

export default useStyles;