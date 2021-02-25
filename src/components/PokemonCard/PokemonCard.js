import React, { useState } from 'react'
import { connect } from 'react-redux'
import styles from './PokemonCard.module.css'
import { Card, Col, Image } from 'react-bootstrap';
import { setShow } from '../../redux/actions/modalViewActions'
import { addSelectedPokemon } from '../../redux/actions/pokemonsActions'


const PokemonCard = ({ name, imageIndex, setShow, addSelectedPokemon, modalViewState, url}) => {
  const [pokemonName] = useState(name)
  const [pokemonImageIndex] = useState(imageIndex)
  const [pokemonUrl] = useState(url)
  const [imageURL] = useState('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/')

  const clases = styles

  const handleClick = (e) => {
    addSelectedPokemon({name: pokemonName, imageIndex: pokemonImageIndex, image: `${imageURL}${pokemonImageIndex}.png`}, pokemonUrl)
    setShow(modalViewState)
}

  return (
    <div className={clases.component}>
      <Col>
        <Card className={clases.card} onClick={handleClick}>
          <Image variant="top" src={`${imageURL}${pokemonImageIndex}.png`} className={clases.image} fluid />
          <Card.Footer className={clases.footer}>
            <small className="text-muted">{pokemonName}</small>
          </Card.Footer>
        </Card>
      </Col>
    </div>
  )

}

const mapStateToProps = (state) => {
  return {
    modalViewState: state.modalView.showWindow
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setShow: (oldState) => dispatch(setShow(oldState)),
    addSelectedPokemon: (pokemon, url) => dispatch((addSelectedPokemon(pokemon, url)))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonCard)