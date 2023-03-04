import React, { Component } from "react";
import styled from "styled-components";
import alface from "./imagem/alface.png";
import laranja from "./imagem/laranja.png";
import cereja from "./imagem/cereja.png";
import cenoura from "./imagem/cenoura.png";
import manga from "./imagem/manga.png";
import limao from "./imagem/limao.png";
import beterraba from "./imagem/beterraba.png";
import tomate from "./imagem/tomate.png";

const BoxImages = styled.div`
  border: solid;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15vw;
  height: 30vh;
  background-color: red;
  img {
    width: 20vw;
  }
`;

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  display: flex;
  justify-content: space-evenly;
`;

export default class App extends Component {
  state = {
    Alimentos: [
      { produtosHorti: `${alface}` },
      { nomeDaFruta: " laranja", produtosHorti: laranja },
      { nomeDaFruta: "cereja", produtosHorti: cereja },
      { nomeDaFruta: "cenoura", produtosHorti: cenoura },
      { nomeDaFruta: "manga", produtosHorti: manga },
      { nomeDaFruta: "limão", produtosHorti: limao },
      { nomeDaFruta: "beterraba", produtosHorti: beterraba },
      { nomeDaFruta: "tomate", produtosHorti: tomate }

      // { nomeDaFruta:"maçã" `${alface}`, Titulo: "Alface" },
      // { Imagem: `${laranja}`, Titulo: "Laranja" },
      // { Imagem: `${cereja}`, Titulo: "Cereja" },
      // { Imagem: `${cenoura}`, Titulo: "Cenoura" },
      // { Imagem: `${manga}`, Titulo: "Manga" },
      // { Imagem: `${limao}`, Titulo: "Limão" },
      // { Imagem: `${beterraba}`, Titulo: "Beterraba" },
      // { Imagem: `${tomate}`, Titulo: "Tomate" }
    ]
  };

  render() {
    return (
      <>
        <div className="BoxTitle">
          <h1>HortiWeb</h1>
          <h2>Nossos produtos</h2>
        </div>
        <div>
          <Container>
            {this.state.Alimentos.map((item) => (
              <BoxImages>
                <img src={item.produtosHorti} alt="" />
              </BoxImages>
            ))}
          </Container>
        </div>
        {/* <img src={alface.png} alt="alface" />
        <img src={laranja.png} alt="laranja" />
        <img src={cereja.png} alt="cereja" />
        <img src={cenoura.png} alt="cenoura" />
        <img src={manga.png} alt="manga" />
        <img src={limao.png} alt="limão" />
        <img src={beterraba.png} alt="beterraba" />
        <img src={tomate.png} alt="tomate" /> */}
      </>
    );
  }
}
