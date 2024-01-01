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
            <p style={{ padding: '8px' }}>
                "Oh my god, I need shelter for the night!" Don't worry, you can survive the night without a mansion. :P
                Most people just dig in the ground or in the side of a mountain. You can also build a dirt hut.
                Build a house only if you have time and resources. If not, you can always build one later.
            </p>
            <h2>Food and basic resources done. Now what?</h2>
            <Quest icon='iron-ingot' title='Getting iron'>
                <p>
                    Iron is a very important resource. You can make a lot of things with it.
                </p>
                <Hint title='WHAT YOU CAN MAKE WITH IRON?'>
                    <ul style={{ paddingLeft: '24px' }}>
                        <li><McIcon icon='bucket' /> Bucket (to contain liquids)</li>
                        <li><McIcon icon='iron-pickaxe' /> Tools (iron tools and weapons are much stronger than stone)</li>
                        <li><McIcon icon='iron-chestplate' /> Armour (you take less damage from monsters and other hazards)</li>
                        <li><McIcon icon='shield' /> Shield (very useful! can be held in your second hand)</li>
                        <li><McIcon icon='anvil' /> Anvil (you can repair tools and armour with that so they don't break)</li>
                    </ul>
                    <br />
                    Also there are more items used for more advanced things:
                    <ul style={{ paddingLeft: '24px' }}>
                        <li><McIcon icon='compass' /> Compass (to find your way to the spawn location)</li>
                        <li><McIcon icon='hopper' /> Hopper (to transport items and automate farms (Csáki's favourite))</li>
                        <li><McIcon icon='minecart' /> Minecart (to transport items, mobs and yourself)</li>
                        <li><McIcon icon='rail' /> Rail (for the minecart)</li>
                        <li><McIcon icon='piston' /> Piston (to move blocks around)</li>
                    </ul>
                </Hint>
                <p>
                    You can mine <McIcon icon='iron-ore' /> iron with a stone (or better) pickaxe.
                    But this is not <McIcon icon='iron-ingot' /> ingot yet.
                    You have to smelt the <McIcon icon='raw-iron' /> raw iron in a <McIcon icon='furnace' /> furnace.
                </p>
            </Quest>
            <Quest icon='diamond' title='Get different ores'>
                There are many ores in Minecraft and every ore has a different use. You already know these:
                <ul style={{ paddingLeft: '24px' }}>
                    <li><McIcon icon='coal' /> Coal (fuel, torches)</li>
                    <li><McIcon icon='iron-ingot' /> Iron (tools, armour, advanced items)</li>
                </ul>
                But there are more. Try to find these in the world:
                <table>
                    <tr>
                        <th>Ore</th>
                        <th>Where to find</th>
                        <th>Usage</th>
                    </tr>
                    <tr>
                        <td><McIcon icon='copper-ingot' /> Copper</td>
                        <td>underground</td>
                        <td>lightning rods, telescopes, spyglasses, decoration</td>
                    </tr>
                    <tr>
                        <td><McIcon icon='gold-ingot' /> Gold</td>
                        <td>underground (more in mesa biomes)</td>
                        <td>currency of the piglins</td>
                    </tr>
                    <tr>
                        <td><McIcon icon='lapis-lazuli' /> Lapis lazuli</td>
                        <td>underground</td>
                        <td>dye, enchanting</td>
                    </tr>
                    <tr>
                        <td><McIcon icon='redstone' /> Redstone</td>
                        <td>deep underground</td>
                        <td>circuits and automation</td>
                    </tr>
                    <tr>
                        <td><McIcon icon='diamond' /> Diamond</td>
                        <td>deep underground</td>
                        <td>strong tools and armour</td>
                    </tr>
                    <tr>
                        <td><McIcon icon='emerald' /> Emerald</td>
                        <td>mountains and villages</td>
                        <td>currency of the villagers</td>
                    </tr>
                    <tr>
                        <td><McIcon icon='quartz' /> Quartz</td>
                        <td style={{ color: 'red' }}>nether</td>
                        <td>redstone circuits, decoration</td>
                    </tr>
                    <tr>
                        <td><McIcon icon='netherite-ingot' /> Netherite</td>
                        <td style={{ color: 'red' }}>nether</td>
                        <td>the strongest material in the game, looks cool af</td>
                    </tr>
                </table>
            </Quest>
            <Quest icon='nether-portal' title='Going to the nether'>
                <p>
                    The nether is a dangerous place. You need to be prepared before you go there.
                    But it is worth it, because you need resources if you want the strongest items or to make potions.
                    (You can also use the nether as a fast travel system, but that's a topic for another time.)
                </p>
                <br />
                <p>
                    You need to make a <McIcon icon='nether-portal' /> nether portal to go to the nether.
                    You need 10 <McIcon icon='obsidian' /> obsidian and a flint and steel to light the portal.
                    You can mine obsidian with a <McIcon icon='diamond-pickaxe' /> diamond pickaxe.
                    If you got the obsidian, build a frame like this:
                </p>
                <p>
                    <McIcon icon='barrier' /><McIcon icon='obsidian' /><McIcon icon='obsidian' /><McIcon icon='barrier' /> <br />
                    <McIcon icon='obsidian' /><McIcon icon='barrier' /><McIcon icon='barrier' /><McIcon icon='obsidian' /> <br />
                    <McIcon icon='obsidian' /><McIcon icon='barrier' /><McIcon icon='barrier' /><McIcon icon='obsidian' /> <br />
                    <McIcon icon='obsidian' /><McIcon icon='barrier' /><McIcon icon='barrier' /><McIcon icon='obsidian' /> <br />
                    <McIcon icon='barrier' /><McIcon icon='obsidian' /><McIcon icon='obsidian' /><McIcon icon='barrier' /> <br />
                    The <McIcon icon='barrier' /> icons represent air. After you built the frame, light the bottom of the frame with a flint and steel.
                </p>
            </Quest>
            <p style={{ padding: '8px' }}>
                This should be enough to get you started. There are many more things to do in Minecraft.
                Can't wait do defeat the Ender Dragon together! :D
            </p>
            <h2>Kade chill</h2>
            <Quest icon='diamond-block' title='Welcome to creative mode!'>
                <p>
                    When you are creating a new world, you can choose between survival and creative mode.
                    In survival mode you have to gather resources and survive. This is what we play on the server.
                    But if you want to relax and build, you can play in creative mode.
                </p>
                <br />
                <p>
                    In creative mode you have unlimited resources and you can fly. You can also change the time of day and weather.
                    You can also use commands to do many things.
                </p>
                <p>
                    Some basic commands:
                </p>
                <table>
                    <tr>
                        <th>Command and usage</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td>/gamemode survival|creative</td>
                        <td>Change your gamemode</td>
                    </tr>
                    <tr>
                        <td>/time set day|night|&lt;value&gt;</td>
                        <td>Change the time of day</td>
                    </tr>
                    <tr>
                        <td>/weather clear|rain|thunder</td>
                        <td>Change the weather</td>
                    </tr>
                    <tr>
                        <td>/tp &lt;entity&gt; &lt;target entity&gt;|&lt;coordinates&gt;</td>
                        <td>Teleport an entity to somewhere else</td>
                    </tr>
                </table>
            </Quest>
            <Quest icon='command-block' title='Coding in Minecraft?'>
                <p>
                    Yes. Commands in Minecraft are not just simple instructions.
                    You can use commands to create complex logic and even games.
                </p>
                <br />
                <p>
                    You can get a command block with this command:<br />
                    /give @s command_block
                </p>
                <br />
                <p>
                    There are 3 types of command blocks:
                    <ul style={{ paddingLeft: '24px' }}>
                        <li>Impulse: runs the command once when it gets a redstone signal</li>
                        <li>Repeat: runs the command every tick (20 times a second)</li>
                        <li>Chain: runs the command after the previous command block (mind the arrows on the command blocks)</li>
                    </ul>
                </p>
                <br />
                <Hint title='A SIMPLE FIRST PROJECT'>
                    <p>
                        First, put down an impulse command block, type in this command:<br />
                        /tp kadelandthewiz ~ ~1 ~<br />
                        Put a button somewhere near the command block and connect the button to the command block with redstone.<br />
                        If you press the button, you will be on top of the command block. :D
                    </p>
                </Hint>
            </Quest>
        </Container>
    </>;
}

export default App;
