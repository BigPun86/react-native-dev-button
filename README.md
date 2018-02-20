# react-native-dev-button

A library to help you manage some dev actions....

## Installing

`yarn add react-native-dev-button`

## API

...

#### Parameters

**position** - the style to apply where the button should be location. Can be "topLeft" | "topRight" | "bottomLeft" | "bottomRight"
**clearActions** -
**additionalAction** - iPhone X

#### Example

```js
import DevButton from "react-native-dev-button";

render(){
    return <NavigationTopRoot>
     .....
        <DevButton
          clearActions={() => {
            const resetAction = NavigationActions.reset({
              index: 0,
              actions: [NavigationActions.navigate({ routeName: 'Splash' })]
            });
            this.navigator.props.navigation.dispatch(resetAction);
          }}
          additionalAction={{
            text: 'Another action!',
            onPress: () => {
              alert('another action');
            }
          }}
        />
    </NavigationTopRoot>
}
```

## Licence

**MIT**
