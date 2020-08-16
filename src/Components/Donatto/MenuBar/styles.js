import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
  },
  menu: {
      borderRightWidth: 2,
      borderRightStyle: "solid",
      borderRightColor: props => {
        return props.activeTab === props.index ? "green" : "transparent"
      }
  },
  icon: {
      color: props => {
          return props.activeTab === props.index ? "green" : "blue"
      }
  }
});

export default useStyles;