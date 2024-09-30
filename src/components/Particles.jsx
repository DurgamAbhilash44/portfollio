import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";

const ParticlesComponent = (props) => {
    const options = useMemo(() => {
        return {
            background: {
                color: "#000000", // Dark background for contrast
            },
            fullScreen: {
                enable: true,
                zIndex: -1,
            },
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                },
                modes: {
                    push: {
                        quantity: 10,
                    },
                    repulse: {
                        distance: 100,
                    },
                },
            },
            particles: {
                color: {
                    value: ["#8A2BE2", "#9370DB", "#800080", "#9932CC", "#BA55D3"], // Purple colors
                },
                links: {
                    enable: true,
                    distance: 150,
                    color: "#8A2BE2", // Purple color for links
                    opacity: 0.4,
                },
                move: {
                    enable: true,
                    speed: { min: 2, max: 8 },
                    direction: "top",
                    outModes: {
                        top: "out",
                        default: "bounce",
                    },
                },
                opacity: {
                    value: { min: 0.4, max: 0.8 },
                },
                size: {
                    value: { min: 1, max: 5 },
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 80,
                },
            },
        };
    }, []);

    const particlesInit = useCallback((engine) => {
        loadSlim(engine);
    }, []);

    return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default ParticlesComponent;