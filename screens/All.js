import { services } from '../services/services'

import React, { useEffect, useState, TouchableOpacity } from 'react'
import { NativeBaseProvider, FlatList, ScrollView, Divider, Image, Spinner } from 'native-base';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment';
import 'moment/locale/es';
import {
    AbrilFatface_400Regular
} from '@expo-google-fonts/abril-fatface'
import {
    Inter_400Regular
} from '@expo-google-fonts/inter'
import { useFonts } from 'expo-font';

function DetailsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button
                title="Go to Details... again"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}

export default function All() {
    let [fontsLoaded] = useFonts({
        AbrilFatface_400Regular,
        Inter_400Regular
    });

    moment.locale('es')
    const [newsData, setNewsData] = useState([])
    useEffect(() => {
        services('general')
            .then(data => {
                setNewsData(data)
            })
            .catch(error => {
                alert(error)
            })
    }, [])

    return (
        <NativeBaseProvider>
            <ScrollView height={850}>
                <FlatList
                    data={newsData}
                    renderItem={({ item }) => (
                        <View>
                            <View style={styles.newsContainer} >
                                <TouchableOpacity onPress={() => Linking
                                    .openURL('https://link.com')
                                    .catch(err => console.error('Error', err))}>
                                <Image
                                    width={550}
                                    height={250}
                                    resizeMode={"cover"}
                                    source={{
                                        uri: item.urlToImage,
                                    }}
                                    alt="Alternate Text"
                                />
                            </TouchableOpacity>
                            <Text style={styles.title}>
                                {item.title}
                            </Text>
                            <Text style={styles.date}>
                                {moment(item.publishedAt).format('LLL')}
                            </Text>
                            <Text style={styles.newsDescription}>
                                {item.description}
                            </Text>
                        </View>
                        </View>

                    )}
            keyExtractor={(item) => item.id}
                />
        </ScrollView>
        </NativeBaseProvider >
    )
}

const styles = StyleSheet.create({
    newsContainer: {
        marginStart: 10,
        marginEnd: 10,
        padding: 8,
        borderBottomColor: '#c6c6c6',
        borderBottomWidth: 0.6
    },
    title: {
        fontFamily: "AbrilFatface_400Regular",
        fontSize: 18,
        marginTop: 10
    },
    newsDescription: {
        fontSize: 14,
        fontFamily: "Inter_400Regular",
        marginTop: 10
    },
    date: {
        fontFamily: "Inter_400Regular",
        color: '#898787',
        fontSize: 12
    },
});