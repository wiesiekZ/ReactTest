import React from "react";
import ReactDOM from "react-dom";
import md5 from "md5";
import EmailValidator from "./email-validator";
import "../styles/app.css";

class AppHeader extends React.Component {
  render() {
    return (
      <header className="ui fixed menu">
        <nav class="ui container">
          <a class="header item">
            <img
              className="logo"
              alt="logo"
              src="https://typeofweb.com/wp-content/uploads/2017/08/cropped-typeofweb_logo-04-white-smaller-1-e1504359870362.png"
            />
            List kontaktów
          </a>
          <HeaderButton />
        </nav>
      </header>
    );
  }
}

class HeaderButton extends React.Component {
  render() {
    return (
      <div class="header item">
        <button class="ui button" onClick={this.onClickHandler}>
          Dodaj
        </button>
      </div>
    );
  }
  onClickHandler() {
    alert("kliknieto!!");
  }
}

class ContactList extends React.Component {
  render() {
    return (
      <ul class="ui relaxed divided list selection">
        <ContactItem
          login="typeofweb1"
          name="Lena"
          department="JavaScript Developer"
        />
        <ContactItem
          login="typeofweb2"
          name="Brian"
          department="Human Resources"
        />
        <ContactItem login="typeofweb3" name="Rick" department="QA" />
        <ContactItem login="scott@hanselman.com" name="Rick" department="QA" />
      </ul>
    );
  }
}

class ContactItem extends React.Component {
  render() {
    return (
      <li class="item">
        <Avatar login={this.props.login} />
        <div class="content">
          <h4 class="header">{this.props.name}</h4>
          <div class="description">{this.props.department}</div>
        </div>
      </li>
    );
  }
}

class Avatar extends React.Component {
  render() {
    const login = this.props.login;
    var avatarImgSrc = `https://api.adorable.io/avatars/55/${login}.png`;

    if (new EmailValidator().validateEmail(login)) {
      const emailHash = md5(login.trim());
      avatarImgSrc = `https://s.gravatar.com/avatar/${emailHash}?s=80&amp;r=g`;
    }

    return (
      <img
        alt="lena avatar"
        src={avatarImgSrc}
        className="ui mini rounded image"
        onClick={this.clickHandler}
        onMouseLeave={this.mouseHandler}
      />
    );
  }

  clickHandler(e) {
    console.log("Klick");
    console.log(e.target.value);
  }

  mouseHandler() {
    console.log("musnięto");
  }
}

class MyCounter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      dubble: 0
    };
  }
  render() {
    return (
      <div class="header item">
        <button class="ui button" onClick={this.onClickInck.bind(this)}>
          +
        </button>
        <output onDoubleClick={this.onDouble.bind(this)}>
          {this.state.counter}
        </output>
        <button class="ui button" onClick={this.onClickDec.bind(this)}>
          -
        </button>
        <p>Podwójne kliki: {this.state.dubble} </p>
      </div>
    );
  }
  onClickInck() {
    this.setState({ counter: this.state.counter + 1 });
  }

  onClickDec() {
    this.setState({ counter: this.state.counter - 1 });
  }

  onDouble() {
    this.setState({ dubble: this.state.dubble + 1 });
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <AppHeader />
        <main class="ui main text container">
          <ContactList />
          <MyCounter />
        </main>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
