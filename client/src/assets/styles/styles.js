const colors = {
    primary: "rgb(232, 81, 70)",
    primaryLite: "rgb(245, 140, 132)",
    secondary: "rgb(27, 29, 87)",
    secondaryLite: "rgb(112, 114, 184)"
}

const title = {
    fontSize: 28,
};

const subtitle = {
    fontSize: 18,
    textAlign: "center"
};

const text = {
    fontSize: 14,
};

const verticalFlexContainer = {
    display: "flex",
    flexDirection: "column"
};

const horizontalFlexContainer = {
    display: "flex",
    flexDirection: "row"
};

const fullFlexContainer = {
    display: "flex",
    width: "100vw",
    height: "100vh",
};

const topbarContainer = {
    ...horizontalFlexContainer,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 80,
    backgroundColor: colors.primaryLite,
    // margin: 48,
};

const button = {
    // display: "flex",
    borderRadius: 5,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 6,
    paddingBottom: 6,
    backgroundColor: colors.secondary,
    cursor: "pointer",
}

const buttonText = {
    ...text,
    color: "white"
}


export default {
    colors,
    title,
    subtitle,
    text,
    verticalFlexContainer,
    horizontalFlexContainer,
    fullFlexContainer,
    topbarContainer,
    button,
    buttonText
}