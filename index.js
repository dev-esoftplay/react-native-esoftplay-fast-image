import React from '../react'
import { Image, PixelRatio, ImageEditor } from '../../node_modules/react-native/Libraries/react-native/react-native-implementation.js';
import { configConsole } from '../../config'

export default class FastImage extends React.PureComponent {

  state = {
    image: null,
  }

  compress(uri, w, h, callback) {
    var quality = this.props.quality || 1
    var destWidth = this.props.width
    var destHeight = this.props.height
    if (this.props.resizeMode == 'contain') {
      if (destWidth > destHeight) {
        destHeight = h / w * destWidth
      } else {
        destWidth = w / h * destHeight
      }
    }
    ImageEditor.cropImage(uri,
      {
        offset: { x: 0, y: 0 },
        size: {
          width: w,
          height: h
        },
        displaySize: {
          width: PixelRatio.getPixelSizeForLayoutSize(destWidth * quality),
          height: PixelRatio.getPixelSizeForLayoutSize(destHeight * quality)
        },
        resizeMode: 'contain',
      },
      (uri) => callback({ uri: uri }),
      (msg) => configConsole(msg)
    )
  }

  componentDidMount = () => {
    Image.getSize(this.props.uri, (w, h) => {
      this.compress(this.props.uri, w, h, (res) => {
        this.setState({ image: res })
      })
    })
  };

  render() {
    return <Image style={[{ ...this.props.style }, { width: this.props.width, margin: 1, height: this.props.height, resizeMode: this.props.resizeMode || 'cover' }]} source={this.state.image} />
  }
}