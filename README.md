# react-native-esoftplay-fast-image
* fast image for react native  : support expo



### INSTALATION
```
npm install --save react-native-esoftplay-fast-image
```

### USAGE 

```
import FastImage from 'react-native-esoftplay-fast-image'

<FastImage
  uri={string image uri}
  width={70}
  height={50}
  quality={1} 
  resizeMode={'contain'|'cover'}
  />
```
### PROPS
- uri = string = url image | cannot use require source
- width = integer = dimention width of image
- height = integer = dimention height of image
- quality = float = 0.1 - 1 ( 1 mean one pixel image === 1 pixel display )
- resizeMode = string = only support for contain/cover mode
