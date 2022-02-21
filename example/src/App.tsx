import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { StatusBar, StyleSheet, View, Text, Image } from 'react-native';
import catNames from 'cat-names';
import { Slider } from '@miblanchard/react-native-slider';
import GridFlatList from '../../src/index';

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fl = useRef(null);

  const fetchCats = () => {
    fetch('https://api.thecatapi.com/v1/images/search?limit=5&page=1')
      .then((res) => res.json())
      .then((response) => {
        let cats = response.map((item) => {
          return {
            id: item.id,
            image: item.url,
            name: catNames.random(),
            rating: 0.5,
          };
        });
        setData(cats);
        // this.setLoading(false);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    fetchCats();
    setTimeout(() => {
      fl.current.setNativeProps({
        style: {
          backgroundColor: 'red',
        },
      });
    }, 5000);
  }, []);

  const getMarkColor = (value: number) => {
    return value > 0.9
      ? '#4caf50'
      : value > 0.8
      ? '#8bc34a'
      : value > 0.6
      ? '#cddc39'
      : value > 0.5
      ? '#ffeb3b'
      : value > 0.4
      ? '#ffeb3b'
      : value > 0.2
      ? '#e91eee'
      : '#e91e63';
  };

  const changeCatRating = (item, rating) => {
    setData((prevData) => {
      return prevData.map((prevItem) => {
        return item.id === prevItem.id
          ? {
              ...item,
              rating,
            }
          : prevItem;
      });
    });
  };

  function renderItem(item: any, index: number) {
    return (
      <View style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.cardImage} />
        <View style={styles.cardContent}>
          <Text style={styles.cardName}>{item.name}</Text>
          <Slider
            onValueChange={(rating) => changeCatRating(item, rating)}
            value={item.rating}
            minimumTrackTintColor={getMarkColor(item.rating)}
          />
          <View style={styles.cardMarkRow}>
            <Text style={styles.cardMark}>Mark:</Text>
            <Text style={{ color: getMarkColor(item.rating) }}>
              {(item.rating * 10).toFixed(2)}
            </Text>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <GridFlatList
        ref={fl}
        data={data}
        renderItem={renderItem}
        paddingHorizontal={10}
        paddingTop={10}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: '#BCBCBC',
  },
  card: {
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    overflow: 'hidden',
    flex: 1,
    height: 240,
    minHeight: 240,
    width: '100%',
    elevation: 5,
  },
  cardImage: {
    height: 120,
    width: '100%',
  },
  cardContent: { padding: 10, width: '100%' },
  cardName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardMarkRow: {
    flexDirection: 'row',
  },
  cardMark: {
    fontWeight: 'bold',
    marginRight: 10,
  },
});
