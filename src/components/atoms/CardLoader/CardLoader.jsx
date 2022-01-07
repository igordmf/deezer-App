import React from 'react';
import ContentLoader from 'react-content-loader';

const CardLoader = (props) => (
  <ContentLoader 
    speed={ 2 }
    width={ 220 }
    height={ 387 }
    viewBox="0 0 220 387"
    backgroundColor="#ecebeb"
    foregroundColor="#00000001"
    {...props}
  >
    <rect x="50" y="24" rx="0" ry="0" width="120" height="120" />
    <rect x="59" y="152" rx="0" ry="0" width="100" height="20" />
    <rect x="50" y="176" rx="0" ry="0" width="120" height="20" />
    <rect x="56" y="201" rx="0" ry="0" width="110" height="20" />
    <rect x="52" y="225" rx="0" ry="0" width="120" height="20" />
    <circle cx="110" cy="275" r="18" />
    <rect x="37" y="308" rx="0" ry="0" width="145" height="17" />
    <rect x="65" y="340" rx="0" ry="0" width="95" height="16" />
  </ContentLoader>
)

export default CardLoader;
