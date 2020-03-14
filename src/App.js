import React from 'react';
import axios from "axios";
import Movie from "./Movie";



class App extends React.Component {
  state = {
    isLoding: true, // 마운트 되자마자 로딩됨
    movies:[]
  };
  /* compnet가 마운트 된후 호출된후 재 Rander 수행 */

  getMovieData = async () => {
    const {data:{data:{movies}}}= await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating") // 데이터 API 가져오는 함수
    console.log(movies);
    this.setState({movies,isLoding:false})
  }
  async componentDidMount(){
   
    this.getMovieData();

    
  }

  render(){
    console.log("render")
    const {isLoding,movies} = this.state
    return (
        <selction class="container"> 
          {isLoding 
          ? "Loding...." 
          : movies.map(movie => {
          
          return <Movie 
              key ={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster = {movie.medium_cover_image} />
      })}
      </selction>
    );
  }
  
}


export default App;
