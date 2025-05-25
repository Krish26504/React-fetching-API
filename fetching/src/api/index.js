export const getPosts = async () => {
    const response = await fetch("https://dummyjson.com/users?limit=50&skip=0 ", {
      method: "GET",
    });
  
    return await response.json();
  };
  