import React, {useEffect} from 'react';
import {View} from 'react-native';
const Pokemeen = ({pokemon, setTipos, setSprite}) => {
  useEffect(() => {
    try {
      setSprite(pokemon.sprites.front_default);
      setTipos(pokemon.types.map(Tipe));
    } catch (error) {
      console.log('Ha fallado la carga');
    }
    const Tipe = tipxs => {
      return [tipxs.type.name];
    };
  });
  return <View></View>;
};

export default Pokemeen;
