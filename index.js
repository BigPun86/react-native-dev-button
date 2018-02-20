import React, { PureComponent } from "react";
import { Alert, AsyncStorage, TouchableOpacity, View } from "react-native";
import Style from "./styles";
export default class DevButton extends PureComponent {
    devActions = () => {
        const actions = [
            {
                text: "Clear Storage!",
                onPress: async () => {
                    await AsyncStorage.clear();
                    this.props.clearActions();
                }
            }
        ];
        actions.push(this.props.additionalAction);
        actions.push({ text: "Cancel" });
        Alert.alert(
            "DEV MENU",
            "Which dev action do you want to trigger?",
            actions
        );
    };

    render() {
        if (!__DEV__) {
            return null;
        }

        const { position } = this.props;
        let containerStyle = Style.topContainer;
        if (position) {
            containerStyle =
                (position === "topLeft" && Style.topLeftContainer) ||
                (position === "topRight" && Style.topRightContainer) ||
                (position === "bottomLeft" && Style.bottomLeftContainer) ||
                (position === "bottomRight" && Style.bottomRightContainer);
        }

        return (
            <View style={Style.container}>
                <TouchableOpacity
                    style={[containerStyle, this.props.styles]}
                    onPress={this.devActions}
                >
                    <View style={[Style.roundShape]} />
                </TouchableOpacity>
            </View>
        );
    }
}

const PropTypes = require("prop-types");
DevButton.propTypes = {
    position: PropTypes.oneOf(
        "topLeft",
        "topRight",
        "bottomLeft",
        "bottomRight"
    ),
    clearActions: PropTypes.func,
    additionalAction: PropTypes.shape({
        text: PropTypes.string,
        onPress: PropTypes.func
    })
};
DevButton.defaultProps = {
    position: "topLeft",
    additionalAction: {}
};
