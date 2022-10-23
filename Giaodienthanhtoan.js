import React from 'react';
import { Text, View, Image, ImageBackground ,TouchableOpacity} from 'react-native';
import { sum2Number, tru2Number } from '../utilies/Calculation'
import {images} from '../constants'
//component = function
// function MainScreen(props) {
//     return <Text>xin chao cac ban</Text>
// }
// const MainScreen = (props) => {
//     let {x, y} = props;
//     const {person} = props;
//     const {listStudent} = props;
//     return <View style={{
//         backgroundColor: 'black',


//     }}>
//     <Text style={{color: 'white'}}>{sum2Number(x,y)} </Text>
//     <Text style={{color: 'white'}}>{tru2Number(x,y)} </Text>

//     <Text style={{color: 'white'}}>{y} {y} {person.name} {person.age} {person.email}</Text>
//     <Text style={{color: 'white'}}>{y} {y} {person.name} {person.age} {person.email}</Text>
//     {listStudent.map(t => <Text style={{color: 'white'}}>{t.name}</Text>)}
//     </View>
// }
const MainScreen = (props) => {
    return <View style={{
        backgroundColor: 'white',
        flex: 1,
    }}>

        <ImageBackground source={images.background}
            resizeMode='cover'
            style={{
                flex: 100,
            }}
        >
            <View style={{
                flex: 20,
            }}>
                <View style={{
                    flexDirection: 'row',
                    height: 50,
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                }}>
                    <Image source={images.flame}
                        style={{
                            width: 30,
                            height: 30,
                            marginLeft: 10,
                        }}
                    />
                    <Text style={{ color: 'white', marginLeft: 10 }}>TRONGTIN.COM</Text>
                    <View style={{ flex: 1 }}>
                    </View>
                    <Image source={require('../assets/question.png')}
                        style={{
                            width: 20,
                            height: 20,
                            marginLeft: 10,
                            tintColor: 'white',
                            marginRight: 10

                        }}
                    />
                </View>
            </View>
            <View style={{ flex: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    
                }}>
                <Text style={{color: 'white'}}>Welcom to</Text>
                <Text style={{color: 'white',fontWeight:'bold'}}>TRONGTIN.COM</Text>
                <Text style={{color: 'white'}}>Please select your account type</Text>

            </View>
            <View style={{ 
                flex: 40, 
                backgroundColor: 'green',
                }}
            >
                <TouchableOpacity style={{
                    borderColor: 'white',
                    justifyContent: 'center',
                    borderWidth: 1,
                    height: 45,
                    borderRadius: 5,
                    marginHorizontal: 20,
                    marginTop: 20,
                    }}
                >
                    <Text style={{
                        color: 'white',
                        
                        textAlign: 'center',
                        }}
                    >
                        Influencer
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 20, backgroundColor: 'yellow' }}></View>
        </ImageBackground>
    </View>
}
export default MainScreen