import * as React from 'react';
import { forwardRef, ForwardedRef } from 'react';

import { View, StyleSheet, FlatList, FlatListProps } from 'react-native';

type SimpleSpread<L, R> = R & Pick<L, Exclude<keyof L, keyof R>>;

interface ExtraProps {
  data: any[];
  renderItem: Function;
  numColumns?: number;
  gap?: number;
  paddingHorizontal?: number;
  paddingTop?: number;
  [others: string]: any;
}

interface GridFlatListInterface
  extends SimpleSpread<FlatListProps<any>, ExtraProps> {}

function GridFlatList({
  data,
  renderItem,
  numColumns = 2,
  gap = 12,
  paddingHorizontal = 2,
  paddingTop = 2,
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

  const getKey = (item: any, index: number) => {
    return item.id ? item.id : 'grid-flat-list-item_' + index + Math.random();
  };

  return (
    <FlatList
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
      keyExtractor={getKey}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});

export default forwardRef(
  (props: GridFlatListInterface, ref: ForwardedRef<FlatList<any>>) =>
    GridFlatList({ ref, ...props })
);
