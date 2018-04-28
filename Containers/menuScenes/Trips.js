import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ListView,
  Dimensions,
  Image
} from 'react-native'
let width = Dimensions.get('window').width;
import NavBarCHild from './navBarChild';

    data = [{ 
        "img" : "../../Images/2004_Porsche_911_Carrera_type_997.jpg",
        "manufacturer" : "Porsche",
        "model" : "911",
        "price" : 135000,
        "quality" : [{ 
            "name" : "overall",
            "rating" : 1
        },{ 
            "name" : "mechanical",
            "rating" : 4
        },{ 
            "name" : "powertrain",
            "rating" : 2
        },{ 
            "name" : "body",
            "rating" : 4
        },{ 
            "name" : "interior",
            "rating" : 3
        },{ 
            "name" : "accessories",
            "rating" : 2
        }],
        "wiki" : "http://en.wikipedia.org/wiki/Porsche_997"
    },{ 
        "img" : "../../Images/250px-Nissan_GT-R.jpg",
        "manufacturer" : "Nissan",
        "model" : "GT-R",
        "price" : 80000,
        "quality" : [{ 
            "name" : "overall",
              "rating" : 2
            },
            { "name" : "mechanical",
              "rating" : 3
            },
            { "name" : "powertrain",
              "rating" : 5
            },
            { "name" : "body",
              "rating" : 4
            },
            { "name" : "interior",
              "rating" : 2
            },
            { "name" : "accessories",
              "rating" : 2
            }
        ],
        "wiki" : "http://en.wikipedia.org/wiki/Nissan_Gt-r"
    },{ 
        "img" : "../../Images/250px-BMW_M3_E92.jpg",
        "manufacturer" : "BMW",
        "model" : "M3",
        "price" : 60500,
        "quality" : [ { "name" : "overall",
              "rating" : 3
            },
            { "name" : "mechanical",
              "rating" : 5
            },
            { "name" : "powertrain",
              "rating" : 3
            },
            { "name" : "body",
              "rating" : 4
            },
            { "name" : "interior",
              "rating" : 5
            },
            { "name" : "accessories",
              "rating" : 3
            }
        ],
        "wiki" : "http://en.wikipedia.org/wiki/Bmw_m3"
    },{ 
        "img" : "../../Images/250px-Audi_S5.jpg",
        "manufacturer" : "Audi",
        "model" : "S5",
        "price" : 53000,
        "quality" : [ { "name" : "overall",
              "rating" : 4
            },
            { "name" : "mechanical",
              "rating" : 1
            },
            { "name" : "powertrain",
              "rating" : 1
            },
            { "name" : "body",
              "rating" : 4
            },
            { "name" : "interior",
              "rating" : 1
            },
            { "name" : "accessories",
              "rating" : 5
            }
        ],
        "wiki" : "http://en.wikipedia.org/wiki/Audi_S5#Audi_S5"
    },{ 
        "img" : "../../Images/250px-2007_Audi_TT_Coupe.jpg",
        "manufacturer" : "Audi",
        "model" : "TT",
        "price" : 40000,
        "quality" : [{ 
            "name" : "overall",
              "rating" : 5
            },
            { "name" : "mechanical",
              "rating" : 2
            },
            { "name" : "powertrain",
              "rating" : 2
            },
            { "name" : "body",
              "rating" : 3
            },
            { "name" : "interior",
              "rating" : 4
            },
            { "name" : "accessories",
              "rating" : 1
            }
        ],
        "wiki" : "http://en.wikipedia.org/wiki/Audi_TT"
    }]


export default class Menu1 extends Component {

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(data),
      data :data,
    };
  }
 

 renderRow(rowData){
   return(

    <View style={{height:50,width:width,marginTop:10,backgroundColor:'grey',flexDirection:'row'}}>
      <View style={{height:50,width:50,backgroundColor:'red',}}>
      <Image
          style={styles.stretch}
          source={require('../../Images/250px-2007_Audi_TT_Coupe.jpg')}
        />
      </View>
      <View style={{height:50,width:50,backgroundColor:'blue',}}></View>
     <View style={{height:50,width:50,backgroundColor:'green',}}></View>
     <View style={{height:50,width:50,backgroundColor:'red',}}></View>
    </View>
    )
 }

  render() {
    return(
      <View style={styles.container}>
      <View style={{height:50,width:width}}>
        <NavBarCHild navigation={this.props.navigation} title={"Trips"}/>
      </View>
        <ListView
       
        dataSource={this.state.dataSource}
        renderRow={(rowData) => this.renderRow(rowData)}
      />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2ecc71',
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
  btnContainer: {
    width: 200,
    height: 40,
    marginTop: 20,
    backgroundColor: 'rgba(0,0,0,.3)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold'
  }
})