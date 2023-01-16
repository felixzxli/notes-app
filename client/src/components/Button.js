import styles from "../assets/styles/styles.js"
import { useEffect, useState } from "react";

const Button = ({ children, style, onClick }) => {
    const [isHover, setIsHover] = useState(false);
    return (
        <div style={{
            ...styles.button,
            ...style,
            backgroundColor: isHover ? styles.colors.secondary : styles.colors.secondaryLite
        }}
            onClick={onClick}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <text style={styles.buttonText}>
                {children}
            </text>
        </div >);
}

export default Button;