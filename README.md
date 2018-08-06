# react-native-esoftplay-fast-image
fast image for react native  : support expo
rendering image with adaptation for device pixel 


### INSTALATION
```
npm install --save react-native-esoftplay-fast-image
```

### USAGE 

```
import FastImage from 'react-native-esoftplay-fast-image'

<FastImage
  source={{uri:blabla}
  style={style properties for Image}
  quality={1} 
  resizeMode={'contain'|'cover'}
  />
```
### PROPS
- source = same as image source props
- quality = float = 0.1 - 1 ( 1 mean one pixel image === 1 pixel display )
- resizeMode = string = only support for contain/cover mode
