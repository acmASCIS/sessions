import React from "react";
import "./navbar.css";
import styled, { css } from "styled-components";

/*
1) function component and class component 
////////////////////////////////////////
2) dynamic values and jsx
////////////////////////////////////////
3) styling:
1)style object  
2) style using css  files  
3) problem and (styled component,inline css,css modules)
////////////////////////////////////////
4) Props
////////////////////////////////////////
5) React fragment 
////////////////////////////////////////
7) onClick events
////////////////////////////////////////
8) show things in array with fake data
////////////////////////////////////////
9) State with class component
////////////////////////////////////////
10)intro to react hooks 
////////////////////////////////////////
11) state with hooks  with use State Hooks
////////////////////////////////////////
////////////////////////////////////////
12) use effect basics
////////////////////////////////////////
13) use effect with server and fetch 
////////////////////////////////////////
14) conditional component or pre loading component
////////////////////////////////////////
15) catching error with server
////////////////////////////////////////
16) Routing in non React page
////////////////////////////////////////
17) using react router dom and initialize in app component
////////////////////////////////////////
18) using react router dom switch and route 
////////////////////////////////////////
19) using react router dom and error in path and the solution using exact
////////////////////////////////////////
20) href vs react router dom link

*/

// styled component style
const TitleText = styled.h1`
  padding: 20;
  color: black;
  font-weight: 300;
  font-size: small;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;

  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`;

const Container = styled.div`
  text-align: center;
  align-content: center;
  margin-top: 20;
`;

export class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  clickedFunction = (e, title) => {
    e.preventDefault();
    this.setState({ counter: this.state.counter + 1 });
    console.log(title);
  };

  render() {
    return (
      <div>
        <button
          onClick={(e) => {
            this.clickedFunction(e, this.props.name);
          }}
        >
          Clicked
        </button>
        <h1 className="test">{this.props.name + this.state.counter}</h1>
      </div>
    );
  }
}

export const FunctionComponent = (props) => {
  const [counter, setCounter] = React.useState(0);

  const updateCounter = () => {
    setCounter(counter + 1);
  };
  return (
    <React.Fragment>
      {/* test style  */}
      <div style={{ padding: 20, margin: 10 }}>
        <TitleText>function title name is {props.firstName}</TitleText>
        <TitleText> function first name is {props.secondName}</TitleText>
      </div>
      {/* state management with counter app */}
      <Container>
        <Button primary onClick={updateCounter}>
          increase counter {counter}
        </Button>
      </Container>
      {/* ShowArray component */}
      <ShowArray />
    </React.Fragment>
  );
};

export const ShowArray = () => {
  const [posts, setPosts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    fetchData();
  }, [posts]);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          // error coming back from server
          throw Error("could not fetch the data for that resource");
        }
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setPosts(data);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  };

  return (
    <Container>
      {/* 3) show error if found  */}
      {error && <div>{error}</div>}
      {/* 2) loading before get the result  */}
      {isLoading && <div>Loading...</div>}
      {/* 1) fetch data and show in array  */}
      {posts &&
        posts.map((post) => (
          <Container key={post.id}>
            <TitleText>
              {post.id} and post title is {post.title}
            </TitleText>
          </Container>
        ))}
      ;
    </Container>
  );
};
