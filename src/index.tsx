import * as React from 'react';

import { View, StyleSheet, FlatList } from 'react-native';

interface GridFlatListInterface extends FlatList<any> {
  data: any[];
  renderItem: Function;
  numColumns?: number;
  gap?: number;
  paddingHorizontal?: number;
  paddingTop?: number;
}

export default function GridFlatList({
  data,
  renderItem,
  numColumns = 2,
  gap = 12,
  paddingHorizontal = 0,
  paddingTop = 0,
  ...props
}: GridFlatListInterface) {
  const firstRowElementStyle = (index: number) => {
    if (index < numColumns) {
      return {
        paddingTop,
      };
    }

    return null;
  };

  const lastRowChildStyle = (index: number) => {
    if ((index + 1) % numColumns === 0) {
      return { paddingRight: paddingHorizontal, paddingLeft: 0 };
    }
    return null;
  };

  const lastOddChildStyle = (index: number) => {
    if (index + 1 === data.length && (index + 1) % 2 !== 0) {
      return {
        paddingRight: gap + paddingHorizontal,
      };
    }

    return null;
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.container}
        columnWrapperStyle={styles.row}
        data={data}
        numColumns={numColumns}
        renderItem={({ item, index }) => (
          <View
            style={[
              {
                flex: 1 / numColumns,
                paddingLeft: paddingHorizontal,
                paddingBottom: gap,
                paddingRight: gap,
              },
              firstRowElementStyle(index),
              lastRowChildStyle(index),
              lastOddChildStyle(index),
            ]}
          >
            {renderItem(item, index)}
          </View>
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_item, index) => 'grid-list-item_' + index}
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  container: {
    flex: 1,
  },
});
