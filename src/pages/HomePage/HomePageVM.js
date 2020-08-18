import React from "react";
import HomePage from "./HomePage";


function HomePageVM(props) {
  const [tabValue, setTabValue] = React.useState(0);

  // const lineData = [
  //   {
  //     country: 'USA', hydro: 59.8, oil: 937.6, gas: 582, coal: 564.3, nuclear: 187.9,
  //   }, {
  //     country: 'China', hydro: 74.2, oil: 308.6, gas: 35.1, coal: 956.9, nuclear: 11.3,
  //   }, {
  //     country: 'Russia', hydro: 40, oil: 128.5, gas: 361.8, coal: 105, nuclear: 32.4,
  //   }, {
  //     country: 'Japan', hydro: 22.6, oil: 241.5, gas: 64.9, coal: 120.8, nuclear: 64.8,
  //   }, {
  //     country: 'India', hydro: 19, oil: 119.3, gas: 28.9, coal: 204.8, nuclear: 3.8,
  //   }, {
  //     country: 'Germany', hydro: 6.1, oil: 123.6, gas: 77.3, coal: 85.7, nuclear: 37.8,
  // }];

  const lineData = [
    {
      country: 'USA', nuclear: 20.9,
    }, {
      country: 'China', nuclear: 11.3,
    }, {
      country: 'Russia', nuclear: 32.4,
    }, {
      country: 'Japan', nuclear: 30.8,
    }, {
      country: 'India', nuclear: 3.8,
    }, {
      country: 'Germany', nuclear: 37.8,
  }];

  const piData = [
    { name: 'Sector 1', area: 10 },
    { name: 'Sector 2', area: 30 },
    { name: 'Sector 3', area: 50 },
    { name: 'Sector 4', area: 7 },
    { name: 'Sector 5', area: 3 },
  ];

  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const handleChangeTab = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <HomePage tabValue={tabValue} handleChangeTab={handleChangeTab} a11yProps={a11yProps}
      piData={piData} lineData={lineData}/>
  )
}

export default HomePageVM;
