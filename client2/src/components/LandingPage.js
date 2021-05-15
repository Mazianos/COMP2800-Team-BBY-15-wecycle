import React from 'react';
import '../css/landingPage.css';
import Navbar from "./Navbar";
import { useHistory } from "react-router-dom";


//Infinite Scroll constants start
const allData = new Array(1000).fill(0).map((_val, i) => i + 1);
const perPage = 60;
const types = {
  start: "START",
  loaded: "LOADED"
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
        after: state.after + action.newData.length
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
    after: 0
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


function Landing() {
  const history = useHistory();
  const { data, loading, more, load } = React.useContext(MyContext);
  const loader = React.useRef(load);
  const observer = React.useRef(
    new IntersectionObserver(
      entries => {
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
    history.push('/postAd');
  }
 
  return (
    
    <div id="landingPage">
      <div id="navbarContainer">
        <Navbar/>
      </div>
      <div class="quoteContainer">
        <ul class="quote">
          <li id="firstParagraph">Donate Bottles Now</li>
        </ul>
      </div>
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
    </div>
  );
}

export default function LandingPage() {
  return (
    <MyProvider>
      <Landing/>
    </MyProvider>
  );
};

