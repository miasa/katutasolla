import React, { useEffect } from 'react';
import PhotoSphereViewer from 'photo-sphere-viewer';
import 'photo-sphere-viewer/dist/photo-sphere-viewer.min.css';
import styles from './photosphere.module.scss';

export default function Photo(props) {
  const sphereElementRef = React.createRef();
  const { src } = props;

  useEffect(() => {
    const spherePlayerInstance = PhotoSphereViewer({
      container : sphereElementRef.current,
      panorama  : src,
      navbar    : [
        'autorotate',
        'zoom',
        'fullscreen'
      ],
      time_anim  : 1,
      anim_speed : '0.5rpm'
    });

    // unmount component instructions
    return () => {
      spherePlayerInstance.destroy();
    };
  }, [src]); // will only be called when the src prop gets updated


  return (
    <div className={styles.photosphere} ref={sphereElementRef} />
  );
};