import React from 'react';
import './App.css';
import Container from './components/Container';
import Quest from './components/Quest';

function App() {
    return <>
        <Container>
            <h1>Minecraft Tutorial Quests</h1>
            <Quest icon='oak-log' title='Get some wood'>
                <p>Use your hands to punch a tree until a block of wood comes off.</p>
                <p>
                    Don't leave floating trees around, Csáki doesn't like those XD
                    Don't worry, the leaves will disappear.
                </p>
            </Quest>
            <Quest icon='crafting-table' title='Craft a crafting table'>
                <p>Open your inventory and place 4 planks to your crafting grid (the 2x2 area).</p>
                <p>Okay, but how do you get planks? Well, you have logs now, you can craft, figure it out :P</p>
            </Quest>
        </Container>
    </>;
}

export default App;
