
export const getCategories = async () => {
  const data = await fetch('https://api.spotify.com/v1/browse/categories?limit=50', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });

  const jsonData = await data.json();
  const {
    categories: { items = {} }
  } = jsonData;

  const refData = items.map((cat) => {
    return { catName: cat.name, catId: cat.id, image: cat.icons[0].url };
  });

  return refData;
};

export const searchItems = async (name) => {
  try {
    const nameQuery = name
    const data = await fetch(`https://api.spotify.com/v1/search?q=${name}&type=track%2Calbum&limit=50`, {
    method: 'Get',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
  const jsonData = await data.json();

  return jsonData;
  } catch(err) {
    console.log(err.message)
    return [];
  }
};


export const getHomeItems = async () => {
  try {
    const token = localStorage.getItem('token');
    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };

    const categoriesList = [ "Top Releases", "Telugu","Kannada","Hindi"];

    const data = await Promise.all(categoriesList.map(async category => {
      const categoryData = await fetch(`https://api.spotify.com/v1/search?q=${category}&type=album`, {
          method: 'GET',
          headers
        })
      const albumData = await categoryData.json();
      return albumData;
    }))
    const res = data.map((doc, i) => {
      return doc.albums.items;
    });

    return {res, category : categoriesList};
  } catch(err) {
    console.log(err.message);
    return [];
  }






};

// export const getHomeItems = async () => {
//   try {
//     const token = localStorage.getItem('token');
//     const headers = {
//       'Authorization': `Bearer ${token}`,
//       'Content-Type': 'application/json'
//     };

//     const response = await fetch("https://api.spotify.com/v1/recommendations/available-genre-seeds", {
//       method: 'GET', 
//       headers
//     });
//     const data = await response.json();
//     if (!data.genres) {
//       console.error('Genres not found in response:', data);
//       return [];
//     }
//     const categories = await Promise.all(data.genres.slice(0, 5).map(async (category) => {
//       if(!category) return;
//       console.log(category)
//       const categoryResponse = await fetch(`https://api.spotify.com/v1/search?q=genre:%22${category}%22&type=album`, {
//         method: 'GET',
//         headers
//       });
//       const categoryData = await categoryResponse.json();
//       console.log(categoryData)
//       return categoryData;
//     })); 

//     const res = categories.map((doc, i) => {
//       return doc.albums.items;
//     })
//     return {res, category : data.genres.slice(0, 5)};
//   } catch (error) {
//     console.error('Error fetching home items:', error);
//     return [];
//   }
// };
