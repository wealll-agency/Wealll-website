import React, { useRef, useState, useEffect } from 'react'

const VideoBanner = ({ src, overlay, width = "100%" }) => {

    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleToggle = () => {
        const v = videoRef.current;
        if (!v) return;
        if (v.paused) {
            v.play();
            setIsPlaying(true);
        } else {
            v.pause();
            setIsPlaying(false);
        }
    };

    // When video ends, show overlay again
    const handleEnded = () => setIsPlaying(false);

    return (
        <section className='video_banner'>
            <div className='container cusotm-width-cont'>
                <div className="row">
                    <div className="col-md-12">

                        <div style={{
                            width: typeof width === "number" ? `${width}px` : width,
                            maxWidth: "100%",
                            position: "relative",
                            display: "inline-block",
                            borderRadius: 20,
                            overflow: "hidden",
                            background: "#000",
                        }}>

                            {/* Video element (native controls hidden) */}
                            <video
                                ref={videoRef}
                                src={src}
                                style={{ width: "100%", display: "block" }}
                                onEnded={handleEnded}
                                controls={false}
                                preload="metadata"
                            />


                            {/* Image overlay (visible when not playing) */}
                            {!isPlaying && overlay && (
                                <img
                                    src={overlay}
                                    alt="Video thumbnail"
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        cursor: "pointer",
                                    }}
                                    onClick={handleToggle}
                                />
                            )}

                            {/* Play / Pause button (center) */}
                            <button
                                onClick={handleToggle}
                                aria-label={isPlaying ? "Pause video" : "Play video"}
                                style={{
                                    position: "absolute",
                                    left: "50%",
                                    top: "50%",
                                    transform: "translate(-50%, -50%)",
                                    zIndex: 5,
                                    width: 64,
                                    height: 64,
                                    borderRadius: "50%",
                                    border: "none",
                                    background: "rgba(0,0,0,0.6)",
                                    color: "white",
                                    fontSize: 24,
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
                                }}
                            >
                                {isPlaying ? "❚❚" : "▶"}
                            </button>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default VideoBanner