declare module 'aos' {
    const AOS: {
        init: (options?: {
            duration?: number;
            once?: boolean;
            offset?: number;
            easing?: string;
        }) => void;
    };
    export default AOS;
} 