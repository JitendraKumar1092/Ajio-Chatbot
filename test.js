const handleSubmit = async () => {
    
    try {
      const response = await fetch('https://server-ecomm.vercel.app/api/products/Pants');
      const data = await response.json();
      console.log(data);
      

    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  handleSubmit();