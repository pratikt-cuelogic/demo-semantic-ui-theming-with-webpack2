webpackJsonp([0],{0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var a=n(1),l=o(a),u=n(38),r=n(168),d=n(230),c=o(d),s=n(239),i=o(s);(0,u.render)(l["default"].createElement(r.Router,{history:r.browserHistory},l["default"].createElement(r.Route,{path:"/",component:i["default"]},l["default"].createElement(r.IndexRoute,{component:c["default"]}),l["default"].createElement(r.Route,{path:"dashboard",component:c["default"]}),l["default"].createElement(r.Route,{path:"profile",component:c["default"]},l["default"].createElement(r.Route,{path:"/user/:userId",component:c["default"]})),l["default"].createElement(r.Route,{path:"users/:id",component:c["default"]}),l["default"].createElement(r.Route,{path:"*",component:c["default"]}))),document.getElementById("main"))},230:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),l=o(a);t["default"]=l["default"].createClass({displayName:"route-loader",propTypes:{location:l["default"].PropTypes.object,route:l["default"].PropTypes.object,params:l["default"].PropTypes.object},getInitialState:function(){return{componentLoaded:!1,component:null}},componentDidMount:function(){console.log("componentDidMount",this.props.location,this.props.route),this.loadComponent(this.props.route.path)},componentWillReceiveProps:function(e){console.log("componentWillReceiveProps",e.location,e.route),this.loadComponent(e.route.path)},setUpComponent:function(e){e=e["default"]||e,this.setState({componentLoaded:!0,component:e})},loadComponent:function(e){var t=this;switch(this.setState({componentLoaded:!1,component:null}),e){case"dashboard":n.e(1,function(e){t.setUpComponent(n(231))});break;case"profile":n.e(2,function(e){t.setUpComponent(n(232))});break;case"users/:id":n.e(3,function(e){t.setUpComponent(n(233))});break;default:n.e(4,function(e){t.setUpComponent(n(238))})}},render:function(){var e=this.state.component;return this.state.componentLoaded?l["default"].createElement(e,this.props.params):l["default"].createElement("div",null,"loading component")}})},239:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),l=o(a),u=n(168);t["default"]=l["default"].createClass({displayName:"main",propTypes:{children:l["default"].PropTypes.node},getInitialState:function(){return{}},render:function(){return l["default"].createElement("div",null,l["default"].createElement("ul",{className:"menu"},l["default"].createElement("li",null,l["default"].createElement(u.Link,{to:"/home"},"home")),l["default"].createElement("li",null,l["default"].createElement(u.Link,{to:"/dashboard"},"dashboard")),l["default"].createElement("li",null,l["default"].createElement(u.Link,{to:"/profile"},"profile")),l["default"].createElement("li",null,l["default"].createElement(u.Link,{to:"/users/1"},"users")),l["default"].createElement("li",null,l["default"].createElement(u.Link,{to:"/not-found"},"Not Found(will redirect to home)"))),l["default"].createElement("div",{className:"content"},this.props.children))}})}});