import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, View, TextInput,  Text
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import io  from "socket.io-client";
const socket = io('http://10.0.3.2:3000');

function App() {
  const [ chatMessage, setChatMessage ] = useState("");
  const [ chatMessages, setChatMessages ] = useState([]);

  useEffect(() => {
    socket.on('chat message', message => {
      setChatMessages([...chatMessages, message]);
    });
  }, [chatMessages]);

  function submitChatMessage() {
    socket.emit('chat message', chatMessage);
    setChatMessage("");
  }

  function Chat() {
    console.log(typeof(chatMessages));
    chatMessages.map(chatMessage => {
      console.log(chatMessages);

      <Text key={chatMessage}>{chatMessage}</Text>
    });
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={{height: 40, borderWidth: 2}}
        autoCorrect={false}
        value={chatMessage}
        onSubmitEditing={submitChatMessage}
        onChangeText={chatMessage => {
          setChatMessage(chatMessage);
        }}
      />
      {Chat()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  }
});

export default App;
