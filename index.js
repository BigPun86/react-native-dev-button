import React, { PureComponent } from "react";
import { Alert, AsyncStorage, TouchableOpacity, View } from "react-native";
import Toast from "react-native-simple-toast";
import Style from "./styles";
export default class DevButton extends PureComponent {
    devActions = () => {
        try {
            const {
                additionalActions,
                alertMessage,
                alertTitle,
                clearActions
            } = this.props;
            const actions = [
                {
                    text: "Clear Storage!",
                    onPress: async () => {
                        await AsyncStorage.clear();
                        if (clearActions) {
                            await clearActions();
                        }
                        Toast.show("Cleared AsyncStorage");
                    }
                }
            ];
            if (additionalActions.length > 0) {
                additionalActions.map((action, index) => {
                    actions.push(action);
                });
            }
            actions.push({ text: "Cancel" });
            Alert.alert(alertTitle, alertMessage, actions);
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        if (!__DEV__) {
            return null;
        }
        const { position, styles } = this.props;
        let containerStyle = Style.topContainer;
        if (position) {
            containerStyle =
                (position === "topLeft" && Style.topLeftContainer) ||
                (position === "topRight" && Style.topRightContainer) ||
                (position === "bottomLeft" && Style.bottomLeftContainer) ||
                (position === "bottomRight" && Style.bottomRightContainer);
        }
        return (
            <TouchableOpacity
                style={[containerStyle, styles]}
                onPress={this.devActions}
            >
                <View style={[Style.roundShape]} />
            </TouchableOpacity>
        );
    }
}

const PropTypes = require("prop-types");
DevButton.propTypes = {
    alertTitle: PropTypes.string,
    alertMessage: PropTypes.string,
    position: PropTypes.oneOf(
        "topLeft",
        "topRight",
        "bottomLeft",
        "bottomRight"
    ),
    clearActions: PropTypes.func,
    additionalActions: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
            onPress: PropTypes.func
        })
    )
};
DevButton.defaultProps = {
    alertTitle: "Dev actions",
    alertMessage: "Clear storage or trigger any individually added dev action",
    position: "topLeft",
    clearActions: () => {},
    additionalActions: []
};
