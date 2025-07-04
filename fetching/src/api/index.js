export const getPosts = async () => {
    try{
    const response = await fetch("https://dummyjson.com/users?limit=50&skip=0");
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    return data; }
    catch (error) {
        console.error("API fetch error:", error);
        return [];
      }
  };
  