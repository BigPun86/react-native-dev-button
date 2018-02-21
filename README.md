# Intro

Simple Dev button menu which will be displayed in the whole app at the desired position and can be used anywhere! I used this in order to clean the AsyncStorage at a certain time of development when i had the feeling that my state tree was somehow doing some weird stuff :P Especially when working with redux and redux-persist this was useful to not get any false data after some hot reloading and/or app crashes. 

## Demo

[Watch the demo](https://app.hyfy.io/v/abM8hUSQ6qn/)

## Installation

`yarn add react-native-dev-button` 

  **OR**

`npm i react-native-dev-button --save`

## Parameters

**alertTitle** - text for the alert title 

**alertMessage** - text for the alert message

**position** - a string which you can pass to define your dev button location. (Default is topLeft corner) *"topLeft" | "topRight" | "bottomLeft" | "bottomRight"*

**clearActions** - You can add here some work which should be done after clearing the AsyncStorage. *(For example reset the navigation to a specific route - See advanced example)*

**additionalActions** - if you want to add an extra dev action you can pass it here. Just pass an array of Alert-Button objects - [official Alert doc](https://facebook.github.io/react-native/docs/alert.html)

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
          additionalActions={[
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
