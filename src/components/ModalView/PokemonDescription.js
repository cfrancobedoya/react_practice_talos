import React from 'react'
import styles from './ModalView.module.css'
import { Modal, Image, Row, Col, Table, Button } from 'react-bootstrap';
import ChartTool from '../ChartTool'

const PokemonDescription = ({ keepPokemon, selectedPokemons, modalViewState, cleanPokemonArray }) => (
  <Modal
    size='m'
    show={modalViewState}
    onHide={cleanPokemonArray}
    aria-labelledby='example-modal-sizes-title-lg'
  >
    <Modal.Header closeButton>
      <Modal.Title id='example-modal-sizes-title-lg'>
        {selectedPokemons.map((pokemon, index = 1) => {
          return (
            <div key={index + Math.random()}>
              {String(pokemon.name).toUpperCase()}
              <Button className={styles.modalButton} onClick={keepPokemon} variant='secondary'>Compare to...</Button>
            </div>
          )
        })}
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {selectedPokemons.map((pokemon, index = 1) => {
        return (
          <div key={index + Math.random()}>
            <div>
              <Row>
                <Col xs={4} md={4}>
                  <Image variant='top' src={`${pokemon.image}`} className={styles.image} fluid />
                </Col>
                <Col xs={8} md={8}>
                  {pokemon.flavor_text_entries[1].flavor_text}
                  <hr />
                  <Table borderless size='sm'>
                    <thead>
                      <tr>
                        <th>Height</th>
                        <th>Weight</th>
                        <th>Gender</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{pokemon.height}m</td>
                        <td>{pokemon.weight}kg</td>
                        <td>{selectedPokemons[0].gender}</td>
                      </tr>
                    </tbody>
                  </Table>
                  <Table borderless size='sm'>
                    <thead>
                      <tr>
                        <th>Abilities</th>
                        <th>Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <ul>
                            {
                              pokemon.abilities.map((abilities) => {
                                return (
                                  <li key={abilities.ability.name}>
                                    {abilities.ability.name}
                                  </li>
                                )
                              })
                            }
                          </ul>
                        </td>
                        <td>
                          <ul>
                            {
                              pokemon.types.map((types) => {
                                return (
                                  <li key={types.type.name}>
                                    {types.type.name}
                                  </li>
                                )
                              })
                            }
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
              <hr />
              <h1 className={styles.name}>Stats</h1>
              <ChartTool
                stats={pokemon.stats.map((stat) => {
                  return stat.stat.name
                })}
                bases={pokemon.stats.map((stat) => {
                  return stat.base_stat
                })}
                name={pokemon.name}
                color={
                  pokemon.color.name === 'white' ? 'black' : pokemon.color.name
                }
              />
            </div>

          </div>
        )
      })}
    </Modal.Body>
  </Modal>
)

export default PokemonDescription
