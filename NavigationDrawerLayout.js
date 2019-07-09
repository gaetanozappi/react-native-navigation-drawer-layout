import * as React from 'react';
import {
  Text,
  ScrollView,
  View,
  StyleSheet,
  DrawerLayoutAndroid,
  Dimensions,
  ImageBackground,
  Image,
  TouchableNativeFeedback,
  Platform,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
const AnimatedIcon = Animatable.createAnimatableComponent(Icon2);

//var { width } = Dimensions.get('window');
import AvatarSocial from 'react-native-avatar-social';
import Collapsing from 'react-native-collapsing';

const RippleColor = (...args) =>
  Platform.Version >= 21 ? TouchableNativeFeedback.Ripple(...args) : null;

const Animations = {
  rotateTop: {
    0: {
      rotate: '0deg',
    },
    1: {
      rotate: '-180deg',
    },
  },
  rotateBottom: {
    0: {
      rotate: '0deg',
    },
    1: {
      rotate: '180deg',
    },
  },
};

export default class NavigationDrawerLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: this.props.account,
      firstAccount: [],
      secondAccount: [],
      width: Dimensions.get('window').width,
      selected: this.props.selected,
      window: this.props.window,
    };
    this.openDrawer = this.openDrawer.bind(this);
  }

  onLayout(e) {
    const { width, height } = Dimensions.get('window');
    console.log(width, height);
    this.setState({ width });
  }

  openDrawer() {
    this.drawer.openDrawer();
  }

  closeDrawer() {
    this.drawer.closeDrawer();
  }

  componentWillMount() {
    var account = this.state.account;
    var firstAccount = Object.assign({}, account[0]);
    this.setState({ firstAccount });
    account = account.slice(1);
    //console.log('A', account);
    var secondAccount = Object.assign([], account);
    this.setState({ secondAccount });
    Animatable.initializeRegistryWithDefinitions({
      rotateTop: Animations.rotateTop,
      rotateBottom: Animations.rotateBottom,
    });
  }

  componentDidMount() {
    this.openDrawer();
    const { window } = this.state;
    const { type } = this.props;
    if (type != 'simple') {
      if (window == 'account') this.animatable.rotateBottom(0);
      else this.animatable.rotateTop(0);
    }
  }

  viewBackground(el) {
    return {
      backgroundColor:
        this.state.selected == el.name ? el.backgroundFocus : el.background,
    };
  }

  textColor(el) {
    return {
      color: this.state.selected == el.name ? el.colorTextFocus : el.colorText,
    };
  }

  _selected = e => {
    this.setState({ selected: e.name });
    this.props.onPress(e);
    if (e.close == true) this.closeDrawer();
  };

  _change = () => {
    var window = this.state.window == 'account' ? 'menu' : 'account';
    if (this.state.window == 'account') this.animatable.rotateTop(0);
    else this.animatable.rotateBottom(0);
    this.setState({ window });
  };

  colorIcon(el) {
    return this.state.selected == el.name ? el.colorIconFocus : el.colorIcon;
  }

  badgeFunction = e => {
    return this.props.badgeFunction ? this.props.badgeFunction(e) : e;
  };

  _changeAccount = firstAccount => {
    this.setState({ firstAccount });
    var secondAccount = this.state.account.filter(
      el => el.email !== firstAccount.email
    );
    this.setState({ secondAccount });
    this.props.changeAccount(firstAccount);
  };

  first = e => {
    if (this.props.first) return this.state.firstAccount[this.props.first];
  };

  second = e => {
    if (this.props.second) return this.state.firstAccount[this.props.second];
  };

  hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  }

  render() {
    var {
      children,
      color,
      backgroundColor,
      imageBackground,
      account,
      percent,
      menu,
      type,
      statusBar,
      statusBarTransparency,
    } = this.props;
    var drawerWidth = (this.state.width * percent) / 100;
    //console.log('f', this.state.firstAccount);
    //console.log('s', this.state.secondAccount);
    var firstAccount = this.state.firstAccount;
    var secondAccount = this.state.secondAccount;
    var number = secondAccount.length >= 2 ? 2 : secondAccount.length;
    var rgb = this.hexToRgb(statusBar ? statusBar : '#000000');
    var barTransparency = statusBarTransparency ? statusBarTransparency : 0.5;
    var StatusBarColor =
      'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',' + barTransparency + ')';
    var drawerPosition =
      this.props.drawerPosition == 'right'
        ? DrawerLayoutAndroid.positions.Right
        : DrawerLayoutAndroid.positions.Left;

    var list = (
      <View
        style={
          {
            //marginTop: 8,
          }
        }>
        {menu.map((e, i) => {
          if (e.type == 'divider')
            return (
              <View
                key={i}
                style={[
                  {
                    borderBottomColor: e.color || '#cccccc',
                    borderBottomWidth: e.width || 1,
                    marginTop: 8,
                    marginBottom: 8,
                  },
                  e.style
                ]}
              />
            );
          else if (e.type == 'title')
            return (
              <View
                key={i}
                style={[
                  {
                    flexDirection: 'row',
                    alignItems: 'center',
                    //paddingLeft: 5,
                  },
                ]}>
                <Text
                  style={{
                    marginTop: 10,
                    marginLeft: 15,
                    marginBottom: 10,
                    fontSize: 13,
                    textAlign: 'left',
                    fontWeight: 'bold',
                    color: e.color,
                  }}>
                  {e.title}
                </Text>
              </View>
            );
          else if (e.type == 'collapse')
            return (
              <Collapsing
                key={i}
                selected={this.state.selected}
                title={e.title}
                showOnStart={e.showOnStart}
                rippleColor={e.rippleColor}
                background={e.background}
                backgroundBarNormal={e.backgroundBarNormal}
                backgroundBarFocus={e.backgroundBarFocus}
                iconBarNameNormal={e.iconBarNameNormal}
                iconBarNameFocus={e.iconBarNameFocus}
                iconBarColorNormal={e.iconBarColorNormal}
                iconBarColorFocus={e.iconBarColorFocus}
                iconBarSize={e.iconBarSize}
                textBarColorNormal={e.textBarColorNormal}
                textBarColorFocus={e.textBarColorFocus}
                animateIconNameNormal={e.animateIconNameNormal || 'chevron-down'}
                animateIconNameFocus={e.animateIconNameFocus || 'chevron-up'}
                animateIconColorNormal={e.animateIconColorNormal}
                animateIconColorFocus={e.animateIconColorFocus}
                animateIconSize={e.animateIconSize}
                badgeText={e.badgeText}
                badgeColor={e.badgeColor}
                badgeBackground={e.badgeBackground}
                badgeRadius={e.badgeRadius}
                badgeStyle={e.badgeStyle}
                badgeFunction={this.badgeFunction}
                onPress={e => {
                  this._selected(e);
                }}
                menu={e.menu}
              />
            );
          else if (e.type == 'menu')
            return (
              <TouchableNativeFeedback
                key={i}
                onPress={() => this._selected(e)}
                delayPressIn={0}
                delayPressOut={0}
                useForeground={true}
                background={RippleColor('#ccc')}>
                <View
                  style={[
                    {
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingLeft: 15,
                    },
                    this.viewBackground(e),
                  ]}>
                  <Icon name={e.icon} size={25} color={this.colorIcon(e)} />
                  <Text
                    style={[
                      {
                        marginTop: 16,
                        marginLeft: 30,
                        marginBottom: 16,
                        fontSize: 13,
                        textAlign: 'left',
                        fontWeight: 'bold',
                      },
                      this.textColor(e),
                    ]}>
                    {e.title}
                  </Text>
                  {e.badgeText && (
                    <View
                      style={{
                        //backgroundColor: '#f23521',
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        flex: 1,
                        marginRight: 8,
                      }}>
                      <Text
                        style={[
                          {
                            color: e.badgeColor,
                            fontSize: 15,
                            backgroundColor: e.badgeBackground,
                            borderRadius: 4,
                            padding: 5,
                            fontWeight: 'bold',
                          },
                          //this.textColor(e),
                        ]}>
                        {this.badgeFunction(e.badgeText)}
                      </Text>
                    </View>
                  )}
                </View>
              </TouchableNativeFeedback>
            );
        })}
      </View>
    );

    var accountList = (
      <View
        style={
          {
            //marginTop: 8,
          }
        }>
        {secondAccount.map((user, i) => {
          return (
            <TouchableNativeFeedback
              key={i}
              onPress={this._changeAccount.bind(this, user)}
              delayPressIn={0}
              delayPressOut={0}
              useForeground={true}
              background={RippleColor('#ccc')}>
              <View
                style={[
                  {
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingLeft: 15,
                  },
                  //this.viewBackground(e),
                ]}>
                <AvatarSocial
                  colors={user.circle}
                  dim={70}
                  image={user.image}
                  name={user.name}
                  type="image"
                  isStatus={true}
                  isIcon={false}
                  colorStatus={'#00E676'}
                  badgeText={user.badgeText}
                  badgeColor={user.badgeColor}
                  badgeBackground={user.badgeBackground}
                />
                <Text
                  style={{
                    marginTop: 21,
                    marginLeft: 5,
                    marginBottom: 21,
                    fontSize: 13,
                    textAlign: 'left',
                    fontWeight: 'bold',
                  }}>
                  {user.email}
                </Text>
                {user.badgeText && (
                  <View
                    style={{
                      //backgroundColor: '#f23521',
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                      flex: 1,
                      marginRight: 8,
                    }}>
                    <Text
                      style={[
                        {
                          color: user.badgeColor,
                          fontSize: 15,
                          backgroundColor: user.badgeBackground,
                          borderRadius: 4,
                          padding: 5,
                          fontWeight: 'bold',
                        },
                        //this.textColor(e),
                      ]}>
                      {user.badgeText}
                    </Text>
                  </View>
                )}
              </View>
            </TouchableNativeFeedback>
          );
        })}
      </View>
    );

    var iconCollapsed = this.state.window == 'account' ? 'caret-down' : 'caret-up';

    var navigationView = (
      <ScrollView style={{ flex: 1, backgroundColor: backgroundColor }}>
        {type != 'simple' && (
          <ImageBackground
            source={imageBackground}
            style={{
              width: null,
              height: null,
              paddingBottom: 10,
              marginBottom: 8,
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 30,
                marginLeft: 10,
                marginRight: 10,
                alignItems: 'center',
                //backgroundColor: '#ccc'
              }}>
              <AvatarSocial
                colors={firstAccount.circle}
                dim={90}
                image={firstAccount.image}
                name={firstAccount.name}
                type="image"
                //icon='beer'
                //isStatus={true}
                //isIcon={true}
                //positionBadge={'right'}
                colorStatus={'#00E676'}
                badgeText={firstAccount.badgeText}
                badgeColor={firstAccount.badgeColor}
                badgeBackground={firstAccount.badgeBackground}
              />
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  //backgroundColor: '#fff',
                }}>
                {secondAccount.slice(0, number).map((user, i) => {
                  return (
                    <TouchableNativeFeedback
                      key={i}
                      onPress={this._changeAccount.bind(this, user)}
                      delayPressIn={0}
                      delayPressOut={0}
                      useForeground={true}>
                      <View>
                        <AvatarSocial
                          colors={user.circle}
                          dim={70}
                          image={user.image}
                          name={user.name}
                          type="image"
                          isStatus={true}
                          isIcon={false}
                          colorStatus={'#00E676'}
                          badgeText={user.badgeText}
                          badgeColor={user.badgeColor}
                          badgeBackground={user.badgeBackground}
                          badgeFunction={e => {
                            return e > 99 ? '99+' : e;
                          }}
                        />
                      </View>
                    </TouchableNativeFeedback>
                  );
                })}
              </View>
            </View>
            <TouchableNativeFeedback
              onPress={this._change.bind(this)}
              delayPressIn={0}
              delayPressOut={0}
              useForeground={true}
              background={RippleColor('#ccc')}>
              <View style={{ marginTop: 30 }}>
                <Text
                  style={{
                    //marginTop: 20,
                    marginLeft: 10,
                    fontSize: 15,
                    textAlign: 'left',
                    color: color,
                  }}>
                  {this.first(firstAccount)}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      marginLeft: 10,
                      fontSize: 15,
                      textAlign: 'left',
                      color: color,
                    }}>
                    {this.second(firstAccount)}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                      flex: 1,
                      marginRight: 5,
                    }}>
                    <AnimatedIcon
                      ref={ref => {
                        this.animatable = ref;
                      }}
                      name={iconCollapsed}
                      size={15}
                      color={'#fff'}
                    />
                  </View>
                </View>
              </View>
            </TouchableNativeFeedback>
          </ImageBackground>
        )}
        {this.state.window == 'account' ? accountList : list}
      </ScrollView>
    );
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          backgroundColor={StatusBarColor}
          barStyle="light-content"
          translucent={type != 'simple'}
        />
        <DrawerLayoutAndroid
          drawerWidth={drawerWidth}
          ref={_drawer => (this.drawer = _drawer)}
          drawerPosition={drawerPosition}
          renderNavigationView={() => navigationView}>
          {children}
        </DrawerLayoutAndroid>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
