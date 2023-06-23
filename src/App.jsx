import './App.css';
import React from 'react';

import Mega from './components/mega/Mega';
import Contador from './components/contador/Contador';
import Input from './components/formulario/Input';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import DiretaPai from './components/comunicacao/DiretaPai';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import ParOuImpar from './components/condicional/ParOuImpar';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ListaAlunos from './components/repeticao/ListaAlunos';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia';
import Membro from './components/basicos/Membro'

export default _ =>
    <div className='App'>
        <div className='top'>
            <img src="logo192.png" />
            <h1>FUNDAMENTOS REACTJS</h1>
        </div>

        <div className='Cards'>
            <Card titulo="#13 Desafio Mega">
                <Mega></Mega>
            </Card>

            <Card titulo="#12 Contador" color="black">
                <Contador numeroInicial={0}></Contador>
            </Card>

            <Card titulo="#11 Componente Controlado">
                <Input></Input>
            </Card>

            <Card titulo="#10 - Comunicação Indireta" color="black">
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="#09 - Comunicação Direta">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#08 - Renderização Condicional 2" color="black">
                <UsuarioInfo usuario={{ nome: 'Ruan' }}></UsuarioInfo>
                <UsuarioInfo usuario={{ email: 'ruan@email.com' }}></UsuarioInfo>
                <UsuarioInfo usuario={{}}></UsuarioInfo>
            </Card>

            <Card titulo="#08 - Renderização Condicional">
                <ParOuImpar></ParOuImpar>
            </Card>

            <Card titulo="#07 - Desafio Repetição" color="black">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#06 - Repetição">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#05 - Componente com filhos" color="black">
                <Familia sobrenome="Sobrenome">
                    <Membro nome="Nome1"></Membro>
                    <Membro nome="Nome2" sobrenome="Sobrenome2"></Membro>
                    <Membro nome="Nome3"></Membro>
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Random">
                <Aleatorio a={1} b={11} />
            </Card>

            <Card titulo="#03 - Fragment" color="black">
                <Fragmento></Fragmento>
            </Card>

            <Card titulo="#02 - Parametro">
                <ComParametro titulo="Componente com parametro" pessoa="Kayro" lang="React" />
            </Card>

            <Card titulo="#01 - Componente" color="black">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>