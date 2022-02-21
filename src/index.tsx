import * as React from 'react';
import { forwardRef, ForwardedRef } from 'react';

import { View, StyleSheet, FlatList, FlatListProps } from 'react-native';

type SimpleSpread<L, R> = R & Pick<L, Exclude<keyof L, keyof R>>;

interface ExtraProps {
  data: any[];
  renderItem: Function;
  numColumns?: number;
  ref?: ForwardedRef<FlatList<any>>;
  gap?: number;
  paddingHorizontal?: number;
  paddingTop?: number;
  showsVerticalScrollIndicator?: boolean;
  keyExtractor?: (item: any, index: number) => string;
}

interface GridFlatListInterface
  extends SimpleSpread<FlatListProps<any>, ExtraProps> {}

const randomKeyExtractor = (item: any, index: number): string => {
  return item.id ? item.id : 'grid-flat-list-item_' + index + Math.random();
};

function GridFlatList({
  ref,
  data,
  renderItem,
  numColumns = 2,
  gap = 12,
  paddingHorizontal = 2,
  paddingTop = 2,
  showsVerticalScrollIndicator = false,
  keyExtractor = randomKeyExtractor,
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
    <FlatList
      ref={ref}
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
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      keyExtractor={keyExtractor}
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
