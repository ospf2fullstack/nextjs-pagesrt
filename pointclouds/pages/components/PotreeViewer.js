import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const PotreeViewer = ({ pointCloudURL }) => {
    const viewerRef = useRef(null);


    useEffect(() => {
        // Ensure Potree and THREE are loaded
        if (!window.Potree || !THREE) {
            console.error('Potree or THREE is not available');
            return;
        }

        // Initialize Potree viewer
        const viewer = new window.Potree.Viewer(viewerRef.current);

        // Load a point cloud
        viewer.loadPointCloud(pointCloudURL, 'PointCloud', e => {
            const pointCloud = e.pointcloud;
            const material = pointCloud.material;
            viewer.scene.addPointCloud(pointCloud);
            material.pointSizeType = window.Potree.PointSizeType.ADAPTIVE;
            material.size = 1;
            viewer.fitToScreen();
        });

        return () => {
            // Cleanup
            viewer.dispose();
        };
    }, [pointCloudURL]);

    return <div ref={viewerRef} style={{ width: '100%', height: '100%' }} />;
};

export default PotreeViewer;
