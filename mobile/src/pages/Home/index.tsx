import React, { useState, useEffect } from 'react'
import { View, ImageBackground, Text, Image, StyleSheet, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import RNPickerSelect from 'react-native-picker-select';

interface IBGEUFresponse {
    sigla: string;
}

interface IBGECityresponse {
    nome: string;
}

interface ListOfItems {
    label: string,
    value: string
}

const Home = () => {
    const [uf, setUf] = useState('')
    const [city, setCity] = useState('')

    const [listOfUf, setListOFUf] = useState<ListOfItems[]>([]);
    const [listOfCity, setListOFCity] = useState<ListOfItems[]>([]);

    const navigation = useNavigation()

    useEffect(() => {
        axios.get<IBGEUFresponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            .then(response => {
                let ufInitials: Array<ListOfItems> = [];
                response.data.map(uf => ufInitials.push({ label: uf.sigla, value: uf.sigla }))
                setListOFUf(ufInitials)
            })
    }, [])

    useEffect(() => {
        axios.get<IBGECityresponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
            .then(response => {
                let cityNames: Array<ListOfItems> = [];
                response.data.map(city => cityNames.push({ label: city.nome, value: city.nome }))
                setListOFCity(cityNames);
            })
    }, [uf])

    function handleNavigatoToPoints() {
        navigation.navigate('Points', {
            uf,
            city: 'Alem Paraiba'
        })
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <ImageBackground
                source={require('../../assets/home-background.png')}
                imageStyle={{ width: 274, height: 368 }}
                style={styles.container}
            >
                <View style={styles.main}>
                    <View>
                        <Image source={require('../../assets/logo.png')} />
                        <Text style={styles.title}>Seu marketplace de coleta de resíduos</Text>
                        <Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</Text>
                    </View>
                </View>

                <View style={styles.footer}>
                    <RNPickerSelect
                        placeholder={{
                            label: 'Selicione uma UF...',
                            value: null,
                        }}
                        onValueChange={(value) => setUf(value)}
                        items={listOfUf}
                    />
                    <RNPickerSelect
                        placeholder={{
                            label: 'Cidades...',
                            value: null,
                        }}
                        onValueChange={(value) => setCity(value)}
                        items={listOfCity}
                    />
                    {/* <TextInput
                        style={styles.input}
                        placeholder="Digite a UF"
                        value={uf}
                        onChangeText={setUf}
                        maxLength={2}
                        autoCapitalize="characters"
                        autoCorrect={false}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Digite a Cidade"
                        value={city}
                        onChangeText={setCity}
                        autoCorrect={false}
                    /> */}
                    <RectButton style={styles.button} onPress={handleNavigatoToPoints}>
                        <View style={styles.buttonIcon}>
                            <Text>
                                <Icon name="arrow-right" color="#FFF" size={24} />
                            </Text>
                        </View>
                        <Text style={styles.buttonText}>Entrar</Text>
                    </RectButton>
                </View>
            </ImageBackground>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
    },

    main: {
        flex: 1,
        justifyContent: 'center',
    },

    title: {
        color: '#322153',
        fontSize: 32,
        fontFamily: 'Ubuntu_700Bold',
        maxWidth: 260,
        marginTop: 64,
    },

    description: {
        color: '#6C6C80',
        fontSize: 16,
        marginTop: 16,
        fontFamily: 'Roboto_400Regular',
        maxWidth: 260,
        lineHeight: 24,
    },

    footer: {},

    select: {},

    input: {
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginBottom: 8,
        paddingHorizontal: 24,
        fontSize: 16,
    },

    button: {
        backgroundColor: '#34CB79',
        height: 60,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 8,
    },

    buttonIcon: {
        height: 60,
        width: 60,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
    }
});

export default Home