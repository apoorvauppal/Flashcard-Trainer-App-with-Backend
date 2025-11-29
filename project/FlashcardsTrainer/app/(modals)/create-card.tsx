import React, {useState, useContext} from 'react'
import { FlashContext } from '../../src/contexts/FlashContext';
import { useRouter } from 'expo-router';
import { useLocalSearchParams } from 'expo-router/build/hooks';
import { View, StyleSheet, Text, TextInput, Button, Alert } from 'react-native';
import { BASE_URL } from '../../src/config';

export default function CreateCardModal(){
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const {addCardToDeck} = useContext(FlashContext);
    const router = useRouter();
    const {deckId} = useLocalSearchParams<{deckId: string}>();

    // const handleCreate = () => {
    //     if(!question.trim() || !answer.trim() || !deckId) return;
    //     addCardToDeck(deckId, {question: question.trim(), answer: answer.trim()});
    //     router.back();
    // };

      const handleCreate = async () => {
        if (!question.trim() || !answer.trim() || !deckId) return;

        try {
          const res = await fetch(`${BASE_URL}/api/decks/${deckId}/cards`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ question: question.trim(), answer: answer.trim() }),
          });

          if (!res.ok) {
            const data = await res.json();
            Alert.alert('Error', data.error || 'Failed to create card');
            return;
          }

          router.back(); // close modal after success
        } catch (err) {
          console.error(err);
          Alert.alert('Error', 'Failed to connect to backend');
        }
      };


    return (
    <View style={styles.container}>
      <Text style={styles.label}>New Card</Text>
      <TextInput
        style={styles.input}
        placeholder="Question"
        value={question}
        onChangeText={setQuestion}
      />
      <TextInput
        style={styles.input}
        placeholder="Answer"
        value={answer}
        onChangeText={setAnswer}
      />
      <Button title="Create Card" onPress={handleCreate} />
    </View>
  );


}


const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:16,
        justifyContent:"center",
        backgroundColor: "#fff",
    },
    label:{
        fontSize:18,
        marginBottom: 8,
        textAlign:"center",
    },
    input:{
        borderWidth:1,
        borderColor:"#ccc",
        borderRadius:8,
        padding:12,
        marginBottom:16,
    },
});