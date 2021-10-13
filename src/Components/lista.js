import React, {useState, useEffect} from 'react';
import {Card, ListItem, Avatar} from 'react-native-elements';
import Pokemeen from '../utils/EfectoAwait';

const Lista = ({url, nombre}) => {
  const [pokemon, setPokemon] = useState({});
  const [tipos, setTipos] = useState(['normal']);
  const [sprite, setSprite] = useState(
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/6.png',
  );
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);

  useEffect(() => {
    const uril = url;
    const consultarPoke = async () => {
      try {
        const respuesta = await fetch(uril);
        const resultado = await respuesta.json();
        setPokemon(resultado);
        setPeso(pokemon.weight);
        setAltura(pokemon.height);
      } catch (error) {
        console.error(error);
      }
    };
    consultarPoke();
  });

  return (
    <>
      <Pokemeen pokemon={pokemon} setTipos={setTipos} setSprite={setSprite} />
      <Card containerStyle={{padding: 0}}>
        <ListItem bottomDivider>
          <Avatar source={sprite && {uri: sprite}} />
          <ListItem.Content>
            <ListItem.Title>{nombre}</ListItem.Title>
            <ListItem.Subtitle>{tipos.join('/')}</ListItem.Subtitle>
            <ListItem.Subtitle>
              {peso / 10} Kilogramos/{altura / 10} Metros
            </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </Card>
    </>
  );
};

export default Lista;
