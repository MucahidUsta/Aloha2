import { StyleSheet,View } from 'react-native';
import { useState } from 'react';
import { Button,Input,Card,Avatar, FAB,ListItem,Tab, Text, TabView  } from '@rneui/base';

export default function App() {
  const [visible,setVisible] = useState(true)
  const [index, setIndex] = React.useState(0)
  return (
    <View style={styles.container}>
      <ListItem style={{color:"black"}}>
  <ListItem.Content>
    <ListItem.Title>John Doe</ListItem.Title>
    <ListItem.Subtitle>CEO, Example.com</ListItem.Subtitle>
  </ListItem.Content>
</ListItem>
        <FAB
        loading
        visible={visible}
        icon={{ name: "add", color: "white" }}
        size="small"
      />
       <Tab
      value={index}
      onChange={(e) => setIndex(e)}
      indicatorStyle={{
        backgroundColor: 'white',
        height: 3,
      }}
      variant="primary"
    >
      <Tab.Item
        title="Recent"
        titleStyle={{ fontSize: 12 }}
        icon={{ name: 'timer', type: 'ionicon', color: 'white' }}
      />
      <Tab.Item
        title="favorite"
        titleStyle={{ fontSize: 12 }}
        icon={{ name: 'heart', type: 'ionicon', color: 'white' }}
      />
      <Tab.Item
        title="cart"
        titleStyle={{ fontSize: 12 }}
        icon={{ name: 'cart', type: 'ionicon', color: 'white' }}
      />
    </Tab>

    <TabView value={index} onChange={setIndex} animationType="spring">
      <TabView.Item style={{ backgroundColor: 'red', width: '100%' }}>
        <Text h1>Recent</Text>
      </TabView.Item>
      <TabView.Item style={{ backgroundColor: 'blue', width: '100%' }}>
        <Text h1>Favorite</Text>
      </TabView.Item>
      <TabView.Item style={{ backgroundColor: 'green', width: '100%' }}>
        <Text h1>Cart</Text>
      </TabView.Item>
    </TabView>
     <Button title="OK"  color="warning" onPress={()=>alert("Hello RNE")}/>
     <Input placeholder="Enter text here..." />
     <Card>
        <Card.Title>Avatars</Card.Title>
        <Card.Divider />
        <View style={styles.row}>
          <Avatar
            rounded
            source={{ uri: 'https://randomuser.me/api/portraits/men/41.jpg' }}
          />
          <Avatar
            rounded
            title="MD"
            containerStyle={{ backgroundColor: '#6733b9', marginLeft: 10 }}
          />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});