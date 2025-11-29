import React, {useContext, useState} from 'react' 
import { FlashContext } from '../../src/contexts/FlashContext';
import {useRouter} from 'expo-router'
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

export default function CreateDeckModal(){
    const [title, setTitle] = useState("");
    const {createDeck} = useContext(FlashContext)
    const router = useRouter();

    // const handleCreate = () => {
    //     if(!title.trim()) return;
    //     createDeck(title.trim());
    //     router.back();
    // };

    const handleCreate = async () => {
    if (!title.trim()) return;

    try {
      const res = await fetch(`${BASE_URL}/api/decks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: title.trim() }),
      });

      if (!res.ok) {
        const data = await res.json();
        Alert.alert('Error', data.error || 'Failed to create deck');
        return;
      }

      router.back(); // close modal after success
    } catch (err) {
      console.error(err);
      Alert.alert('Error', 'Failed to connect to backend');
    }
  };

    return(
        <View style={styles.container}>
            <Text style = {styles.label}> New Deck Title</Text>
            <TextInput 
                style={styles.input}
                placeholder="Enter deck title"
                value = {title}
                onChangeText={setTitle}
            />
            <Button title="Create Deck" onPress={handleCreate}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:16,
        justifyContent:"center",
        backgroundColor:"#fff",
    },
    label:{
        fontSize: 18,
        marginBottom: 8,
    },
    input:{
        borderWidth: 1,
        borderColor:"#ccc",
        borderRadius: 8,
        padding:12,
        marginBottom:16,
    },
});