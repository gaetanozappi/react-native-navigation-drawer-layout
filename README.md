# React Native: react-native-navigation-drawer-layout

[![GitHub package version](https://img.shields.io/github/package-json/v/gaetanozappi/react-native-navigation-drawer-layout.svg?style=flat&colorB=2b7cff)](https://github.com/gaetanozappi/react-native-navigation-drawer-layout)
[![github home](http://img.shields.io/npm/v/react-native-navigation-drawer-layout.svg?style=flat)](https://www.npmjs.com/package/react-native-navigation-drawer-layout)
![platforms](https://img.shields.io/badge/platforms-Android-brightgreen.svg?style=flat&colorB=191A17)
[![github home](https://img.shields.io/badge/gaetanozappi-react--native--navigation--drawer--layout-blue.svg?style=flat)](https://github.com/gaetanozappi/react-native-navigation-drawer-layout)
[![npm](https://img.shields.io/npm/dm/react-native-navigation-drawer-layout.svg?style=flat&colorB=007ec6)](https://www.npmjs.com/package/react-native-navigation-drawer-layout)

[![github issues](https://img.shields.io/github/issues/gaetanozappi/react-native-navigation-drawer-layout.svg?style=flat)](https://github.com/gaetanozappi/react-native-navigation-drawer-layout/issues)
[![github closed issues](https://img.shields.io/github/issues-closed/gaetanozappi/react-native-navigation-drawer-layout.svg?style=flat&colorB=44cc11)](https://github.com/gaetanozappi/react-native-navigation-drawer-layout/issues?q=is%3Aissue+is%3Aclosed)
[![Issue Stats](https://img.shields.io/issuestats/i/github/gaetanozappi/react-native-navigation-drawer-layout.svg?style=flat&colorB=44cc11)](http://github.com/gaetanozappi/react-native-navigation-drawer-layout/issues)
[![github license](https://img.shields.io/github/license/gaetanozappi/react-native-navigation-drawer-layout.svg)]()

<img src="https://github.com/gaetanozappi/react-native-navigation-drawer-layout/raw/master/screenshot/react-native-navigation-drawer-layout.png" />       

-   [Usage](#-usage)
-   [License](#-license)

## 📖 Getting started

`$ npm install react-native-navigation-drawer-layout --save`

`$ react-native link react-native-material-letter-icon`

`$ react-native link react-native-vector-icons`

## 💻 Usage

```javascript
import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import NavigationDrawerLayout from 'react-native-navigation-drawer-layout';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      menu: '',
      type: ''
    };
  }

  render() {
    return (
      <NavigationDrawerLayout
        percent={75}
        //statusBar="#008cff"
        //statusBarTransparency={0.3}
        type={this.state.type}
        drawerPosition="left"
        selected="opt0"
        window="menu"
        color="#fff"
        backgroundColor="#fff" //303030
        imageBackground={{ uri: "https://c.wallhere.com/photos/aa/44/glare_colorful_bright_circles-679384.jpg!d" }}
        first={'username'}
        second={'joined'}
        account={[
          {
            username: 'james.bond',
            name: 'James Bond',
            email: 'james.bond.xx@xxx.xxx',
            image:
              'https://cdn1.iconfinder.com/data/icons/avatar-2-2/512/Casual_Man_2-512.png',
            joined: 'Joined at Jun 21, 2021',
            badgeText: '100',
            badgeColor: '#fff',
            badgeBackground: '#303030',
            circle: ['transparent', 'transparent'],
          },
          {
            username: 'sherlock.holmes',
            name: 'Sherlock Holmes',
            email: 'sherlock.holmes.xx@xxx.xxx',
            badgeText: '100',
            badgeColor: '#fff',
            badgeBackground: '#303030',
            circle: ['#fff000', 'transparent', '#00ffd0'],
          },
          {
            name: 'Shinichi Kudo',
            email: 'shinichi.kudo.xx@xxx.xxx',
            image:
              'https://cdn1.iconfinder.com/data/icons/avatar-2-2/512/Casual_Man_3-512.png',
            badgeText: '21',
            badgeColor: '#fff',
            badgeBackground: '#25dbd2',
            joined: 'Joined at Jun 31, 2021',
            circle: ['transparent', 'transparent'],
          },
          {
            name: 'Arthur Conan Doyle',
            email: 'arthur.conan.doyle.xx@xxx.xxx',
            image:
              'https://cdn0.iconfinder.com/data/icons/user-interface-vol-3-12/66/68-512.png',
            circle: ['transparent', 'transparent'],
          },
        ]}
        badgeFunction={e => {
          return e > 99 ? '99+' : e;
        }}
        menu={[
          {
            type: 'menu',
            name: 'opt0',
            title: 'Le mie app e i miei giochi',
            icon: 'apps',
            colorText: '#000',
            colorTextFocus: '#4CAF50',
            colorIcon: '#c1c1c1',
            colorIconFocus: '#4CAF50',
            background: 'transparent',
            backgroundFocus: '#e8e8e8',
            badgeText: '100',
            badgeColor: '#fff',
            badgeBackground: '#1194ff',
          },
          {
            type: 'menu',
            name: 'opt1',
            title: 'Le mie notifiche',
            icon: 'add-alert',
            colorText: '#000',
            colorTextFocus: '#607D8B',
            colorIcon: '#c1c1c1',
            colorIconFocus: '#607D8B',
            background: 'transparent',
            backgroundFocus: '#e8e8e8',
            badgeText: '31+',
          },
          {
            type: 'menu',
            name: 'opt2',
            title: 'Abbonamenti',
            icon: 'refresh',
            colorText: '#000',
            colorTextFocus: '#607D8B',
            colorIcon: '#c1c1c1',
            colorIconFocus: '#607D8B',
            background: 'transparent',
            backgroundFocus: '#e8e8e8',
          },
          { type: 'divider' },
          {
            type: 'title',
            title: 'App Google',
            colorText: '#000',
          },
          {
            type: 'menu',
            name: 'opt3',
            title: 'Home page',
            icon: 'home',
            colorText: '#000',
            colorTextFocus: '#4CAF50',
            colorIcon: '#4CAF50',
            colorIconFocus: '#4CAF50',
            background: 'transparent',
            backgroundFocus: '#e8e8e8',
          },
          {
            type: 'collapse',
            name: 'opt4',
            title: 'Film',
            iconCollapsingName: 'local-movies',
            iconColor: "#ccc",
            colorText: '#000',
            colorTextFocus: '#4CAF50',
            colorIcon: '#f44336',
            colorIconFocus: '#f44336',
            background: 'transparent',
            backgroundFocus: '#e8e8e8',
            menu: [
              {
                name: 'sub0',
                title: "Apri l'app Film",
                icon: 'film',
                colorText: '#000',
                colorTextFocus: '#f44336',
                colorIcon: '#f44336',
                colorIconFocus: '#f44336',
                background: 'transparent',
                backgroundFocus: '#e8e8e8',
              },
            ],
          },
          {
            type: 'collapse',
            name: 'opt4',
            title: 'Libri',
            showOnStart: true,
            rippleColor:"#000",
            backgroundBarNormal: "#545a63",
            backgroundBarFocus: "#22252A",
            iconBarNameNormal: 'book',
            iconBarNameFocus: 'book',
            iconBarColorNormal: "#1194ff",
            iconBarColorFocus: "#ffb600",
            textBarColorNormal: "#1194ff",
            textBarColorFocus: "#ffb600",
            animateIconColorNormal:"#1194ff",
            animateIconColorFocus:"#ffb600",
            iconColor: "#ccc",
            colorText: '#000',
            colorTextFocus: '#4CAF50',
            colorIcon: '#f44336',
            colorIconFocus: '#f44336',
            background: 'transparent',
            badgeText: "100",
            badgeColor: "#fff",
            badgeBackground: "#1194ff",
            badgeRadius: 4,
            badgeStyle: {},
            menu: [
              {
                name: 'sub1',
                title: "Apri l'app Libri",
                icon: 'book',
                colorText: '#000',
                colorTextFocus: '#2196F3',
                colorIcon: '#2196F3',
                colorIconFocus: '#2196F3',
                background: 'transparent',
                backgroundFocus: '#e8e8e8',
                badgeText: '100',
                badgeColor: '#fff',
                badgeBackground: '#1194ff',
                badgeRadius: 4,
                close: true
              },
            ],
          },
          { type: 'divider' },
          {
            type: 'menu',
            name: 'opt9',
            title: 'Account',
            icon: 'person-pin',
            colorText: '#000',
            colorTextFocus: '#607D8B',
            colorIcon: '#c1c1c1',
            colorIconFocus: '#607D8B',
            background: 'transparent',
            backgroundFocus: '#e8e8e8',
          },
          {
            type: 'menu',
            name: 'opt10',
            title: 'Utilizza codice',
            icon: 'code',
            colorText: '#000',
            colorTextFocus: '#607D8B',
            colorIcon: '#c1c1c1',
            colorIconFocus: '#607D8B',
            background: 'transparent',
            backgroundFocus: '#e8e8e8',
          },
          {
            type: 'menu',
            name: 'opt11',
            title: 'Lista desideri',
            icon: 'check-circle',
            colorText: '#000',
            colorTextFocus: '#607D8B',
            colorIcon: '#c1c1c1',
            colorIconFocus: '#607D8B',
            background: 'transparent',
            backgroundFocus: '#e8e8e8',
          },
          {
            type: 'menu',
            name: 'opt12',
            title: 'Play Protect',
            icon: 'verified-user',
            colorText: '#000',
            colorTextFocus: '#607D8B',
            colorIcon: '#c1c1c1',
            colorIconFocus: '#607D8B',
            background: 'transparent',
            backgroundFocus: '#e8e8e8',
          },
          {
            type: 'menu',
            name: 'opt13',
            title: 'Impostazioni',
            icon: 'settings',
            colorText: '#000',
            colorTextFocus: '#607D8B',
            colorIcon: '#c1c1c1',
            colorIconFocus: '#607D8B',
            background: 'transparent',
            backgroundFocus: '#e8e8e8',
          },
          {
            type: 'menu',
            name: 'opt14',
            title: 'Close Drawer',
            icon: 'exit-to-app',
            colorText: '#000',
            colorTextFocus: '#607D8B',
            colorIcon: '#c1c1c1',
            colorIconFocus: '#607D8B',
            background: 'transparent',
            backgroundFocus: '#e8e8e8',
            close: true
          },
        ]}
        changeAccount={e => {
          console.log('Account:', e);
        }}
        onPress={e => {
          this.setState({ menu: e.title });
          var type = e.name == 'opt2' ? 'simple' : '';
          this.setState({ type });
          alert("Title:"+e.title+" - "+"Name:"+e.name);
          console.log('Menu:', e);
        }}>
        <View
          style={{
            flex: 1,
            //alignItems: 'flex-end',
          }}>
          <Text style={{ marginTop: 25, marginRight: 5 }}>Hello World!</Text>
          <Text style={{ marginTop: 25, marginRight: 5 }}>
            {this.state.menu}!
          </Text>
        </View>
      </NavigationDrawerLayout>
    );
  }
}

const styles = StyleSheet.create({});
```

## 💡 Props

|Prop|Type|Default|Note|
| - | - | - | - |
|`percent`| `number`|| Length in percentage of the drawer.
|`statusBar`| `string`|| Color statusbar.
|`statusBarTransparency`| `number`|| Transparency statusbar.
|`type`| `string`|| `simple`
|`drawerPosition`| `string`|`left`| Position drawer.
|`selected`| `string`|| 
|`window`| `string`|`menu`| It is used to define what to display in the drawer, types: `menu` or `account`
|`color`| `string`|| 
|`backgroundColor`| `string`|| Background drawer.
|`imageBackground`| `obj`|| Image drawer.
|`first`| `string`|| It is used to define what to set as the first field.
|`second`| `string`|| It is used to define what to set as the second field.
|`account`| `array`|| It is used to define account.
|`menu`| `array`|| It is used to define the menu.
|`badgeFunction`| `function: optional`|| Use in case you want to define a function, for the badgeText attribute.
|`changeAccount`| `function: optional`|| When you change the primary user of this function returns the its information.

- **Account**

|Prop|Type|Default|Note|
| - | - | - | - |
|`name`|`string`|| 
|`email`|`string`|| 
|`image`|`string`|| 
|`badgeText`|`string`|| 
|`badgeColor`|`string`|| 
|`badgeBackground`|`string`|| 

You can add any attribute, then using the `first` and` second` attributes you can use to show them in the drawer.

- **Menu type `divider`**

|Prop|Type|Default|Note|
| - | - | - | - |
|`type`|`string`|| Use `divider`.
|`color`|`string`|`#cccccc`| Color divider.
|`width`|`number`|`1`| Width divider.
|`style`|`style: optional`|| Style divider.

- **Menu type `menu`**

|Prop|Type|Default|Note|
| - | - | - | - |
|`type`|`string`|| `menu`
|`name`|`string`|| 
|`title`|`string`|| 
|`icon`|`string`|| 
|`colorText`|`string`|| 
|`colorTextFocus`|`string`|| 
|`colorIcon`|`string`|| 
|`colorIconFocus`|`string`|| 
|`background`|`string`|| 
|`backgroundFocus`|`string`|| 
|`badgeText`|`string`|| 
|`badgeColor`|`string`|| 
|`badgeBackground`|`string`||
|`close`|`boolean`|`false`| When it is set to `true`, if the item is clicked the drawer menu will close.

- **Menu type `collapse`**

|Prop|Type|Default|Note|
| - | - | - | - |
|`type`|`string`|| `collapse`
|`name`|`string`|| 
|`title`|`string`|| 
|`showOnStart`|`bool`|| 
|`rippleColor`|`string`|| 
|`backgroundBarNormal`|`string`|| 
|`backgroundBarFocus`|`string`|| 
|`iconBarNameNormal`|`string`|| 
|`iconBarNameFocus`|`string`|| 
|`iconBarColorNormal`|`string`|| 
|`iconBarColorFocus`|`string`|| 
|`textBarColorNormal`|`string`|| 
|`textBarColorFocus`|`string`|| 
|`animateIconColorNormal`|`string`|| 
|`animateIconColorFocus`|`string`|| 
|`iconColor`|`string`|| 
|`colorText`|`string`|| 
|`colorTextFocus`|`string`|| 
|`colorIcon`|`string`|| 
|`colorIconFocus`|`string`|| 
|`background`|`string`|| 
|`badgeText`|`string`|| 
|`badgeColor`|`string`|| 
|`badgeBackground`|`string`|| 
|`badgeRadius`|`number`|| 
|`badgeStyle`|`string`|| 
|`menu`|`array`|| 

## 📜 License
This library is provided under the Apache License.
