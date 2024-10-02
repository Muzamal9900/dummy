import React,{useState} from 'react'
import "./index.css"
const VideoLoader = ({src}) => {
    const [loaded, setLoaded] = useState(false);

    return (
    <>
        {!loaded && <div className="skeleton-loader"></div>}
        <video
          style={{ display: loaded ? 'block' : 'none' }}
          width="100%"
          height="auto"
          onLoadedData={() => setLoaded(true)}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </>
    );
}

export default VideoLoader
