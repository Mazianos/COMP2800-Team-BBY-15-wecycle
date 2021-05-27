import React from "react";
import "../css/landingPage.css";
import Header from "./Header";
import { useHistory } from "react-router-dom";
import ProductCard from "./ProductCard";
import Grid from "@material-ui/core/Grid";
import { Container,Typography} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";

//Infinite Scroll constants start

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
    height: "30vh",
    marginBottom: "0vh",
    padding: 0,
  },
  list: {
    width: "100%",
    height: "80vh",
    background: "red",
  },
  fullList: {
  },
  media: {
    height: 140,
  },
  contentCentered: {
    alignContent: "center",
    fontSize: 15,
  },
}));

// dynamically generate cards using maps
function Landing() {
  const classes = useStyles();
  // const [state, setState] = React.useState(false);

  const [open, setOpen] = React.useState(false); // popup alter when 'claimed'
  const [msgSnack, setMsgSnack] = React.useState("Successfully claimed! Reloading...");
  const handleClick = () => {
    console.log("summon snackbar")
    setOpen(true);
    setTimeout(()=>{window.location.reload()}, 2000)
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  // const toggleDrawer = (open) => (event) => {
  //   setState(open);
  // };

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
    history.push("/postDono");
  }

  return (
    <div>
      <div >
        <Header />
      </div>
      <div id="hero">
        <Container className={classes.sizing}>
          
          <div id="textBlock">
            <Typography
              variant="h5"
              component="h5"
              align="center"
              display="inline"
            >
              Let's recycle!
            </Typography>
            <Typography variant="h6" component="h5">
              Donate bottles or help people recycle
            </Typography>
          </div>

          <button className="signupBtn" onClick={handleCreateAd}>
            Donate now!
          </button>
        </Container>
      </div>

      {/* grid container for the dynamically generated cards go here! */}
      <div className="adListings">
        <Grid
          container
          spacing={4}
          // direction="column"
        >
          {data.map((card) => (
            <Grid item key={card._id} xs={12} sm={6} md={3} align="center">
              <ProductCard
                title={card.title}
                date={card.postDate}
                status={card.status}
                postID={card._id}
                allData={card} // how about i just pass the entire card instead of making another fetch(0)
                openSnackBar = {() => handleClick()}
                setMsgSnack= {() => setMsgSnack}
              />
            </Grid>
          ))}
        </Grid>

        {loading && <li>Loading...</li>}

        {!loading && more && (
          <li key={more} ref={setElement} style={{ background: "white" }}></li>
        )}
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={open}
        onClose={handleClose}
        autoHideDuration={4000}
        message={msgSnack}
      />
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
