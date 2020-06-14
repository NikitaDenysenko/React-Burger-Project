import React, { Component } from 'react';
import { Route, NavLink, Switch} from "react-router-dom";

import './Blog.css';
import Posts from "./Posts/Posts";
import asyncComponent from "../../hoc/asyncComponent";
const AsyncNewPost = asyncComponent(() => {
    return import("./NewPost/NewPost");
});

class Blog extends Component {
    state = {
        auth: true
    };

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/posts/"
                                exact
                                activeClassName="active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Posts</NavLink></li>
                                {/* we can overwrite an active class */}
                            <li><NavLink to={{
                                pathname:'/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" exact render={() => <h1>Home</h1>}/>*/}
                {/* "path" - defines an active link, and then, what should happened,when this is an active path */
                 /* " path='/' " - if our path starts with this path */
                 /* "exact" - renders the exact link (exact match) */
                 /* "render"  - used for info messages*/}
                 <Switch>
                     {this.state.auth ? <Route path="/new-post"  component={AsyncNewPost} /> : null}
                     <Route path="/posts"  component={Posts} />
                     <Route render={() => <h1>Not Found</h1>} />
                     {/*<Redirect from="/" to="/posts" />*/}
                 </Switch>
            </div>
        );
    }
}

export default Blog;