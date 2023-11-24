import React from 'react';
import PotreeViewer from './components/PotreeViewer';

const Home = () => {
    return (
        <>
          <div>
            <h1>PointCloud Viewer</h1>
            <p>NextJS 14 w/ Potree and THREE.js</p>
          </div>
          <div style={{ width: '100vw', height: '100vh' }}>
              <PotreeViewer pointCloudURL="/data.las" />
        </div>
        </>
        
    );
};

export default Home;
