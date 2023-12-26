import React from 'react';
import './App.css';
import Container from './components/Container';
import Quest from './components/Quest';
import Hint from './components/Hint';
import McIcon from './components/McIcon';

function App() {
    return <>
        <Container>
            <h1>Minecraft Tutorial Quests</h1>
            <h2>The first day</h2>
            <Quest icon='oak-log' title='Get some wood'>
                <p>Use your hands to punch a tree until a block of wood comes off.</p>
                <p>
                    Don't leave floating trees around, Csáki doesn't like those XD
                    Don't worry, the <McIcon icon='oak-leaves' /> leaves will disappear.
                </p>
            </Quest>
            <Quest icon='crafting-table' title='Craft a crafting table'>
                <p>Open your inventory and place 4 <McIcon icon='oak-planks' /> planks to your crafting grid (the 2x2 area).</p>
                <p>Okay, but how do you get planks? Well, you have logs now, you can craft, figure it out :P</p>
                <Hint>
                    <p>Put a log into the crafting grid and see what happens.</p>
                </Hint>
            </Quest>
            <Quest icon='wooden-pickaxe' title='Craft a wooden pickaxe'>
                <p>
                    Now you know how to craft <McIcon icon='oak-planks' /> planks and <McIcon icon='crafting-table' /> crafting table.
                    But there are many more things you can make in the game.
                    The game isn't called Mine<b>craft</b> for nothing. XD
                </p>
                <br />
                <p>
                    For example you can craft <McIcon icon='stick' /> sticks with 2 <McIcon icon='oak-planks' /> planks.
                    In the crafting grid put 2 planks on top of each other.
                    Also there are recipes that require a larger space.
                    Tap on the <McIcon icon='crafting-table' /> crafting table after you put that down to get access to a 3x3 crafting grid.
                </p>
                <br />
                <p>Experiment and try to craft a wooden pickaxe! The shape of the items matter!</p>
                <Hint>
                    <p>You need 3 <McIcon icon='oak-planks' /> wooden planks and 2 <McIcon icon='stick' /> sticks for a <McIcon icon='wooden-pickaxe' /> pickaxe.</p>
                </Hint>
            </Quest>
            <Quest icon='stone-pickaxe' title='Getting an upgrade'>
                <p>
                    You can mine <McIcon icon='cobblestone' /> stone (and <McIcon icon='coal' /> coal) with a wooden pickaxe,
                    but it's slow and it will break soon.
                    You need to craft a stone pickaxe so you can mine faster and mine <McIcon icon='iron-ore' /> iron.
                </p>
                <br />
                <p>
                    Also now that you have cobblestone, experiment with crafting. What can you make with all the things you have?
                </p>
                <p>
                    <McIcon icon='oak-log' />
                    <McIcon icon='oak-planks' />
                    <McIcon icon='stick' />
                    <McIcon icon='cobblestone' />
                </p>
            </Quest>
            <h2>Getting ready for the first night</h2>
            <Quest icon='torch' title='Let there be light'>
                <p>
                    The first night is coming, and you don't want to be outside when it gets dark.
                    You need to make a <McIcon icon='torch' /> torch so you can see in the dark and to prevent monsters from spawning.
                </p>
                <br />
                <p>
                    You can craft torches with <McIcon icon='coal' /> coal and <McIcon icon='stick' /> sticks. A 2x2 crafting grid is enough.
                </p>
            </Quest>
            <Quest icon='cooked-porkchop' title="Don't Starve">
                <p>
                    You need to eat to survive. You can eat <McIcon icon='porkchop' /> raw meat if you punch some animals, but may get sick.
                    You need to cook it first. You can cook meat in a <McIcon icon='furnace' /> furnace.
                </p>
                <p>
                    You need 8 <McIcon icon='cobblestone' /> cobblestone to craft a furnace.
                    You can smelt 8 items with 1 piece of <McIcon icon='coal' /> coal.
                    But you can use any wooden item as fuel too.
                </p>
                <br />
                <p>
                    Also there are many other food options in the game.
                    There are <McIcon icon='carrot' /> <McIcon icon='potato' /> vegetables in villages,
                    you can craft <McIcon icon='bread' /> bread with 3 pieces of <McIcon icon='wheat' /> wheat,
                    you can <McIcon icon='cod' /> fish in water with a <McIcon icon='fishing-rod' /> fishing rod,
                    and you can even make a <McIcon icon='cake' /> cake!
                    Some of these are a bit complicated to get, but it's good to know your options.
                </p>
            </Quest>
        </Container>
    </>;
}

export default App;
