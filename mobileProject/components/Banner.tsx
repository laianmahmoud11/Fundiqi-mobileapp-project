import * as React from 'react';
import { Image } from 'react-native';
import { Banner } from 'react-native-paper';

const Message = ({image,Text}:any) => {
  const [visible, setVisible] = React.useState(true);

  return (
    <Banner
      visible={visible}
        
      actions={[
        {
          label: "Close",
          onPress: () => setVisible(false),
        },
        {
          label: 'Find out more',
          onPress: () => setVisible(false),
        },
      ]}
      icon={({size}) => (
        <Image
          source={image}
          style={{
            width: size,
            height: size,
          }}
        />
      )}
          style={{backgroundColor:"#ffff", borderColor:"#E9E9E9" , width:"95%", alignSelf:"center" , margin:5 , borderRadius:10}}

      >
      
    
    
        {Text}

    </Banner>
  );
};

export default Message;