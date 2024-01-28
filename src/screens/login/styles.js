import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#fff',
      alignItems:'center',
      height:'100%'
    },
    top:{
      height:'50%',
      width:'100%'
    },  
    imgTop:{
      height:'100%',
      width:'100%'
    },
    formBox:{
      height:'50%',
      width:'100%',
      padding:'50px',
      display:'flex',
      flexDirection:'column',
      gap:'10px'
    },
    inptAndLabel:{
      width:'100%',
      height:'33.3%',
      alignItems:'center',
      fontSize:'12pt',
      fontWeight:'bold',
      display:'flex',
      flexDirection:'column',
      gap:'10px'
    },
    inpt:{
      border:'1px solid #146400',
      borderRadius:'15px',
      height:'3.5em',
      width:'100%',
      textAlign:'left',
      padding:'10px',
      fontWeight:"bold",
      color:'#146400',

    },
    button:{
      
      backgroundColor:'#146400',
      borderRadius:'30px',
      width:'80%',
      height:'3em',
    },
    textButton:{
      fontWeight:'bold',
      color:'white',
      textAlign:'center',
      padding:'1em'
    },
    label:{
      color:'#146400',
      fontWeight:'bold',
      fontSize:'14pt',
      marginRight:'70%'
    },
    button1:{
      border:'1px solid #146400',
      borderRadius:'30px',
      width:'80%',
      height:'3em',
    
    },
    textButton1:{
      fontWeight:'bold',
      color:'#146400',
      textAlign:'center',
      padding:'1em'
    }
   
    
  });

  export default styles;