import React, { useState, useEffect } from "react";
import "../css/landingPage.css";
import Navbar from "./Navbar";
import { useHistory } from "react-router-dom";
<<<<<<< HEAD
// import { Button } from "react-bootstrap";
import ProductCard from "./ProductCard";
import Grid from "@material-ui/core/Grid";
import { Container, Paper, Typography, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
=======

>>>>>>> jason-testing

//Infinite Scroll constants start
// const allData = new Array(1000).fill(0).map((_val, i) => i + 1);

var allData;

fetch("/get-landing-records")
  .then((res) => res.json())
  .then((result) => {
    console.log(result);
    allData = result;
  })
  .catch((err) => {
    console.log(err + " data not loaded!");
    allData = new Array(30).fill(0).map((_val, i) => i + 1); // random assignment of numbers
  });

const perPage = 60;
const types = {
  start: "START",
  loaded: "LOADED",
};

const reducer = (state, action) => {
  switch (action.type) {
    case types.start:
      return { ...state, loading: true };
    case types.loaded:
      return {
        ...state,
        loading: false,
        data: [...state.data, ...action.newData],
        more: action.newData.length === perPage,
        after: state.after + action.newData.length,
      };
    default:
      throw new Error("Don't understand action");
  }
};

const MyContext = React.createContext();

function MyProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, {
    loading: false,
    more: true,
    data: [],
    after: 0,
  });
  const { loading, data, after, more } = state;

  const load = () => {
    dispatch({ type: types.start });

    setTimeout(() => {
      const newData = allData.slice(after, after + perPage);
      dispatch({ type: types.loaded, newData });
    }, 300);
  };

  return (
    <MyContext.Provider value={{ loading, data, more, load }}>
      {children}
    </MyContext.Provider>
  );
}

//Infinite Scroll Constants end

// -----------
// CSS STYLING FOR MUI
// -----------

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  control: {
    padding: theme.spacing(2),
  },
  sizing: {
    height: "100%",
  },
}));

// dynamically generate cards using maps
function Landing() {
  // const [count, setCount] = useState({}); // dont need this anymore
  const [postDetails, setDetails] = useState({}); // Nested JSON objected with all data.
  const [isLoaded, setIsLoaded] = useState({});
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  useEffect(() => {
    fetch("/get-landing-records")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            postDetails: result.records, // Large JSON object with everything open or pending
          });
        }
        // (error) => {
        //   this.setState({
        //     isLoaded: false,
        //     postDetails: [],
        //   });
        // }
      );
  }, []);

  const history = useHistory();
  const { data, loading, more, load } = React.useContext(MyContext);
  const loader = React.useRef(load);
  const observer = React.useRef(
    new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
          loader.current();
        }
      },
      { threshold: 1 }
    )
  );
  const [element, setElement] = React.useState(null);

  React.useEffect(() => {
    loader.current = load;
  }, [load]);

  React.useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element]);

  function handleCreateAd() {
    history.push("/postAd");
  }

  return (
    <div id="landingPage">
      <div id="navbarContainer">
        <Navbar />
      </div>
<<<<<<< HEAD
      {/* <div className="quoteContainer">
        <ul className="quote">
          <li id="firstParagraph">One World, One Community</li>
          <li id="secondParagraph">Share Recycleable Bottles and Cans </li>
          <li id="thirdParagraph">In the City of Vancouver</li>
=======
      <div class="quoteContainer">
        <ul class="quote">
          <li id="firstParagraph">Donate Bottles Now</li>
>>>>>>> jason-testing
        </ul>
      </div> */}
      <Container className={classes.sizing} height="100vh">
        <Grid container className={classes.sizing}>
          <Grid item xs={12} className={classes.sizing}>
            <Grid container justify="center" spacing={4}>
              {[0, 1, 2].map((value) => (
                <Grid key={value} item>
                  <div className="paperCSS">
                    <Typography>Hello</Typography>
                  </div>
                  <Card cardStyle={{ backgroundColor: 'transparent', shadowOpacity: 0 }}>
                    
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <button className="signupBtn" onClick={handleCreateAd}>
        Post A New Ad
      </button>

      {/* grid container for the dynamically generated cards go here! */}
      <div className="adListings">
        <Grid
          container
          spacing={4}
          // direction="column"
        >
          {data.map((card) => (
            // <li key={row} style={{ background: "transparent", color: "white" }}>
            //   {row}
            // </li>
            <Grid item key={card} xs={12} sm={6} md={3} align="center">
              <ProductCard
                title={card.title}
                date={card.postDate}
                status={card.status}
                postID={card._id}
              />
            </Grid>
          ))}
        </Grid>

        {loading && <li>Loading...</li>}

        {!loading && more && (
          <li ref={setElement} style={{ background: "white" }}></li>
        )}
      </div>
<<<<<<< HEAD
=======
      <button className="signupBtn" onClick={handleCreateAd}>Donate Now</button>
    <div class="adListings">
      <ul>
      {data.map(row =>(
        <li key={row} style={{background: "transparent", color: "green"}}>
          {row}
        </li>
      ))}

      {loading && <p>Loading...</p>}

      {!loading && more &&(
        <li ref={setElement} style={{background: "white"}}>
        </li>
      )}
      </ul>
    </div>
>>>>>>> jason-testing
    </div>
  );
}

export default function LandingPage() {
  return (
    <MyProvider>
      <Landing />
    </MyProvider>
  );
}
