import React, {Suspense} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Loading from '../components/loading'


const RouterView = (props) => {
    return (
        <Suspense fallback={<Loading/>}>
            <Switch>
                {
                    props.routes.map((item, index) => {
                        return (
                            <Route key={index} exact={item.exact ? item.exact : false}  path={item.path} render={props => {
                                return (
                                    item.children ? <item.component {...props} routes={item.children}/> : <item.component {...props} />
                                )
                            }}>
                            </Route>
                        )
                    })
                }
                <Redirect exact from="/" to="/loginEntry"></Redirect>
            </Switch>
        </Suspense>
    )
}

export default RouterView;