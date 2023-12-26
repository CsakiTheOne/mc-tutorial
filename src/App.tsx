import React from 'react';
import './App.css';
import Container from './components/Container';
import Quest from './components/Quest';
import Hint from './components/Hint';

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
                <Hint>
                    <p>Put a log into the crafting grid and see what happens.</p>
                </Hint>
            </Quest>
            <Quest icon='wooden-pickaxe' title='Craft a wooden pickaxe'>
                <p>
                    Now you know how to craft planks and crafting table. But there are many more things you can make in the game.
                    The game isn't called Mine<b>craft</b> for nothing. XD
                </p>
                <br />
                <p>
                    For example you can craft sticks with 2 planks.
                    In the crafting grid put 2 planks on top of each other.
                    Also there are recipes that require a larger space.
                    Tap on the crafting table after you put that down to get access to a 3x3 crafting grid.
                </p>
                <br />
                <p>Experiment and try to craft a wooden pickaxe! The shape of the items matter!</p>
                <Hint>
                    <p>You need 3 wooden planks and 2 sticks for a pickaxe.</p>
                </Hint>
            </Quest>
        </Container>
    </>;
}

export default App;
