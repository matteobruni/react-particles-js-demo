import { IParticlesParams } from "react-particles-js";
import react from "../public/assets/react.svg";
import k8s from "../public/assets/k8s.svg";
import code from "../public/assets/code.png";

export type TFrame = {
    backgroundColor: string;
    name: string;
    params: IParticlesParams;
    slug: string;
};

export const frames: TFrame[] = [
    {
        backgroundColor: 'linear-gradient(135deg, #606c88 0%, #3f4c6b 100%)',
        name: 'Simple',
        params: {
            particles: {
                number: {
                    value: 50
                },
                size: {
                    value: 3
                }
            },
            interactivity: {
                events: {
                    onhover: {
                        enable: true,
                        mode: 'repulse'
                    }
                }
            }
        },
        slug: 'simple',
    },
    {
        backgroundColor: '#232741',
        name: 'Bubbles',
        params: {
            particles: {
                number: {
                    value: 160,
                    density: {
                        enable: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        speed: 4,
                        size_min: .3
                    }
                },
                line_linked: {
                    enable: false
                },
                move: {
                    random: true,
                    speed: 1,
                    direction: 'top',
                    out_mode: 'out'
                }
            },
            interactivity: {
                events: {
                    onhover: {
                        enable: true,
                        mode: 'bubble'
                    },
                    onclick: {
                        enable: true,
                        mode: 'repulse'
                    },
                },
                modes: {
                    bubble: {
                        distance: 250,
                        duration: 2,
                        size: 0,
                        opacity: 0
                    },
                    repulse: {
                        distance: 400,
                        duration: 4
                    }
                }
            }
        },
        slug: 'bubbles'
    },
    {
        backgroundColor: 'linear-gradient(to bottom, #a90329 0%,#8f0222 44%,#6d0019 100%)',
        name: 'Snow',
        params: {
            particles: {
                number: {
                    value: 160,
                    density: {
                        enable: false
                    }
                },
                size: {
                    value: 10,
                    random: true
                },
                move: {
                    direction: 'bottom',
                    out_mode: 'out'
                },
                line_linked: {
                    enable: false
                }
            }
        },
        slug: 'snow',
    },
    {
        backgroundColor: 'linear-gradient(45deg, #2d364c 0%,#252d3f 100%)',
        name: 'Night Sky',
        params: {
            particles: {
                number: {
                    value: 60,
                    density: {
                        enable: true,
                        value_area: 1500
                    }
                },
                line_linked: {
                    enable: true,
                    opacity: .02
                },
                move: {
                    direction: 'right',
                    speed: .05
                },
                size: {
                    value: 1
                },
                opacity: {
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: .05
                    }
                }
            },
            retina_detect: true
        },
        slug: 'night-sky',
    },
    {
        backgroundColor: 'linear-gradient(45deg, #45484d 0%,#000000 100%)',
        name: 'Multiple images',
        params: {
            particles: {
                number: {
                    value: 8,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                line_linked: {
                    enable: false
                },
                move: {
                    speed: 1,
                    out_mode: 'out'
                },
                shape: {
                    type: ['images', 'circle'],
                    images: [
                        {
                            src: react,
                            height: 20,
                            width: 23
                        },
                        {
                            src: k8s,
                            height: 20,
                            width: 20
                        },
                        {
                            src: code,
                            height: 20,
                            width: 20
                        }
                    ]
                },
                color: {
                    value: '#CCC'
                },
                size: {
                    value: 30,
                    random: false,
                    anim: {
                        enable: true,
                        speed: 4,
                        size_min: 10,
                        sync: false
                    }
                }
            },
            retina_detect: false
        },
        slug: 'images'
    }
];