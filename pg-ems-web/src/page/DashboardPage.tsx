import React from "react";
import Sidebar from '../component/sidebar/Sidebar';
import './DashboardPage.scss';

function DashboardPage() {
    return (
        <div style={{
            display: 'flex',
            flexFlow: 'row nowrap',
        }}>
           <Sidebar/>
            {/*<main role="main">*/}
            {/*    <section className="panel important">*/}
            {/*        <h2>Welcome to Your Dashboard </h2>*/}
            {/*        <ul>*/}
            {/*            <li>Important panel that will always be really wide Lorem ipsum dolor sit amet, consectetuer*/}
            {/*                adipiscing elit.*/}
            {/*            </li>*/}
            {/*            <li>Aliquam tincidunt mauris eu risus.</li>*/}
            {/*            <li>Vestibulum auctor dapibus neque.</li>*/}
            {/*        </ul>*/}
            {/*    </section>*/}
            {/*    <section className="panel">*/}
            {/*        <h2>Posts</h2>*/}
            {/*        <ul>*/}
            {/*            <li><b>2458 </b>Published Posts</li>*/}
            {/*            <li><b>18</b> Drafts.</li>*/}
            {/*            <li>Most popular post: <b>This is a post title</b>.</li>*/}
            {/*        </ul>*/}
            {/*    </section>*/}
            {/*    <section className="panel">*/}
            {/*        <h2>Chart</h2>*/}
            {/*        <ul>*/}
            {/*            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>*/}
            {/*            <li>Aliquam tincidunt mauris eu risus.</li>*/}
            {/*            <li>Vestibulum auctor dapibus neque.</li>*/}
            {/*        </ul>*/}
            {/*    </section>*/}
            {/*    <section className="panel important">*/}
            {/*        <h2>Write a post</h2>*/}
            {/*        <form action="#">*/}
            {/*            <div className="twothirds">*/}
            {/*                <label htmlFor="name">Text Input:</label>*/}
            {/*                <input type="text" name="name" id="name" placeholder="John Smith"/>*/}

            {/*                <label htmlFor="textarea">Textarea:</label>*/}

            {/*            </div>*/}
            {/*            <div className="onethird">*/}
            {/*                <legend>Radio Button Choice</legend>*/}

            {/*                <label htmlFor="radio-choice-1">*/}
            {/*                    <input type="radio" name="radio-choice" id="radio-choice-1" value="choice-1"/> Choice 1*/}
            {/*                </label>*/}

            {/*                <label htmlFor="radio-choice-2">*/}
            {/*                    <input type="radio" name="radio-choice" id="radio-choice-2" value="choice-2"/> Choice 2*/}
            {/*                </label>*/}


            {/*                <label htmlFor="select-choice">Select Dropdown Choice:</label>*/}
            {/*                <select name="select-choice" id="select-choice">*/}
            {/*                    <option value="Choice 1">Choice 1</option>*/}
            {/*                    <option value="Choice 2">Choice 2</option>*/}
            {/*                    <option value="Choice 3">Choice 3</option>*/}
            {/*                </select>*/}


            {/*                <div>*/}
            {/*                    <label htmlFor="checkbox">*/}
            {/*                        <input type="checkbox" name="checkbox" id="checkbox"/> Checkbox*/}
            {/*                    </label>*/}
            {/*                </div>*/}

            {/*                <div>*/}
            {/*                    <input type="submit" value="Submit"/>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </form>*/}
            {/*    </section>*/}
            {/*    <section className="panel">*/}
            {/*        <h2>feedback</h2>*/}
            {/*        <div className="feedback">This is neutral feedback Lorem ipsum dolor sit amet, consectetur*/}
            {/*            adipisicing elit. Alias, praesentium. Libero perspiciatis quis aliquid iste quam dignissimos,*/}
            {/*            accusamus temporibus ullam voluptatum, tempora pariatur, similique molestias blanditiis at sunt*/}
            {/*            earum neque.*/}
            {/*        </div>*/}
            {/*        <div className="feedback error">This is warning feedback*/}
            {/*            <ul>*/}
            {/*                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>*/}
            {/*                <li>Aliquam tincidunt mauris eu risus.</li>*/}
            {/*                <li>Vestibulum auctor dapibus neque.</li>*/}
            {/*            </ul></div>*/}
            {/*        <div className="feedback success">This is positive feedback</div>*/}

            {/*    </section>*/}
            {/*    <section className="panel ">*/}
            {/*        <h2>Table</h2>*/}
            {/*        <table>*/}
            {/*            <tr>*/}
            {/*                <th>Username</th>*/}
            {/*                <th>Posts</th>*/}
            {/*                <th>comments</th>*/}
            {/*                <th>date</th>*/}
            {/*            </tr>*/}
            {/*            <tr>*/}
            {/*                <td>Pete</td>*/}
            {/*                <td>4</td>*/}
            {/*                <td>7</td>*/}
            {/*                <td>Oct 10, 2015</td>*/}

            {/*            </tr>*/}
            {/*            <tr>*/}
            {/*                <td>Mary</td>*/}
            {/*                <td>5769</td>*/}
            {/*                <td>2517</td>*/}
            {/*                <td>Jan 1, 2014</td>*/}
            {/*            </tr>*/}
            {/*        </table>*/}
            {/*    </section>*/}
            {/*</main>*/}
        </div>
    );
}

export default DashboardPage;
