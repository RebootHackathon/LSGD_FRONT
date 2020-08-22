import React, { useEffect } from "react";
import HomePage from "./HomePage";

import { userServices } from "../../services/user.services";


function HomePageVM(props) {
  const [tabValue, setTabValue] = React.useState(0);
  const [pendingList, setPendingList] = React.useState([]);
  
  useEffect(() => {
    userServices.getPending().then((data)=>{
      if(data!==null)
        setPendingList(data);
    })
  }, [])
  
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
    <HomePage tabValue={tabValue} handleChangeTab={handleChangeTab} a11yProps={a11yProps} 
      handleChangeIndex={handleChangeIndex} pendingList={pendingList} />
  )
}

export default HomePageVM;
