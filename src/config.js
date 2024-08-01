// src/config.js
export const OPENF1_DRIVERS_API = "https://api.openf1.org/v1/drivers?session_key=latest";
// Increase Image size using /3col/: https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/3col/image.png
export const OPENF1_MEETINGS_API = "https://api.openf1.org/v1/sessions?year=2024&session_name=Race";

//fetch('https://api.openf1.org/v1/sessions?date_start>=2024-01-01&date_end<=2024-09-30')
//.then(res => res.json())
//.then(data=>console.log(data))