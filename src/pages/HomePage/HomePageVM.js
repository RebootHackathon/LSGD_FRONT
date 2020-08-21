import React from "react";
import HomePage from "./HomePage";


function HomePageVM(props) {
  const [tabValue, setTabValue] = React.useState(0);
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const handleChangeTab = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setTabValue(index);
  };

  return (
    <HomePage tabValue={tabValue} handleChangeTab={handleChangeTab} a11yProps={a11yProps} handleChangeIndex={handleChangeIndex} />
  )
}

export default HomePageVM;
