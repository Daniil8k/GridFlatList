# React Native Grid Flatlist

![downloads](https://img.shields.io/npm/dw/grid-flatlist-react-native)
![weight](https://img.shields.io/bundlephobia/min/grid-flatlist-react-native)
![npm version](https://img.shields.io/npm/v/grid-flatlist-react-native)

Simple **Grid FlatList** with two or more columns.

![Group 23](https://user-images.githubusercontent.com/93822098/154843258-225805bc-a9d3-46ae-8c9d-3c57afe3b340.png)

⭐ The last item is not stretching

⭐ Equal spacing between items

⭐ Shadow around each item is not clipped

⭐ Any [Native FlatList properties](https://reactnative.dev/docs/flatlist#itemseparatorcomponent) are appliable

⭐ Lightweight
### Demo
[![Vector](https://user-images.githubusercontent.com/93822098/154816145-9a68b06b-292a-4b51-a854-7a60d74abaf3.png#gh-dark-mode-only) Grid Flatlist Example](https://snack.expo.dev/@daniil8k/grid-flatlist-example)

[![Vector2](https://user-images.githubusercontent.com/93822098/154816175-b5d6808a-d2b7-46b7-a5f8-53f7f3bd286e.png) Flatlist Example](https://snack.expo.dev/@daniil8k/usual-react-native-flatlist)

## Installation

```sh
npm install grid-flatlist-react-native
```

## Usage

```javascript
import GridFlatList from 'grid-flatlist-react-native';
```
```javascript
<GridFlatList
  data={[1,2,3,4,5,6]}
  renderItem={(item) => (<Text>{item}</Text>)}
  gap={10}
  paddingHorizontal={10} // Shadow around elements will not be clipped
/>
```

### Properties

| Property | Type | Default Value | Description |
|---|---|---|---|
| data  | Array |  | Data to be rendered. |  |
| renderItem | Function |  | Function to render each object.  |
| numColumns | Number | 2  | Number of columns. |
| gap | Number | 12  | Spacing between each item. |
| paddingHorizontal | Number | 0 | Horizontal padding applied to whole list. |
| paddingTop | Number | 0 | Top padding applied to whole list. |
| showsVerticalScrollIndicator | Boolean | false | When true, shows a vertical scroll indicator |
| ... | ... | ... |  Any [Native FlatList properties](https://reactnative.dev/docs/flatlist#itemseparatorcomponent) are appliable. |

## Support

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/dkob2852E)

## License

MIT
