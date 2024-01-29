import {StyleSheet} from 'react-native';
const green='#146400';

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        height:'100%',
        width:'100%',
        
      },
      top:{
        height:'20%',
        width:'100%',
      },
      imgTop:{
        height:'100%',
        width:'100%',
      },
      titleBox:{
        width:"100%",
        height:"250px",
        padding:'50px'
      },  
      title:{
        fontSize:'40pt',
        fontWeight:'bold',
        color:green,
        fontFamily:'Arial, Helvetica, sans-serif',
      },
      subTitle:{
        fontFamily:'Arial, Helvetica, sans-serif',
        fontSize:'18pt',
        color:green
      },
      formBox:{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        padding:'20px',
        gap:'20px'
      },
      lineForm:{
        width:'100%',
        alignItems:'center',
        textAlign:'left'
      },
      inpt:{
        border:'2px solid #146400',
        borderRadius:'15px',
        height:'3.5em',
        width:'80%',
        fontSize:'12pt',
        color:'black',
        padding:'20px'
      },
      label:{
        textAlign:'left',
        fontSize:'17pt',
        padding:"10px"
      },
      button:{
        height:'5em',
        backgroundColor:green,
        width:'80%',
        borderRadius:'50px',

      },
      buttonText:{
        color:'white',
        fontSize:'15pt',
        fontWeight:'bold',
        textAlign:'center',
        padding:'1em'
      }
    }
)
    
export default styles;