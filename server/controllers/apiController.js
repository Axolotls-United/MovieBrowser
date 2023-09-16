//store key in constant for easy access
// http://www.omdbapi.com/  if you need a new key. or ask jose for his if mine runs out ~Simon C
const apiKey = 'e0713866';

//declare controller obj to store functions 
const apiController = {};

//API request sends array of movie objects close to title param
apiController.broadSearch = (req, res, next) => {
//////encode URI component bring up with daniel and jose 
  const { title, type } = req.query;

  //put query params in url 
  const apiUrl = `http://www.omdbapi.com/?s=${encodeURIComponent(title)}&apiKey=${apiKey}&type=${encodeURIComponent(type)}`;

  fetch(apiUrl)
    .then((data) => data.json()) //parse
    .then((data) => {
      //store on locals and invoke next
      res.locals.list = data.Search;
      return next();
    })
    .catch((err) => {
      //error handling
      return next({
        log: 'Error fetching movies',
        status: 500,
        message: {err: 'error fetching movies'}
      });
    });

}

//request to api but this gives only one result object, the closest movie, with more in depth information
apiController.narrowSearch = (req, res, next) => {
  //destructure query params
  const { title, type } = req.query;

  //construct request URL
  const apiUrl = `http://www.omdbapi.com/?t=${encodeURIComponent(title)}&apiKey=${apiKey}&type=${encodeURIComponent(type)}`

  //request to URL 
  fetch(apiUrl)
    .then((data) => data.json()) //parse
    .then((data) => {
      //store on locals and invoke next
      res.locals.list = data;
      return next();
    })
    .catch((err) => {
      //error handling
      return next({
        log: 'Error fetching movies',
        status: 500,
        message: {err: 'error fetching movies'}
      });
    });

}

//export controller object
module.exports = apiController;