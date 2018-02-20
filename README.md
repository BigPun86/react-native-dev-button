# Simple Dev Button helper

A library to help you manage some dev actions in order to help your dev jobs. I added this to my projects in order to clear the locatal storage where sometimes redux-persist for example fucks or generally to clean up dev junk created by some app crashes etc. Helped me alot :P

The Dev Button will be displayed in the whole app at the desired position and can be used anywhere!

## Installation

`yarn add react-native-dev-button` 

  **OR**

`npm i react-native-dev-button --save`

## Parameters

**position** - a string which you can pass to define your dev button location. (Default is topLeft corner) *"topLeft" | "topRight" | "bottomLeft" | "bottomRight"*

**clearActions** - You can add here some work which should be done when clearing the AsyncStorage. *(For example reset the navigation to a specific route - See example)*

**additionalAction** - if you want to add an extra dev action you can pass it here. Just pass an array of Alert-Button objects - [official Alert doc](https://facebook.github.io/react-native/docs/alert.html)

#### Example

*Simple usage example:*

```js
import DevButton from "react-native-dev-button";

render(){
    return <SomeTopViewComponent>
        <DevButton />
    </SomeTopViewComponent>
}
```

*Some more advanced example with react-navigation:*

```js
 render() {
    const { dispatch, navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <KidPickStackNavigator
          ref={ref => {
            this.navigator = ref;
          }}
          navigation={addNavigationHelpers({
            dispatch,
            state: navigation
          })}
        />
        <DevButton
          clearActions={() => {
            const resetAction = NavigationActions.reset({
              index: 0,
              actions: [NavigationActions.navigate({ routeName: Routes.SplashScreen })]
            });
            this.navigator.props.navigation.dispatch(resetAction);
          }}
          additionalAction={[
            {
              text: 'Another action!',
              onPress: () => {
                alert('another action');
              }
            },
            {
              text: 'Another action2!',
              onPress: () => {
                alert('another action2');
              }
            }
          ]}
        />
      </View>
    );
  }

```

## Todo

- add demo []
- add more todos [] :D

## Licence

**MIT**
