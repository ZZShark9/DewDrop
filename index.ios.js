/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ListView,
  Navigator
} from 'react-native';

import Button from 'react-native-button';

class SongListView extends Component {
  constructor(props) {
    super(props);

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['Harlem Shake - Bauuer', 'You & Me - Flume Remix', 'Barney Theme Song - Zane'])
    };
  }

  chooseSong() {
    this.props.navigator.push({id: 2});
  }

  renderRow(data) {
    let chooseSong = this.chooseSong.bind(this);
    return (
      <View>
        <Text>{data}</Text>
        <Button onPress={chooseSong}>Use this Song</Button>
      </View>
    );
  }

  render() {
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
        />
      </View>
    );
  }
}

class SongView extends Component {
  _goBack() {
    this.props.navigator.pop();
  }

  render() {
    let goBack = this._goBack.bind(this);
    return (
      <View>
        <Text>Song View</Text>
        <Button onPress={goBack}>Back to list view</Button>
      </View>
    );
  }
}

class DewDrop extends Component {
  _renderScene(route, navigator) {
    if (route.id === 1) {
      return (
        <SongListView navigator={navigator} />
      );
    } else if (route.id === 2) {
      return (
        <SongView navigator={navigator} />
      );
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{id: 1}}
        renderScene={this._renderScene}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('DewDrop', () => DewDrop);
