import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import AppIndex from './AppIndex.jsx';
import Contactpage from './Contactpage.js';
import AppReview from './AppReview.js';
import {Route} from 'react-router-dom';
import LoginContainer from '../containers/LoginContainer.js';
import ProfileContainer from '../containers/ProfileContainer';
import PrivateRoute from '../containers/PrivateRoute';
import NotFound from './NotFound';

export default class Header extends Component {
          render() {
            return (
     <div>
        <header className="header">
            <section className="header-menu-section">
                <h1 className="header-menu-section-h1">Blogin<span>.</span></h1>
                <nav className="nav-header">
                    <ul className="ul-header">
                        <li className="li-header">
                            <Link to="/" className="header-menu-links">Journal</Link>
                        </li>
                        <li className="li-header">
                            <Link to="/Login" className="header-menu-links">Login</Link>
                        </li>
                        <li className="li-header">
                            <Link to="/Profile" className="header-menu-links">Profile</Link>
                        </li>
                        <li className="li-header">
                            <Link to="/Contactpage" className="header-menu-links">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </section>
        </header>
        <main className="main">
            <Switch>
                <Route exact path="/" component={AppIndex} />
                <Route exact path="/Login" component={LoginContainer} />
                <Route path="/Contactpage" component={Contactpage} />
                <PrivateRoute path="/profile" component={ProfileContainer} />
                <Route component={NotFound} />
            </Switch>
        </main>
        <footer className="footer">
            <section className="footer-section-contacts">
                <h2 className="header-menu-section-h1">Blogin<span>.</span></h2>
                <p>© 2019 Blogin.com  -  All Rights Reserved</p>
                <div className="footer-section-contacts-links">
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14"><g><g><path fill="#fff" d="M-.003 4.999v3.043h2.006v5.968h3.043V8.042h2.95V5h-2.95V3.866c0-.44.264-.792.506-.792h2.443V-.019H5.083c-1.694 0-3.08 2.06-3.08 3.93v1.088z"/></g></g></svg>
                    </a>
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12"><g><g><path fill="#fff" d="M13.954 6.205c.897 0 1.495-.322 1.816-.69-.528.069-1.333 0-1.747-.184.874-.07 1.449-.483 1.701-1.035-.321.207-1.31.414-1.862.207 0-.115-.046-.23-.07-.322-.413-1.54-1.839-2.736-3.287-2.598.138-.046.253-.092.39-.138.115-.046 1.058-.207.943-.53-.115-.298-1.287.208-1.54.277.299-.115.804-.276.827-.621-.436.046-.85.253-1.195.598.138-.184.207-.3.207-.506-1.15.782-1.863 2.276-2.392 3.771-.46-.414-.828-.759-1.196-.966a36.186 36.186 0 0 0-3.978-1.724c-.046.62.276 1.402 1.311 1.931-.207-.023-.62.046-.943.138.115.69.575 1.288 1.748 1.518-.552.046-.828.184-1.08.414.252.506.873 1.08 1.93.966-1.195.528-.482 1.494.46 1.31C4.343 9.723 1.745 9.608.25 8.205c3.932 5.335 12.417 3.128 13.705-2z"/></g></g></svg>
                    </a>
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10"><g><g><path fill="#fff" d="M5.482 6.003c-.198-.132-.55-.154-.946-.154H2.423v2.574h2.069c.44 0 .748-.044.99-.176.44-.198.638-.616.638-1.21 0-.484-.198-.836-.638-1.034zm6.887-1.826c-.484 0-.836.11-1.1.396-.242.286-.396.638-.484 1.078h3.124c-.044-.484-.198-.836-.462-1.122a1.758 1.758 0 0 0-1.078-.352zM4.888.414c1.188 0 2.024.352 2.53 1.034.286.396.44.902.44 1.452 0 .595-.154 1.079-.484 1.43-.154.243-.396.397-.704.55.462.199.858.485 1.1.88.242.397.396.881.396 1.431s-.154 1.056-.44 1.54c-.198.308-.418.55-.704.748-.286.242-.682.397-1.078.528-.418.066-.858.11-1.386.11H.2V.415zm7.48 2.266c.595 0 1.145.11 1.63.309.461.242.857.55 1.187 1.034.264.44.462.902.55 1.452.044.33.088.77.088 1.364h-5.082c0 .704.286 1.188.726 1.452.264.198.616.286.99.286a1.64 1.64 0 0 0 1.012-.33c.176-.11.286-.264.374-.462h1.848c-.044.396-.264.836-.66 1.254-.594.682-1.518.99-2.618.99-.924 0-1.738-.263-2.464-.814-.704-.594-1.035-1.518-1.035-2.816 0-1.188.33-2.112.969-2.772.616-.638 1.452-.947 2.486-.947zM14.262.81v.99H10.39V.81zM5.922 3.143c0-.463-.176-.749-.528-.903a3.992 3.992 0 0 0-1.144-.154H2.423v2.135h2.069c.44 0 .748-.088 1.034-.242.264-.154.396-.44.396-.836z"/></g></g></svg>
                    </a>
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><g><g><path fill="#fff" d="M9.73 11.897c1.298-.748 2.222-2.046 2.53-3.564-.682-.154-1.298-.242-1.936-.242-.44 0-.925.044-1.387.132.396 1.188.638 2.42.793 3.674zM7 12.646c.594 0 1.144-.066 1.694-.264a17.472 17.472 0 0 0-.792-3.895c-1.672.572-3.058 1.672-4.048 3.168.968.639 2.024.99 3.146.99zm3.323-5.655c.66 0 1.342.11 2.046.286 0-1.078-.352-2.112-.946-3.015-.99.837-2.09 1.54-3.213 2.047.132.286.242.594.374.88.594-.11 1.189-.198 1.739-.198zM7 1.93c-.484 0-.924.065-1.386.197a21.231 21.231 0 0 1 2.134 3.19 11.898 11.898 0 0 0 2.97-1.892A5.374 5.374 0 0 0 7.002 1.93zm-2.464.593a5.512 5.512 0 0 0-2.86 3.96h.725c1.453 0 2.927-.241 4.357-.77a17.727 17.727 0 0 0-2.222-3.19zm8.911 4.753a6.442 6.442 0 0 1-6.447 6.447c-3.564 0-6.425-2.883-6.425-6.447A6.418 6.418 0 0 1 7.001.852c3.565 0 6.447 2.882 6.447 6.425zm-6.227-.572c-1.584.572-3.19.88-4.819.88-.242 0-.484-.044-.748-.044.022 1.276.55 2.464 1.409 3.366A8.694 8.694 0 0 1 7.55 7.475a5.794 5.794 0 0 1-.33-.77z"/></g></g></svg>
                    </a>
                </div>
            </section>
        </footer>
     </div>
)
}}


