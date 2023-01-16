import axios from "axios";
import styles from "../assets/styles/styles.js"
import { useEffect, useState } from "react";
import Button from "./Button.js";

const HomePage = () => {
    const [userID, setUserID] = useState(null);
    useEffect(() => {
        const getData = async () => {
            const res = await axios.get('/api');
            if (res) {
                setUserID("1234")
            }
        }
        getData();
        console.log("Running");
    }, []);

    return (
        <div style={{
            ...styles.fullFlexContainer,
            ...styles.verticalFlexContainer,
            alignItems: "center"
        }}>
            <div style={styles.topbarContainer}>
                <text style={{ ...styles.title }}>
                    Notes Plus
                </text>
            </div>
            {/* <div style={{
                ...styles.fullFlexContainer,
                justifyContent: "center",
                alignItems: "center"
            }}> */}
            {!userID ? null : (
                <div style={{
                    ...styles.verticalFlexContainer,
                    justifyContent: "center",
                    // margin: 30,
                    marginTop: "15%",
                }}>
                    <text style={{
                        ...styles.subtitle,
                        marginBottom: 40,
                    }}>
                        A cleaner notes app experience.
                    </text>
                    <text style={{ ...styles.subtitle }}>
                        Get started now
                    </text>
                    <div style={{
                        ...styles.horizontalFlexContainer,
                        marginTop: 24,
                        justifyContent: "center",
                    }}>
                        <Button onClick={() => {
                            console.log("Hello!!!")
                        }}
                            style={{
                                marginRight: 24
                            }}>
                            Log In
                        </Button>
                        <Button>
                            Sign Up
                        </Button>
                    </div>

                </div>)}
        </div>
        // </div>
    )
}

export default HomePage;
