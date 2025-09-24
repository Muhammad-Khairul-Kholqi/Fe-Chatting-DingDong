import { motion, AnimatePresence } from "framer-motion"

export const framerAnimations = {
    // Fade Animations
    fadeIn: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 }
    },

    fadeInUp: {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 }
    },

    fadeInDown: {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 20 }
    },

    fadeInLeft: {
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 20 }
    },

    fadeInRight: {
        initial: { opacity: 0, x: 20 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 }
    },

    // Scale Animations
    scaleIn: {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.8 }
    },

    scaleInBounce: {
        initial: { opacity: 0, scale: 0.3 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.3 }
    },

    // Slide Animations
    slideInLeft: {
        initial: { opacity: 0, x: -100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 100 }
    },

    slideInRight: {
        initial: { opacity: 0, x: 100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 }
    },

    slideInUp: {
        initial: { opacity: 0, y: 100 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -100 }
    },

    slideInDown: {
        initial: { opacity: 0, y: -100 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 100 }
    },

    // Rotation Animations
    rotateIn: {
        initial: { opacity: 0, rotate: -180 },
        animate: { opacity: 1, rotate: 0 },
        exit: { opacity: 0, rotate: 180 }
    },

    // Flip Animations
    flipX: {
        initial: { opacity: 0, rotateX: -90 },
        animate: { opacity: 1, rotateX: 0 },
        exit: { opacity: 0, rotateX: 90 }
    },

    flipY: {
        initial: { opacity: 0, rotateY: -90 },
        animate: { opacity: 1, rotateY: 0 },
        exit: { opacity: 0, rotateY: 90 }
    },

    // Special Effects
    bounce: {
        initial: { opacity: 0, y: -20, scale: 0.8 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 20, scale: 0.8 }
    },

    pulse: {
        initial: { opacity: 0, scale: 1 },
        animate: { opacity: 1, scale: [1, 1.05, 1] },
        exit: { opacity: 0, scale: 0.95 }
    },

    elastic: {
        initial: { opacity: 0, scale: 0.5 },
        animate: { opacity: 1, scale: [0.5, 1.2, 1] },
        exit: { opacity: 0, scale: 0.5 }
    }
}

// Transition Presets
export const transitions = {
    default: { duration: 0.4, ease: "easeInOut" },
    fast: { duration: 0.2, ease: "easeInOut" },
    slow: { duration: 0.8, ease: "easeInOut" },
    smooth: { duration: 0.6, ease: "easeOut" },
    bouncy: { duration: 0.6, ease: [0.68, -0.55, 0.265, 1.55] },
    spring: { type: "spring", stiffness: 300, damping: 30 },
    springBouncy: { type: "spring", stiffness: 400, damping: 15 }
}

// Main Animation Components
export const FadeIn = ({ children, delay = 0, duration = 0.4, className = "" }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration, delay, ease: "easeInOut" }}
        className={className}
    >
        {children}
    </motion.div>
)

export const SlideIn = ({
    children,
    direction = "up",
    delay = 0,
    duration = 0.6,
    distance = 20,
    className = ""
}) => {
    const getInitial = () => {
        switch (direction) {
            case "up": return { opacity: 0, y: distance }
            case "down": return { opacity: 0, y: -distance }
            case "left": return { opacity: 0, x: distance }
            case "right": return { opacity: 0, x: -distance }
            default: return { opacity: 0, y: distance }
        }
    }

    return (
        <motion.div
            initial={getInitial()}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export const ScaleIn = ({
    children,
    delay = 0,
    duration = 0.6,
    scale = 0.8,
    className = ""
}) => (
    <motion.div
        initial={{ opacity: 0, scale }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration, delay, ease: "easeOut" }}
        className={className}
    >
        {children}
    </motion.div>
)

export const AnimatedSlider = ({
    children,
    currentIndex,
    animation = "fadeIn",
    transition = "default",
    className = ""
}) => (
    <AnimatePresence mode="wait">
        <motion.div
            key={currentIndex}
            variants={framerAnimations[animation]}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={transitions[transition]}
            className={className}
        >
            {children}
        </motion.div>
    </AnimatePresence>
)

export const StaggerContainer = ({
    children,
    staggerDelay = 0.1,
    className = ""
}) => (
    <motion.div
        initial="hidden"
        animate="visible"
        variants={{
            visible: {
                transition: {
                    staggerChildren: staggerDelay
                }
            }
        }}
        className={className}
    >
        {children}
    </motion.div>
)

export const StaggerItem = ({
    children,
    animation = "fadeInUp",
    className = ""
}) => (
    <motion.div
        variants={{
            hidden: framerAnimations[animation].initial,
            visible: framerAnimations[animation].animate
        }}
        transition={transitions.smooth}
        className={className}
    >
        {children}
    </motion.div>
)

// Hover Effects
export const HoverScale = ({
    children,
    scale = 1.05,
    duration = 0.2,
    className = ""
}) => (
    <motion.div
        whileHover={{ scale }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration }}
        className={className}
    >
        {children}
    </motion.div>
)

export const HoverFloat = ({
    children,
    y = -5,
    duration = 0.3,
    className = ""
}) => (
    <motion.div
        whileHover={{ y }}
        transition={{ duration, ease: "easeOut" }}
        className={className}
    >
        {children}
    </motion.div>
)

// Loading Animation
export const LoadingDots = ({ size = "md", color = "currentColor" }) => {
    const sizeClasses = {
        sm: "w-2 h-2",
        md: "w-3 h-3",
        lg: "w-4 h-4"
    }

    return (
        <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
                <motion.div
                    key={i}
                    className={`${sizeClasses[size]} rounded-full`}
                    style={{ backgroundColor: color }}
                    animate={{
                        y: [0, -10, 0],
                        opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut"
                    }}
                />
            ))}
        </div>
    )
}

export default {
    framerAnimations,
    transitions,
    FadeIn,
    SlideIn,
    ScaleIn,
    AnimatedSlider,
    StaggerContainer,
    StaggerItem,
    HoverScale,
    HoverFloat,
    LoadingDots
}