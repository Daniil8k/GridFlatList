# React Native Grid Flatlist

![npm version](https://img.shields.io/npm/v/grid-flatlist-react-native.svg?colorB=brightgreen&style=flat-square)

Simple wrapper for the [FlatList](https://reactnative.dev/docs/flatlist#itemseparatorcomponent) 

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
  paddingHorizontal={10}
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

#### Any [FlatList properties](https://reactnative.dev/docs/flatlist#itemseparatorcomponent) are appliable
## License

MIT
