import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  LayoutAnimation,
  NativeModules,
  TouchableWithoutFeedback,

} from 'react-native';
import MapView, { Marker, Callout, ProviderPropType } from 'react-native-maps';
import CustomCallout from './CustomCallout';
const { UIManager } = NativeModules;
import GestureRecognizer from './GestureRecognizer';
UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);
const { width, height } = Dimensions.get('window');
import MapViewDirections from 'react-native-maps-directions';
var orangeMarkerImg = require('../Images/15-512.png')
const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;
var CustomLayoutSpring = {
    duration: 300,
    create: {
      type: LayoutAnimation.Types.linear,
      property: LayoutAnimation.Properties.scaleXY,
      springDamping: 0.4,
    },
    update: {
      type: LayoutAnimation.Types.linear,
      springDamping: 0.4,
    },
  };
const origin = {latitude: 37.3318456, longitude: -122.0296002};
const destination = {latitude: 37.771707, longitude: -122.4053769};

var markers = [
    {
        "title": 'BMW_i3',
        "coordinate":{
          "latitude":19.1759668 ,
          "longitude":72.79504659999998
        },
        "away":"3 kms" ,
        "image":"https://media.ed.edmunds-media.com/bmw/i3/2017/oem/2017_bmw_i3_4dr-hatchback_base_fq_oem_6_717.jpg",
        "lat": '19.1759668',
        "lng": '72.79504659999998',
        "cost":" 30 Rs/min",
        "description": 'Aksa Beach is a popular beach and a vacation spot in Aksa village at Malad, Mumbai.'
    },
    {
        "title": 'TeslaModel_X_Crossover',
        "coordinate":{
          "latitude":19.0883595 ,
          "longitude":72.82652380000002
        },
        "away":"2 kms" ,
        "cost":" 40 Rs/min",
        "image":"http://rusautonews.com/wp-content/uploads/2017/07/TeslaModel_X_Crossover_1-800x500_c.jpg",
        "lat": '19.0883595',
        "lng": '72.82652380000002',
        "description": 'Juhu Beach is one of favorite tourist attractions situated in Mumbai.'
    },
    {
        "title": 'eCouAUOag_0',
        "cost":" 20 Rs/min",
        "coordinate":{
          "latitude":18.9542149,
          "longitude":72.81203529999993
        },
        "away":"4 kms" ,
        "image":"https://i.ytimg.com/vi/eCouAUOag_0/hqdefault.jpg",
        "lat": '18.9542149',
        "lng": '72.81203529999993',
        "description": 'Girgaum Beach commonly known as just Chaupati is one of the most famous public beaches in Mumbai.'
    },
    {
        "title": 'tesla-model-3',
        "coordinate":{
          "latitude":18.972006 ,
          "longitude":72.83388300099001
        },
        "away":"7 kms" ,
         "cost":" 25 Rs/min",
        "image":"https://3dnews.ru/assets/external/illustrations/2017/11/23/961930/sm.tesla-model-3-promo.750.jpg",
        "lat": '18.979006',
        "lng": '72.83388300000001',
        "description": 'Jijamata Udyan is situated near Byculla station is famous as Mumbai (Bombay) Zoo.'
    },
    {
        "title": 'fisker',
        "coordinate":{
          "latitude":19.21434678 ,
          "longitude":72.91062090000004
        },
        "away":"2 kms" ,
        "cost":" 60 Rs/min",
        "image":"https://boygeniusreport.files.wordpress.com/2017/06/fisker.jpg?quality=98&strip=all&w=782",
        "lat": '19.2147067',
        "lng": '72.91062020000004',
        "description": 'Sanjay Gandhi National Park is a large protected area in the northern part of Mumbai city.'
    },
    {
        "title": 'tesla-model-3',
        "coordinate":{
          "latitude":18.9793406 ,
          "longitude":72.833884700001
        },
        "away":"7 kms" ,
         "cost":" 25 Rs/min",
        "image":"https://3dnews.ru/assets/external/illustrations/2017/11/23/961930/sm.tesla-model-3-promo.750.jpg",
        "lat": '18.979006',
        "lng": '72.83388300000001',
        "description": 'Jijamata Udyan is situated near Byculla station is famous as Mumbai (Bombay) Zoo.'
    },
    {
        "title": 'fisker',
        "coordinate":{
          "latitude":19.21477878 ,
          "longitude":72.91062890000004
        },
        "away":"2 kms" ,
        "cost":" 60 Rs/min",
        "image":"https://boygeniusreport.files.wordpress.com/2017/06/fisker.jpg?quality=98&strip=all&w=782",
        "lat": '19.2147067',
        "lng": '72.91062020000004',
        "description": 'Sanjay Gandhi National Park is a large protected area in the northern part of Mumbai city.'
    },
    {
        "title": 'tesla-model-3',
        "coordinate":{
          "latitude":18.979006 ,
          "longitude":72.833888900000001
        },
        "away":"7 kms" ,
         "cost":" 25 Rs/min",
        "image":"https://3dnews.ru/assets/external/illustrations/2017/11/23/961930/sm.tesla-model-3-promo.750.jpg",
        "lat": '18.979006',
        "lng": '72.83388300000001',
        "description": 'Jijamata Udyan is situated near Byculla station is famous as Mumbai (Bombay) Zoo.'
    },
    {
        "title": 'fisker',
        "coordinate":{
          "latitude":19.21470778 ,
          "longitude":72.91002020000004
        },
        "away":"2 kms" ,
        "cost":" 60 Rs/min",
        "image":"https://boygeniusreport.files.wordpress.com/2017/06/fisker.jpg?quality=98&strip=all&w=782",
        "lat": '19.2147067',
        "lng": '72.91062020000004',
        "description": 'Sanjay Gandhi National Park is a large protected area in the northern part of Mumbai city.'
    },
    {
        "title": 'tesla-model-3',
        "coordinate":{
          "latitude":18.979066 ,
          "longitude":72.83388300000001
        },
        "away":"7 kms" ,
         "cost":" 25 Rs/min",
        "image":"https://3dnews.ru/assets/external/illustrations/2017/11/23/961930/sm.tesla-model-3-promo.750.jpg",
        "lat": '18.979006',
        "lng": '72.83388300000001',
        "description": 'Jijamata Udyan is situated near Byculla station is famous as Mumbai (Bombay) Zoo.'
    },
    {
        "title": 'fisker',
        "coordinate":{
          "latitude":19.21470478 ,
          "longitude":72.91062025000004
        },
        "away":"2 kms" ,
        "cost":" 60 Rs/min",
        "image":"https://boygeniusreport.files.wordpress.com/2017/06/fisker.jpg?quality=98&strip=all&w=782",
        "lat": '19.2147067',
        "lng": '72.91062020000004',
        "description": 'Sanjay Gandhi National Park is a large protected area in the northern part of Mumbai city.'
    }
    ];
class Callouts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
       w: width,
       h: 150,
       imagewidth:150,
       imageHeight:150,
       justifyContent:'flex-start',
       imageContentwidth:width-150,
       padding:0,
      show:false,
      open:false,
      flexDirection:'row',
      showDetail:false,
      region: {
        latitude: 18.9542149,
        longitude: 72.83388300000001,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      markers: [
        {
          coordinate: {
            latitude: LATITUDE + SPACE,
            longitude: LONGITUDE + SPACE,
          },
        },
        {
          coordinate: {
            latitude: LATITUDE,
            longitude: LONGITUDE,
          },
        },
        {
          coordinate: {
            latitude: LATITUDE + SPACE,
            longitude: LONGITUDE - SPACE,
          },
        },
      ],
      markers2:markers
    };
  }

  show() {
    this.marker1.showCallout();
  }

  hide() {
    this.marker1.hideCallout();
  }

  markerClick(data){
    this.setState({
      showDetail:true,
      detailData:data,
      selectedmarker:data.coordinate,

    })
     // let concatLot = data.coordinate.latitude +","+data.coordinate.longitude
     // this.getDirections(concatLot,"-6.270565,106.759550")

  }
  _onPress(){
    // Animate the update
    if (!this.state.open) {
    LayoutAnimation.configureNext(CustomLayoutSpring);
     this.setState({padding:15,imageContentwidth:width,justifyContent:'space-between',flexDirection:'column',open:true,h:height-80,imageHeight:this.state.imageHeight+100,imagewidth:width})
    }else{
      LayoutAnimation.configureNext(CustomLayoutSpring);
      this.setState({
        flexDirection:'row',
        open:false,
        h:150,
        justifyContent:'flex-start',
        imageHeight:150,
        imagewidth:150,
        padding:0,
        imageContentwidth:width-150,
      })
    }
  }

  watchID: ?number = null;

   componentDidMount(){
       navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log(position);
                    this.setState({
                        region: {
                            longitude: position.coords.longitude,
                            latitude: position.coords.latitude,
                            latitudeDelta: LATITUDE_DELTA,
                            longitudeDelta: LONGITUDE_DELTA
                        }
                    });
                },
                (error) => console.log(new Date(), error),
                {enableHighAccuracy: false, timeout: 10000, maximumAge: 3000}
            );
      this.watchID = navigator.geolocation.watchPosition((position)=> {
         const lastPosition = JSON.stringify(position);
         this.setState({ lastPosition });
      });
   }
   componentWillUnmount () {
      // navigator.geolocation.clearWatch(this.watchID);
   }

  onSwipeUp(gestureState) {
    if (!this.state.open) {
    LayoutAnimation.configureNext(CustomLayoutSpring);
     this.setState({padding:15,imageContentwidth:width,justifyContent:'space-between',flexDirection:'column',open:true,h:height-60,imageHeight:this.state.imageHeight+100,imagewidth:width})
    }else{
      return;
    }
  }
  
   onSwipeDown(gestureState) {
    if (this.state.open) {
    LayoutAnimation.configureNext(CustomLayoutSpring);
      this.setState({
        flexDirection:'row',
        open:false,
        h:150,
        justifyContent:'flex-start',
        imageHeight:150,
        imagewidth:150,
        padding:0,
        imageContentwidth:width-150,
      })
    }else{
      return;
    }
  }

  buttons(){
    if (this.state.open) {
      return(
        <View style={{flexDirection:'row',justifyContent:'space-between',flex:0.5}}>
           <TouchableOpacity style={{justifyContent:'center',alignItems:'center', width:120,height:50,backgroundColor:"white",marginTop:10,borderColor:"#0099FF",borderWidth:2,}}><Text style={{color:"#0099FF",fontWeight:'600'}}>RESERVE</Text></TouchableOpacity>
           <TouchableOpacity style={{justifyContent:'center',alignItems:'center',width:120,height:50,backgroundColor:"#0099FF",marginTop:10}}><Text style={{color:"white",fontWeight:'600'}}>START</Text></TouchableOpacity>
        </View>
        )
    }else{
      return;
    }
  }

  showDatalist(){
    if (this.state.showDetail) {
      console.log('this.state.detailData.image',this.state.detailData.image);
      var data = this.state.detailData.image;
    return(
     <GestureRecognizer
       onSwipeUp={(state) => this.onSwipeUp(state)} onSwipeDown={(state) => this.onSwipeDown(state)} >

      <TouchableWithoutFeedback  onPress={()=>this._onPress()}>
      
      <View style={{ shadowColor: '#000', shadowOffset: { width: 0, height:-20 },shadowOpacity: 0.8,shadowRadius: 10,elevation: 10,height:this.state.h,width:width,backgroundColor:'white',flexDirection:this.state.flexDirection}}>
        <Image source = {{uri:data}} style={{height:this.state.imageHeight,width:this.state.imagewidth}}></Image>
        <View style={{padding :this.state.padding,justifyContent:this.state.justifyContent, flexDirection:"column",backgroundColor:'white',width:this.state.imageContentwidth,height:height-this.state.imageHeight-50}}>
          <Text style={{marginTop:10,fontSize:20,paddingLeft:5,fontWeight:"500"}}>{this.state.detailData.title}</Text>
          <Text style={{marginTop:10,fontSize:15,paddingLeft:5,fontWeight:"300"}}>{this.state.detailData.description}</Text>
          <View style={{flexDirection:'row',paddingLeft:5,justifyContent:'space-between',marginTop:10}}>
           <Text style={{fontSize:12,fontWeight:"500"}} >{this.state.detailData.away} away</Text>
           <Text style={{fontSize:12,fontWeight:"500",marginRight:5}}>{this.state.detailData.cost}</Text>
          </View>
          <View style={{flex:0.5}}>
          {this.buttons()}
          </View>
         </View>
        </View>
        </TouchableWithoutFeedback>
         </GestureRecognizer>
      )
  }else{
    return;
  }
  }

   async getDirections(startLoc, destinationLoc) {

         try {
             let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${ startLoc }&destination=${ destinationLoc }`)
             let respJson = await resp.json();
             let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
             let coords = points.map((point, index) => {
                 return  {
                     latitude : point[0],
                     longitude : point[1]
                 }
             })
             this.setState({coords: coords})
             this.setState({x: "true"})
             return coords
         } catch(error) {
           console.log('masuk fungsi')
             this.setState({x: "error"})
             return error
         }
     }

  render() {
    const { region, markers } = this.state;
    return (
      <View style={styles.container}>
        <MapView
          provider={this.props.provider}
          style={styles.map}
          initialRegion={region}

        >
         {this.state.markers2.map((marker, i) => (
            <MapView.Marker
              key={i}
              image={require('../Images/download.png')}
              coordinate={marker.coordinate}
              onPress={() => this.markerClick(marker)}
            />
         ))}
          <MapView.Marker
              image={orangeMarkerImg}
              coordinate={region}
               style={{ width: 10, height: 10 }}
            />
          <MapViewDirections

            origin={this.state.region}
            destination={this.state.selectedmarker}
            strokeWidth={5}
            strokeColor="#0099FF"
            mode="transit"
            apikey={"AIzaSyC6CgW0LkH927bM3pEWmUL_4hM3MpZEC2s"}
          />
        </MapView>
       
        {this.showDatalist()}
      </View>
    );
  }
}

Callouts.propTypes = {
  provider: ProviderPropType,
};

const styles = StyleSheet.create({
  customView: {
    width: 140,
    height: 100,
  },
  plainView: {
    width: 60,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    marginTop:10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
});

export default Callouts;