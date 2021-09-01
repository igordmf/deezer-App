import React from "react";
import ContentLoader from "react-content-loader";

const CardLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={220}
    height={340}
    viewBox="0 0 220 340"
    /* backgroundColor="#f6f6f6" */
    backgroundColor="#ecebeb"
    /* foregroundColor="#ecebeb" */
    foregroundColor="#00000001"
    {...props}
  >
    <rect x="96" y="366" rx="0" ry="0" width="140" height="10" /> 
    <rect x="84" y="404" rx="0" ry="0" width="140" height="10" /> 
    <rect x="50" y="24" rx="0" ry="0" width="120" height="120" /> 
    <rect x="59" y="155" rx="0" ry="0" width="100" height="20" /> 
    <rect x="50" y="180" rx="0" ry="0" width="120" height="20" /> 
    <rect x="57" y="205" rx="0" ry="0" width="109" height="20" /> 
    <circle cx="110" cy="252" r="18" /> 
    <rect x="37" y="285" rx="0" ry="0" width="146" height="17" /> 
    <rect x="65" y="310" rx="0" ry="0" width="90" height="16" />
  </ContentLoader>
)

export default CardLoader;