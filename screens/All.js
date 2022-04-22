import { services } from '../services/services'

import React, { useEffect, useState, TouchableOpacity } from 'react'
import { NativeBaseProvider, FlatList, ScrollView, Divider, Image, Spinner } from 'native-base';
import { View, Text, StyleSheet, Linking } from 'react-native';
import moment from 'moment';
import 'moment/locale/es';
import {
    AbrilFatface_400Regular
} from '@expo-google-fonts/abril-fatface'
import {
    Inter_400Regular
} from '@expo-google-fonts/inter'
import { useFonts } from 'expo-font';
import DetailScreen from './Detail';
import { useNavigation } from "@react-navigation/native";

export default function All() {
    let [fontsLoaded] = useFonts({
        AbrilFatface_400Regular,
        Inter_400Regular
    });
    moment.locale('es')
    const navigation = useNavigation();
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
                                <Image
                                    width={550}
                                    height={250}
                                    resizeMode={"cover"}
                                    source={{
                                        uri: item.urlToImage,
                                    }}
                                    alt="Alternate Text"
                                />

                                <Text style={styles.title} onPress={() => {
                                    navigation.navigate('Detail', { name: 'test' });
                                }}>
                                    {item.title}
                                </Text>
                                <Text style={styles.date}>
                                    {moment(item.publishedAt).format('LLL')} | {item.source.name}
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